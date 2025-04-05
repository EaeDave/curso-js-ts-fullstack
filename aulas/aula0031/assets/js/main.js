const divParagrafos = document.querySelector(".paragrafos");
const paragrafos = divParagrafos.querySelectorAll("p");  // Retorna todos os elementos filhos informados em um NodeList

// console.log(paragrafos[0])
// console.log(paragrafos[1])
// console.log(paragrafos[2])
// console.log(paragrafos[3])

// for (let index = 0; index < paragrafos.length; index++) {
//     console.log(paragrafos[index]);
// }

// for (const paragrafo of paragrafos) {
//     console.log(paragrafo);
// }

// A função getComputedStyle() retorna o estilo computado das CSS pelo navegador
const estilosBody = getComputedStyle(document.body);

// Retorna a cor do background
const backgroundColorBody = estilosBody.backgroundColor;
const corBranca = estilosBody.colorScheme;

for (const paragrafo of paragrafos) {
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = "#FFFFFF";
}
