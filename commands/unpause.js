module.exports = {
    name: 'unpause-song',
    description: 'Command that allows people to pause the song.',
    adminOnly: false,
    aliases: ['unpause', 'unps'],
    requirements: ['player'],
    slice: 1,
    async execute(msg, client, argObject) {
        const player = argObject.player;
        if(player.unpause())
            return msg.channel.send(`A música foi despausada!`);
    }
}