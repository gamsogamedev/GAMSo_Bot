module.exports = {
    name: 'skip-song',
    description: 'Command that allows people to skip to the next song.',
    adminOnly: false,
    aliases: ['skip', 'next'],
    requirements: ['player'],
    slice: 1,
    async execute(msg, client, argObject) {
        const player = argObject.player;

        player.stop();
    }
}