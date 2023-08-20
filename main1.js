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
let quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Digite aqui o conteudo da postagem'
});
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
    let div = document.createElement("div")
    let h4 = document.createElement("h4")
    let cTitulo = document.querySelector(".ctitulo").value
    h4.innerHTML = cTitulo
    let cImagem = document.querySelector(".cimagem").value
    let lugarNoticia = document.querySelector(".lugar-noticias")
    let cConteudo = quill.root.innerHTML
    let dataAtual = new Date()
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
    div.classList.add("noticia")
    

    div.appendChild(h4)
    div.appendChild(p)

    lugarNoticia.appendChild(div)


}

let limparAreaPostagem = ()=>{
    let cTitulo = ""
    let cImagem = ""
    let cConteudo = ""
}

btnPublicar.addEventListener("click",(e)=>{
    e.preventDefault()

    criarCard()
    limparAreaPostagem()
})
























