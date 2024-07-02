import express from "express";
const mine = express();
mine.use(express.json());



// endpoint:
mine.get("/math" ,(req,res) =>{
    const random = Math.floor(Math.random() * 501);
    res.json({
        code: 26,
        answer:random,
    });
});

mine.all("*",(req,res) =>{
    res.status(404).json({
        code:404,
        answer: "not found"
    })
})


mine.listen(3000, () =>{
    console.log("start");
})


// idk? 