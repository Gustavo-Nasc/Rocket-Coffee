const express = require('express')
const path = require('path')
const http = require('http')

const routes = require('./routes')

const app = express()

//Definindo a View Engine para o EJS
app.set('view engine', 'ejs')

//Setando o caminho das Views
app.set('views', path.join(__dirname, 'views'))

//Pegando arquivos 'estáticos', os arquivos para o Front-End
app.use(express.static('public'))

//Definindo configurações para que o projeto funcione
app.use(express.urlencoded({ extended: true }))

//Utilizando o routes para que as nossas rotas passem a funcionar
app.use(routes)

//Definindo a porta dinamicamente
app.set('port', process.env.PORT || 3000)

//Iniciando o servidor
http.createServer(app).listen(app.get('port'), () => console.log(`App rodando na porta ${app.get('port')}`))