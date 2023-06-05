let btn = document.querySelector('#verSenha')
let usuario = document.querySelector('#usuario')




btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        
    } else{
        inputSenha.setAttribute('type', 'password')
        
    }
})

function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let errado = document.querySelector('#errado')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
        
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
                
            }
        }
            
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha){
        

        let mathRandom = Math.random().toString(16)
    let token = mathRandom + mathRandom

        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
        window.location.href = "index.html"
        
    } else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        errado.setAttribute('style', 'display: block')
        errado.innerHTML = 'Usuario ou senha incorretos'
        usuario.focus()
    }

}