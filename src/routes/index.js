
const {Router} = require('express')
const ProductRouter = require('./products')
const router = Router()

router.get('/',(req,res)=>{

    res.status(200).send('tas en /')
})

router.use('/products',ProductRouter)



module.exports = router

