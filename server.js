//Создание сервера

const express = require('express');//импортируем Express

const bodyParser = require('body-parser');//импортируем body-parser

const app = express();//Создадим приложение App

const PORT = 3001;//Создадим порт 3001

app.use('/static', express.static('static'));

app.use('/css', express.static(__dirname + 'Static/style.css'))

app.use(bodyParser.urlencoded({ extended: false}))

app.post('/callback', (req, res) => {``
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
})

app.use('/callback', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    if (typeof user !== 'object') return res.sendFile(__dirname + '/index.html')
    res.send(`общий салам`)
    })
    app.listen(PORT, () => console.log(`salam startanul at http://127.0.0.1:${PORT}/callback`))



