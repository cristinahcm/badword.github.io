// declaro la variable de las palabras
    const words = [
        "a tu merced",
        "ahora me llama",
        "am",
        "amantes de una noche",
        "amorfoda",
        "andan por ahi",
        "antes que se acabe",
        "bad con nicky",
        "bailame",
        "bellacoso",
        "bendiciones",
        "bichiyal",
        "blockia",
        "booker t",
        "bye me fui",
        "caile",
        "callaita",
        "cancion con yandel",
        "cantares de navidad",
        "caro",
        "chambea",
        "como antes",
        "como se siente",
        "como soy",
        "como un bebe",
        "compositor del año",
        "contigo",
        "cual es tu plan",
        "cuando perriabas",
        "cuidao por ahi",
        "cynh2",
        "dakiti",
        "de museo",
        "desde el corazon",
        "diabla",
        "diles",
        "dime si te acuerdas",
        "dime si vas a volver",
        "el chapo",
        "el mundo es mio",
        "en casita",
        "esta cabron ser yo",
        "esta rico",
        "estamos arriba",
        "estamos bien",
        "explicale",
        "hablamos mañana",
        "hasta que dios diga",
        "haciendo que me amas",
        "hoy cobre",
        "ignorantes",
        "know no better",
        "krippy kush",
        "la cancion",
        "la cartera",
        "la dificil",
        "la droga",
        "la noche de anoche",
        "la romana",
        "la santa",
        "la ultima vez",
        "la zona",
        "lean",
        "lo siento bb",
        "madura",
        "maldita pobreza",
        "mas de una cita",
        "me importa un carajo",
        "me llamas",
        "me llueven",
        "me mata",
        "mia",
        "mojaita",
        "netflixxx",
        "ni bien ni mal",
        "no te dejaste querer",
        "no te hagas",
        "odio",
        "original",
        "otra noche en miami",
        "otra ve",
        "p fkn r",
        "pa ti",
        "pa romperla",
        "pero ya no",
        "polaroid",
        "puesto pa guerrial",
        "quien tú eres",
        "que malo",
        "que pretendes",
        "rlndt",
        "ronca freestyle",
        "safaera",
        "se fue conmigo",
        "sensualidad",
        "ser bichote",
        "sexto sentido",
        "si ella sale",
        "si estuviésemos juntos",
        "si tu lo dejas",
        "si veo a tu mamá",
        "solita",
        "solo de mi",
        "soltera",
        "sorry papi",
        "soy peor",
        "subimos de rango",
        "tagliatelle santeria",
        "te bote",
        "te deseo lo mejor",
        "te mudaste",
        "tenemos que hablar",
        "trellas",
        "trepate",
        "triste",
        "tu no metes cabra",
        "tu no vive asi",
        "un dia",
        "un peso",
        "una vez",
        "vete",
        "volando",
        "volvi",
        "vuelve",
        "x ultima vez",
        "yo le llego",
        "yo perreo sola",
        "yo visto asi",
        "yonaguni"
    ];

    
    const startButton = document.getElementById('start-game-button');
    const startContainer = document.getElementById('start-container');
    const gameContainer = document.getElementById('game-container');
    const randomWord = words[Math.floor(Math.random()*words.length)];
    const squareDisplay = document.querySelector('.square-container')


    startButton.addEventListener("click", startGame);

    
    function startGame () {
            startContainer.classList.add("hidden");
            gameContainer.classList.remove("hidden");
        console.log(randomWord)
    }

    let counter = 0

    const wordLength = randomWord.length;
    for (let i = 0; i <= 4; i++) {
        const rowElement = document.createElement("div")
        rowElement.className = "row"
        for (let j = 0; j < wordLength; j++) {
            const square = document.createElement("div")
            square.className = "square"
            rowElement.appendChild(square) 
        }
        squareDisplay.appendChild(rowElement)
    }

    //letras que se pueden escribir 
    const lettersPermitted = /[a-z]/;
     
    // detecta el teclado 
     document.addEventListener('keydown', (e) => {
         console.log('keypress: ' + e.key);

    // comprueba que solo se puedan escribir letras
        let keypress = lettersPermitted.test(e.key);
         console.log(keypress);
     })

    
    
   
    