
const express = require('express')
const app = express()

const port = process.env.PORT || 3000


const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))
//     res.send("hello home page")
// } )
// app.get('/prices', (req,res) =>{
//     res.send("hello prices page")
// } )
// app.listen(port, ()=>{
//     console.log("app is listening on port 3000")
// })
//static path:
// const path = require("path")
// const x=(path.join(__dirname, '../public'))
// app.use(express.static(x))
// app.set('view engine','hbs');
// const viewsdirectory = path.join(_dirname,"../temp/views")
// app.set("views",viewsdirectory)
////////////////////////////////////
app.set('view engine', 'hbs');

 const viewsDirectory = path.join (__dirname , '../temp/views')
 app.set('views', viewsDirectory);

 // to read partials : 
 var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../temp/partials")
hbs.registerPartials(partialsPath)

 
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME",
        desc : "This is home page"
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "SERVICE",
        name: "Mohamed",
        city:"Cairo",
        age: 40,
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name1: "Reem",
        name2:"Mohamed",
        name3:"Reemas",
        img1:"img/trainer1.jpg",
        img2:"img/trainer2.jpg",
        img3:"img/trainer3.jpg",
        city1:"mansoura",
        city2:"Riyadh",
        city3:"New York",
        age1: 25,
        ag2:26,
        age3:28,
    })
})




  

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    