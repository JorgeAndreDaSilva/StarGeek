
var filme = []

filme = JSON.parse(localStorage.getItem('bdFilmes'))

if (filme == null) {
    filme = []
}



function Exibir() {
    var filmes = document.getElementById("nome").value
  
    var link = document.getElementById("links").value
    document.getElementById("resultado").innerHTML = ''
    var categoria = document.getElementById('categoria')


    var filmeV = {
        Nomes: filmes,
        Links: link,

        Categoria: categoria.value
    }

    filme.push(filmeV)

    localStorage.setItem('bdFilmes', JSON.stringify(filme))


    alert("Parabéns, sua midia foi cadastrada")
    window.location.href = "filmes.html"

}



function exibirFil() {

    document.getElementById("resultado").innerHTML = ''

    for (var i = 0; i < filme.length; i++) {
        document.getElementById("resultado").innerHTML += `<img src="${filme[i].Links}" class = "fil"> <br> ${filme[i].Nomes} <br> <br> `
    }

}

function limpar() {
    filme = []
    localStorage.setItem('bdFilmes', JSON.stringify(filme))
    exibirFil()
}


function exibirCatalogo() {

    var filmes = JSON.parse(localStorage.getItem('bdFilmes'))
    document.getElementById("listasFilmes").innerHTML = ""

    filmes.forEach(i => {

        if (i.Categoria == "filmes") {
            document.getElementById("listasFilmes").innerHTML += `<img src="${i.Links}" alt="" onmouseenter="hover(i)" onmouseleave="sem_hover(i)" ></img>`
        }
        

    document.getElementById("listasAnimes").innerHTML = ""
    
    if (i.Categoria == "Mangas") {
        document.getElementById("listasAnimes").innerHTML += `<img src="${i.Links}" alt="" onmouseenter="hover(i)" onmouseleave="sem_hover(i)" ></img>`
    }

    document.getElementById("listasJogos").innerHTML = ""

    if (i.Categoria == "Jogos") {
        document.getElementById("listasJogos").innerHTML += `<img src="${i.Links}" alt="" onmouseenter="hover(i)" onmouseleave="sem_hover(i)" ></img>`
    }


    document.getElementById("listasLivros").innerHTML = ""

    if (i.Categoria == "Livros") {
        document.getElementById("listasLivros").innerHTML += `<img src="${i.Links}" alt="" onmouseenter="hover(i)" onmouseleave="sem_hover(i)" ></img>`
    }
        
    });

}
