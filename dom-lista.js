// Função para adicionar um item à lista
function addItem() {
    // Obtém o valor do input
    const entradaDados = document.getElementById('itemInput');
    const novoItem = entradaDados.value;
  
    // Verifica se o campo não está vazio    
    if (novoItem.trim() !== '') {
        // Cria um novo elemento 'li'
        const li = document.createElement('li');
        
        // Adiciona o texto digitado ao 'li'
        li.textContent = novoItem;
  
        // Cria o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            li.remove(); // Remove o item da lista
        };
  
        // Adiciona o botão de remover ao 'li'
        li.appendChild(removeButton);
  
        // Adiciona o 'li' à lista
        document.getElementById('itemList').appendChild(li);
  
        // Limpa o campo de entrada
        entradaDados.value = '';
    } else {
      //Alert: método para abrir uma janela no navegador
        alert('Por favor, insira uma tarefa.');
    }
  }