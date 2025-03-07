const express = require("express");

const cors = require('cors')




const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get('/', (req,res) => {
    res.send("Welcome to My Api . Try /api/greet or /api/greet?name=yournamwe after the base url");
})


app.get ('/api/greet',  (req, res) => {
    const name = req.query.name;
    if (!name){
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({message : `Hello , ${name}! Welcome to YoungLabs.`}); 
        
})

// app.listen(3000, () =>{
//     console.log('running')
// })
module.exports = app;