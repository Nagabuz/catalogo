const livros = [
    { titulo: "Dom Quixote", resumo: "Um clássico da literatura espanhola", editora: "Editora A" },
    { titulo: "1984", resumo: "Um romance distópico", editora: "Editora B" },
    { titulo: "Cem Anos de Solidão", resumo: "Realismo mágico latino-americano", editora: "Editora C" }
];

const containerLivros = document.getElementById("livros");

// Função para renderizar os livros
function renderizarLivros(listaLivros) {
    containerLivros.innerHTML = "";
    listaLivros.forEach(livro => {
        const divLivro = document.createElement("div");
        divLivro.classList.add("livro");
        divLivro.innerHTML = `
            <h2>${livro.titulo}</h2>
            <p><strong>Resumo:</strong> ${livro.resumo}</p>
            <p><strong>Editora:</strong> ${livro.editora}</p>
        `;
        containerLivros.appendChild(divLivro);
    });
}

// Função para filtrar os livros por título
function filtrarPorTitulo() {
    const termoPesquisa = document.getElementById("pesquisaTitulo").value.toLowerCase();
    const livrosFiltrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termoPesquisa)
    );
    renderizarLivros(livrosFiltrados);
}

// Função para filtrar os livros por resumo
function filtrarPorResumo() {
    const termoPesquisa = document.getElementById("pesquisaResumo").value.toLowerCase();
    const livrosFiltrados = livros.filter(livro =>
        livro.resumo.toLowerCase().includes(termoPesquisa)
    );
    renderizarLivros(livrosFiltrados);
}

// Função para filtrar os livros por editora
function filtrarPorEditora() {
    const termoPesquisa = document.getElementById("pesquisaEditora").value.toLowerCase();
    const livrosFiltrados = livros.filter(livro =>
        livro.editora.toLowerCase().includes(termoPesquisa)
    );
    renderizarLivros(livrosFiltrados);
}

// Renderizar os livros ao carregar a página
renderizarLivros(livros);