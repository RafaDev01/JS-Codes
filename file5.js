//Coleção de objetos segue a sintaxe: var = [{}]
//As propriedades são formadas por -> chave: valor,
var curiosidades_chuck_norris = [
  { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
  { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
  { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
  { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
  { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
  { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
  { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
  { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
  { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
  { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

//Atribuindo o tamanho da coleção com a propriedade length = 10
var tamanho_colecao = curiosidades_chuck_norris.length;

//Math.random() retona um número aleatório de 0 e <1
//Math.floor() arredonda um número para baixo para o número inteiro mais próximo
//O resultado de Math.random() é multiplicado pelo tamanho da coleçao
//Math.floor() irá arredondar o resultado da operação
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

//A variável numero_sorteado é utilizada como índice na coleção, o que permite acessar um objeto dentro do array e atribui para a variavel curiosidade_escolhida
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

//Os dados sobre a curiosidade selecionada são armazenadas em variáveis
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

//Retornando o nomero aléatorio
console.log(numero_sorteado)

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);

