module.exports = {
    name: 'clear-queue',
    description: 'Command that allows people to clear the queue.',
    adminOnly: false,
    aliases: ['clear'],
    requirements: ['queue'],
    slice: 1,
    async execute(msg, client, argObject) {
        const queue = argObject.queue;
        const queueSize = queue.get(msg.guild.id).length;
        queue.delete(msg.guild.id);

        return msg.channel.send(`A fila foi limpa, levando com ela ${queueSize} músicas...`);
    }
}