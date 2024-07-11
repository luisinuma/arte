const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const progressBar = document.getElementById('progress-bar');
const resultMessage = document.getElementById('result-message');
const resultDescription = document.getElementById('result-description');
const levelIndicator = document.getElementById('level-indicator');
const welcomePopup = document.getElementById('welcome-popup');
const closePopupBtn = document.getElementById('close-popup-btn');
const artImage = document.getElementById('art-image');

const questions = [
    { question: '¿Quién pintó "La Mona Lisa"?', image: 'mona_lisa.jpg', choices: [ { text: 'Leonardo da Vinci', correct: true }, { text: 'Pablo Picasso', correct: false }, { text: 'Vincent van Gogh', correct: false }, { text: 'Claude Monet', correct: false } ] },
    { question: '¿Qué movimiento artístico es conocido por el uso de puntos de colores?', image: 'pointillism.jpg', choices: [ { text: 'Puntillismo', correct: true }, { text: 'Impresionismo', correct: false }, { text: 'Cubismo', correct: false }, { text: 'Surrealismo', correct: false } ] },
    { question: '¿Quién pintó "La persistencia de la memoria"?', image: 'dali.jpg', choices: [ { text: 'Salvador Dalí', correct: true }, { text: 'René Magritte', correct: false }, { text: 'Frida Kahlo', correct: false }, { text: 'Joan Miró', correct: false } ] },
    { question: '¿Qué artista es conocido por sus girasoles y estrellas?', image: 'van_gogh.jpg', choices: [ { text: 'Vincent van Gogh', correct: true }, { text: 'Claude Monet', correct: false }, { text: 'Edgar Degas', correct: false }, { text: 'Henri Matisse', correct: false } ] },
    { question: '¿Quién es el autor de "El Grito"?', image: 'munch.jpg', choices: [ { text: 'Edvard Munch', correct: true }, { text: 'Gustav Klimt', correct: false }, { text: 'Paul Cézanne', correct: false }, { text: 'Jackson Pollock', correct: false } ] },
    { question: '¿Qué técnica utiliza fragmentos de papel, fotografías y otros materiales?', image: 'collage.jpg', choices: [ { text: 'Collage', correct: true }, { text: 'Acuarela', correct: false }, { text: 'Fresco', correct: false }, { text: 'Temple', correct: false } ] },
    { question: '¿Quién pintó "La última cena"?', image: 'ultima_cena.jpg', choices: [ { text: 'Leonardo da Vinci', correct: true }, { text: 'Rafael', correct: false }, { text: 'Michelangelo', correct: false }, { text: 'Donatello', correct: false } ] },
    { question: '¿Qué movimiento artístico es conocido por el uso de formas geométricas?', image: 'cubismo.jpg', choices: [ { text: 'Cubismo', correct: true }, { text: 'Impresionismo', correct: false }, { text: 'Fauvismo', correct: false }, { text: 'Surrealismo', correct: false } ] },
    { question: '¿Quién pintó "Las meninas"?', image: 'las_meninas.jpg', choices: [ { text: 'Diego Velázquez', correct: true }, { text: 'Francisco Goya', correct: false }, { text: 'El Greco', correct: false }, { text: 'Pablo Picasso', correct: false } ] },
    { question: '¿Qué movimiento artístico es conocido por la representación de sueños y el subconsciente?', image: 'surrealismo.jpg', choices: [ { text: 'Surrealismo', correct: true }, { text: 'Realismo', correct: false }, { text: 'Expresionismo', correct: false }, { text: 'Futurismo', correct: false } ] },
    { question: '¿Quién es el autor de "La noche estrellada"?', image: 'noche_estrellada.jpg', choices: [ { text: 'Vincent van Gogh', correct: true }, { text: 'Pablo Picasso', correct: false }, { text: 'Salvador Dalí', correct: false }, { text: 'Claude Monet', correct: false } ] },
    { question: '¿Qué técnica pictórica utiliza pigmentos mezclados con cera caliente?', image: 'encaustica.jpg', choices: [ { text: 'Encáustica', correct: true }, { text: 'Acuarela', correct: false }, { text: 'Óleo', correct: false }, { text: 'Fresco', correct: false } ] },
    { question: '¿Quién pintó "Guernica"?', image: 'guernica.jpg', choices: [ { text: 'Pablo Picasso', correct: true }, { text: 'Joan Miró', correct: false }, { text: 'Salvador Dalí', correct: false }, { text: 'Francisco Goya', correct: false } ] },
    { question: '¿Qué movimiento artístico busca representar la luz y el color de manera espontánea?', image: 'impresionismo.jpg', choices: [ { text: 'Impresionismo', correct: true }, { text: 'Realismo', correct: false }, { text: 'Barroco', correct: false }, { text: 'Neoclasicismo', correct: false } ] },
    { question: '¿Quién es el autor de "El nacimiento de Venus"?', image: 'nacimiento_venus.jpg', choices: [ { text: 'Sandro Botticelli', correct: true }, { text: 'Leonardo da Vinci', correct: false }, { text: 'Rafael', correct: false }, { text: 'Michelangelo', correct: false } ] },
    { question: '¿Qué técnica utiliza pinceladas visibles para crear una sensación de movimiento?', image: 'impresionismo.jpg', choices: [ { text: 'Impresionismo', correct: true }, { text: 'Surrealismo', correct: false }, { text: 'Cubismo', correct: false }, { text: 'Expresionismo', correct: false } ] },
    { question: '¿Quién pintó "La joven de la perla"?', image: 'joven_perla.jpg', choices: [ { text: 'Johannes Vermeer', correct: true }, { text: 'Rembrandt', correct: false }, { text: 'Caravaggio', correct: false }, { text: 'Peter Paul Rubens', correct: false } ] },
    { question: '¿Qué movimiento artístico es conocido por el uso de formas y colores abstractos?', image: 'expresionismo_abstracto.jpg', choices: [ { text: 'Expresionismo abstracto', correct: true }, { text: 'Cubismo', correct: false }, { text: 'Impresionismo', correct: false }, { text: 'Surrealismo', correct: false } ] },
    { question: '¿Quién es el autor de "Las señoritas de Aviñón"?', image: 'senoritas_avignon.jpg', choices: [ { text: 'Pablo Picasso', correct: true }, { text: 'Georges Braque', correct: false }, { text: 'Juan Gris', correct: false }, { text: 'Fernand Léger', correct: false } ] },
    { question: '¿Qué técnica artística consiste en aplicar pintura con pequeñas manchas o puntos?', image: 'puntillismo.jpg', choices: [ { text: 'Puntillismo', correct: true }, { text: 'Impresionismo', correct: false }, { text: 'Expresionismo', correct: false }, { text: 'Fauvismo', correct: false } ] },
    { question: '¿Quién pintó "La balsa de la Medusa"?', image: 'balsa_medusa.jpg', choices: [ { text: 'Théodore Géricault', correct: true }, { text: 'Eugène Delacroix', correct: false }, { text: 'Jean-Auguste-Dominique Ingres', correct: false }, { text: 'Francisco de Goya', correct: false } ] },
    { question: '¿Qué movimiento artístico es conocido por sus representaciones de la vida cotidiana y escenas domésticas?', image: 'realismo.jpg', choices: [ { text: 'Realismo', correct: true }, { text: 'Impresionismo', correct: false }, { text: 'Surrealismo', correct: false }, { text: 'Barroco', correct: false } ] },
    { question: '¿Quién pintó "El jardín de las delicias"?', image: 'jardin_delicias.jpg', choices: [ { text: 'Hieronymus Bosch', correct: true }, { text: 'Pieter Bruegel el Viejo', correct: false }, { text: 'Lucas Cranach el Viejo', correct: false }, { text: 'Hans Holbein el Joven', correct: false } ] },
    { question: '¿Qué técnica utiliza pigmentos de color suspendidos en un medio de aceite?', image: 'oleo.jpg', choices: [ { text: 'Óleo', correct: true }, { text: 'Acuarela', correct: false }, { text: 'Tempera', correct: false }, { text: 'Fresco', correct: false } ] },
    { question: '¿Quién pintó "La rendición de Breda"?', image: 'rendicion_breda.jpg', choices: [ { text: 'Diego Velázquez', correct: true }, { text: 'Francisco de Zurbarán', correct: false }, { text: 'Bartolomé Esteban Murillo', correct: false }, { text: 'El Greco', correct: false } ] },
    { question: '¿Qué movimiento artístico se caracteriza por su uso dramático de luz y sombra?', image: 'barroco.jpg', choices: [ { text: 'Barroco', correct: true }, { text: 'Rococó', correct: false }, { text: 'Renacimiento', correct: false }, { text: 'Manierismo', correct: false } ] },
    { question: '¿Quién pintó "La escuela de Atenas"?', image: 'escuela_atenas.jpg', choices: [ { text: 'Rafael', correct: true }, { text: 'Leonardo da Vinci', correct: false }, { text: 'Michelangelo', correct: false }, { text: 'Donatello', correct: false } ] },
    { question: '¿Qué técnica utiliza pigmentos aplicados sobre una superficie de yeso húmedo?', image: 'fresco.jpg', choices: [ { text: 'Fresco', correct: true }, { text: 'Acuarela', correct: false }, { text: 'Óleo', correct: false }, { text: 'Tempera', correct: false } ] },
    { question: '¿Quién pintó "La noche estrellada sobre el Ródano"?', image: 'noche_rodan.jpg', choices: [ { text: 'Vincent van Gogh', correct: true }, { text: 'Claude Monet', correct: false }, { text: 'Edgar Degas', correct: false }, { text: 'Pierre-Auguste Renoir', correct: false } ] },
    { question: '¿Qué artista es conocido por sus obras de estilo pop art?', image: 'pop_art.jpg', choices: [ { text: 'Andy Warhol', correct: true }, { text: 'Roy Lichtenstein', correct: false }, { text: 'Keith Haring', correct: false }, { text: 'David Hockney', correct: false } ] }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
closePopupBtn.addEventListener('click', closePopup);

function closePopup() {
    welcomePopup.style.display = 'none';
    startBtn.classList.remove('hidden');
}

function startGame() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    if (currentQuestion.image) {
        artImage.src = currentQuestion.image;
        artImage.classList.remove('hidden');
    } else {
        artImage.classList.add('hidden');
    }
    levelIndicator.innerText = `Nivel ${currentQuestionIndex + 1}`;
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice');
        button.addEventListener('click', () => selectChoice(choice));
        choicesContainer.appendChild(button);
    });
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

function resetState() {
    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }
}

function selectChoice(choice) {
    if (choice.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultMessage.innerText = `¡Juego terminado! Tu puntuación es ${score}/${questions.length}`;
    resultDescription.innerText = 'Gracias por jugar. Esperamos que hayas aprendido algo nuevo sobre arte.';
}
