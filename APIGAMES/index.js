const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const listGames = require("./Games"); 
const cors = require("cors");

app.use(cors());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/games", (req, res) =>{
     
    listGames.findAll().then(game => {
        res.status = 200; 
        res.json(game);
    })
});

app.get("/game/:id", (req, res) =>{
     
    if (isNaN(req.params.id)) {
        res.sendStatus(400); 
    }else{
        id = parseInt(req.params.id);

        listGames.findOne({ where: { id: id }, 
        }).then(game => {
            if (game != undefined) {
                res.status = 200; 
                res.json(game);
            } else {
                res.sendStatus(404);
            }
        }).catch((err) =>{
            res.sendStatus(404); 
        })
    } 
});

app.post("/game", (req, res) =>{

    let title = (req.body.title == "") ?  res.sendStatus(400)  : req.body.title; 
    let year =  isNaN(req.body.year )  ?  res.sendStatus(400)  : req.body.year; 
    let price = isNaN(req.body.price)  ?  res.sendStatus(400)  : req.body.price; 

    listGames.create({
        title: title,
        year: year,
        price: price
    });

    res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
    

    if (isNaN(req.params.id)) {
        res.sendStatus(400); 
    }else{
         var id = parseInt(req.params.id);
         

         listGames.findOne({ where: { id: id }, 
         }).then(game => {
            if (game != null) {
                listGames.destroy({
                    where: {
                        id: id
                    }
                });
                res.sendStatus(200); 
            } else {
                res.sendStatus(400); 
            }
         });  
    } 
});

app.put("/game/:id", (req, res) => {
    let title =  req.body.title; 
    let year =   req.body.year; 
    let price =  req.body.price;
    var id = parseInt(req.params.id);

    listGames.update({
        title : title,
        year : year,
        price : price
    }, {
        where : {
            id : id
        }
    }).then(game => {
        res.sendStatus(200); 
    }).catch(e => {
        res.sendStatus(400); 
    })

});



app.listen(8080, () =>{
    console.log("API RODANDO");
})