const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
    
    });
    
bot.onText(/\/sendpic/, (msg) => {
    let url = 'https://trello-attachments.s3.amazonaws.com/5666779e6c24bb815183689c/597f79754996f872478fb5c8/600x264/79a80ac19fe1a4390cba895c920944f2/S61028-20071611.jpg'
    bot.sendPhoto(msg.chat.id,url,{caption : "Here we go ! \nThis is just a caption "} );
    
});
    
bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>" ,{parse_mode : "HTML"});
    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name);
        }
    var robot = "I'm robot";
    if (msg.text.indexOf(robot) === 0) {
        bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
    }
    var location = "location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,44.97108, -104.27719);
        bot.sendMessage(msg.chat.id, "Here is the point");
    }
});