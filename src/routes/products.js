// const express = require('express') 
// const fs = require('fs')
// const path = require('path')

// const router = express.Router()


// router.get('/',(req,res)=>{
//     const filePath = path.join(__dirname,'../data/products.json')
//     fs.readFile(filePath,'utf8',(err,data)=>{
//         if(err){
//             console.log('error reading products.json: ',err)
//             return res.status(500).json({error:"error reading product data"})
//         }

//         res.json(JSON.parse)

//     })
// }) 'NOSEPQ NO FUNCIONA

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../data/products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products.json:', err);
            return res.status(500).json({ error: 'Error reading product data' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
