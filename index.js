// declaro la variable de las palabras
const words = [
    //"ahora me llama",
    "am",
    "amorfoda",
    "bendiciones",
    "bichiyal",
    //"booker t",
    //"bye me fui",
    "callaita",
    //"cancion con yandel",
    "chambea",
    //"cual es tu plan",
    //"cuando perriabas",
    //"cuidao por ahi",
    "dakiti",
    "de museo",
    "diabla",
    "diles",
    //"dime si te acuerdas",
    //"el mundo es mio",
    "en casita",
    //"esta cabron ser yo",
    "estamos arriba",
    "estamos bien",
    "explicale",
    "hablamos mañana",
    //"haciendo que me amas",
    "hoy cobre",
    "ignorantes",
    "krippy kush",
    "la cancion",
    "la dificil",
    "la droga",
    //"la noche de anoche",
    "la romana",
    "la santa",
    "la zona",
    "lo siento bb",
    "maldita pobreza",
    //"mas de una cita",
    "me llueven",
    "me mata",
    "mia",
    "mojaita",
    "netflixxx",
    //"ni bien ni mal",
    //"no te hagas",
    //"otra noche en miami",
    "p fkn r",
    "pa ti",
    "pa romperla",
    //"pero ya no",
    //"quien tu eres",
    //"que pretendes",
    "rlndt",
    "ronca freestyle",
    "safaera",
    //"sexto sentido",
    //"si ella sale",
    //"si estuviesemos juntos",
    //"si veo a tu mamá",
    //"solo de mi",
    "sorry papi",
    "soy peor",
    "te bote",
    //"te deseo lo mejor",
    "te mudaste",
    //"tenemos que hablar",
    "trellas",
    "tu no metes cabra",
    "tu no vive asi",
    "vete",
    "volando",
    "volvi",
    "vuelve",
    //"x ultima vez",
    //"yo le llego",
    "yo perreo sola",
    "yo visto asi",
    "yonaguni"
];

let row = 0;
let currentTile = 0;
let isGameOver = false
let currentWord = ""

// creo la canción random
const randomWord = words[Math.floor(Math.random() * words.length)];
// esto luego hay que ocultarlo para que no le salga al usuario
//console.log(randomWord)

// cojo el botón de start y la primera pantalla
const startButton = document.getElementById('start-game-button');
const startContainer = document.getElementById('start-container');
const gameContainer = document.getElementById('game-container');
// le creo el evento de click al botón de start
startButton.addEventListener("click", startGame);


// cuando le doy al botón empieza esta función
function startGame() {
    const board = document.getElementById('board-container')
    const keyboard = document.getElementById('keyboard-container')//al haber dos pantallas diferentes, primero oculto la primera y muestro la segunda con hidden
    startContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    // creamos la zona de los cuadrados 

    const wordLength = randomWord.length;
    for (let i = 5; i >= 0; i--) {
        const row = document.createElement("div")
        row.className = "row"
        for (let j = 0; j < wordLength; j++) {
            const square = document.createElement("div")
            if (randomWord[j] === ' ') {
                square.className = "no-square"
            } else {
                square.className = "square"
            }
            square.id = `square${j}-${i}`
            row.appendChild(square)
        }
        board.prepend(row)
    }
}


// detecta el teclado 
document.addEventListener('keydown', (e) => {
    //console.log('keypress: ' + e.key);

    // comprueba que solo se puedan escribir letras
    let keypress = e.key;

    if (keypress == 'Backspace') {
        deleteLetter()
    }
    else if (keypress == 'Enter') {
        submit()
    }
    else if (keypress == ' ') {
        return 
    }
    else if (keypress) {
        if (randomWord[currentTile] === ' ') {
            currentTile++
            currentWord += ' '
        }
        const firstSquare = document.getElementById(`square${currentTile}-${row}`)
        firstSquare.innerHTML = e.key.toUpperCase()
        currentWord += e.key
        //console.log(currentWord)
        currentTile++;
    } 
})



// escribir con el teclado de la pantalla

document.getElementById("keyboard-container").addEventListener("click", (e) => {
    const target = e.target
    let key = target.innerHTML
    //console.log(key)

    if (!target.classList.contains("keyboard-button")) {
        return
    }

    if (key === "⌫") {
        deleteLetter()
    }

    else if (key === '↵') {
        submit()
    }

    else if (key == ' ') {
        return 
    }

    else if (key) {
        if(randomWord[currentTile] === ' '){
            currentTile++
            currentWord += ' '
        }
        const firstSquare = document.getElementById(`square${currentTile}-${row}`)
        firstSquare.innerHTML = key.toUpperCase()
        currentWord += key
        //console.log(currentWord)
        currentTile++;
    }
})

//delete last letter 
function deleteLetter() {
    if (currentTile - 1 >= 0) {
        currentTile--
        document.getElementById(`square${currentTile}-${row}`).innerHTML = ''
        currentWord = currentWord.slice(0, -1)
    }
}



//submit word
function submit() {
    if (currentTile !== randomWord.length) {
    return
    
}
    for (let i = 0; i < randomWord.length; i++) {
        const letter = document.getElementById(`square${i}-${row}`)
        const isSpace = (letter.innerHTML === "")
        if (currentWord[i] === randomWord[i] && !isSpace) {
            letter.className = "square-green"
        } else if (randomWord.includes(currentWord[i]) && !isSpace) {
            letter.className = "square-yellow"
        } 
        
    }
    if (randomWord === currentWord) {
        alert ("Congratulations!")
        startContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");
        
    }

    if (row === 5) {
       alert ("Game over :(")
       startContainer.classList.remove("hidden");
       gameContainer.classList.add("hidden");   
    }
    row++
    currentTile = 0
    currentWord = ""

}