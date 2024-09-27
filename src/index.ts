import express from 'express'
import conn from './repositories/conn'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('Olá!')
})

conn.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('DB Conectado')
    app.listen(process.env.PORT, () =>
      console.log(`Server rodando na porta: ${process.env.PORT}`)
    )
  }
})
