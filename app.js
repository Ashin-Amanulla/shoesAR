const express = require('express')
const app = express()
const port = 8954
const cors = require('cors')
app.use(cors())
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'angular'))) // informing our backend serveer that build is a static folder

// app.get('/', async (req, res) => {
//     try {

//         res.send('true')

//     } catch (error) {
//         console.error(error)
//         res.send(error)
//     }
// })

//last route
app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'index.html'))

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})



app.listen(port, () => {
    console.log('listening on port ' + port)
})