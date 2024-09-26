// Obtém o botão, o campo de input e o parágrafo para exibir o resultado
let botao = document.getElementById('meuBotao');
let input = document.getElementById('info');
let resultado = document.getElementById('resultado');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Obtém os valores dos atributos 'placeholder' e 'type'
    let placeholder = input.getAttribute('placeholder');
    let type = input.getAttribute('type');

    // Exibe os valores dos atributos no parágrafo
    resultado.innerHTML = `Placeholder: ${placeholder} <br> Tipo: ${type}`;
});