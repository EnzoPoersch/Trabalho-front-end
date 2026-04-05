// 1. FUNCIONALIDADE: Validação de Formulário [cite: 28]
const form = document.getElementById('formContato');

form.addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome.length < 3) {
        alert("Por favor, digite um nome válido.");
        event.preventDefault();
        return;
    }

    alert(`Olá ${nome}, sua mensagem foi enviada com sucesso!`);
});

// 2. FUNCIONALIDADE: Manipulação do DOM (Carrinho de Compras) [cite: 29]
const botoes = document.querySelectorAll('.btn-comprar');
let contadorCarrinho = 0;

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        contadorCarrinho++;
        botao.innerHTML = "Adicionado! ✅";
        botao.style.backgroundColor = "#28a745";
        
        // Retorna o texto original após 2 segundos
        setTimeout(() => {
            botao.innerHTML = "Comprar";
            botao.style.backgroundColor = "";
        }, 2000);
        
        console.log("Produtos no carrinho:", contadorCarrinho);
    });
});

// 3. FUNCIONALIDADE: Mensagem de Boas-vindas Dinâmica [cite: 29]
window.onload = () => {
    console.log("Bem-vindo à Casa do Torcedor! Site carregado.");
};