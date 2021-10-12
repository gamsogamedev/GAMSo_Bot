const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue-list',
    description: 'Command that allows people to list the songs in the queue.',
    adminOnly: false,
    aliases: ['queue', 'q'],
    requirements: ['queue', 'player'],
    slice: 1,
    async execute(msg, client, argObject) {
        const player = argObject.player;
        const songs = argObject.queue.get(msg.guild.id).songs;
        var queueMessage = "";

        let embed = new MessageEmbed()
            .setColor("#590707")
            .setTitle("Músicas");

        for(let i = 1; i < songs.length; i++) {
            queueMessage += `${songs[i].title}\n`//`[${i ? i : "Tocando"}] ${songs[i].title}\n`;
        }

        embed.addField(`Atual ${player.state.status === 'paused' ? "(pausado)" : ""}`, songs[0].title, false);
        if(queueMessage !== "") embed.addField("Fila", queueMessage, false);

        return msg.channel.send({embeds: [embed]});
    }
}