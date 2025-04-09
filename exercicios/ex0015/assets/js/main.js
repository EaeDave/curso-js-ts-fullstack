const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const inputNovaTarefa = document.querySelector(".input-nova-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaTagLi() {
    const li = document.createElement("li");
    return li;
}

function criaTagButtonApagar(li) {
    li.textContent += " ";
    const btnApagar = document.createElement("button");
    btnApagar.textContent = "Apagar";
    btnApagar.setAttribute("class", "apagar");
    btnApagar.setAttribute("title", "Clique para apagar esta tarefa");
    li.appendChild(btnApagar);
}

function apagaTarefa(li) {
    li.remove();
}

function criaTarefa(textoInput) {
    const li = criaTagLi();  // Esse li só existe no escopo dessa função
    li.textContent = textoInput;
    tarefas.appendChild(li);
    criaTagButtonApagar(li);
    limpaInput();
    salvaTarefas();
}




function limpaInput() {
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();  // evento html
}


btnAddTarefa.addEventListener("click", () => {
    if (!inputNovaTarefa.value) return;  // Garantindo que não seja enviado valores vazios
    criaTarefa(inputNovaTarefa.value);
    
})

inputNovaTarefa.addEventListener("keypress", (teclaPressionada) => {
    if (teclaPressionada.key === "Enter") {
        criaTarefa(inputNovaTarefa.value);
    }
})

// Apagando tarefas
document.addEventListener("click", (event) => {
    const elementoClicado = event.target;
    const tarefa = elementoClicado.parentElement;
    if (elementoClicado.classList.contains("apagar")) {
        tarefa.remove();
        salvaTarefas();
    }
})

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];
    
    for (const tarefa of liTarefas) {
        let tarefaTexto = tarefa.textContent;
        tarefaTexto = tarefaTexto.replace("Apagar", "");  // Removendo o texto "Apagar"
        tarefaTexto = tarefaTexto.trim();  // Removendo o espaço em branco no final e no começo da string
        listaDeTarefas.push(tarefaTexto);
        console.log(tarefaTexto);
    }
    console.log(listaDeTarefas);

    const tarefasJSON = JSON.stringify(listaDeTarefas)  // Converte para arquivo json em string
    console.log(tarefasJSON);

    localStorage.setItem("tarefas", tarefasJSON);  // Salva no localStorage do navegador
}

function adicionaTarefasSalvas() {
   const tarefas =  localStorage.getItem("tarefas");
   const listaDeTarefas = JSON.parse(tarefas);
   
   for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
   }
   
}

adicionaTarefasSalvas();