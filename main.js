
let btnGeral = [...document.querySelectorAll(".btnGeral")]
let guardaBtn = []

for (const botao of btnGeral) {
    guardaBtn.push(botao)
}

guardaBtn.map((botao)=>{

    botao.addEventListener('click', (e)=>{
        e.preventDefault()
        let btnC = botao.textContent
        let areaAcesso = document.querySelector("#area-de-acesso")
        let cadastroCorpo = document.querySelector(".cadastro-corpo")
        let recuperarSenhaCorpo = document.querySelector(".recuperar-senha-corpo")
        let AjudaTela = document.querySelector(".ajuda-tela")


        switch (true) {
            case btnC.includes("Cadastre-se"):
              areaAcesso.style.display = "none";
              cadastroCorpo.style.display = "";
              recuperarSenhaCorpo.style.display = "none";
              AjudaTela.style.display = "none";
              break;
      
            case btnC.includes("Já tem cadastro?"):
              areaAcesso.style.display = "";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              AjudaTela.style.display = "none";
              break;
      
            case btnC.includes("Recuperar Senha"):
              areaAcesso.style.display = "none";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "block";
              AjudaTela.style.display = "none";
              break;

            case btnC.includes("Voltar para tela de login"):
              areaAcesso.style.display = "";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              AjudaTela.style.display = "none";
              break;

            case btnC.includes("suporte"):
              areaAcesso.style.display = "none";
              cadastroCorpo.style.display = "none";
              recuperarSenhaCorpo.style.display = "none";
              AjudaTela.style.display = "";
              break;
      
            default:
              break;
        }
    })
})


console.log(guardaBtn)
