
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