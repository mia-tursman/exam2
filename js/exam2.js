
// Part 3 Question 1
window.addEventListener("load",function(){
  console.log("Mia")})



// Part 3 Question 2

document.querySelector("h1").addEventListener("click",function(){
  console.log("removing the h1")
this.style.display="none";})



// Part 3 Question 3
document.querySelector(".part :nth-child(2)").addEventListener("mouseover",function(){
  console.log("adding blue border")
 this.style.border="20px solid blue";})




// Part 3 Question 4

document.querySelector(".styled").addEventListener("focus",function(){
  this.style.backgroundColor="lightGray";})

document.querySelector(".styled").addEventListener("blur",function(){
  this.style.backgroundColor="bisque";})


// Part 3 Question 5
document.querySelector(".styled2").addEventListener("click",function(){
  document.querySelector("#maincontent").style.backgroundImage="url('https://mia-tursman.github.io/exam_2_/images/beach.jpg";}) 


// Part 3 Question 6

const images= document.querySelectorAll("a")
images.forEach(function (image){
  image.setAttribute("data-lightbox", "gallery");})


