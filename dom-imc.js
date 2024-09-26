function addItem() {
    const pesoo = parseFloat(document.getElementById('itemInput1').value);
    const alturaa = parseFloat(document.getElementById('itemInput2').value);
    resultado = parseFloat(pesoo / (alturaa ** 2))
    

    if(resultado >= 0 || resultado <= 0){ 
        const li = document.createElement('li');

        li.textContent = `${resultado.toFixed(2)} ${avalImc(resultado)}` ;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            li.remove();
        };

        li.appendChild(removeButton);

        document.getElementById('itemList').appendChild(li);

        resultado.value = '';
        
    } else {
          alert('Por favor, insira uma tarefa.');
      }
}

function avalImc(imc) {
    if(imc < 18.5){
        return `Você está desnutrido`
    } else if(imc >= 18.5 && imc <= 24.9) {
        return `você está Saudavel`
    } else if(imc >= 25 && imc <= 29.9) {
        return `você está com sobrepeso`
    } else if(imc >= 30 && imc <= 39.9) {
        return `você está Obesidade grau 1`
    } else{
        return `você está Obesidade severa grau 2`
    }
}