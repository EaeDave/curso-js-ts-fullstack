// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         xhr.open(obj.method, obj.url, true);  // Fazendo a requisição do tipo GET
//         xhr.send();  // Caso fosse POST, haveria parâmetros nesse método

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject({
//                     code: xhr.status,
//                     msg: xhr.statusText
//                 })
//             }
//         })
//     });
    
// }

document.addEventListener('click', e => {
    const elementoClicado = e.target;
    const tag = elementoClicado.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(elementoClicado);
    }
})

async function carregaPagina(elementoClicado) {
    try {
        const href = elementoClicado.getAttribute('href');
        const response = await fetch(href);
    
        if (response.status !== 200) throw new Error('ERROR 404 NOSSO');
    
        const html = await response.text();
        carregaResultado(html);
    } catch(error) {
        console.warn(error);
    }
}


function carregaResultado(response) {
    const divResultado = document.querySelector('.resultado');
    divResultado.innerHTML = response;
}

// fetch() por padrão já retorna uma Promise
fetch('pagina4.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERROR 404 NOSSO');

        console.log('Página carregada com sucesso!');
        return resposta.text();
        
        
    })
    .then(html => console.log(html))
    .catch(error => {
        console.error(error);
        
    })
