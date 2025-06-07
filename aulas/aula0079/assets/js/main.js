// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(response => carregaElementosNaPagina(response.data));


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (const pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);


        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
        console.log(pessoa.nome);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}