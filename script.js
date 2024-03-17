let switch1 = document.getElementById('switch')       /*variavel interruptor_ troca de tema*/
let root = document.documentElement                   /*traz as definicoes toor do css*/

switch1.addEventListener('click', () => {             /*permite que o botao seja clicavel, ao clicar alterna entre as definicoes de root e light-theme do css*/
    root.classList.toggle('dark-theme')

})

