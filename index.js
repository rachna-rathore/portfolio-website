var i=0,text;
text = "My Name Is Rachna.";

function typing()
{
if(i<text.length){
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
}


   
}
setTimeout(()=>{
    typing()
},1200);

// document.addEventListener("contextmenu",function(e){
//      e.preventDefault();
// },false);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

hamburger.addEventListener("click",()=>
{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n=>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        
    }))