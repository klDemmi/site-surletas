let questions = [
    {
        question: "Question 1 : Qu'est-ce que la cryptographie dans le contexte de la blockchain ?",
        choices: [
            { text: "a) Un moyen de créer des dessins artistiques sur la blockchain", correct: true },
            { text: "b) Une méthode de sécurisation des transactions en utilisant des codes spéciaux", correct: false },
            { text: "c) Un outil pour stocker des informations de manière aléatoire.", correct: false }
        ]
    },
    {
        question: "Question 2 : À quoi sert la cryptographie dans le domaine du blockchain ?",
        choices: [
            { text: "a) À rendre les transactions irréversibles.", correct: false },
            { text: "b) À écrire des messages en langage codé.", correct: true },
            { text: "c) À accélérer les processus de vérification des transactions.", correct: false }
        ]
    },

    {
        question: "Question 3 : Comment la cryptographie protège-t-elle les données ?",
        choices: [
            { text: "a) En les rendant invisibles à l'œil nu.", correct: false },
            { text: "b) En les transformant en un code illisible sans la clé correspondante.", correct: false },
            { text: "c) En les stockant sur des serveurs très sécurisés.", correct: false },
        ]
    },

    {
        question: "Question 4 : Quel est le rôle principal de la signature numérique dans le blockchain ?",
        choices: [
            { text: "a) Vérifier la météo actuelle.", correct: false },
            { text: "b) Authentifier et sécuriser les transactions.", correct: false },
            { text: "c) Créer des animations sur la blockchain.", correct: false },
        ]

    },

    {
        question: "Question 5 : Pourquoi la cryptographie est-elle importante dans le contexte de la blockchain ?",
        choices: [
            { text: "a) Pour rendre les transactions plus lentes.", correct: false },
            { text: "b) Pour assurer la confidentialité des informations stockées sur la blockchain", correct: false },
            { text: "c) Pour garantir la sécurité et l'intégrité des transactions effectuées.", correct: false },
        ]
    },
    // ... more questions here
];

let questionIndex = 0;
let selectedIndex;
let score = 0;

function displayQuestion() {
    if (questionIndex >= questions.length) {
        showScore();
        return;
    }
    let question = questions[questionIndex];
    let html = "<h2>" + question.question + "</h2>";
    for (let i = 0; i < question.choices.length; i++) {
        html += "<button class='choice'>" + question.choices[i].text + "</button>";
    }
    document.getElementById("quiz").innerHTML = html;

    let choices = document.getElementsByClassName("choice");
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function() {
            selectedIndex = i;
            checkAnswer();
        });
    }
}

function checkAnswer() {
    let question = questions[questionIndex];
    if (question.choices[selectedIndex].correct) {
        score++;
    }
    questionIndex++;
    displayQuestion();
}

function showScore() {
    let html = "<h2>Quiz Complete</h2>";
    html += "<h3>Tu as eu: " + score + " sur " + questions.length + "</h3>";
    html += '<button class="next-button">Aller à la page suivante</button>';
    document.getElementById("quiz").innerHTML = html;

    let nextButton = document.getElementsByClassName("next-button")[0];
    nextButton.addEventListener("click", function() {
        window.location.href = "Exercice.html";
    });
}

displayQuestion();