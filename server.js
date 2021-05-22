console.log('express.js');
// 1er:importer express
const express=require('express')
const path = require('path')
//2eme mettez express dans une variable 
const app = express()
const verifDate = (req, res, next) => {
    const date = new Date();
    const day = date.toDateString().substring(0, 3);
    const hour = date.toTimeString().substring(0, 2);
    console.log(day,hour);
    let time = false;
    switch (day) {
        case 'Mon': time = true
        case 'Tue': time = true
        case 'Thu': time = true
        case 'Wed': time = true
        case 'Fri': time = true
    }
    if (time === true && hour >=9 && hour <= 17) {
        next();
    }
    else res.redirect("/image.html")
}
app.get("/image.html",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'public','image.html'))
}) 
app.get('/service.html',verifDate,(req,res)=>{
    res.sendFile(path.join(__dirname,'public','service.html'))

})
//app.use(verifDate)
app.use(express.static('public'));



//verfication of time
/* app.get("/",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'public','home.html'))
    
})
app.get("/index.html",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'public','home.html'))
    
})
app.get('/contact' , (req , res) =>{
    res.render('contact.html')
})

app.get('/service' , (req , res) =>{
    res.render('service.html')
}) */

// 3 eme creation de port ili bich n7illou fih car 3000 reserve lil front
const port =5000;
/* app.get('/',(req,res)=>{
    res.send('hello')
}) */
//4 ecoutez le port
app.listen(port,(err)=>{err?console.log(err):console.log('the port is runing en 5000')})


