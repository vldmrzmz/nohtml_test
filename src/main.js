import './style.scss';
import {NewQuestion} from './functions'; 
// import {validate} from './functions';
var quantity = 0;
var rightCounter = 0;
function validate (arr, rightArr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == rightArr[i]){
            rightCounter++;
        }
    }
}
function renderFinal() {
    form.innerHTML = "";
    form.className = "final-form"
    let h1 = document.createElement('h1');
    h1.className = "final-form__h1";
    h1.textContent = "Ваши результаты: "
    form.appendChild(h1);
    console.log(rightCounter + rightCounter.type);
    
    let p2 = document.createElement('p');
    p2.className = "final-form__p2";
    p2.innerHTML = `Всего вопросов: ${quantity}`;
    form.appendChild(p2);

    let p = document.createElement('p');
    p.className = "final-form__p";
    p.innerHTML = `Правильных ответов: ${rightCounter}`;
    form.appendChild(p);

    let p3 = document.createElement('p');
    p3.className = "final-form__p3";
    p3.innerHTML = `Процент успеха: ≈${rightCounter / quantity * 100} %`;
    form.appendChild(p3);

    let finalBtn = document.createElement('a');
    finalBtn.href = "";
    finalBtn.innerHTML = "Пройти еще раз"
    finalBtn.className = "final-form__btn"
    form.appendChild(finalBtn);
}
function renderQuestion(questionObj, form) {
    let qText = document.createElement('p');
    qText.className = "form__qText";
    qText.innerHTML = questionObj.quest;
    form.appendChild(qText);

    let radioList = document.createElement('ul');
    radioList.className = "form-radiolist";
    form.appendChild(radioList);
    for (let i = 0; i < questionObj.ansArr.length; i++) {
        let input = document.createElement('input');
        input.setAttribute('value', questionObj.ansArr[i])
        input.setAttribute('name', quantity);
        const idAtribute =  `${questionObj.ansArr[i]}-${quantity}`;
        input.setAttribute('id', idAtribute)
        input.type = 'radio';
        let li = document.createElement('li');
        let label = document.createElement("label");
        label.setAttribute('for', idAtribute);
        label.innerHTML = questionObj.ansArr[i]; //cannot read undefined property
        label.className = "form-radiolist__answer"
        li.innerHTML = input.outerHTML + label.outerHTML;
        radioList.appendChild(li);
    }
    quantity++;
}
//  ===============main==============
var validArr = [];
var form = document.createElement('form');
form.className = "form";
document.body.appendChild(form);

var question1 = new NewQuestion(
"1. Какого типа данных нету в JavaScript?", ["var", "float", "let"], "float");
validArr.push(question1.correct);

renderQuestion(question1, form);

var question2 = new NewQuestion(
"2. Самый популярный фреймворк JS?", ["React", "Node", "Ember"], "React");
validArr.push(question2.correct);
renderQuestion(question2, form);

var question3 = new NewQuestion(
"3. Какого логического оператора не сущеструет?", ["||", "&&", "??", "$$"], "$$");
validArr.push(question3.correct);  
renderQuestion(question3, form);

var question4 = new NewQuestion("4. Какая из этих команд работает не так как другие две?",
["elem.append(document.createTextNode(text))","elem.innerHTML = text",
"elem.textContent = text", ], "elem.innerHTML = text");
validArr.push(question4.correct);
renderQuestion(question4, form);

var question5 = new NewQuestion("5. Какая переменная записана неверно?",
["var isDone = 0;","var num = 'STRING';",
"var number = 12,5;", ], "var number = 12,5;");
validArr.push(question5.correct);
renderQuestion(question5, form);

var button = document.createElement('button');
button.className = "form__button";
button.innerHTML = "Отправить";
button.type = "submit";
form.appendChild(button);


document.querySelector('form').addEventListener('submit', (e) => {
    const formData = new FormData(form);
    e.preventDefault();
    var dataArr = [];
    for (let i = 0; i < quantity; i++) {
        dataArr.push(formData.getAll(`${i}`));
    }
    validate(dataArr, validArr);
    renderFinal();
});
