
const {Router} = require('express')
const ProductRouter = require('./products')
const router = Router()

router.get('/',(req,res)=>{

    res.status(200).send('tas en /, osea el home man')
})

router.get('/lari',(req,res)=>{

    res.status(200).send('tkm bebu <3 te hago estas lineas, desde honolulu')
})

router.get('/papucho',(req,res)=>{

    res.status(200).send('te amo mucho papucho, grax x todo<3')
})
router.get('/mamushka',(req,res)=>{

    res.status(200).send('te amo mucho mamushka, grax x la torta <3')
})


router.use('/products',ProductRouter)



module.exports = router

