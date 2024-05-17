import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Reponse de service 2 ')
})

app.listen(3000)