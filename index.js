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
let aswerUser = null;

const getInformation = (Index) => {
  titleQuestion.textContent = data[Index].question;
  resQuestions.innerHTML = data[Index].answers
    .map(
      (item, index) =>
        `<li class="item-answer">
          <input name="aswers" class="input-answer" type="radio" id="${index}" value="${item.isCorrect}" />
          <label class="input-answer" for="Aswer2">${item.answer}</label>
      </li>`
    )
    .join("");
};

const getData = () => {
  resQuestions.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      aswerUser = e.target.value;
    });
  });
};

const nextQuestion = () => {
  if (indexQuestion < (data.length )) {
    getData();
    if (aswerUser === null) {
      alert("Eligir unarespuesta");
    } else {
      indexQuestion++;
      getInformation(indexQuestion);
      console.log(aswerUser);
      aswerUser === "true" ? restOk++ : resWrong++;
    }
  } else {
    changeScreen("none", "block");
  }
};

const changeValues = () => {
  indexQuestion = 0;
  restOk = 0;
  resWrong = 0;
};

const changeScreen = (display1, display2) => {
  screenQuestions.style.display = display1;
  screenCongrats.style.display = display2;

  screenCongrats.querySelector(
    ".label-correct"
  ).textContent = `Respuestas Correctas:${restOk}`;
  screenCongrats.querySelector(
    ".label-wrong"
  ).textContent = `Respuestas Incorrectas:${resWrong}`;
  screenCongrats.querySelector(".score").textContent = `Puntaje: ${
    (resWrong + restOk) * 10
  }`;
 
};

getInformation(indexQuestion);
getData();
changeValues();
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  nextQuestion()
});
btnTryAgain.addEventListener("click", () => {
  changeScreen("block", "none");
});