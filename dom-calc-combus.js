// Função para calcular o consumo de combustível
function calcular() {
    // Obtém os valores do input
    const dadosGasolina = parseFloat(document.getElementById('input1').value)  
    const dadosAlcool = parseFloat(document.getElementById('input2').value)
    const resultado =  dadosAlcool/dadosGasolina
    
    // Cria um novo elemento 'li'
    const li = document.createElement('li');
    
    if (resultado >= 0.70) {
        // Adiciona o texto digitado ao 'li'
      li.textContent = `A diferença deu ${resultado}. Melhor abastercer com gasolina.`; 
    } else {
      li.textContent = `A diferença deu ${resultado}. Melhor abastecer com álcool.`; 
    }
  
    // Cria o botão remover
    const removeBotao = document.createElement('button');
    removeBotao.textContent = 'Remover';
    removeBotao.onclick = function() {
      li.remove(); // Remove o item da lista
    };
    
    // Adiciona o botão de remover ao 'li'
    li.appendChild(removeBotao);
  
    //Adicionandos os itens na lista do html
    document.getElementById('itemList').appendChild(li);
  
  }