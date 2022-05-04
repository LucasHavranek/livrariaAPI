import express from 'express'
import cors from 'cors'
import winston from 'winston'
import clienteRouter from './routes/clienteRoute.js'
import autorRouter from './routes/autorRoute.js'
import livroRouter from './routes/livroRoute.js'

const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`
})

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({ filename: 'livrariaAPI.log' })
    ],
    format: combine(
        label({ label: 'livrariaAPI' }),
        timestamp(),
        myFormat
    )
})

const app = express()
app.use(express.json())
app.use(cors())
app.use('/cliente', clienteRouter)
app.use('/autor', autorRouter)
app.use('/livro', livroRouter)

app.listen(3000, () => console.log("API started!"))