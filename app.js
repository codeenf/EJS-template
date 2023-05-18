const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')


app.get('/' ,(req , res)=>{
  
var today = new Date();
var currentDay = today.getDay();
var day  =""
// if(currentDay === 0 ){
//     day = 'Sunday'
// } else if(currentDay ===1){
//     day = 'monday' 
// } else if(currentDay ===2){
//     day = 'tuesday' 
// } else if(currentDay ===3){
//     day = 'wednesday' 
// } else if(currentDay ===4){
//     day = 'thursday' 
// } else if(currentDay ===5){
//     day = 'friday' 
// } else if(currentDay ===6){
//     day = 'saturday' 
// } 

switch(currentDay){
    case 0:
    day ="sunday"
    break;

    case 1:
    day ="monday"
    break;

    case 2:
    day ="tuesday"
    break;

     case 3:
    day ="wednesday"
    break;

     case 4:
    day ="thursday"
    break;

     case 5:
    day ="friday"
    break;

    case 6:
    day ="saturday"
    break;
    
    default:
        console.log("no day exists");
}


res.render('list' ,{checkDay : day})
})


app.listen(3000 ,()=>{
    console.log('srver is running on port 3000')
})
