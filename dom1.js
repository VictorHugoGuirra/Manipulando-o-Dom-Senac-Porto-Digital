// Obtém o botão e o parágrafo pelo ID
let botao = document.getElementById('meuBotao');
let paragrafo = document.getElementById('meuParagrafo');

// Adiciona um evento de clique no botão
botao.addEventListener('click', function() {
    // Altera o texto do parágrafo quando o botão for clicado
    paragrafo.innerHTML = 'O texto foi alterado após clicar no botão!';
});