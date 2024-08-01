





// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//     //const today = new Date();
    
// //     const day = today.getDay()
 
// //     let type = "a weekday"
// //     let adv = "its time to work add adeola"


  
//   });
// //   if (day === 0  ){
// //     type = "have fun maami"
// //   }
// //   else if (day === 6){
// //     adv = "work hard leilani💕"
// //   }
    
//   res.render("index.ejs", { 
//     dayType: "love you💕",
//     advice: "have a good time",
// });
 
  
//   app.listen(3000, () =>{
//       console.log("server running on port 3000")
  
//   });

const formsignin = document.querySelector(".sign-in")
const emailsignin = document.querySelector(".card2-email")
const passwordsignin = document.querySelector(".card2-password")
const errormessages = []

formsignin.addEventListener("submit", event =>{
  event.preventDefault()
  console.log(emailsignin.value)
  console.log(passwordsignin.value)

  if(passwordsignin.value.length < 6){
    errormessages.push("password must be at east 6 characters")
  }
  console.log(errormessages)
})