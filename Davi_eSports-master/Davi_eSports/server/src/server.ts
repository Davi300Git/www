import express from 'express'

const app = express();

// localhost:3333/ads

app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name : 'Anúncio 1' },
        { id: 2, name : 'Anúncio 2' },
        { id: 3, name : 'Anúncio 3' },
        { id: 4, name : 'Anúncio 4' },
        { id: 5, name : 'Hello World' },
    ])
})

app.listen(3333)