let areaInicial = document.querySelector(".inicio-s")
let areaPublicar = document.querySelector(".area-publicar")
let areaPerfil = document.querySelector(".area-perfil")
let areaAdmProfessores = document.querySelector(".area-adm-prof")
let areaControlMatriculas = document.querySelector(".area-control-matriculas")
let areaEvasao = document.querySelector(".area-evasao")
let areaFinanceiro = document.querySelector(".area-financeiro")
let areaConfiguracao = document.querySelector(".area-configuracao")
let sair = document.querySelector(".sair")
let sairLogin = document.querySelector("#sair")
let btnPublicar = document.querySelector(".publicar")
let menu = [...document.querySelectorAll(".menu")]
let p = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let div = document.createElement("div")
let divImg = document.createElement("div")
let img = document.createElement("img")
let h4 = document.createElement("h4")
let btnDel = document.createElement("i")
let cTitulo = document.querySelector(".ctitulo").value
let cConteudo = document.querySelector("#conteudo").value
p3.innerHTML = cTitulo
let cImagem = document.querySelector(".cimagem").value
let lugarNoticia = document.querySelector(".lugar-noticias")
let imgF = document.querySelector(".img-noticia")
let geral = document.querySelector(".quadro-noticias")
let retirar = document.querySelector(".delIcon")

menu.map((selecionado)=>{
    selecionado.addEventListener("click", (e)=>{
        e.preventDefault()
        let clicado = selecionado.textContent
        let areaWC = document.querySelector(".area-wc")
        let quadroNoticias = document.querySelector(".quadro-noticias")
        let areaCadastrarNoticia = document.querySelector(".area-cadastrar-noticia")
        let perfil = document.querySelector(".perfil-geral")
        switch (true) {
            case clicado.includes("Início"):
                areaWC.style.display = "";
                quadroNoticias.style.display = "";
                perfil.style.display = "none";
                areaCadastrarNoticia.style.display = "none";
                break;

            case clicado.includes("Publicar atualização ou informativo"):
                areaWC.style.display = "none";
                perfil.style.display = "none";
                quadroNoticias.style.display = "none";
                areaCadastrarNoticia.style.display = "";
                break;

                case clicado.includes("Perfil"):
                    areaWC.style.display = "none";
                    quadroNoticias.style.display = "none";
                    areaCadastrarNoticia.style.display = "none";
                    perfil.style.display = "";
                    break;
            
                default: 
                    break;
        }
    })
})

let del = (card, classe)=>{
    let geral = document.querySelector(".quadro-noticias")
    let divP = document.createElement("div")
    divP.classList.add("geral-modal")
    /*divP.style.display = "none"*/
    let div2 = document.createElement("div")
    let h4 = document.createElement("h4")
    h4.classList.add("modal-titulo")
    h4.innerHTML = "ALERTA"
    div2.appendChild(h4)                
    let div3 = document.createElement("div")
    div3.classList.add("conteudo-modal")
    let p = document.createElement("p")
    let p2 = document.createElement("p2")
    p.innerText = "Esta ação deletará a notícia selecionada."
    p2.innerText = "Deseja seguir e deletar a notícia com título "
    let div4 = document.createElement("div")
    div4.classList.add("tituloDel")
    div3.appendChild(p)
    div3.appendChild(p2)
    div3.appendChild(div4)
    let btnMdel = document.createElement("button")
    btnMdel.innerText = "Deletar"
    btnMdel.classList.add("btn-modal-ap")
    
    let btnMvol = document.createElement("button")
    btnMvol.innerText = "Voltar"
    btnMvol.classList.add("btn-modal-vo")
    divP.appendChild(div2)
    divP.appendChild(div3)
    divP.appendChild(btnMdel)
    divP.appendChild(btnMvol)
    geral.appendChild(divP)
    
    btnMdel.addEventListener("click", () => {
        card.remove()
        divP.remove()
    })

    btnMvol.addEventListener("click", () => {
        divP.remove()
        classe.classList.add("delIcon")
    })
}

let criarCard = ()=>{
    let p = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let div = document.createElement("div")
    let divImg = document.createElement("div")
    let img = document.createElement("img")
    let h4 = document.createElement("h4")
    let btnDel = document.createElement("i")
    let cTitulo = document.querySelector(".ctitulo").value
    let cConteudo = document.querySelector("#conteudo").value.trim();
    p3.innerHTML = cTitulo
    let cImagem = document.querySelector(".cimagem").value
    let lugarNoticia = document.querySelector(".lugar-noticias")
    let imgF = document.querySelector(".img-noticia")
    let imagemC = document.querySelector("#cptImg").value


    let dataAtual = new Date()

    let addIMG = ()=>{
        let imagemC = document.querySelector("#cptImg")
        let arquivo = imagemC.files[0]
        if (arquivo) {
            let leitor = new FileReader()
            leitor.onload = function(e) {
                img.src = e.target.result
            }
            leitor.readAsDataURL(arquivo)
        }
    }

    let opcoesDeFormatacao = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
    };
    let formatadorDeData = new Intl.DateTimeFormat('pt-BR', opcoesDeFormatacao)
    let dataHoraFormatada = formatadorDeData.format(dataAtual)
    p.classList.add('p-data')

    p.innerHTML = "Publicado em " + dataHoraFormatada
    img.classList.add("img-noticia")
    addIMG()
    div.classList.add("noticia")
    p2.innerHTML = cConteudo
    btnDel.className = "fa-solid fa-trash"
    btnDel.classList.add("delIcon")
    btnDel.classList.add("formIcon")
    let card = document.querySelector(".noticia")
    divImg.appendChild(img)
    h4.appendChild(p3)
    h4.appendChild(btnDel)
    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(divImg)
    div.appendChild(p2)

   

 
    if(cTitulo !== "" && cConteudo !== ""){
        lugarNoticia.appendChild(div)
    } else {
        alert('Lamento! Mas é necessário preencher o Título e incluir um texto para a notícia.')
    }
   


    
    

    btnDel.addEventListener("click", (event) => {
        if (event.target.classList.contains("delIcon")) {
            btnDel.classList.remove("delIcon")
            del(div, btnDel)
            
        }
    })

}   

btnPublicar.addEventListener("click",(e)=>{
    e.preventDefault()
    criarCard()

})

let redirecionarLogin = ()=>{
    let a = document.createElement("a")
    a.href = "index.html"
    a.target = "_self"
    a.click()
}

sairLogin.addEventListener("click", ()=>{
    localStorage.removeItem('token')
    redirecionarLogin()
})

if(localStorage.getItem('token') == null) {
    let validadorSemAcesso = document.querySelector(".validador-sem-acesso")
    validadorSemAcesso.style.display = "none"
    alert('Você deve estar logado para acessar essa página!')
    redirecionarLogin()
}



















