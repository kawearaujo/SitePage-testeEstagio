window.onload(slide(4));
var bg=1;
function slide(n){
    document.getElementById("portifolio").style= "background-image: url('/img/"+n+".jpg')"
    botoes(n,3)
    bg=n
}
function botoes(n,m){
    document.getElementById('botoes').innerHTML = "";
    for (a=1;a<=3;a++){
        if(a==n){
            document.getElementById('botoes').innerHTML+="<li class='selecionado' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML+="<li onclick='slide("+a+")'></li>";
        }
    }
    
}
function scroller(ident){
    document.querySelector(ident).scrollIntoViewOptions({behavior: "smooth"});
}
document.querySelector("#down").addEventListener("onclick",function(event){
    event.preventDefault();
    scroller("#pag2");
});