
function exibirAlerta() {
    const mensagemSecreta = "Lisbeth descobre que o livro foi transferido para um servidor externo e o professor José Marcos admite o roubo. O arquivo é recuperado, e ele enfrenta as consequências.";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
