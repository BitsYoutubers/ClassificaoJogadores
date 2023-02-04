
var listaJogadores = [
  {  nome: 'Janeiro',  vitoria: 0,  empate: 0,  derrota: 0,  pontos: 0 },
  {  nome: 'Dezembro',  vitoria: 0,  empate: 0,  derrota: 0,  pontos: 0 },
  {  nome: 'Março',  vitoria: 0,  empate: 0,  derrota: 0,  pontos: 0 },
  {  nome: 'Agosto',  vitoria: 0,  empate: 0,  derrota: 0,  pontos: 0 },
  {  nome: 'Abril',  vitoria: 0,  empate: 0,  derrota: 0,  pontos: 0 }
];

//pega o id da tabela
var elementoTabela = document.getElementById('tabelaJogadores')

exibirNaTela()

function adicionarJogador(){  
  var jogador = document.getElementById('adicionarJogador').value
  
  const obj = {nome: jogador, vitoria: 0,  empate: 0,  derrota: 0,  pontos: 0}
  listaJogadores.push(obj);
  console.log('jogador '+ obj + 'adicionado')
  
  document.getElementById('adicionarJogador').value = ''
  exibirNaTela()
}  

console.table(listaJogadores);
                  

function exibirNaTela(){
  //ordena a lista
  listaJogadores.sort(function (x, y){
    return y.pontos - x.pontos; //ordem decrescente
  });  
  
  var elemento = " "
  
  //mostra os jogadores em cada posicao 
  for(var i = 0; i<listaJogadores.length ; i++){
  var jogador = listaJogadores[i]
  console.log(jogador)
    
  //mostra na tela os jogadores
  elemento += `
       <tr>
          <td>${listaJogadores[i].nome}</td>
          <td>${listaJogadores[i].vitoria}</td>
          <td>${listaJogadores[i].empate}</td>
          <td>${listaJogadores[i].derrota}</td>
          <td>${listaJogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
          <td><button onClick="excluirJogador(${i})">X</button></td>
        </tr>
  `
  }
  
  elementoTabela.innerHTML = elemento
}


function adicionarVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitoria++
  jogador.pontos = jogador.pontos + 3
  exibirNaTela()
}

function adicionarEmpate(i) {
  var jogador = listaJogadores[i];
  jogador.empate++
  jogador.pontos = jogador.pontos + 1
  exibirNaTela()
}

function adicionarDerrota(i) {
  var jogador = listaJogadores[i];
  jogador.derrota++
  exibirNaTela()
}


function excluirJogador(i){
  var jogador = listaJogadores[i];
  listaJogadores.splice(i, 1);
  exibirNaTela()
}
