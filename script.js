// 2 loops , i e j, i vai ser o primeiro nível, j segundo nivel
// const arrTeste = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 9, 12, 15], [0, 4, 8, 12, 16, 20] , [0, 5, 10, 15, 20, 25]]

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

// console.table(tabelaMultiplicacao(5));
// console.table(multiplicacaoDe10());