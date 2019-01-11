// Why wont this work? I want to global scope this function so that I can call on it below. changed name from createAnswerButton to createButton.
// const createButton = document.createElement("button")
const battleStarTriva = [
    { 
        question: 'At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape?',
        answers: {
            a: 'Six convinced him to take her hand',
            b: 'Helo dragged him out of the rackage ',
            c: 'Commander Adama told him "to move his ass!"',
        },
        correctAnswer: 'a',
        answerDetail: 'This event began Baltar\'s hallucinations on Kobol. Six called out to him to take her hand, and he had enough love for her to follow through with it. When he reached the exit, Crashdown broke him out of his trance and the two barely escaped before the Raptor exploded.',
    },
    {
        question: 'As a side to Colonial Day, the Quorum of Twelve, the legislative body of the fleet, was in the process of being elected. President Roslin was seriously disturbed by the delegate who was selected to represent Sagittaron. Who had been chosen?',
        answers: {
            a: 'Kara Thrace',
            b: 'Tom Zarek',
            c: 'Lee Adama'
        },
        correctAnswer: 'b',
        answerDetail: 'Tom Zarek, the terrorist who had blown up a government building on Sagittaron was selected to represent them. Many of the fleet had felt disenfranchised by the current leadership and thought Zarek would be the one to bring change. After the announcement of his office, he contacted the fleet from the Astral Queen and thanked those who had brought him to power.',
    },
    {
        question: 'The fleet was short on fuel, and Laura Roslin held a press conference to tell the fleet of their plans to extract more, that is, if they could find any. In the middle of the affair, she had another vision, perhaps attributed to the Chamalla extract she was taking for her cancer. What did she see?',
        answers: {
            a: 'Tigers',
            b: 'Sloths',
            c: 'Snakes'
        },
        correctAnswer: 'c',
        answerDetail: 'The president saw nearly a dozen snakes on her podium during her question and answer session. The visions made her behavior muddled and awkward, causing the reporters to give her strange looks. Later, when talking with a priestess, Laura learned that her experience was similar to a prophecy written by Pythia: "serpents numbering two and ten.',
    },
    {
        question: 'One of Galactica\'s officers woke up to succumb to one of his/her well-known vices. Later, when this officer was talking to Tyrol, Cally, and Socinus, it was clear that he/she was under the influence of alcohol. Who was it?',
        answers: {
            a: 'Saul Tigh',
            b: 'William Adama',
            c: 'Kara Thrace'
        },
        correctAnswer: 'a',
        answerDetail: 'Tigh, known for his drunkenness in the past, decided to take a couple drinks that morning. He had previously sectioned off his bottle into \'fingers\' a haphazard system of measuring alcohol; it can be said that this is an obvious behavior of an alcoholic.,'

    },
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
    createMainContainerDiv.className = 'row main-tag-row-div'
    // createMainContainerDiv.classList.add('')
    createMainTag.appendChild(createMainContainerDiv)
}

//responsivness checklist
//set size for three screen sizes lg, md, sm
//add size decisions to all created elements
//test out the changes


function createQuestion(){
    const createQuestionParagraph = document.createElement('p')
    // const questionDiv = document.querySelector("#question-div")
    const createTextNode = document.createTextNode(`${battleStarTriva[questionCount].question}`)
    
    createDiv.className = 'question-paragraph mx-4 mb-2'
    createQuestionParagraph.className = 'p-3 question'
    
    createMainContainerDiv.appendChild(createDiv)
    createDiv.appendChild(createQuestionParagraph)
    createQuestionParagraph.appendChild(createTextNode)   
    console.log('I am working')
    console.log(`question count is: ${questionCount}`)
    // console.log(`${battleStarTriva[questionCount].question}`)
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

function questionTransition() {
    const deleteQuestionDiv = document.querySelector('.question-paragraph')
    const parentOfQuestionDiv = document.querySelector('.main-tag-row-div')
    parentOfQuestionDiv.removeChild(deleteQuestionDiv)

    // deleteQuestionDiv.innerHTML = '';
    // const deleteQuestionButtons = document.querySelector('button')
    // parentOfQuestionDiv.removeChild(deleteQuestionButtons)
}

function createAnswerBank() {
    // createDiv.className = 'question-options-wrapper'
    for(let answer in battleStarTriva[questionCount].answers) {
        const createButton = document.createElement("button")
        
        createButton.className = "possible-answer"
        createButton.className = "ml-5 mb-3"
        createButton.setAttribute('data-letter', answer)
        createButton.innerHTML = battleStarTriva[questionCount].answers[answer]

        createDiv.appendChild(createButton)

        createButton.addEventListener('click', function(event){
            const eventCheck = event.target.dataset.letter
            if (eventCheck === battleStarTriva[questionCount].correctAnswer) {
                numCorrect++
                questionCount++
                createParagraphSpan.innerHTML = `Correct Answer Tally: ${numCorrect} Incorrect Answer Tally: ${numIncorrect}`
                console.log(`${battleStarTriva[questionCount].answerDetail}`)
                alert(`Well look at that the nugget actually knows something!. Details:${battleStarTriva[questionCount].answerDetail}`)
                questionTransition()
                createQuestion()
                // setTimeout(createQuestion, 1000)
                createAnswerBank()
            } else {
                numIncorrect++
                questionCount++
                createParagraphSpan.innerHTML = `Correct Answer Tally: ${numCorrect} Incorrect Answer Tally: ${numIncorrect}`
                alert(`Sorry nugget that's the wrong answer. 
Heres why: ${battleStarTriva[questionCount].answerDetail}`)
                questionTransition()
                createQuestion()
                createAnswerBank()
            
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





loadInitalContent()
answerTally()
createQuestion()
createAnswerBank()

