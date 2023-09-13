
let btnGeral = [...document.querySelectorAll(".btnGeral")]
let guardaBtn = []
let entrar = document.querySelector(".entrar")
let btnCadastrar = document.querySelector("#btnCadastrar")
let btnDuvida = document.querySelector("#btnDuvida")
let btnRecSenha = document.querySelector("#btnRecSenha")
let areaAcesso = document.querySelector("#area-de-acesso")
let cadastroCorpo = document.querySelector(".cadastro-corpo")
let recuperarSenhaCorpo = document.querySelector(".recuperar-senha-corpo")
let ajudaTela = document.querySelector(".ajuda-tela")
let retornoCadastro = document.querySelector(".retornoCadastro")

let redirecionarLogin = ()=>{
  let userC = document.querySelector("#userC").value = ""
  let senhaC = document.querySelector("#senhaC").value = ""
  let senhaC2 = document.querySelector("#senhaC2").value = ""
  let emailC = document.querySelector("#emailC").value = ""
  let emailC2 = document.querySelector("#emailC2").value = ""
  let cpfC = document.querySelector("#cpfC").value = ""
  let cpfC2 = document.querySelector("#cpfC2").value = ""
  let retornoCadastro = document.querySelector(".retornoCadastro")

  setTimeout(()=>{
    areaAcesso.style.display = ""
    cadastroCorpo.style.display = "none"
    recuperarSenhaCorpo.style.display = "none"
    ajudaTela.style.display = "none"
    retornoCadastro.style.display = "none"
  }, 4000)
}

btnRecSenha.addEventListener("click", (e)=>{
  e.preventDefault()
  let emailRec = document.querySelector("#emailRec")
  let cpfRec = document.querySelector("#cpfRec")
  let retornoCadastroRec = document.querySelector(".retornoCadastroRec")
  let retornoRecuperar = document.querySelector(".retornoRecuperar")
  
  if(emailRec.value && cpfRec.value != ""){
    emailRec.style.display = "none"
    cpfRec.style.display = "none"
    btnRecSenha.style.display = "none"
    retornoCadastroRec.style.display = "block"
    retornoRecuperar.innerHTML = `Enviamos para seu e-mail ${emailRec.value} o link para redefinir a senha.`
    emailRec.value = ""
    cpfRec.value = ""
  }
})

btnCadastrar.addEventListener("click", (e)=>{
  e.preventDefault()
  let userC = document.querySelector("#userC").value.trim()
  let senhaC = document.querySelector("#senhaC").value.trim()
  let senhaC2 = document.querySelector("#senhaC2").value.trim()
  let emailC = document.querySelector("#emailC").value.trim()
  let emailC2 = document.querySelector("#emailC2").value.trim()
  let cpfC = document.querySelector("#cpfC").value.trim()
  let cpfC2 = document.querySelector("#cpfC2").value.trim()
  let retornoCadastro = document.querySelector(".retornoCadastro")
  let retornoCadastroH3 = document.querySelector(".retornoCadastroH3")

  if(userC && senhaC && senhaC2 && emailC && emailC2 && cpfC && cpfC2 != ""){
    if(senhaC === senhaC2 && emailC === emailC2 && cpfC === cpfC2){
      let userCadastrados = JSON.parse(localStorage.getItem('userCadastrados') || '[]')

      userCadastrados.push({
        nomeR: userC,
        senhaR: senhaC,
        emailR: emailC,
        cpfR: cpfC
      })
  
      localStorage.setItem('userCadastrados', JSON.stringify(userCadastrados))
      retornoCadastro.style.display = "block"
      retornoCadastroH3.innerHTML = "Cadastro finalizado com sucesso! Você será direcionado para tela de Login em alguns segundos."
      redirecionarLogin()

    } else if(senhaC !== senhaC2 ){
      retornoCadastro.style.display = "block"
      retornoCadastroH3.innerHTML = "Lamento! As senhas devem ser iguais!"
    } else if(emailC !== emailC2 ){
      retornoCadastro.style.display = "block"
      retornoCadastroH3.innerHTML = "Lamento! Os e-mails devem ser iguais!"
    } else if(cpfC !== cpfC2 ){
      retornoCadastro.style.display = "block"
      retornoCadastroH3.innerHTML = "Lamento! Os CPFs devem ser iguais!"
    } 

  } else {
    retornoCadastro.style.display = "block"
    retornoCadastroH3.innerHTML = "Preencha todos os campos!"
  }

})

btnDuvida.addEventListener("click", (e)=>{
  e.preventDefault()
  let emailAjuda = document.querySelector("#emailAjuda")
  let cpfAjuda = document.querySelector("#cpfAjuda")
  let textoAjuda = document.querySelector("#area-d")
  let retornoCadastroAjuda = document.querySelector(".retornoCadastroAjuda")
  let retornoCadastroP = document.querySelector(".retornoCadastroP")
  
  if(emailAjuda.value && cpfAjuda.value && textoAjuda.value != ""){
    let tituloDuvida = document.querySelector(".tituloDuvida")
    tituloDuvida.style.display = "none"
    emailAjuda.style.display = "none"
    cpfAjuda.style.display = "none"
    textoAjuda.style.display = "none"
    btnDuvida.style.display = "none"
    retornoCadastroAjuda.style.display = "block"
    retornoCadastroP.innerHTML = `Recebemos sua mensagem! Retornaremos o contato em até 03 dias úteis através do seu e-mail ${emailAjuda.value}.`
    emailAjuda.value = ""
    cpfAjuda.value = ""
    textoAjuda.value = ""
  }
})

for(const botao of btnGeral) {
  guardaBtn.push(botao)
}

guardaBtn.map((botao)=>{

    botao.addEventListener('click', (e)=>{
        e.preventDefault()
        let btnC = botao.textContent
        let areaAcesso = document.querySelector("#area-de-acesso")
        let cadastroCorpo = document.querySelector(".cadastro-corpo")
        let recuperarSenhaCorpo = document.querySelector(".recuperar-senha-corpo")
        let ajudaTela = document.querySelector(".ajuda-tela")
        let emailAjuda = document.querySelector("#emailAjuda")
        let cpfAjuda = document.querySelector("#cpfAjuda")
        let textoAjuda = document.querySelector("#area-d")
        let retornoCadastroAjuda = document.querySelector(".retornoCadastroAjuda")
        let tituloDuvida = document.querySelector(".tituloDuvida")
        let btnDuvida = document.querySelector("#btnDuvida")
        let emailRec = document.querySelector("#emailRec")
        let cpfRec = document.querySelector("#cpfRec")
        let retornoCadastroRec = document.querySelector(".retornoCadastroRec")


        switch (true) {
            case btnC.includes("Cadastre-se"):
              areaAcesso.style.display = "none";
              cadastroCorpo.style.display = "";
              recuperarSenhaCorpo.style.display = "none";
              ajudaTela.style.display = "none";
              break;
      
            case btnC.includes("Já tem cadastro?"):
              areaAcesso.style.display = "";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              ajudaTela.style.display = "none";
              break;
      
            case btnC.includes("Recuperar Senha"):
              areaAcesso.style.display = "none";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "block";
              ajudaTela.style.display = "none";
              btnRecSenha.style.display = "block";
              break;

            case btnC.includes("Voltar para tela de login"):
              areaAcesso.style.display = "";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              ajudaTela.style.display = "none";
              tituloDuvida.style.display = "block";
              emailAjuda.style.display = "block";
              cpfAjuda.style.display = "block";
              textoAjuda.style.display = "block";
              retornoCadastroAjuda.style.display = "none";
              btnDuvida.style.display = "block";
              emailRec.style.display = "block";
              cpfRec.style.display = "block";
              btnRecSenha.style.display = "none";
              retornoCadastroRec.style.display = "none";
              break;

            case btnC.includes("suporte"):
              areaAcesso.style.display = "none";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              ajudaTela.style.display = "";
              break;
      
            default:
              break;
        }
    })
})

let redirecionar = ()=>{
  let a = document.createElement("a")
  a.href = "sistema1.html"
  a.target = "_self"
  a.click()
}

let validarAcesso = ()=>{
  let usuarioValidar = document.querySelector("#usuarioValidar")
  let senhaValidar = document.querySelector("#senhaValidar")
  let userCadastrados = []

  let validacaoUsuarioEntrar = {
    nome: "",
    senha: "",
    email: "",
    cpf: ""
  }

  userCadastrados = JSON.parse(localStorage.getItem('userCadastrados'))
  
  userCadastrados.forEach((usuario) => {
    if(usuarioValidar.value == usuario.nomeR && senhaValidar.value == usuario.senhaR){
      validacaoUsuarioEntrar = {
        nome: usuario.nomeR,
        senha: usuario.senhaR,
        email: usuario.emailR,
        cpf: usuario.cpfR
      }
    }
  })

  if(usuarioValidar.value.trim() == validacaoUsuarioEntrar.nome && usuarioValidar.value.trim() != "" && senhaValidar.value.trim() == validacaoUsuarioEntrar.senha && senhaValidar.value.trim() != ""){
    let retornoLogin = document.querySelector(".retornoLogin")
    let pRertonoLogin = document.querySelector(".pRertonoLogin")
    retornoLogin.style.display = "block"
    pRertonoLogin.style.backgroundColor = "#72643de3"
    pRertonoLogin.innerHTML = "Acesso liberado!"
    let tokenValidar = Math.random().toString(13).substring(2)
    localStorage.setItem('token', tokenValidar)

    setTimeout(()=>{
      retornoLogin.style.display = "none"
      redirecionar()
    }, 3000)


  } else {
    let retornoLogin = document.querySelector(".retornoLogin")
    let pRertonoLogin = document.querySelector(".pRertonoLogin")
    retornoLogin.style.display = "block"
    pRertonoLogin.innerHTML = "Usuário e/ou senha inválido(s)"
    setTimeout(()=>{
      retornoLogin.style.display = "none"
    }, 3000)
    
  }

}

entrar.addEventListener("click",()=>{
  validarAcesso()
})

