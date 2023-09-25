const input = document.querySelectorAll('.input')

const container = document.querySelectorAll('.container');

const btnEnviar = document.querySelector('.btn-enviar')



btnEnviar.addEventListener('click', (event)=>{

    input.forEach((input, indice)=>{
        const classesDoContainer = container[indice].classList
        const inputVazio = input.value == ""
        const inputPreenchido = input.value!==""

        
        if(inputVazio){
            
            verificarSeInputEstaVazio(classesDoContainer, event);
            
        }else if(inputPreenchido){
            
            verificarSeInputEstahPreenchido(classesDoContainer);
        }
        
    })
})

input.forEach((input, indice)=>{
        input.addEventListener('change', ()=>{
        const classesDoContainer = container[indice].classList
        const inputVazio = input.value == ""
        const inputPreenchido = input.value!==""

        
        if(inputVazio){
            
            verificarSeInputEstaVazio(classesDoContainer);
            
        }else if(inputPreenchido){
            
            verificarSeInputEstahPreenchido(classesDoContainer);
        }
        
    })

})


function verificarSeInputEstaVazio(classesDoContainer, event) {
    if (classesDoContainer.contains('preenchido')) {
        classesDoContainer.remove('preenchido');
    }
    classesDoContainer.add('erro');
    event.preventDefault();
}

function verificarSeInputEstahPreenchido(classesDoContainer) {
    if (classesDoContainer.contains('erro')) {
        classesDoContainer.remove('erro');
    }
    classesDoContainer.add('preenchido');
}