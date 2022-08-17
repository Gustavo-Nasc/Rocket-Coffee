import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import routes from './routes'

const app = express()

//Definindo a View Engine para o EJS
app.set('view engine', 'ejs')

//Em desenvolvimento altere o caminho para 'views'
app.set('views', path.join(__dirname, '../src/views'))

//Pegando arquivos 'estáticos', que, geralmente, são os arquivos para o Front-End
app.use(express.static('public'))

//Definindo configurações para que o projeto funcione
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Em caso de erros, o erro será retornado qual o erro
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    return res.json({
        status: 'Error',
        message: 'error.message'
    })
})

//Utilizando o routes para que as nossas rotas passem a funcionar
app.use(routes)

//Definindo a porta dinamicamente
app.set('port', process.env.PORT || 3000)

//Iniciando o servidor
app.listen(app.get('port'), () => console.log(`App is running in port ${app.get('port')}`))