let usedJoker = false;
loginBtn.addEventListener("click", ()=>{
  if (numberInput.value !== '' && numberInput.value.length == 9 && nameInput.value !=='' && nameInput.value.length >= 3 && surnameInput.value !== '' && surnameInput.value.length >=3){
    onLogIn()
  }
  else{
    alert('Please fill out the form below')
  }
});
jokerBtn.onclick = jokerBtnClick;
phoneBtn.onclick = phoneBtnClick;
let prizeCount = 1;

createPool()
function randomQuestionGenerator() {
  if (questionArray.length === 0) {
    showResults();
  }
  const question = getRandomQuestion();
  questionElem.textContent = question.question;
  fiftyFiftyBtn.onclick = () => fiftyFiftyBtnClick(question);
  relocateIndexesOfArray(question.answers).forEach((answer) => {
    const p = document.createElement("p");
    p.textContent = answer;
    p.onclick = (event) => {
      if (event.target.textContent === question.corrAns) {
        const lastChild = document.querySelector(
          `.prizes-container>p:nth-last-child(${prizeCount})`
        );
        lastChild?.classList.add("takenPrize");
        prizeCount++;
        event.target.classList.add("correctAnswer");
        answerContainer.classList.add("disabledAnswersContainer");
        setTimeout(() => {
          answerContainer.removeChild(answerContainer.firstElementChild);
          answerContainer.removeChild(answerContainer.firstElementChild);
          answerContainer.removeChild(answerContainer.firstElementChild);
          answerContainer.removeChild(answerContainer.firstElementChild);
          randomQuestionGenerator();
          answerContainer.classList.remove("disabledAnswersContainer");
        }, 750);
      } else {
        if (jokerBtn.disabled && !usedJoker) {
          event.target.style.visibility = "hidden";
          usedJoker = true;
        } else {
          onLose(event);
        }
      }
    };
    answerContainer.appendChild(p);
  });
}

randomQuestionGenerator();
