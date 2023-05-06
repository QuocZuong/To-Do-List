const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const items = [];
const workItems = [];
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/",function(req,res){

    const date = require(__dirname + "/date.js")
    res.render("list", {header: date.getDate(), newListItems: items})

})

app.get("/work", function(req,res){
    res.render("list", {header:"Work List", newListItems: workItems})
})

app.get("/about", function(req, res){
    res.render("about")
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.button === "Work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/");
    }
   
})


app.listen(3000,function(){
    console.log("start 3000")
})
