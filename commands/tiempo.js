const axios = require('axios');

module.exports = async (ctx) => {

    const ciudad = ctx.message.text.split('/tiempo')[1];



    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OWM_API_KEY}&units=metric`

    try {
        const { data } = await axios.get(url);

        const answer = `El tiempo en ${ciudad}:
    Actual: ${data.main.temp}
    Máxima: ${data.main.temp_max}
    Mínima: ${data.main.humidity}`;

        ctx.reply(answer);
    } catch (err) {
        ctx.reply('Ciudad no encontrada ❌');
    }


}