const sbtn = document.querySelector("#cybersecurity");
const pbtn = document.querySelector("#programming");
const mbtn = document.querySelector("#movies-series");
const gbtn = document.querySelector("#general");
const musbtn = document.querySelector("#music");
const random = document.querySelector("#random");

const qcontainer = document.querySelector("#quiz-container");

const cybersecurityQuestions = [
    {
        question: "Which type of attack tricks users into revealing sensitive information?",
        answers: ["Phishing", "DDoS", "Brute-force", "SQL injection"],
        correct: "Phishing"
    },
    {
        question: "What is the main purpose of multi-factor authentication (MFA)?",
        answers: [
            "To add an extra layer of authentication",
            "To make the internet faster",
            "To encrypt every file on a computer",
            "To automatically remove malware"
        ],
        correct: "To add an extra layer of authentication"
    },
    {
        question: "Which attack attempts to make a website unavailable by overwhelming it with traffic?",
        answers: ["DDoS attack", "Phishing attack", "Keylogging", "SQL injection"],
        correct: "DDoS attack"
    },
    {
        question: "What is SQL injection mainly used to target?",
        answers: [
            "Databases through vulnerable applications",
            "Wi-Fi signals",
            "Computer screens",
            "Antivirus software"
        ],
        correct: "Databases through vulnerable applications"
    },
    {
        question: "What is the main difference between hashing and encryption?",
        answers: [
            "Hashing is generally one-way, while encryption is designed to be reversible with a key",
            "Hashing is only used for images",
            "Encryption cannot use keys",
            "They are exactly the same"
        ],
        correct: "Hashing is generally one-way, while encryption is designed to be reversible with a key"
    }
];

const programmingQuestions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: "HyperText Markup Language"
    },
    {
        question: "Which language is primarily used to style web pages?",
        answers: ["Java", "Python", "CSS", "SQL"],
        correct: "CSS"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        answers: ["//", "##", "<!-- -->", "**"],
        correct: "//"
    },
    {
        question: "What does console.log() do in JavaScript?",
        answers: [
            "Creates a variable",
            "Prints a value to the console",
            "Creates an HTML element",
            "Stops the program"
        ],
        correct: "Prints a value to the console"
    },
    {
        question: "Which data structure stores key-value pairs in JavaScript?",
        answers: ["Array", "String", "Object", "Loop"],
        correct: "Object"
    }
];

const movieQuestions = [
    {
        question: "Which movie features the character Jack Dawson?",
        answers: ["Titanic", "Avatar", "Inception", "The Matrix"],
        correct: "Titanic"
    },
    {
        question: "What is the name of the wizarding school in Harry Potter?",
        answers: ["Narnia", "Hogwarts", "Rivendell", "Camelot"],
        correct: "Hogwarts"
    },
    {
        question: "Which series features the fictional continent of Westeros?",
        answers: ["Stranger Things", "Breaking Bad", "Game of Thrones", "Wednesday"],
        correct: "Game of Thrones"
    },
    {
        question: "Who is the main character in The Matrix?",
        answers: ["Tony Stark", "Neo", "Jack Sparrow", "Peter Parker"],
        correct: "Neo"
    },
    {
        question: "Which movie is about emotions living inside a young girl's mind?",
        answers: ["Frozen", "Inside Out", "Moana", "Encanto"],
        correct: "Inside Out"
    }
];

const generalQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Madrid", "Rome", "Paris", "Berlin"],
        correct: "Paris"
    },
    {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Mercury"],
        correct: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Which country is famous for the pyramids of Giza?",
        answers: ["Greece", "Egypt", "Mexico", "Italy"],
        correct: "Egypt"
    }
];

const musicQuestions = [
    {
        question: "Which instrument has 88 keys traditionally?",
        answers: ["Guitar", "Piano", "Violin", "Flute"],
        correct: "Piano"
    },
    {
        question: "How many strings does a standard guitar have?",
        answers: ["4", "5", "6", "8"],
        correct: "6"
    },
    {
        question: "Which musical symbol indicates silence?",
        answers: ["Note", "Rest", "Clef", "Chord"],
        correct: "Rest"
    },
    {
        question: "Which instrument belongs to the string family?",
        answers: ["Trumpet", "Violin", "Flute", "Drum"],
        correct: "Violin"
    },
    {
        question: "What do we call the speed of a piece of music?",
        answers: ["Tempo", "Pitch", "Volume", "Rhythm"],
        correct: "Tempo"
    }
];

const randomQuestions = [
    {
        question: "Who is the current Prime Minister of Greece?",
        answers: [
            "Kyriakos Mitsotakis",
            "Alexis Tsipras",
            "Nikos Androulakis",
            "Kostas Karamanlis"
        ],
        correct: "Kyriakos Mitsotakis"
    },
    {
        question: "Which currency is used in Japan?",
        answers: ["Won", "Yuan", "Yen", "Dollar"],
        correct: "Yen"
    },
    {
        question: "Where was actor Leonardo DiCaprio born?",
        answers: ["New York", "Los Angeles", "London", "Toronto"],
        correct: "Los Angeles"
    },
    {
        question: "How often are the Olympic Games normally held?",
        answers: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
        correct: "Every 4 years"
    },
    {
        question: "Which animal is known as the largest land animal?",
        answers: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"],
        correct: "Elephant"
    }
];

function runQuiz(questionList) {
    let score = 0;
    let currentQuestion = 0;

    function showQuestion() {
        qcontainer.innerHTML = `
            <h2>${questionList[currentQuestion].question}</h2>
        `;

        questionList[currentQuestion].answers.forEach((answer) => {
            qcontainer.innerHTML += `<button>${answer}</button>`;
        });

        const buttons = qcontainer.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                if (button.textContent === questionList[currentQuestion].correct) {
                    button.classList.add("correct");
                    score++;
                } else {
                    button.classList.add("wrong");
                }

                buttons.forEach((btn) => {
                    btn.disabled = true;
                });

                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < questionList.length) {
                        showQuestion();
                    } else {
                        let message = "";
                        if (score === 5) message = "🏆 Perfect!";
                        else if (score === 4) message = "🔥 Excellent!";
                        else if (score === 3) message = "😎 Good job!";
                        else if (score === 2) message = "🙂 Not bad!";
                        else message = "💀 Try again!";

                        qcontainer.innerHTML = `
                            <h2>Quiz completed!</h2>
                            <h3>${message}</h3>
                            <p>Your score: ${score} / ${questionList.length}</p>
                        `;
                    }
                }, 1000);
            });
        });
    }

    showQuestion();
}

sbtn.addEventListener("click", () => runQuiz(cybersecurityQuestions));
pbtn.addEventListener("click", () => runQuiz(programmingQuestions));
mbtn.addEventListener("click", () => runQuiz(movieQuestions));
gbtn.addEventListener("click", () => runQuiz(generalQuestions));
musbtn.addEventListener("click", () => runQuiz(musicQuestions));
random.addEventListener("click", () => runQuiz(randomQuestions));