import express, { raw } from 'express'
import studentsJSON from './students.json'
import { sortStudents } from './controllers/students.js'

const studentsData = studentsJSON
const router = express.Router()

const commonResponseHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json ',
}

router.get('/', (req, res) => {
    res.set(commonResponseHeaders).status(200).send('Students API')
})

router.get('/students', (req, res) => {
    try {
        let students = JSON.parse(JSON.stringify(studentsData))
        if (Object.keys(req.query).length > 0) {
            students = sortStudents(students, req.query)
        }

        res.set(commonResponseHeaders).status(200).send(students)
    }
    catch (ex) { }
})

export default router