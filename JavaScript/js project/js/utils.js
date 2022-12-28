const onLogIn = () => {
  loginPage.style.display = "none";
  gamePage.style.display = "flex";
};

// loginbtn directs to game page

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// chooses a question from array

function getRandomQuestion() {
  const questionIndex = getRandomIndex(questionArray.length);
  const question = questionArray[questionIndex];
  questionArray.splice(questionIndex, 1);
  return question;
}

// deletes chosen question from array

function relocateIndexesOfArray(arr) {
  const r1 = Math.floor(Math.random() * arr.length);
  const r2 = Math.floor(Math.random() * arr.length);
  arraymove(arr, r1, 2);
  arraymove(arr, r2, 3);
  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
  return arr;
}

// randomizes answer options

function fiftyFiftyBtnClick(question) {
  fiftyFiftyBtn.disabled = "true";
  const correctAnswerIndex = question.answers.indexOf(question.corrAns);
  const indice = [0, 1, 2, 3];
  indice.splice(correctAnswerIndex, 1);
  relocateIndexesOfArray(indice);
  answerContainer.children[indice[0]].style.visibility = "hidden";
  answerContainer.children[indice[2]].style.visibility = "hidden";
  fiftyFiftyBtn.disabled = "true";
  fiftyFiftyBtn.onclick = null;
}

// leaves correct and 1 false option

function jokerBtnClick() {
  jokerBtn.disabled = "true";
  jokerBtn.onclick = null;
}

function phoneBtnClick() {
  const friendIndex = getRandomIndex(4);
  answerContainer.children[friendIndex].style.backgroundColor = "yellow";
  phoneBtn.disabled = true;
  phoneBtn.onclick = null;
}

// highlights random option

function sumOfPrizes() {
  let sum = 0;
  for (i = 100; i <= (prizeCount - 1) * 100; i += 100) {
    sum += i;
  }
  return sum;
}

// sums prizes

function createPool() {
  for (let i = questionArray.length; i >= 1; i--) {
    const p = document.createElement("p");
    p.textContent = i * 100;
    prizesContainer.appendChild(p);
  }
}

// creates question pool

function onLose(event) {
  event.target.classList.add("wrongAnswer");
  fiftyFiftyBtn.disabled = "true";
  jokerBtn.disabled = "true";
  phoneBtn.disabled = "true";
  answerContainer.classList.add("disabledAnswersContainer");
  setTimeout(() => {
    showResults();
  }, 1000);
}

// ending after a 1 second delay if wrong option was chosen

function showResults() {
  gamePage.style.display = "none";
  finishPage.style.display = "flex";
  correctCount.textContent = `Correct answer(s) count: ${prizeCount - 1}`;
  amountPaid.textContent = `Amount of money won: ${sumOfPrizes()}`;
  if(prizeCount-1>0){
    finishPageHeading.textContent = `Congratulations, ${nameInput.value} 👏`;}
  else{
    finishPageHeading.textContent = `Better luck next time, ${nameInput.value} ☹`;
  }
  return 0;
}

// shows results
