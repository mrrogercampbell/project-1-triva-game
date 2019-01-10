// Why wont this work? I want to global scope this function so that I can call on it below. changed name from createAnswerButton to createButton.
// const createButton = document.createElement("button")
let i = 0

const battleStarTriva = [
    { 
        question: 'At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape?',
        answers: {
            a: 'Six convinced him to take her hand',
            b: 'Helo dragged him out of the rackage ',
            c: 'Commander Adama told him "to move his ass!"'
        },
        correctAnswer: 'a',
        answerDetail: 'This event began Baltar\'s hallucinations on Kobol. Six called out to him to take her hand, and he had enough love for her to follow through with it. When he reached the exit, Crashdown broke him out of his trance and the two barely escaped before the Raptor exploded.'
    },
    {
        question: 'As a side to Colonial Day, the Quorum of Twelve, the legislative body of the fleet, was in the process of being elected. President Roslin was seriously disturbed by the delegate who was selected to represent Sagittaron. Who had been chosen?',
        answers: {
            a: 'Kara Thrace',
            b: 'Tom Zarek',
            c: 'Lee Adama'
        },
        correctAnswer: 'b',
        answerDetail: 'Tom Zarek, the terrorist who had blown up a government building on Sagittaron was selected to represent them. Many of the fleet had felt disenfranchised by the current leadership and thought Zarek would be the one to bring change. After the announcement of his office, he contacted the fleet from the Astral Queen and thanked those who had brought him to power.'
    }
]

const gameSpaceDiv = document.createElement('main')

function loadInitalContent() {
    document.body.append(gameSpaceDiv)
}

function createQuestion(){
    const createDiv = document.createElement('div')
    // const questionDiv = document.querySelector("#question-div")
    const createQuestionParagraph = document.createElement('p')
    const createTextNode = document.createTextNode(`${battleStarTriva[0].question}`)
    gameSpaceDiv.appendChild(createDiv)
    createDiv.appendChild(createQuestionParagraph)
    createDiv.classList.add('question-paragraph')
    createQuestionParagraph.appendChild(createTextNode)
    createQuestionParagraph.classList.add('question')
}
let numCorrect = 0
let numIncorrect = 0
const correctTally = []
const incorrectTally = []
function createAnswerBank() {
    for(let answer in battleStarTriva[0].answers) {
        const createButton = document.createElement("button")
        createButton.className = "possible-answer"
        createButton.disabled = false
        createButton.setAttribute('data-letter', answer)
        // document.querySelector([data-letter])
        createButton.innerHTML = battleStarTriva[0].answers[answer]
        gameSpaceDiv.appendChild(createButton)
        createButton.addEventListener('click', function(event){
            const eventCheck = event.target.dataset.letter
            if (eventCheck === battleStarTriva[0].correctAnswer) {
                numCorrect++
                correctTally.push(numCorrect)
                console.log(numCorrect)
                console.log(correctTally)
                nextQestionButton()
                //Want to make it so that when a button is clicked it cant be clicked again
                //found info on .disable button, yet the question is how to attach it to each created button....
            } else {
                numIncorrect++
                incorrectTally.push(numIncorrect)
                console.log(incorrectTally)
                alert(`Sorry nugget that's the wrong answer. 
Heres why: 
${battleStarTriva[0].answerDetail}`)
            
            }
        })
    }
}

//Add a count feature so that you can keep track of the score. 
//figure out how to better display answerDetails. 
//Possible create a new paragraph that gives the answerDetails. 
// After that: figuring out how to change the information over to the next question

function nextQestionButton() {
    const createDiv = document.createElement('div')
    const createButton = document.createElement("button")
    createButton.className = 'submit-button'
    createButton.innerHTML = 'Submit Answer'
    createButton.addEventListener('click', function(){

    })
    document.body.appendChild(createDiv)
    document.body.appendChild(createButton)
}

// createQuestion(battleStarTriva[0].question)
loadInitalContent()
createQuestion()
createAnswerBank()
//Next Question button should only show if answer is correct
// nextQestionButton()


// function createAnswerBank() {
//     const answerBankA = ["answer-1"]
//     const answerBankB = ["answer-2"]
//     const answerBankC = ["answer-3"]
    
//     answerBankA.forEach(function() {
//         const createAnswerButton = document.createElement("button")
//         createAnswerButton.className = "possible-answer"
//         createAnswerButton.innerHTML = battleStarTriva[0].answers.a
//         document.body.appendChild(createAnswerButton)
//         // console.log(battleStarTriva[1].question)
//         // console.log(battleStarTriva[1].answers)
//         createAnswerButton.addEventListener('click', function(){
//             console.log('Ive been clicked')
//         })
//     })
//     answerBankB.forEach(function() {
//         const createAnswerButton = document.createElement("button")
//         createAnswerButton.className = "possible-answer"
//         createAnswerButton.innerHTML = battleStarTriva[0].answers.b
//         document.body.appendChild(createAnswerButton)
//         createAnswerButton.addEventListener('click', function(){
//             console.log('Ive been clicked')
//         })
//     })
//     answerBankC.forEach(function() {
//         const createAnswerButton = document.createElement("button")
//         createAnswerButton.className = "possible-answer"
//         createAnswerButton.innerHTML = battleStarTriva[0].answers.c
//         document.body.appendChild(createAnswerButton)
//         createAnswerButton.addEventListener('click', function(){
//             console.log('Ive been clicked')
//         })
//     })
// }



    // const createAnswerButton = document.createElement("button")
    //     createAnswerButton.className = "possible-answer"
    //     createAnswerButton.innerHTML = battleStarTriva[0].answers.a
    //     document.body.appendChild(createAnswerButton)
    //     // console.log(battleStarTriva[0].answers)
    //     createAnswerButton.addEventListener('click', function(){
    //         console.log('Ive been clicked')
    //     })
// }

//clickevent when clicked incurrment up by one to control moving to next question.


// createAnswerBank()
// createAnswerBank(battleStarTriva[0].answers.a, battleStarTriva[0].answers.b, battleStarTriva[0].answers.a)
// console.log(battleStarTriva[0].answers.a)

//create a submit button
//attach an event listener to it 
//each click mov through the question bank
