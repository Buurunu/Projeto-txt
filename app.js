const fs = require('fs');
const readline = require('readline');

const nomeArquivo = 'arquivo.txt';
const nomeArquivoHistorico = 'historico.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o que você deseja inserir no arquivo: ', (entradaUsuario) => {
  fs.appendFile(nomeArquivo, entradaUsuario + '\n', (erro) => {
    if (erro) throw erro;
    console.log(`O conteúdo "${entradaUsuario}" foi inserido com sucesso no arquivo ${nomeArquivo}`);
    fs.appendFileSync(nomeArquivoHistorico, entradaUsuario + '\n');
    console.log(`O conteúdo "${entradaUsuario}" foi adicionado ao histórico`);
    rl.close();
  });
});
