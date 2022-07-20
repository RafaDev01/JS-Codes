const colecao_salario_ipca = [
  { ano: 2010, salario: 510, inflacao: 5.91 },
  { ano: 2011, salario: 545, inflacao: 6.50 },
  { ano: 2012, salario: 622, inflacao: 5.84 },
  { ano: 2013, salario: 678, inflacao: 5.91 },
  { ano: 2014, salario: 724, inflacao: 6.41 },
  { ano: 2015, salario: 788, inflacao: 10.67 },
  { ano: 2016, salario: 880, inflacao: 6.29 },
  { ano: 2017, salario: 937, inflacao: 2.95 },
  { ano: 2018, salario: 954, inflacao: 3.75 },
  { ano: 2019, salario: 998, inflacao: 4.31 },
  { ano: 2020, salario: 1045, inflacao: 4.52 },
  { ano: 2021, salario: 1100, inflacao: 10.06 }
];


import entradaDados from "readline-sync";

console.log("1 - Listar o histórico do salário mínimo\n");
console.log("2 - Listar o histórico da taxa IPCA (inflação)\n");
console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)\n");
let opcao = entradaDados.question("Digite a opção desejada: ");
console.log(`Voce escolheu a opção ${opcao}\n`);

function FSalario () {
  for(let dados of colecao_salario_ipca){
    let ano = dados.ano;
    let salario = dados.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log("Ano:".padEnd(25,".") + ano);
    console.log("Salário mínimo".padEnd(25,".") + salario + "\n\n");
  }
}

function FIpca() {
  for(let dados of colecao_salario_ipca){
    let ano = dados.ano;
    
    console.log("Ano:".padEnd(25,".") + ano)
    console.log("Inflação IPCA".padEnd(25,".") + inflacao + "%\n\n") 
  }
}

if(opcao == 1){
  FSalario();

} else if ( opcao == 2) {
  FIpca();

} else if ( opcao == 3) {
  for(let dados of colecao_salario_ipca){
    let ano = dados.ano;
    let inflacao = dados.inflacao.toFixed(2);
    let crescimento_salarial_percentual = undefined;
    let salario = dados.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if(ano == 2010) {
      crescimento_salarial_percentual = " -";
    } else {
      console.log(dados.salario - dados.salario - 1)
    }
    console.log("Ano:".padEnd(25,".") + ano);
    console.log("Salário mínimo".padEnd(25,".") + salario);
    console.log("Crescimento salarial".padEnd(25,".")+ crescimento_salarial_percentual)
    console.log("Inflação IPCA".padEnd(25,".") + inflacao + "%\n\n")
}
}