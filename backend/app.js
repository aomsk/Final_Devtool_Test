const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development'

// app.get('/', (req, res) => {
//     res.send('<h1>Final Dev Tool</h1>')
// })

app.get('/', (req, res) => {
    const body = {
        status: "OK",
        nodeEnv,
        title: 'Final Dev Tool'
    }
    res.json(body);
})

app.listen(port, () => {
    console.log('Demo app is up and listening to port: ', + port)
});