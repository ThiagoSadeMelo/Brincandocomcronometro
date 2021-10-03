var display = document.getElementById('display');

var minutos = document.getElementById('minutos');

var segundos = document.getElementById('segundos');

var iniciar = document.getElementById('iniciar');

var zerar = document.getElementById('zerar');


var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;


for(var i = 0; i <= 59; i++){
    minutos.innerHTML+=`<option value="${i}"> ${i}</option>`;
}

for(var i = 1; i <= 60; i++){
    segundos.innerHTML+=`<option value="${i}"> ${i}</option>`;
}

iniciar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                segundoAtual = 59;
            }else{
                alert("Acabou!");
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    },1000);

});

zerar.addEventListener('click',function(){
    zerar = clearInterval(interval);
    minutoAtual = 0;
    segundoAtual = 0;
    document.getElementById("sound").pause();


    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

});
