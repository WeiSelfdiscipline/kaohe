var li_1=document.getElementById("li-1");
var li_2=document.getElementById("li-2");
var nav2=document.getElementById("nav2");
var nav3=document.getElementById("nav3");
li_1.style.color="red";
function hid(a,b,c){
if(b.style.display=="none"){
    a.onclick=function clear(){
        b.style.display="block";
        c.style.display="none";
    }
}
}
hid(li_1,nav2,nav3);
hid(li_1,nav2,nav3);