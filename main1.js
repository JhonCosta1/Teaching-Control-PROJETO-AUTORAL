let areaInicial = document.querySelector(".inicio-s")
let areaPublicar = document.querySelector(".area-publicar")
let areaPerfil = document.querySelector(".area-perfil")
let areaAdmProfessores = document.querySelector(".area-adm-prof")
let areaControlMatriculas = document.querySelector(".area-control-matriculas")
let areaEvasao = document.querySelector(".area-evasao")
let areaFinanceiro = document.querySelector(".area-financeiro")
let areaConfiguracao = document.querySelector(".area-configuracao")
let sair = document.querySelector(".sair")
let btnPublicar = document.querySelector(".publicar")
let menu = [...document.querySelectorAll(".menu")]

menu.map((selecionado)=>{
    selecionado.addEventListener("click", (e)=>{
        e.preventDefault()
        let clicado = selecionado.textContent
        let areaWC = document.querySelector(".area-wc")
        let quadroNoticias = document.querySelector(".quadro-noticias")
        let areaCadastrarNoticia = document.querySelector(".area-cadastrar-noticia")

        switch (true) {
            case clicado.includes("Início"):
                areaWC.style.display = "";
                quadroNoticias.style.display = "";
                areaCadastrarNoticia.style.display = "none";
                break;

            case clicado.includes("Publicar atualização ou informativo"):
                areaWC.style.display = "none";
                quadroNoticias.style.display = "none";
                areaCadastrarNoticia.style.display = "";
                break;
        
            default: 
                break;
        }
    })
})

let criarCard = ()=>{
    let p = document.createElement("p")
    let p2 = document.createElement("p")
    let div = document.createElement("div")
    let divImg = document.createElement("div")
    let img = document.createElement("img")
    let h4 = document.createElement("h4")
    let cTitulo = document.querySelector(".ctitulo").value
    let cConteudo = document.querySelector("#conteudo").value
    h4.innerHTML = cTitulo
    let cImagem = document.querySelector(".cimagem").value
    let lugarNoticia = document.querySelector(".lugar-noticias")
    let imgF = document.querySelector(".img-noticia")
   
    let dataAtual = new Date()

    let addIMG = ()=>{
         let imagemC = document.querySelector("#cptImg")
         let arquivo = imagemC.files[0];

         if(arquivo){
            let leitor = new FileReader()
            leitor.onload = function(e) {
                img.src = e.target.result;
        };

            leitor.readAsDataURL(arquivo);
        }

 
    }

    let opcoesDeFormatacao = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
    };
    let formatadorDeData = new Intl.DateTimeFormat('pt-BR', opcoesDeFormatacao);
    let dataHoraFormatada = formatadorDeData.format(dataAtual);
    p.classList.add('p-data')

    p.innerHTML = "Publicado em " + dataHoraFormatada
    img.classList.add("img-noticia")
    addIMG()
    div.classList.add("noticia")
    p2.innerHTML = cConteudo
    

    divImg.appendChild(img)
    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(divImg)
    div.appendChild(p2)

    lugarNoticia.appendChild(div)


}



btnPublicar.addEventListener("click",(e)=>{
    e.preventDefault()

    criarCard()
})
























