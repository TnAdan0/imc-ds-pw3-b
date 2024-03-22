let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado1");
let arrayPessoa = [];

function cadastrar() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let categoria = document.getElementById("categoria").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let calculo = peso / (altura * altura);

  const pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    categoria: categoria,
    altura: altura,
    peso: peso,
    imc: calcular(peso, altura),
    calculo: calculo,
  };

  arrayPessoa.push(pessoa);
  console.log(arrayPessoa);
  imprimir(arrayPessoa);
}

function calcular(peso, altura) {
  let calculo = peso / (altura * altura);

  if (calculo <= 18.5) {
    return "abaixo do normal";
  } else if (calculo <= 24.9) {
    return "normal";
  } else if (calculo <= 29.9) {
    return "sobrepeso";
  } else if (calculo <= 34.9) {
    return "obesidade grau 1";
  } else if (calculo <= 39.9) {
    return "obesidade grau 2";
  } else {
    return "obesidade grau 3";
  }
}

function imprimir(arrayPessoa) {
  resultado1.innerHTML = "";

  for (let i = 0; i < arrayPessoa.length; i++) {
    resultado.innerHTML += `
    
    <tr>
      <td> ${arrayPessoa[i].nome} ${arrayPessoa[i].sobrenome}</td>
      <td> ${arrayPessoa[i].categoria} </td>
      <td> ${arrayPessoa[i].altura}</td>
      <td> ${arrayPessoa[i].peso} </td>
      <td> ${arrayPessoa[i].calculo} </td>
      <td> ${arrayPessoa[i].imc}</td>    
    </tr>`;
  }
}

btn.addEventListener("click", cadastrar);
btn.addEventListener("click", calcular);
