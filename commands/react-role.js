const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'react-role',
    description: 'Create a message that allows people to get roles when reacting.',
    adminOnly: true,
    aliases: ['rr'],
    async execute(msg, args, client) {
        if(!args[0] || parseInt(args[0], 10) <= 0) return msg.channel.send("Erro no input!");
        let amount = parseInt(args[0], 10);
        let pointer = 1, mode = "multi";
        let emojis = [], roles = [];
        if(!args[1]) return msg.channel.send("Erro no input!");
        if(args[1] == "-multi" || args[1] == "-mono") {
            mode = args[1].replace("-", "");
            pointer = 2;
        }
        for(let i = 0; i < amount; i++) {
            if(!args[pointer + i*2] || !args[pointer + i*2 + 1]) return msg.channel.send("Erro no input!");
            emojis.push(args[pointer + i * 2]);
            roles.push(msg.guild.roles.cache.find(role => role.id === args[pointer + i * 2 + 1]));
        }

        let color = "#FF00FF";
        let title = "testei demaiskkk";
        let description = "sei la reage ai manokkk";

        let embed = new MessageEmbed()
            .setColor(color)
            .setTitle(title)
            .setDescription(description);
    
        let message = await msg.channel.send({embeds: [embed]});
        for(let i = 0; i < amount; i++) message.react(emojis[i]);

        client.on('messageReactionAdd', async (reaction, user) => {
            try {
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch();
                if(user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id == msg.channel.id) {
                    if(reaction.emoji.id == null) {
                        emojiIndex = emojis.indexOf(reaction.emoji.name);
                    } else {
                        emojiIndex = emojis.indexOf("<:" + reaction.emoji.name + ":" + reaction.emoji.id + ">");
                    }
                    if(emojiIndex != -1) {
                        if(mode === "mono") {
                            for(let i = 0; i < amount; i++) {
                                await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[i]);
                            }
                        }
                        await reaction.message.guild.members.cache.get(user.id).roles.add(roles[emojiIndex]);
                    }
                } else {
                    return;
                }
            } catch (err) {
                client.emit("error", err, "react-role");
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            try {
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch();
                if(user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id == msg.channel.id) {
                    if(reaction.emoji.id == null) {
                        emojiIndex = emojis.indexOf(reaction.emoji.name);
                    } else {
                        emojiIndex = emojis.indexOf("<:" + reaction.emoji.name + ":" + reaction.emoji.id + ">");
                    }
                    if(emojiIndex != -1) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[emojiIndex]);
                    }
                } else {
                    return;
                }
            } catch(err) {
                client.emit("error", err, "react-role");
            }
        });
    }
}
