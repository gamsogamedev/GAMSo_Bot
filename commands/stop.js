module.exports = {
    name: 'stop-queue',
    description: 'Command that allows people to stop the bot, making it quit.',
    adminOnly: false,
    aliases: ['stop', 'leave'],
    requirements: ['queue', 'player'],
    slice: 1,
    async execute(msg, client, argObject) {
        const player = argObject.player;
        const queue = argObject.queue;

        queue.set(msg.guild.id, null);

        if(player.stop())
            return msg.channel.send(`A fila foi limpa e a música atual removida!`);
    }
}