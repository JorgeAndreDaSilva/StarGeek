var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
    } else {
        alert('Usuario e Senhas, não encrontrado ')
    }
}

function validarUsuario(login, senha) {
    var encontrol = false

    listaUsuarios.forEach ( (item, i) =>{
        if (item.usuario == login && item.senha == senha){
            encontrol = true
            location.href= 'recursos.html'
        }

    } )
    return encontrol
}


function botaoCadastrar() {
    location.href = 'cadastro.html'
}