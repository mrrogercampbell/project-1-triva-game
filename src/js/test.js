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
const createMainTag = document.createElement('main')
const createMainContainerDiv = document.createElement('div')
// const appendToMainRowDiv = document.querySelector('.main-tag-row-div')
const createDiv = document.createElement('div')
const createButton = document.createElement("button")
const createParagraphSpan = document.createElement(`span`)

let questionCount = 0
let numCorrect = 0
let numIncorrect = 0
// const correctTally = []
// const incorrectTally = []

function loadInitalContent() {
    const getBody = document.querySelector('body')
    getBody.append(createMainTag)
    createMainTag.classList.add('container')
    //why cant I add two classes at once?
    // createMainContainerDiv.classList.add('row, test')
    createMainContainerDiv.classList.add('row')
    createMainContainerDiv.classList.add('main-tag-row-div')
    createMainTag.appendChild(createMainContainerDiv)
}

//responsivness checklist
//set size for three screen sizes lg, md, sm
//add size decisions to all created elements
//test out the changes

const createQuestionParagraph = document.createElement('p')

function createQuestion(){
    // const questionDiv = document.querySelector("#question-div")
    const createTextNode = document.createTextNode(`${battleStarTriva[questionCount].question}`)
    
    createDiv.className = 'question-paragraph mx-4 mb-2'
    createQuestionParagraph.className = 'p-3 question'
    
    createMainContainerDiv.appendChild(createDiv)
    createDiv.appendChild(createQuestionParagraph)
    createQuestionParagraph.appendChild(createTextNode)   
}

function questionTransition() {
    const deleteQuestionDiv = document.querySelector('.question-paragraph')
    const parentOfQuestionDiv = document.querySelector('.main-tag-row-div')
    parentOfQuestionDiv.removeChild(deleteQuestionDiv)
}


 // This function should diplay the current tally of correct and in correct answers
 function answerTally() {
    const createParagraph = document.createElement('p')
    const createDiv = document.createElement('div')
    //Why wont this show??
    createParagraphSpan.innerHTML = `Correct Answer Tally: ${numCorrect} Incorrect Answer Tally: ${numIncorrect}`
    //set textNode to current then change clickevent later to change innerHTML to current numCorrect and numIncorrect.
    createDiv.className = 'tally-div mx-auto'
    createParagraph.className = 'tally-paragraph p-2 mt-3'
    
    createParagraph.appendChild(createParagraphSpan)
    createDiv.appendChild(createParagraph)
    createMainContainerDiv.appendChild(createDiv)
}


function createAnswerBank() {
    for(let answer in battleStarTriva[questionCount].answers) {
        const createButton = document.createElement("button")
        
        createButton.className = "possible-answer"
        createButton.className = "ml-5 mb-3"
        //how to make this work???
        createButton.setAttribute('data-letter', answer)
        createButton.innerHTML = battleStarTriva[questionCount].answers[answer]

        createDiv.appendChild(createButton)

        createButton.addEventListener('click', function(event){
            const eventCheck = event.target.dataset.letter
            if (eventCheck === battleStarTriva[questionCount].correctAnswer) {
                numCorrect++
                questionCount++
                createButton.disabled = true
                createParagraphSpan.innerHTML = `Correct Answer Tally: ${numCorrect} Incorrect Answer Tally: ${numIncorrect}`
                //move logic so that you no longer need next button. Just have when they select an answer move to next question. 
                console.log(numCorrect)
                alert(`Well look at that the nugget actually knows something!. 
Details: 
${battleStarTriva[questionCount].answerDetail}`)
            
                nextQestionButton()
                //Want to make it so that when a button is clicked it cant be clicked again
                //found info on .disable button, yet the question is how to attach it to each created button....
            } else {
                numIncorrect++
                questionCount++
                createParagraphSpan.innerHTML = `Correct Answer Tally: ${numCorrect} Incorrect Answer Tally: ${numIncorrect}`
                alert(`Sorry nugget that's the wrong answer. 
Heres why: 
${battleStarTriva[questionCount].answerDetail}`)
                nextQestionButton()
            
            }
        })
    }
}

//figure out how to better display answerDetails. 
//you need a message to display when they get the answer wrong or right
//Possible create a new paragraph that gives the answerDetails, which show over your question.
//or completely remove your question and just show the answerDetail then when they hit "Next Question" button load the next question 
// After that: figuring out how to change the information over to the next question
//At the end of the quiz show their over all score and grade them or give them a message about how they did.


function nextQestionButton() {
    const createDiv = document.createElement('div')
    createButton.className = 'next-question-button'
    createButton.innerHTML = 'Next Question'
    createButton.addEventListener('click', function(){
        questionTransition()
        createQuestion()
        createAnswerBank()
    })
    createMainTag.appendChild(createDiv)
    createMainTag.appendChild(createButton)
}


// createQuestion(battleStarTriva[0].question)
loadInitalContent()
answerTally()
createQuestion()
createAnswerBank()
//Next Question button should only show if answer is correct
// nextQestionButton()

