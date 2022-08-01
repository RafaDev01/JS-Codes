const dataUltimoAcesso = new Date('2022/07/31 17:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

//retornando a hora do ultimo acesso em milissegundos
const timeUltimoAcesso = dataUltimoAcesso.getTime();

//retornando a data atual em milissegundos
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

//O código abaixo retorna a hora em milissegundos(3.600.000 ms)
const milissegundosHora = 1000 * 60 * 60;

let horasAusente = diferencaTime / 3600000

//O código abaixo retona o dia em milissegundos (86.400.000ms)
const milissegundosDia = milissegundosHora * 24;

let diasAusente = diferencaTime / 86400000

let msg = "";

if ( hora < 6 || hora >= 18 ) {
  msg = 'Boa noite\n';
} else if (hora >= 6  && hora < 12 ) {
  msg = 'Bom dia\n';
} else {
  msg = 'Boa tarde\n';
}

if ( diferencaTime > milissegundosDia ) {
  msg += "Você está ausente há " + diasAusente.toFixed(0) + " dias!";
} else if (diferencaTime > milissegundosHora) {
  msg += "Você está ausente há " + horasAusente.toFixed(2).replace(".","h") + "m";
} else {
  msg += "Que bom que ainda está aqui!";
}

console.log(msg);