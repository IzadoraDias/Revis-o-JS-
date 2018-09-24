const button = document.querySelector (".feedback__button");

button.addEventListener("click", function(event){
    event.preventDefault();

   
    const tabela = document.querySelector(".respostas__table");
    const inputName = document.getElementById("feedbackInputName");
    const inputCity = document.getElementById("feedbackInputCity");
    const inputMessage = document.getElementById("feedbackInputMessage");

    //cria linha
    const linha = document.createElement("tr");

    // cria colunas
    const colunaEmpresa = document.createElement("td")
    const colunaEmpresaText = document.createTextNode(inputName.value)
    colunaEmpresa.appendChild(colunaEmpresaText);

    const colunaCity = document.createElement("td")
    const colunaCityText = document.createTextNode(inputCity.value)
    colunaCity.appendChild(colunaCityText);

    const colunaMessage = document.createElement("td")
    const colunaMessageText = document.createTextNode(inputMessage.value)
    colunaMessage.appendChild(colunaMessageText);

    //inserir coluna na linha
    linha.appendChild(colunaEmpresa);
    linha.appendChild(colunaCity);
    linha.appendChild(colunaMessage);

    //adiciona linha na tabela
    tabela.appendChild(linha)















});










