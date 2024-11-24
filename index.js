const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

// welcome message end point
function getWelcomeMessage(){
  return "Welcome to our service"
}

// welcome end point
app.get("/welcome",(req,res) =>{
  res.send(getWelcomeMessage())
})

// Greet user
function greet(username){
  return "Hello!! "+username
}

app.get("/greet",(req,res) =>{
  res.send(greet(req.query.username))
})

// check password strength
function checkPasswordStrength(password){
  return password.length > 15 ? "Strong":"Weak"
}

app.get("/check-password",(req,res) =>{
  res.send("Password is "+checkPasswordStrength(req.query.password))
})

// calculate sum of numbers
function calculateSum(num1, num2){
  let result = parseFloat(num1) + parseFloat(num2)
  return result.toString()
}

app.get("/calculate-sum", (req,res)=>{
  res.send(calculateSum(req.query.num1, req.query.num2))
})

// subscription status
function subscriptionStatus(subscribed){
  return (subscribed == "true") ? "Subscribed" : "Not Subscribed"
}

app.get("/subscription-status",(req,res) =>{
  res.send(req.query.username + " is "+subscriptionStatus(req.query.subscribed))
})

// get discount details
function getDiscountedPrice(price, discountPercentage){
  let finalPrice = price - (price * discountPercentage / 100)
  return finalPrice.toString()
}
app.get("/discounted-price",(req,res)=>{
  res.send(getDiscountedPrice(parseFloat(req.query.price),parseFloat(req.query.discountPercentage)))
})

// personalized greeting
app.get("/final-price",(req,res) =>{
  res.send("Hello, "+req.query.name+ "! You are a "+req.query.age+" Year old "+req.query.gender)
})

// get discount details
function getFinalPrice(price, discountPercentage, taxPercentage){
  let priceAfterDiscount = price - (price * discountPercentage / 100)
  let finalPrice = priceAfterDiscount + (priceAfterDiscount * taxPercentage / 100) 
  return finalPrice.toString()
}

  app.get("/final-price-taxed",(req,res)=>{
    res.send(getFinalPrice(parseFloat(req.query.price),parseFloat(req.query.discountPercentage),parseFloat(req.query.taxPercentage)))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// total excercise time
function excerciseTime(activity1, activity2, activity3){
  return parseFloat(activity1) + parseFloat(activity2) + parseFloat(activity3)
}

app.get("/total-excercise-time",(req,res) =>{
  let activity1 = req.query.activity1
  let activity2 = req.query.activity2
  let activity3 = req.query.activity3

  res.send("Total Time: "+ excerciseTime(activity1, activity2, activity3))
})
