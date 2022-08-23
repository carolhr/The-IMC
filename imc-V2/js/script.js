function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleCalculateImc);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleCalculateImc);
  inputHeight.addEventListener('input', handleCalculateImc);

  handleCalculateImc();
}

function handleCalculateImc() {
  var inputWeight = Number(document.querySelector('#input-weight').value);
  var inputHeight = Number(document.querySelector('#input-height').value);

  var imc = calculateImc(inputWeight, inputHeight);

  var resultImc = document.querySelector('#imc-result');
  resultImc.textContent = imc.toFixed(2);

  var resultado = document.getElementById('resultado');

  if (imc < 16 ){
      mensagem = "inválido"
    } else if(imc >16 && imc <= 16.9){
     mensagem = "Muito Abaixo do peso."
    } else if(imc >17 && imc <= 18.4){
     mensagem = "Abaixo do peso."
    } else if(imc >18.5 && imc <= 24.9){
      mensagem = "Peso ideal."
    } else if(imc >25 && imc <= 29.9){
      mensagem = "Acima do peso."
    } else if(imc >30 && imc <= 34.9){
      mensagem = "Obesidade Grau I"
    } else  if(imc >35 && imc <= 40){
      mensagem = "Obesidade Grau II"
    } else if(imc >40){
      mensagem = "Obesidade Grau III"
  }
   function calculateImc(weight, height)  {
      return weight / (height * height);
      }
  resultado.textContent = "Este valor considera que você está na faixa " + ":" +mensagem;

  
  
  }

start();