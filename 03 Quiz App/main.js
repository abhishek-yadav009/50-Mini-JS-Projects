const displayQuestion = document.querySelector("#question")
const answerButtons = document.querySelectorAll(".btn")
const nextButton = document.querySelector("#next-btn")
const timer = document.querySelector("#timer")


// 1init index 

let currQuestionIndex = 0
let score = 0
let timerInterval


// 2show question and answer 

function showQuestion(index) {
    clearInterval(timerInterval)
    timer.innerText = 10
    timer.style.display = "block"


    const currQuestion = questions[index]
    displayQuestion.innerText = currQuestion.question

    answerButtons.forEach((btn, i) => {
        btn.innerText = currQuestion.answers[i].text
        btn.dataset.correct = currQuestion.answers[i].correct

        btn.style.backgroundColor = ""
        btn.style.color = ""
        btn.disabled = false

    })

    timerUpdate()

}

showQuestion(currQuestionIndex)

// 3change the color after clicking and also show the correct answer
answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // it means clear the timer once we clicked to next button
        clearInterval(timerInterval)
        timer.style.display = "none"
        if (btn.dataset.correct === "true") {
            btn.style.backgroundColor = "green"
            score++
        } else {
            btn.style.backgroundColor = "red"

        }

        answerButtons.forEach(btn => {
            if (btn.dataset.correct === "true") {
                btn.style.backgroundColor = "green"

            }
            btn.disabled = true
        })

        nextButton.style.display = "block"



    })



})
// 4appear the next button and increase the index after clicking and initlize the color too
nextButton.addEventListener("click", () => {
    // Restart if finished
    if (currQuestionIndex >= questions.length) {
        restartQuiz()
    } else {
        currQuestionIndex++
        if (currQuestionIndex < questions.length) {
            showQuestion(currQuestionIndex)
        } else {
            showScore()
        }
    }
})


// 5show the score

function showScore() {
    clearInterval(timerInterval)
    timer.style.display = "none"
    displayQuestion.innerText = `Your score is ${score} / ${questions.length}`
    answerButtons.forEach(btn => {
        btn.style.display = "none"
    })

    nextButton.innerText = "Restart"
}

// 6 restart the game

function restartQuiz() {
    currQuestionIndex = 0
    score = 0
    nextButton.innerText = "Next"
    timer.style.display = "block"

    answerButtons.forEach(btn => {
        btn.style.backgroundColor = ""
        btn.disabled = false
        btn.style.display = "block"
        btn.style.color = ""
    })

    showQuestion(currQuestionIndex)

}



function timerUpdate() {
    let timeLeft = 10
    timerInterval = setInterval(() => {
        timeLeft--
        timer.innerText = timeLeft

        if (timeLeft === 0) {
            clearInterval(timerInterval)
            timer.innerText = "TimeUp"
            nextButton.style.display = "block"

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


























