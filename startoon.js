const progress= document.querySelector(".inner-bar");
const input = document.querySelector(".input-bar");
const maxInput= document.querySelector(".max-bar");
let finalValue = 0;
let max = 0;

function changeHeight(){
    if(finalValue>max){
        progress.style.height=0;
        alert("Enter value less than max value");
    } 
    else{
        progress.style.height=`${(finalValue/max)*100}%`;
    }
}
input.addEventListener("keyup",function(){
    finalValue = parseInt(input.value, 10);
    changeHeight();
});
input.addEventListener("keyup",function(){
    max = parseInt(maxInput.value, 10);
    changeHeight();
});