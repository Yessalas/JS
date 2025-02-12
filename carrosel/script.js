/**
 * Carrosel de imagens
 * @author Yesenia Salas
 */
let indice = 0 // 0,1,2(3imagens)

// capturar as tags html identificadas(id)
const imgs = document.getElementById('imagens')
// capturar 2 elemnetos html
const imagem = document.querySelectorAll('#imagens img')

function carrossel() {
    indice++ //somar 1 a variavel indice
    //console.log(indice)
    if(indice >= imagem.length){
        indice = 0
    }
    // A linha abaixo modifica o estilo CSS das imagens
    // style modifica o CSS 
    //transfom(deslocamento do eixo x)
    //indice 0: posição inicial | 1: deslocar 512 
    imgs.style.transform = `translateX (${-indice * 512}px)`
}

//  alinha abaixo executa a função carrosel a cada 2s
setInterval(carrossel, 1800);