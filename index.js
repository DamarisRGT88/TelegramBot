const express = require('express');
const { Telegraf } = require('telegraf');
const { create } = require('./models/user.model');

// Carga del fichero de entorno
require('dotenv').config();

// Carga de la BD
require('./config/db');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Configuración del BOT
app.use(bot.webhookCallback('/url_telegram'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/url_telegram`);


app.post('/url_telegram', (req, res) => {
    res.send('Termina');
});

// MIDDLEWARE
bot.use(async (ctx, next) => {
    try {
        await create(ctx.from);

    } catch (err) {
        console.log(err)
        console.log('No se inserta el usuario')
    } finally {
        next();
    }

});

// COMANDOS
bot.command('test', require('./commands/test'));
bot.command('tiempo', require('./commands/tiempo'));
bot.command('donde', require('./commands/donde.js'))

bot.on('text', require('./nlu'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
