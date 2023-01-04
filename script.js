// Seleciona o formulário
const form = document.querySelector('#form-pedido');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', function(event) {
  // Previne o envio do formulário
  event.preventDefault();
  
  // Seleciona os campos do formulário
  const nome = document.querySelector('#nome');
  const endereco = document.querySelector('#endereco');
  const telefone = document.querySelector('#telefone');
  const produtos = document.querySelector('#produtos');
  
  // Valida os campos do formulário
  if (nome.value.trim() === '' || endereco.value.trim() === '' || telefone.value.trim() === '') {
    alert('Preencha todos os campos obrigatórios');
    return;
  }
  
  // Cria um objeto com as informações do pedido
  const pedido = {
    nome: nome.value,
    endereco: endereco.value,
    telefone: telefone.value,
    produtos: produtos.value
  };
  
  // Envia o pedido para o iFood
  enviarPedidoParaIfood(pedido);
});

// Função para enviar o pedido para o iFood
function enviarPedidoParaIfood(pedido) {
  // Adiciona as informações do pedido ao corpo da requisição
  const corpo = JSON.stringify(pedido);
  
  // Configura a requisição
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: corpo
  };
  
  // Envia a requisição para o iFood
  fetch('https://www.ifood.com.br/pedido/new', config)
    .then(function(response) {
      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        alert('Pedido enviado com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar o pedido');
      }
    })
    .catch(function(erro) {
      console.error(erro);
      alert('Ocorreu um erro ao enviar o pedido');
    });
}
