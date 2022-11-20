const botao = document.querySelector("#botao")
const avancado = document.querySelector('#advanced')

botao.addEventListener("click", async () => {

    /*Aqui pego o valor do titulo do filme, verifico se é diferente de undefined e faço a requisição e transformo no json*/
    const nomeFilme = document.querySelector(".titulo-filme-1").value;

    let dadosFilme = await fetch(`https://www.omdbapi.com/?apikey=f02ee325&t=${nomeFilme}`);
    const dados = await dadosFilme.json();
    /*Aqui pego a div e seto a capa do filme*/
    const poster = document.querySelector("#poster-filme")
    poster.innerHTML = `<img id='poster-filme' src='${dados.Poster}'>`

    /*Aqui pego a div de informações e começo a distrbuir as informações*/
    const conteudo = document.querySelector('#informacoes-conteudo');
    conteudo.innerHTML = `<span id='titulo-filme'>${dados.Title}</span>
    <span>, ${dados.Year},</span>
    <span>${dados.Runtime}</span>
    <p><strong>Director:</strong> ${dados.Director}</p>
    <p><strong>Sipnose</strong> <br>${dados.Plot}</p>
    <p><strong>Actors:</strong> ${dados.Actors}</p>
    
    `
    
})

avancado.addEventListener("click", (evento) => {
    evento.preventDefault();
    /*Pegando o valor do formulario */
    const adicionar = document.querySelector("#formulario1");
    /*Escondendo o botao avanced */
    avancado.setAttribute("style", "display: none")

    /*Pegando o valor da barra de pesquisa e colocando o width em 40% */
    const barraDePesquisa = document.querySelector(".nome-filme-head");
    barraDePesquisa.setAttribute('style', 'width: 40%')

    /*Gerando o Botao Cancel*/
    const botaoCancel = document.createElement("button");

    /*Adicionando um Id ao novo botão */
    botaoCancel.setAttribute("id", "botao-cancel")

    /*Criando um texto para compor o botão e em seguida inserindo no botao */
    const texto = document.createTextNode("Cancel");
    botaoCancel.appendChild(texto)

    /*Adicionando o novo botao antes do filho com Id botao */
    adicionar.insertBefore(botaoCancel, botao)

    /*Adicionando a barra para pesquisar o ano */
    const barraAno = document.createElement("input");
    barraAno.setAttribute("type", "number")
    barraAno.setAttribute("class", "ano-filme")
    adicionar.insertBefore(barraAno, botaoCancel)

    /*Criando a função para usar o ano do filme*/
    botao.addEventListener("click", async () => {
        /*Aqui pego o valor do titulo do filme e faço a requisição e transformo no json*/
        const nomeFilme = document.querySelector(".titulo-filme-1").value;
        const anoFilme = document.querySelector(".ano-filme").value;

        let dadosFilme = await fetch(`https://www.omdbapi.com/?apikey=f02ee325&t=${nomeFilme}&y=${anoFilme}`)
        const dados = await dadosFilme.json();

        /*Aqui pego a div e seto a capa do filme*/
        const poster = document.querySelector("#poster-filme")
        poster.innerHTML = `<img id='poster-filme' src='${dados.Poster}'>`

        /*Aqui pego a div de informações e começo a distrbuir as informações*/
        const conteudo1 = document.querySelector('#informacoes-conteudo');
        conteudo1.innerHTML = `<span id='titulo-filme'>${dados.Title}</span>
        <span>, ${dados.Year},</span>
        <span>${dados.Runtime}</span>
        <p><strong>Director:</strong> ${dados.Director}</p>
        <p><strong>Sipnose</strong> <br>${dados.Plot}</p>
        <p><strong>Actors:</strong> ${dados.Actors}</p>
        
        `
    
    })

    /*Criando uma função que quando clicada no botão cancel volte para o botão advanced*/
    botaoCancel.addEventListener("click", (event => {
        event.preventDefault();
        avancado.setAttribute("style", "display: ")
        barraDePesquisa.setAttribute("style", "width: 60%;")
        botaoCancel.remove();
        barraAno.remove()
    }))
})

