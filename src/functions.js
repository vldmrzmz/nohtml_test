function newQuestion(quest, [ans1, ans2, ans3], correct){
    this.question = quest;
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.correct = correct;
}
function renderRadio(radio, list, label, answerText) {
    radio = document.createElement('input');
    radio.setAttribute('name', 'rbutton');
    radio.type = 'radio';
    let li = document.createElement('li');
    label = document.createElement("label");
    label.innerHTML = answerText;
    label.className = "form-radiolist__answer"
    li.innerHTML = radio.outerHTML + label.outerHTML;
    list.appendChild(li);
}
function getFormValue(event) {
    event.preventDefault();
}