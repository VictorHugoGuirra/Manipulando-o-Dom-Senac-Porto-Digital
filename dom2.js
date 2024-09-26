// Recebendo os elementos do formulário pelo ID
let botao = document.getElementById('meuBotao');
let nome = document.getElementById('nome');
let email = document.getElementById('email');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Modifica os valores dos campos de formulário
    nome.value = 'Maria';
    email.value = 'maria@example.com';
});