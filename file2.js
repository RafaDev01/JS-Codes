let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

//formatando o comentário para que ele seja comparado
comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); // venda de passaporte falso