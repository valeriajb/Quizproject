const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

//Form de la Aplicación
const screenQuestions = document.querySelector(".form-quiz");
const screenCongrats = document.querySelector(".form-congrats");

//Cambiar las respuestas
const titleQuestion = document.querySelector(".title-form");
const resQuestions = document.querySelector(".list-answers");
//Botones de acciones
const btnSubmit = document.querySelector(".bnt-submit");
const btnTryAgain = document.querySelector("btnAgain");

let indexQuestion = 0;
let restOk = 0;
let resWrong = 0;
let aswerUser="";

const showQuestions = (Index) => {
  titleQuestion.textContent = data[Index].question;
  resQuestions.innerHTML = data[Index].answers
    .map(
      (answer, index) =>
        `<li class="item-answer">
          <input name="aswers" class="input-answer" type="radio" id="${index}" value="${answer.isCorrect}" />
          <label class="input-answer" for="Aswer2">${answer.answer}</label>
      </li>`
    )
    .join("");
};

const changeScreen = (displayBlock, displayNone) => { };

const getAnswer = () => {
  resQuestions.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      aswerUser = e.target.value;
    });
  });
};
showQuestions(indexQuestion);
getAnswer();
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (indexQuestion ===3) {
    indexQuestion=0
    console.log("Tope Máximo");

  } else {
    getAnswer();
    if (aswerUser == "") {
      alert("Escriba una respuesta")
      
    } else {
      !aswerUser ? restOk++ : resWrong++;
      indexQuestion++;
      showQuestions(indexQuestion);
    }
    console.log(indexQuestion)
    console.log(data.length) 
  }
});

