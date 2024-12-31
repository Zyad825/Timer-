var s=60;
var m=60;
var time=setInterval(function() {timer()}, 1000);
function timer(){
    s--;
    if(s==-1){
        m--;
        s=59;
        if(m==-1){
            m=0;
            s=0;
            clearInterval(time);
            alert("Finesh");
        }
    }
    document.getElementById("m").innerHTML =m;
    document.getElementById("s").innerHTML = s;
}
