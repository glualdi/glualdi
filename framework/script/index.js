var acc = document.getElementsByClassName("accordion");
var i;
            
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var click1 =false
function spin1(){
        var spin1 = document.getElementById("arrow-right-2");
    if(!click1){
        spin1.style.transform = "rotate(90deg)";
        click1=true;
    }else{
        click1=false;
        spin1.style.transform = "rotate(360deg)";
    }
}

var click2 =false
function spin2(){
        var spin2 = document.getElementById("arrow-right-3");
    if(!click2){
        spin2.style.transform = "rotate(90deg)";
        click2=true
    }else{
        click2=false;
        spin2.style.transform = "rotate(360deg)";
    }
}

var click3 =false
function spin3(){
        var spin3 = document.getElementById("arrow-right-4");
    if(!click3){
        spin3.style.transform = "rotate(90deg)";
        click3=true
    }else{
        click3=false
        spin3.style.transform = "rotate(360deg)";
    }
}