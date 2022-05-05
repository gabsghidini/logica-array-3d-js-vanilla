function multiplicacaoDe10 () {
  let resultado = [];
  let resultadoAux = [];

  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      resultadoAux.push(j * i);
    }
    resultado.push(resultadoAux);
    resultadoAux = [];
  }
  return resultado;
}


function tabelaMultiplicacao (num) {
  let resultado = [];
  let resultadoAux = [];

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      resultadoAux.push(j * i);
    }
    resultado.push(resultadoAux);
    resultadoAux = [];
  }
  return resultado;
}

/*

console.table(tabelaMultiplicacao(5)); <- Usado no teste de mesa
console.table(multiplicacaoDe10()); <- Usado no teste de mesa

*/ 