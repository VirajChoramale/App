const express=require('express');
const path=require('path')
const app=express();
const port=3001;
const staticPath=path.join(__dirname,'./build/index.html');
app.use(express.static(staticPath))
app.get('/',(req,res)=>{
    //res.sendFile(staticPath)
    console.log(req.body)
})
app.listen(port,()=>{

})