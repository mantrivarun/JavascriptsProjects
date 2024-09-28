const randomColor=function(){
    let letters = '0123456789ABCDEF';
    let color='#';
    for(i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomColor());

let changebg=function(){
    document.querySelector('#color').style.backgroundColor=randomColor();
}

let val1;

document.querySelector('#change').addEventListener('click',function(){
    val1=setInterval(changebg,1000);
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(val1);
})