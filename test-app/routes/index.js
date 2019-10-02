import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const num3 = num1 * num2
    res.render('index', {result: num3})
})

export default router