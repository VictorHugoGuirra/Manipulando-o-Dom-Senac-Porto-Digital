// Função para calcular o rendimento da lata de tinta
function calcular() {
    // Obtém os valores do input
    const rendimento = parseFloat(document.getElementById('input1').value);  
    const altura = parseFloat(document.getElementById('input2').value);
    const largura = parseFloat(document.getElementById('input3').value);
    const resultado = Math.ceil((altura * largura) / rendimento);//arredonda para o maior inteiro
    
    // Cria uma nova linha 'tr' e uma célula 'td'
    const tr = document.createElement('tr');
    const td = document.createElement('td');
  
    // Define o valor da célula como o resultado
    
    td.textContent = `São necessários ${resultado} latas de tinta. `; 
  
    // Adiciona a célula 'td' na linha 'tr'
    tr.appendChild(td);
  
    // Adiciona a linha 'tr' na tabela (elemento 'tb')
    document.getElementById('tb').appendChild(tr);
  }