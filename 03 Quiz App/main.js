const displayQuestion = document.querySelector("#question")
const answerButtons = document.querySelectorAll(".btn")
const nextButton = document.querySelector("#next-btn")
const timer = document.querySelector("#timer")

// 1- Initialize index and score
let currQuestionIndex = 0
let score = 0
let timerInterval

// 2- Show the current question and answers
function showQuestion(index) {
    clearInterval(timerInterval) // Stop any previous timer
    timer.innerText = 10
    timer.style.display = "block"

    // Display the question
    const currQuestion = questions[index]
    displayQuestion.innerText = currQuestion.question

    // Display all answer options
    answerButtons.forEach((btn, i) => {
        btn.innerText = currQuestion.answers[i].text
        btn.dataset.correct = currQuestion.answers[i].correct

        btn.style.backgroundColor = ""
        btn.style.color = ""
        btn.disabled = false
    })

    // Start the timer for this question
    timerUpdate()
}

showQuestion(currQuestionIndex)

// 3- Handle answer click: change color and show correct answer
answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        clearInterval(timerInterval) // Stop the timer when an answer is clicked
        timer.style.display = "none"

        // Change the color of the clicked button based on correctness
        if (btn.dataset.correct === "true") {
            btn.style.backgroundColor = "green"
            score++
        } else {
            btn.style.backgroundColor = "red"
        }

        // Show the correct answer for all buttons and disable them
        answerButtons.forEach(btn => {
            if (btn.dataset.correct === "true") {
                btn.style.backgroundColor = "green"
            }
            btn.disabled = true
        })

        nextButton.style.display = "block" // Show the next button
    })
})

// 4- Handle next button click: move to next question or show score
nextButton.addEventListener("click", () => {
    if (currQuestionIndex >= questions.length) { // End of quiz
        restartQuiz()
    } else {
        currQuestionIndex++
        if (currQuestionIndex < questions.length) { // More questions remaining
            showQuestion(currQuestionIndex)
        } else { // Last question finished
            showScore()
        }
    }
})

// 5- Show the final score
function showScore() {
    clearInterval(timerInterval)
    timer.style.display = "none"
    displayQuestion.innerText = `Your score is ${score} / ${questions.length}`

    // Hide all answer buttons
    answerButtons.forEach(btn => {
        btn.style.display = "none"
    })

    nextButton.innerText = "Restart"
}

// 6- Restart the quiz
function restartQuiz() {
    currQuestionIndex = 0
    score = 0
    nextButton.innerText = "Next"
    timer.style.display = "block"

    // Reset buttons for the new game
    answerButtons.forEach(btn => {
        btn.style.backgroundColor = ""
        btn.disabled = false
        btn.style.display = "block"
        btn.style.color = ""
    })

    showQuestion(currQuestionIndex)
}

// 7- Timer function for each question
function timerUpdate() {
    let timeLeft = 10
    timerInterval = setInterval(() => {
        timeLeft--
        timer.innerText = timeLeft

        if (timeLeft === 0) {
            clearInterval(timerInterval)
            timer.innerText = "TimeUp"
            nextButton.style.display = "block"

            // Show correct answer and disable buttons
            answerButtons.forEach(btn => {
                if (btn.dataset.correct === "true") {
                    btn.style.backgroundColor = "green"
                    btn.style.color = "white"
                } else {
                    btn.style.backgroundColor = "red"
                    btn.style.color = "white"
                }
                btn.disabled = true
            })
        }
    }, 1000)
}
