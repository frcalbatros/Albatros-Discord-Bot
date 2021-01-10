const Discord = require("discord.js");

const bot = new Discord.Client();

const TOKEN = 'ALBATROS-BOT-TOKEN';

const dict = {
  "c o o l": ["🆒"],
  "f r e e": ["🆓"],
  "s o o n": ["🔜"],
  "s o s": ["🆘"],
  "a t m": ["🏧"],
  "n e w": ["🆕"],
  "a b c": ["🔤"],
  "t o p": ["🔝"],
  "o n": ["🔛"],
  "i d": ["🆔"],
  "v s": ["🆚"],
  "a b": ["🆎"],
  "c l": ["🆑"],
  "w c": ["🚾"],
  "n g": ["🆖"],
  "o k": ["🆗"],
  "u p": ["🆙"],
  "t m": ["™️"],
  0: ["0⃣"],
  1: ["1⃣"],
  2: ["2⃣"],
  3: ["3⃣"],
  4: ["4⃣"],
  5: ["5⃣"],
  6: ["6⃣"],
  7: ["7⃣"],
  8: ["8⃣"],
  9: ["9⃣"],
  "1 0": ["🔟"],
  "*": ["*⃣"],
  "+": ["➕"],
  "-": ["➖"],
  "#": ["#️⃣"],
  "! !": ["‼️"],
  "! ?": ["⁉️"],
  "!": ["❗", "❕"],
  "?": ["❓", "❔"],
  a: ["🇦", "🅰️","🔼"],
  b: ["🇧", "🅱️"],
  c: ["🇨", "©️"],
  d: ["🇩"],
  e: ["🇪", "📧"],
  f: ["🇫"],
  g: ["🇬"],
  h: ["🇭"],
  i: ["🇮", "ℹ️", "🕧", "🕕"],
  j: ["🇯"],
  k: ["🇰"],
  l: ["🇱","🕒"],
  m: ["🇲", "〽️", "Ⓜ️"],
  n: ["🇳"],
  o: ["🇴", "🅾️", "⭕"],
  p: ["🇵", "🅿️"],
  q: ["🇶"],
  r: ["🇷", "®️"],
  s: ["🇸"],
  t: ["🇹","✝️"],
  u: ["🇺"],
  v: ["🇻"],
  w: ["🇼", "〰️"],
  x: ["🇽", "❌", "❎", "✖️"],
  y: ["🇾"],
  z: ["🇿", "💤"],
};
const jp = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/

const suggestionsuccess = {

    

  "title": "Suggestions & Requests",

  "color": 5966939,

  "fields": [

    {

      "name": "**Success** ✅",

      "value": "Your Suggestion or Request has submitted successfully!"

    },

  ],

  timestamp: new Date(),



}



const newcomersuccess = {

    

  "title": "Authorization",

  "color": 5966939,

  "fields": [

    {

      "name": "**Success** ✅",

      "value": "Thank you for accepting the rules, you authorized successfully!"

    },

  ],

  timestamp: new Date(),



}



const help = {

  "title": "Commands",

  "description": "Use these commands to use Albatros Bot:",

  "color": 5966939,

  "fields": [

    {

      "name": "`!help`",

      "value": "to get help"

    },

    {

      "name": "`!react`",

      "value": "to send something made out of reactions. Just try ok? :D\n *Usage:* `!react`+`text`\n *Example:* `!react bruh`"

    },

    /*{

      "name": "`!contactmore`",

      "value": "to get whole contact infos of heads"

    },*/

    {

      "name": "`!role`",

      "value": "to define your role in your team\n *Usage:* `!role`+`your role`\n *Example:* `!role captain`"

    },

    {

      "name": "`!suggest`",

      "value": "to submit Suggestions or Requests\n *Usage:* `!suggest`+`text`\n *Example:* `!suggest more gaming channels should be on the server`\n *Note:* Ensure that <@760384227614261248> is online and suggestions are deleted instantly from the public chat so don't worry to use."

    },

    {

      "name": "`!ping`",

      "value": "to check if the Albatros Bot is online"

    },

  ],

  timestamp: new Date(),



}



bot.login(TOKEN);



bot.once("ready", () => {

  console.log('Albatros is online!');

  bot.user.setActivity('!help', { type: 'LISTENING' });

  //bot.channels.cache.get('772530698212999209').send("Albatros Bot is Online");

});



bot.on("message", async (msg) => {

  if(msg.channel.id == "780152272268034070"){

    if(msg.content.includes("I accept all the rules in the <#780144055635017758>")){

        msg.member.roles.add("780085120748748822")
        
        msg.member.roles.remove("780085497912492055");
	    
	      msg.author.send({ embed:newcomersuccess });

    }

    else

    { 

      msg.delete()

      msg.reply('Wrong command, use: `I accept all the rules in the <#780144055635017758>` to be authorized')

      .then(msg => {

        msg.delete({ timeout: 7000 })

      })

    }

  }



  else if(msg.author.id !== "760384227614261248"){

    if(msg.content.includes("travolta")){
      msg.channel.send("<a:travolta:780356588803325982>")
  }
  

  else if(msg.channel.id == "780686183557759017"){
    msg.react('780364360487796746')
    msg.react('780364392826667018')
  }


  else if(msg.content.toLowerCase().match(/pipi|yarak|yarrak|slut|orospu|yarak kafalı|amına koyim|amığa|sikik|göt veren|your mom gay|ur mom gay|porn|fuck|bitch|cunt|d1ck|pussy|asshole|b1tch|b!tch|blowjob|cock|c0ck/)){
    
    console.log(msg.author.username + " said: " + msg.content);
	  
    bot.channels.cache.get("796756885381840957").send(msg.author.username + " said: " + msg.content);

    msg.delete()

    if(msg.member.roles.cache.has("780122816057442304")){

      msg.reply("You got your second warning because of your message's content. After 2 warnings you'll be banned from the server")

      msg.member.roles.remove("780122816057442304");

      msg.member.roles.add("780122876615458826");

    }

    else if(msg.member.roles.cache.has("780122876615458826")){

      msg.reply("You got your third warning because of your message's content. After 1 warning you'll be banned from the server")

      msg.member.roles.remove("780122876615458826");

      msg.member.roles.add("780122919614939157");

    }



    else if(msg.member.roles.cache.has("780122919614939157")){

      msg.member.ban().catch(console.error)

    }  



    else{

      msg.reply("You got your first warning because of your message's content. After 3 warning you'll be banned from the server")

      msg.member.roles.add("780122816057442304")

    }    

  }



    else if(msg.content.startsWith("!")){

	

        content = msg.content.toLowerCase().split(" ")

        command = content[0].slice(1)

        if(command == "help")

        {

            msg.channel.send({embed: help})

        }

        else if (command == "react") {

            let lm;
            await msg.channel.messages.fetch({ limit: 2 }).then((res) => {
                lm = res.array()[1];
            });
            let reaction = msg.content
                .slice(7)
                .replace(" ", "")
                .toLowerCase()
                .split("")
                .join(" ");
            msg.delete();
            
            for (const [key, value] of Object.entries(dict)) {
                if (reaction.indexOf(key) > -1) {
                    for (let i = 0; i < value.length; i++) {
                        if (reaction.indexOf(value[i]) < 0) {
                            reaction = reaction.replace(key, value[i]);
                        } else if (i == value.length - 1) {
                            reaction = reaction.replace(key, "");
                        }
                    }
                }
            }
            reaction = reaction.split(" ");
    
            for (let i = 0; i < reaction.length; i++) {
                if (reaction[i] != "") {
                    try {
                        await lm.react(reaction[i]);
                    } catch (err) {}
                }
            }
      }
  

        else if(command == "role")

        {

            msg.react('👌');

            let roles = ["ELECTRONICS","PR","PROGRAMMING","MECHANICS","PIT","DESIGN","CAPTAIN"]

            let r = content[1].toUpperCase()

            let commonRole = null;



            for (let i = 0; i < roles.length; i++) {

                if(msg.member.roles.cache.find(r => r.name === roles[i]))

                {

                    commonRole = roles[i];

                    break

                }

            }



            if(roles.indexOf(r) > -1)

            {

                if(commonRole != null)

                {

                    msg.reply("you are already in " + commonRole + ". If you chose a wrong role please contact moderators.")

                }

                else

                {

                    var role = msg.guild.roles.cache.find(role => role.name === r);

                    msg.member.roles.add(role);

                    msg.reply("you got "+ r + " role.")

                }

                

            }

            else

            {

                msg.reply("The " + r + " role does not exist.")

            }

        }

        /*else if(command == "contactmore")

        {

            msg.react('👌');

            msg.channel.send({embed: contacts})

        }

        

        else if(command == "contact")

        {

            msg.react('👌');

            msg.channel.send({embed: contact})

        }*/



        else if(command == "help")

        {

            msg.react('👌');

            msg.channel.send({embed: help})

        }



        // Suggestion Box

        else if(command == "suggest")

        {

            let suggestion = msg.content.slice(8);

            var suggestionmaker = msg.author.username;

            msg.delete();

            bot.channels.cache.get("780135610123026482").send(suggestionmaker + " suggested: " + suggestion);

            msg.author.send({ embed:suggestionsuccess });

            console.log(suggestionmaker + " suggested: " + suggestion);


        
        }

        

        else if(command == "say")

        {

          if(msg.member.roles.cache.has('760383038550179850'))

          {

            saycontent = msg.content.slice(4)

            msg.delete();

            msg.channel.send(saycontent);

          }



          else

          { 

            msg.delete()

            msg.reply('You must have "Moderator" role to use `!say` command')

            .then(msg => {

              msg.delete({ timeout: 5000 })

            })

          }

        }

        

        else if(command == "offline")

        {

          if(msg.member.roles.cache.has('760383038550179850'))

          {

            msg.delete();

            bot.channels.cache.get('780090282963238912').send("Albatros Bot is Offline");

          }



          else

          { 

            msg.delete()

            msg.reply('You must have "Moderator" role to use `!offline` command')

            .then(msg => {

              msg.delete({ timeout: 5000 })

            })

          }

        } 



        else if(command == "online")

        {

          if(msg.member.roles.cache.has('760383038550179850'))

          {

            msg.delete();

            bot.channels.cache.get('780090282963238912').send("Albatros Bot is Online");

          }



          else

          { 

            msg.delete()

            msg.reply('You must have "Moderator" role to use `!online` command')

            .then(msg => {

              msg.delete({ timeout: 5000 })

            })

          }

        } 

        

        else if(command == "ping"){

          msg.delete()

          msg.reply("I'm online bro")

          .then(msg => {

            msg.delete({ timeout: 5000 })

          })          

        }


        /*else if(command == "typo"){
          msg.delete()
          let typomsg = msg.content.slice(5);
          bot.channels.cache.get("777650174159487026").send("!Albatrosbot " + msg.author.username + typomsg);
        }

        else if(command == "Albatrosbot"){
          msg.react('👍').then(() => msg.react('👎'));
          setTimeout(function(){
            const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
          };
          
          msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
              const reaction = collected.first();
          
              if (reaction.emoji.name === '👍') {
                msg.reply('you reacted with a thumbs up.');
              } else {
                msg.reply('you reacted with a thumbs down.');
              }
            })
            .catch(collected => {
              msg.reply('you reacted with neither a thumbs up, nor a thumbs down.');
            });
        }, 2000);
          
          
        }*/

        else

        {

          msg.delete()

          msg.reply('Invalid command')

          .then(msg => {

            msg.delete({ timeout: 5000 })

          })

        }

      

      }
    }     

        

    });
