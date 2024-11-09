const server = require('./src/app')
const PORT = 4000

server.listen(PORT,()=>{
    console.log('server on port :', PORT)
} )
