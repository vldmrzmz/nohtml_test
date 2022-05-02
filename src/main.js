import './style.scss';
// import newQuestion from './functions'; export nado
// import renderRadio from './functions';
// import getFormValue from './functions';
function NewQuestion(quest, ansArr = [], correct){
    this.quest = quest;
    for (let i = 0; i < ansArr.length; i++) {
        ansArr[i] = ansArr[i];
    }
    this.correct = correct;
}
// function renderRadio(radio, list, label, answerText) {
//     radio = document.createElement('input');
//     radio.setAttribute('name', 'rbutton');
//     radio.type = 'radio';
//     let li = document.createElement('li');
//     label = document.createElement("label");
//     label.innerHTML = answerText;
//     label.className = "form-radiolist__answer"
//     li.innerHTML = radio.outerHTML + label.outerHTML;
//     list.appendChild(li);
// }
var quantity = 0;
function renderQuestion(questionObj, form) {
    let qText = document.createElement('p');
    qText.className = "form__qText";
    qText.innerHTML = questionObj.quest;
    form.appendChild(qText);

    let radioList = document.createElement('ul');
    radioList.className = "form-radiolist";
    form.appendChild(radioList);
    for (let i = 0; i < 3; i++) {
        let radio = document.createElement('input');
        radio.setAttribute('name', quantity);
        radio.type = 'radio';
        let li = document.createElement('li');
        let label = document.createElement("label");
        label.innerHTML = questionObj.ansArr[i];//cannot read undefined property
        label.className = "form-radiolist__answer"
        li.innerHTML = radio.outerHTML + label.outerHTML;
        radioList.appendChild(li);
    }
    quantity++;
}
function getFormValue(event) {
    event.preventDefault();
}

//  ===============main==============
var firstQuestion = new NewQuestion(
"Какого типа данных нету в JavaScript?", ["var", "float", "let"], "float");
console.log(firstQuestion);

// var questionText1 = document.createElement('h1');
// questionText1.className = "question-text";
// questionText1.innerHTML = firstQuestion.question;
// document.body.appendChild(questionText1);

var form = document.createElement('form');
form.className = "form";
document.body.appendChild(form);

renderQuestion(firstQuestion, form);


// var answer1;
// var answerVariant;
// renderRadio(answer1, radioList, answerVariant, firstQuestion.ans1);
// var answer2;
// renderRadio(answer2, radioList, answerVariant, firstQuestion.ans2);
// var answer3;
// renderRadio(answer3, radioList, answerVariant, firstQuestion.ans3);

var button = document.createElement('a');
button.href = '#';
button.className = "form__button";
button.innerHTML = "Отправить";
button.type = "submit"
form.appendChild(button);

// button.addEventListener('click', () => nextClick(answerVariant, firstQuestion.correct));





// var questionAnswer1 = document.createElement('input');
// questionAnswer1.type = 'radio';
// questionAnswer1.innerHTML = q1.ans1;
// document.body.appendChild(questionAnswer1);

// var questionAnswer2 = document.createElement('input');
// questionAnswer2.type = 'radio';
// questionAnswer2.innerHTML = q1.ans2;
// document.body.appendChild(questionAnswer2);

// var questionAnswer3 = document.createElement('input');
// questionAnswer3.type = 'radio';
// questionAnswer3.innerHTML = q1.ans3;
// document.body.appendChild(questionAnswer3);

