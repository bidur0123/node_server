const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({
     extended: true 
    }));

const productData = []

app.listen(2000 , ()=>{
    console.log("connected to server at 2000");
});

// Post api

app.post("/api/add_product", (req, res) => { 
   console.log("result" , req.body);

   const pdata = {
    "id" : productData.length+1,
    "pname" : req.body.pname,
    "pprice" : req.body.pprice,
    "pdesc" : req.body.pdesc
   };

   productData.push(pdata);    // store data for later
   console.log("final" , pdata);

   res.status(200).send({
    "status_code" : 200,
    "message" : "product added successfully",
    "product":pdata
});

})

// Get api

app.get("/api/get_product" , (req, res) => {
    if(productData.length >0){
        res.status(200).send({
            'status_code': 200 ,
            'products': productData
        });
    }else{
        res.status(200).send({
            'status_code':200,
            'products': []
        });
    }
    })