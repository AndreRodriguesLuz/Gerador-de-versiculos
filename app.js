'use strict';

// 1. Seleciona o botão no HTML pela classe .btn
const switcher = document.querySelector('.btn');

// 2. Adiciona o evento de clique ao botão
switcher.addEventListener('click', function() {
    // 3. Alterna a classe dark-theme no corpo da página
    document.body.classList.toggle('dark-theme');

    // 4. Verifica qual é a classe atual para atualizar o texto do botão
    const className = document.body.className;
    
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    // 5. NOVA ADIÇÃO: Exibe o nome da classe atual no console do navegador
    console.log('current class name: ' + className);
});