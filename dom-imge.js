     // Função para alterar a imagem
     function alterarImagem() {
        let imagem = document.getElementById('minhaImagem');
        let botao = document.getElementById('botao1');

        imagem.src = 'imagens/ss4.png'; // Nova URL da imagem

        imagem.alt = 'Nova imagem'; // Texto alternativo para a nova imagem

        botao.textContent= "Super Saiyajin 4"
    }