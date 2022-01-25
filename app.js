
   
//  document.getElementById('value1').innerHTML =  `<img src= "${foodPic}"> `

const button = document.querySelector("button");
const foodInput = document.querySelector("input");
const imageDiv = document.querySelector("#value1");


button.addEventListener('click',()=>{
    let food = foodInput.value;
    const url =`https://foodish-api.herokuapp.com/api/images/${food}`
    
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
       let foodPic = data.image;
       imageDiv.innerHTML = `<div class="picFetch"><img src=${foodPic}></div>`
    })
    .catch((error)=>{
        console.log(error)
    })
})




// get Data
const nameInput= document.querySelector("#name");
const email= document.querySelector("#email");
const message= document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes= document.querySelectorAll(".error");

// validate data
function validateForm(){

    clearMessage();
   let  errorR = true;

 if(nameInput.value.length< 1){
    errorNodes[0].innerText= "to be filled";
    nameInput.classList.add('error-border');
    errorR= true;
}

if( !validEmail(email.value)){
    errorNodes[1].innerText= " invalid";
    email.classList.add('error-border');
    errorR= true;
}
if(message.value.length < 1){
    errorNodes[2].innerText= "type message";
    message.classList.add('error-border');
    errorR= true;
}
if(!errorR){
    success.innerText= "success!";
}
}
// clear error / success messages
function clearMessage(){
    for(i=0; 1< errorNodes.length; i++){
        errorNodes[i].innerText="";
    }
    success.innerText=" "
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");


}

