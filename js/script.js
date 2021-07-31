
var bg=1;

function slide(n){
    document.getElementById("portifolio").style= "background-image: url('/img/"+n+".png')"
    botoes(n,3)
    bg=n
}
function botoes(n,m){
    document.getElementById('botoes').innerHTML = "";
    for (a=1;a<=3;a++){
        if(a==n){
            document.getElementById('botoes').innerHTML+="<li id='ativo' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML+="<li onclick='slide("+a+")'></li>";
        }
    }
    
}

function scrolling(valor){
    document.querySelector(valor).scrollIntoView({behavior: "smooth"});
};

document.querySelector('#down').addEventListener('click',function(event){
    event.preventDefault();
    console.log("dale")
    scrolling("#pag2");
});



function start(){
    slide(1);
}
start()

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    this.classList.toggle("active");
    // var content = this.nextElementSibling;
    // if (content.style.display === "flex") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "flex";
    // }
    switch (this.innerHTML) {
        case "Open Section 1":
            coll[0].nextElementSibling.style.display="flex";
            coll[1].nextElementSibling.style.display="none";
            coll[2].nextElementSibling.style.display="none";
            break;
        case "Open Section 2":
            coll[0].nextElementSibling.style.display="none";
            coll[1].nextElementSibling.style.display="flex";
            coll[2].nextElementSibling.style.display="none";
            break;
        case "Open Section 3":
            coll[0].nextElementSibling.style.display="none";
            coll[1].nextElementSibling.style.display="none";
            coll[2].nextElementSibling.style.display="flex";
            break;
        default:
            break;
    }
    
     
  });
}

