
const {Router} = require('express')
const ProductRouter = require('./products')
const router = Router()

router.get('/',(req,res)=>{

    res.status(200).send('tas en /, osea el home man')
})

router.get('/lari',(req,res)=>{

    res.status(200).send('tkm bebu <3 te hago estas lineas, desde honolulu')
})


router.use('/products',ProductRouter)



module.exports = router

