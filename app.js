const WHITE_KEYS = ['z','x','c','v','b','n','m'] // Teclas do teclado do PC que vão ativar as teclas brancas do piano
const BLACK_KEYS = ['s','d','g','h','j']
const keys = document.querySelectorAll('.key')
const blackKeys = document.querySelectorAll('.key.black')
const whiteKeys = document.querySelectorAll('.key.white')

keys.forEach(function (key) {
    key.addEventListener('click', () => {
        playNote(key)
    })
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note) // Vai pegar o valor da nota

    noteAudio.currentTime = 0; // Impedir que o audio toque pela metade e comece sempre do inicio
    noteAudio.play() // Vai tocar o arquivo MP3 relacionado ao valor da nota
    key.classList.add('active') // Vai colocar o efeito de apertado nas teclas

    noteAudio.addEventListener('ended', function() { // Vai colocar o efeito de soltar as teclas tirando o '.active'
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', function(e) {
    let key = e.key // .key e a propriedade que pega o valor da tecla do teclado do PC 
    let whiteKeyIndex = WHITE_KEYS.indexOf(key) // Vai pegar o valor da posição do array do WHITE_KEYS 
    let blackKeyIndex = BLACK_KEYS.indexOf(key) // Vai pegar o valor da posição do array do BLACk_KEYS 
    
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]) // -1 são as outras teclas fora do Array do WHITE e BLACK_KEYS, ou seja se for algo maior e positivo dentro do array ele vai tocar.
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})