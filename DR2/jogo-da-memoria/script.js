const tabuleiro = $('#tabuleiro');
const btn = $('#botao-iniciar');
const timeParagraph = document.getElementById('tempo')

const tab_largura = tabuleiro.width();
const tab_altura = tabuleiro.height();
const larguraImg = tab_largura / 4;
const alturaImg = larguraImg;

let initTime = "";
let finalTime = "";

(function () {
    var imagens = ['img/facebook.png', 'img/android.png', 'img/chrome.png', 'img/firefox.png', 'img/html5.png', 'img/googleplus.png', 'img/twitter.png', 'img/windows.png', 'img/cross.png'];
    let timerVirarCartas
    let timerFade

    app.inicio = () => {

        povoarTabuleiro(false, imagens)
        timeParagraph.innerText = `Melhor tempo: ${app.getBestTime()}`

        btn.on('click', () => {
            app.reiniciarJogo()
            app.virarCartas(3000)
            initTime = Date.now()
            finalTime = 0
        })
    }

    app.reiniciarJogo = () => {
        povoarTabuleiro(true, imagens)
        clearTimeout(timerVirarCartas)
        clearTimeout(timerFade)
    }

    app.virarCartas = (interval) => {
        timerVirarCartas = setTimeout(() => {
            $('[isVirada=true]').fadeOut(250)
            timerFade = setTimeout(() => {
                $('[isVirada=true]')
                    .attr('src', 'img/cross.png')
                    .attr('isVirada', 'false')
                    .fadeIn(250)
                $('[isVirada=false]').css("pointer-events", "auto")
            }, 250)
        }, interval)
    }

    app.getBestTime = () => {
        let storedTime = localStorage.getItem('storedTime');
        storedTime = Number(storedTime) ? Number(storedTime) : Infinity;
        if (Number.isInteger(storedTime)) {
            return `${storedTime / 1000} segundos`;
        }
        else {
            return "Não há recordes salvos."
        }
    }

    app.updateBestTime = (time) => {
        let storedTime = localStorage.getItem('storedTime');
        storedTime = (storedTime) ? storedTime : Infinity;
        time < storedTime ? storedTime = time : 0
        localStorage.setItem('storedTime', storedTime)
    }

})();

$(app.inicio)
// $(document).ready(app.inicio)
// app.inicio();

function povoarTabuleiro(isRandom, vetorImagens) {

    document.getElementById('tabuleiro').innerHTML = "";
    let vetorPares = [];

    vetorImagens.forEach(it => {
        if (it !== 'img/cross.png') {
            vetorPares.push(it);
            vetorPares.push(it);
        }
    })

    for (let i = 0; i < tab_largura / larguraImg; i++) {
        for (let j = 0; j < tab_largura / alturaImg; j++) {
            let index = ""
            if (isRandom) index = Math.round(Math.random() * (vetorPares.length - 1));
            else index = 0
            const img = vetorPares[index];
            criarImagemTabuleiro(img, [j * alturaImg, i * larguraImg]);
            vetorPares.splice(index, 1);
        }
    }
}

function criarImagemTabuleiro(img, pos = [0, 0]) {
    const imagem = $('<img>')
    imagem
        .attr('sideup', img)
        .attr('src', img)
        .attr('class', 'casa')
        .attr('isVirada', 'true')
        .css('top', `${pos[1]}px`)
        .css('left', `${pos[0]}px`)
        .css('width', larguraImg)
        .css('height', alturaImg)
        .css("pointer-events", "none")

    imagem.on('click', () => {
        if (imagem.attr('isVirada') === 'false') {
            imagem
                .attr('isVirada', 'true')
                .fadeOut(250);
            setTimeout(() => {
                imagem
                    .attr('src', imagem.attr('sideup'))
                    .fadeIn(250)
            }, 250)
        }

        let cartasViradas = $('[isVirada=true]')

        if (cartasViradas.length === 2) {
            $('.casa').css("pointer-events", "none")
            if (cartasViradas.eq(0).attr('sideup') === cartasViradas.eq(1).attr('sideup')) {
                cartasViradas.attr('isVirada', 'blocked')
                if ($("[isVirada=false]").length > 0) {
                    $("[isVirada=false]").css("pointer-events", "auto")
                }
                else {
                    finalTime = Date.now()
                    let time = finalTime - initTime
                    document.getElementById('tabuleiro').innerHTML = `<h2>O JOGO ACABOU! - Seu tempo: ${time / 1000} segundos<h2>`
                    app.updateBestTime(time)
                    timeParagraph.innerText = `Melhor tempo: ${app.getBestTime()}`
                }
            }
            else {
                app.virarCartas(1500)
            }
        }
    })
    tabuleiro.append(imagem)
}