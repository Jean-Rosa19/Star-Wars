import app from './app'
import 'dotenv/config'


const PORT = process.env.BACKEND_PORT || 4000

app.listen(PORT, ()=>{
    console.log(`servidor na porta: ${PORT}`)
})