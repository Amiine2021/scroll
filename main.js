let btn = document.getElementById('btn');


onscroll = function(){
    if(this.scrollY > 400){
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

this.onclick = function(){

    scroll({
        left:0,
        top:0,
        behavior: "instant"
    })
}