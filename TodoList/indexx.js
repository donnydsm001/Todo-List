var btn  =  document.querySelector('.bouton');
var input  = document.querySelector('input');
//var submit  = document.querySelector('input[type="submit"]');
var ul = document.querySelector('ul');

function createEvent(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    console.log(input.value);
    input.value=""; //remettre le input vide
}
//la fonction renvoit la valeur tapée
function inputValue(){
    return input.value.length;
}
//fonction principale

function addList(){
    if(inputValue()>0) { 
    createEvent();
    }

}
//recvoit l'action tapée au clavier
btn.addEventListener("click", addList);

function afterKeypress(event){
    if(inputValue()> 0 && event.keyCode === 13){
        createEvent();
    }
}
input.addEventListener("keypress",afterKeypress);
//submit.value = 'send';=> juste pour tester
//input.value = 'Hello world'; => pour tester que ca marche.
//document.querySelector('.classe').innerHTML='Bonjour !';
