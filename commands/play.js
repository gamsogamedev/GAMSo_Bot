const ytdl = require('ytdl-core');
const ysapi = require('youtube-search-api');
const { AudioPlayerStatus, joinVoiceChannel, createAudioResource, createAudioPlayer, entersState, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const { createDiscordJSAdapter } = require('./requirements/adapter');

// Criando player de áudio do Discord!
const player = createAudioPlayer();

async function connectToChannel(channel) {

    // Conectando ao canal!
	const connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		adapterCreator: createDiscordJSAdapter(channel),
	});

	try {
        // Esperando o bot ficar pronto para tocar!
		await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
		return connection;
	} catch (error) {
		// Não ficou pronto? Destrua a conexão e pare a execução do programa!
        connection.destroy();
		throw error;
	}
}

function play(guild, song, serverQueue) {
    // Se não tem uma próxima música, saia do canal e delete a fila!
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
  
    // Crie o recurso de áudio com a música!
    const playable = createAudioResource(ytdl(song.url, { filter: 'audioonly', highWaterMark: 1<<25 }));

    // Toque a música!
    player.play(playable);

    // Crie o evento: quando não estiver tocando nada, dê play na próxima música!
    player.on("idle", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0], serverQueue);
    });

    // Crie o evento: quando der erro, imprima-o no console!
    player.on("error", error => console.error(error));;

    // Inscreva o player de áudio na conexão do canal de voz!
    serverQueue.connection.subscribe(player);
    // Mande uma mensagem bonita no chat avisando que a música está tocando!
    serverQueue.textChannel.send(`Tocando agora: **${song.title}**`);
}

module.exports = {
    name: 'play-music',
    description: 'Command that allows people to listen to music.',
    async execute(msg, args, client, queue) {
        // Criando variável de fila e pegando o canal de voz do membro!
        var serverQueue = queue.get(msg.guild.id);
        const voiceChannel = msg.member.voice.channel;
        // Se o canal de voz é nulo, o membro não está em um canal de voz!
        if(!voiceChannel) return msg.channel.send("Entre em um canal para tocar música!");
        // Se não for nulo, vamos verificar se o bot tem permissão para entrar e falar no canal!
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if(!permissions.has("CONNECT")) return msg.channel.send("Não tenho permissão para me conectar ao canal!");
        if(!permissions.has("SPEAK")) return msg.channel.send("Não tenho permissão para falar!");

        // Pesquisando no google a lista de vídeos de acordo com o que for enviado no comando!
        const search = args.join(" ");
        const result = await ysapi.GetListByKeyword(search, false);

        // Pegando o ID do primeiro vídeo e recebendo as informações dele!
        const videoID = result["items"][0].id;
        const info = await ytdl.getInfo(videoID);

        // Atribuindo essas informações num objeto!
        const song = {
            title: info.videoDetails.title,
            url: info.videoDetails.video_url
        };

        // Se a serverQueue não existe, significa que não tem músicas na playlist!
        if (!serverQueue) {
            // Criando objeto base da fila!
            const queueContruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
        
            // Setando essa fila vazia como fila do servidor na variável queue!
            queue.set(msg.guild.id, queueContruct);
            // Adicionando o som pedido na fila de sons!
            queueContruct.songs.push(song);

            try {
                // Conectando ao canal de voz e atribuindo isso no serverQueue!
                var connection = await connectToChannel(voiceChannel);
                queueContruct.connection = connection;
                serverQueue = queue.get(msg.guild.id);
                // Chamando play() para tocar a música!
                play(msg.guild, queueContruct.songs[0], serverQueue);
            } catch (err) {
                // Vish, deu erro? Imprima o erro no console, delete a fila do servidor e envie no chat o erro!
                console.log(err);
                queue.delete(msg.guild.id);
                return msg.channel.send(err);
            }
        } else {
            // Se o serverQueue já existe, então adicione na playlist e avise no chat!
            serverQueue.songs.push(song);
            return msg.channel.send(`**${song.title}** foi adicionado à fila!`);
        }
    }
}