function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
       
        if (campoPesquisa == ""){
            section.innerHTML = "<p>Ai não garotinho. Você precisa digitar o nome de um time, na barra de pesquisa.</p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let clube = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {

        clube = dado.clube.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (clube.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.clube}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;

        }
     
    }

    if (!resultados){

        resultados = "<p>Não localizado, refaça sua busca e procure por times</p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}