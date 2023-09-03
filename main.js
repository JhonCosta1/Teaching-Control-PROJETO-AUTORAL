
let btnGeral = [...document.querySelectorAll(".btnGeral")]
let guardaBtn = []
let entrar = document.querySelector(".entrar")
let btnCadastrar = document.querySelector("#btnCadastrar")




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
        nome: userC,
        senha: senhaC,
        email: emailC,
        cpf: cpfC
      })
  
      localStorage.setItem('userCadastrados', JSON.stringify(userCadastrados))
      retornoCadastro.style.display = "block"
      retornoCadastroH3.innerHTML = "Cadastro finalizado com sucesso!"
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
    console.log("já era")
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
              break;

            case btnC.includes("Voltar para tela de login"):
              areaAcesso.style.display = "";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              ajudaTela.style.display = "none";
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
entrar.addEventListener("click",()=>{
  redirecionar()
})

