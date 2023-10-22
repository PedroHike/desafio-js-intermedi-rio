const botao = document.getElementById('btn');
const campoDePreenchimento = document.querySelectorAll('.input');

botao.addEventListener('click', (event)=>{
        campoDePreenchimento.forEach((elemento)=>{
                if(elemento.value){
                        elemento.classList.add('valido');
                        elemento.classList.remove('invalido');
                        elemento.nextElementSibling.classList.remove('ativa')
                }else{
                        event.preventDefault();
                        elemento.classList.remove('valido');
                        elemento.classList.add('invalido');
                        elemento.nextElementSibling.classList.add('ativa');
                }
        });
})