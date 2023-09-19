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
let cadastrarProfBtn = document.querySelector(".cadastrarProf")
let cadastrarAluno = document.querySelector(".cadastrarAluno")

menu.map((selecionado)=>{
    selecionado.addEventListener("click", (e)=>{
        e.preventDefault()
        let clicado = selecionado.textContent
        let areaWC = document.querySelector(".area-wc")
        let quadroNoticias = document.querySelector(".quadro-noticias")
        let areaCadastrarNoticia = document.querySelector(".area-cadastrar-noticia")
        let perfil = document.querySelector(".perfil-geral")
        let areaAdmP = document.querySelector(".areaAdmP")
        let tabelaMat = document.querySelector(".tabela-mat")
        switch (true) {
            case clicado.includes("Início"):
                areaWC.style.display = "";
                quadroNoticias.style.display = "";
                perfil.style.display = "none";
                areaAdmP.style.display = "none";
                areaCadastrarNoticia.style.display = "none";
                tabelaMat.style.display = "none";
                break;

            case clicado.includes("Publicar atualização ou informativo"):
                areaWC.style.display = "none";
                perfil.style.display = "none";
                quadroNoticias.style.display = "none";
                areaAdmP.style.display = "none";
                areaCadastrarNoticia.style.display = "";
                tabelaMat.style.display = "none";
                break;

            case clicado.includes("Perfil"):
                areaWC.style.display = "none";
                quadroNoticias.style.display = "none";
                areaCadastrarNoticia.style.display = "none";
                areaAdmP.style.display = "none";
                perfil.style.display = "";
                tabelaMat.style.display = "none";
                break;

            case clicado.includes("Administração de Professores"):
                areaWC.style.display = "none";
                quadroNoticias.style.display = "none";
                areaCadastrarNoticia.style.display = "none";
                perfil.style.display = "none";
                areaAdmP.style.display = "";
                tabelaMat.style.display = "none";
                break;

            case clicado.includes("Controle de Matrículas"):
                areaWC.style.display = "none";
                quadroNoticias.style.display = "none";
                areaCadastrarNoticia.style.display = "none";
                perfil.style.display = "none";
                areaAdmP.style.display = "none";
                tabelaMat.style.display = "";
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
    alert('Você deve estar logado para acessar esta página!')
    redirecionarLogin()
}



let criarListaProfessores = ()=>{

    let tabela = document.querySelector(".item-tabela")
    let nomeProfessorTabela = document.querySelector("#nomePro").value

    let disciplina = document.querySelector("#disciplina")
    let disciplinaIndice = disciplina.selectedIndex
    let disciplinaSelecionada = disciplina.options[disciplinaIndice].text

    let turno = document.querySelector("#turno")
    let turnoIndice = turno.selectedIndex
    let turnoSelecionada = turno.options[turnoIndice].text

    let cargah = document.querySelector("#carga-horaria")
    let cargahIndice = cargah.selectedIndex
    let cargahSelecionada = cargah.options[cargahIndice].text

    let serie = document.querySelector("#serie")
    let serieIndice = serie.selectedIndex
    let serieSelecionada = serie.options[serieIndice].text

    let statusp = document.querySelector("#status")
    let statuspIndice = statusp.selectedIndex
    let statuspSelecionada = statusp.options[statuspIndice].text

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    td1.innerHTML = nomeProfessorTabela
    td2.innerHTML = disciplinaSelecionada
    td3.innerHTML = turnoSelecionada
    td4.innerHTML = cargahSelecionada
    td5.innerHTML = serieSelecionada
    td6.innerHTML = statuspSelecionada
   
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tabela.appendChild(tr)

    tr.addEventListener("click", (e) => {
        e.preventDefault()
        let divP = document.createElement("div")
        divP.classList.add("geral-modal")
        let div2 = document.createElement("div")
        let h4 = document.createElement("h4")
        h4.classList.add("modal-titulo")
        h4.innerHTML = "ALERTA"
        div2.appendChild(h4)                
        let div3 = document.createElement("div")
        div3.classList.add("conteudo-modal")
        let p = document.createElement("p")
        let p2 = document.createElement("p2")
        p.innerText = "Esta ação deletará do registro o professor selecionado."
        p2.innerText = "Deseja seguir com a exclusão?"
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
        tabela.appendChild(divP)

        btnMdel.addEventListener("click", () => {
            tr.remove()
            divP.remove()
        })



        btnMvol.addEventListener("click", () => {
            divP.remove()
        })
    })
}

let criarListaAluno = ()=>{

    let tabela2 = document.querySelector(".item-tabela2")
    let nomeA = document.querySelector("#nomeA").value

    let sexo = document.querySelector("#sexo")
    let sexoIndice = sexo.selectedIndex
    let sexoSelecionada = sexo.options[sexoIndice].text

    let turno2 = document.querySelector("#turno2")
    let turno2Indice = turno2.selectedIndex
    let turno2Selecionada = turno2.options[turno2Indice].text

    let serie2 = document.querySelector("#serie")
    let serie2Indice = serie2.selectedIndex
    let serie2Selecionada = serie2.options[serie2Indice].text

    let financeiro = document.querySelector("#financeiro")
    let financeiroIndice = financeiro.selectedIndex
    let financeiroSelecionada = financeiro.options[financeiroIndice].text


    let statusp = document.querySelector("#status")
    let statuspIndice = statusp.selectedIndex
    let statuspSelecionada = statusp.options[statuspIndice].text

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    td1.innerHTML = nomeA
    td2.innerHTML = sexoSelecionada
    td3.innerHTML = turno2Selecionada
    td4.innerHTML = serie2Selecionada
    td5.innerHTML = financeiroSelecionada
    td6.innerHTML = statuspSelecionada
   
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tabela2.appendChild(tr)

    tr.addEventListener("click", (e) => {
        e.preventDefault()
        let divP = document.createElement("div")
        divP.classList.add("geral-modal")
        let div2 = document.createElement("div")
        let h4 = document.createElement("h4")
        h4.classList.add("modal-titulo")
        h4.innerHTML = "ALERTA"
        div2.appendChild(h4)                
        let div3 = document.createElement("div")
        div3.classList.add("conteudo-modal")
        let p = document.createElement("p")
        let p2 = document.createElement("p2")
        p.innerText = "Esta ação deletará do registro o aluno selecionado."
        p2.innerText = "Deseja seguir com a exclusão?"
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
        tabela2.appendChild(divP)

        btnMdel.addEventListener("click", () => {
            tr.remove()
            divP.remove()
        })



        btnMvol.addEventListener("click", () => {
            divP.remove()
        })
    })
}


cadastrarProfBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let nomeProfessorTabela = document.querySelector("#nomePro").value.trim()
    if(nomeProfessorTabela !== ""){
        criarListaProfessores()
    } else {
        alert('Necessário preencher o nome do Professor!')
    }
})

cadastrarAluno.addEventListener("click", (e)=>{
    e.preventDefault()
    let nomeA = document.querySelector("#nomeA").value.trim()
    if(nomeA !== ""){
        criarListaAluno()
    } else {
        alert('Necessário preencher o nome do Aluno!')
    }
})
