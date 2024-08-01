
// import express from "express";
// const server = express();
// const port = 5000;s

// server.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });
import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));
const server1 = express();

// import bodyParser from "body-parser";

    
// server1.use(bodyParser.urlencoded({extended: true }));

    



// server1.get("/", (req, res) => {
//     res.sendFiles(__dirname + "/index.html" , "/index.css");
//   });
server1.get("/", (req, res) => {
  res.render("index.ejs", { 
  dayType: "a weekday", 
   advice:"go girl:its time to work",});
});
//   server1.post("/submit", (req, res) =>{
//     console.log(req.body)
// } );n

server1.listen(3000, () =>{
    console.log("server running on port 3000")

});

//mport express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app2 = express();
// const port3 = 3000;

// server1.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app2.listen(port3, () => {
//   console.log(`Listening on port ${port}`);
// });