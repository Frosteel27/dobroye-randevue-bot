const { Telegraf, Markup, } = require('telegraf');
const text = require('./text');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);




bot.start(async (ctx) => {
    try {
        await ctx.reply(text.greeting);
        setTimeout(farewell, 5400000, ctx)
    } catch(err) {
        console.log(err)
    }
})

function farewell(ctx) {
    ctx.reply(text.parting)
}

bot.on('text', (ctx) => {     
ctx.telegram.sendMessage('-871182787', 
`${ctx.message.text}
<i>от ${ctx.message.from.first_name}</i>
`, {parse_mode: "HTML"}
)    
})

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));