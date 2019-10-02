import express from 'express'
import morgan from 'morgan'
import path from 'path'

import indexRouter from './routes/index'

const app = express()
app.use(morgan('dev'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

export default app