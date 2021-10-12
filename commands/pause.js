module.exports = {
    name: 'pause-song',
    description: 'Command that allows people to pause the song.',
    adminOnly: false,
    aliases: ['pause', 'ps'],
    requirements: ['player'],
    slice: 1,
    async execute(msg, client, argObject) {
        const player = argObject.player;
        if(player.pause())
            return msg.channel.send(`A música foi pausada! Use unpause/play para continuar!`);
    }
}