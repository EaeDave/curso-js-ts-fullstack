const request = obj => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open(obj.method, obj.url, true);  // Fazendo a requisição do tipo GET
        xhr.send();  // Caso fosse POST, haveria parâmetros nesse método

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
    });
    
}

document.addEventListener('click', e => {
    const elementoClicado = e.target;
    const tag = elementoClicado.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(elementoClicado);
    }
})

async function carregaPagina(elementoClicado) {
    const href = elementoClicado.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const response  = await request(objConfig);
        carregaResultado(response);
    } catch(error) {
        console.log(error);
        
    }
}


function carregaResultado(response) {
    const divResultado = document.querySelector('.resultado');
    divResultado.innerHTML = response;
}