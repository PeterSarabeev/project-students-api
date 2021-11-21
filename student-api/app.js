import express from 'express'
import cors from 'cors'
import router from './router.js'

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})