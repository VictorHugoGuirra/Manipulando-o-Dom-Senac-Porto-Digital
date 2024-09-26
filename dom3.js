// Obtém o botão e o campo de input pelo ID
let botao = document.getElementById('meuBotao');
let input = document.getElementById('info');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Modifica o atributo 'placeholder' e 'type' do campo input
    input.setAttribute('placeholder', 'Novo placeholder aqui');
    input.setAttribute('type', 'password'); // Muda o campo de texto para campo de senha
});