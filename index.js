const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const fs=require("fs");

const port= process.env.PORT || 8000;


const staticPath=path.join(__dirname,"/staticFiles");
const templatePath=path.join(__dirname,"/templates/views");
partialsPath=path.join(__dirname,"/templates/partials");


app.set("view engine","hbs");
app.set("views",templatePath);
// console.log(staticPath)
app.use(express.static(staticPath))

hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
        res.render("home");
}); 
app.get("/test1",(req,res)=>{
    res.render("test1");
});
app.get("/test2",(req,res)=>{
    res.render("test2");
});

app.get('/multiplecallback', function (req, res, next) {
    console.log("First")
    next()
  }, function (req, res, next) {
    console.log("Second")
    next()
    res.send("<h1>Call Back done</h1>");
  })


app.get("*",(req,res)=>{
    res.render("errorPage");
})
app.listen(port ,
    ()=>{
        console.log(`Listening Port No ${port}`)
    }
);