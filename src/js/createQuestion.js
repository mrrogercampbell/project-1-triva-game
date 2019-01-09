module.exports = {
    createQuestion: function createQuestion(){
        
        const grabBodyTag = document.querySelector('body')
        const createDiv = document.createElement('div')
        // const questionDiv = document.querySelector("#question-div")
        const createQuestionParagraph = document.createElement('p')
        // const createTextNode = document.createTextNode('At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape? ')
        const createTextNode = document.createTextNode(`${battleStarTriva[0].question}`)

        grabBodyTag.appendChild(createDiv)
        createDiv.appendChild(createQuestionParagraph)
        createDiv.classList.add('question-paragraph')
        createQuestionParagraph.appendChild(createTextNode)
        createQuestionParagraph.classList.add('question')
    },
    createAnswerBank: function createAnswerBank() {
        const answerBank = ["answer-1", "answer-2", "answer-3", "answer-4"]
            
        answerBank.forEach(function(answer) {
            const createAnswerButton = document.createElement("button");
            createAnswerButton.className = "possible-answer"
            createAnswerButton.innerHTML = answer;
            document.body.appendChild(createAnswerButton)
            createAnswerButton.addEventListener('click', function(){
                console.log('Ive been clicked')
            })
        });  
    },
    createQuizClass: function createQuizClass(){
        // const battleStarTriva = [
        //     { 
        //         question: 'At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape?',
        //         answers: {
        //             a: 'Six convinced him to take her hand',
        //             b: 'Helo dragged him out of the rackage ',
        //             c: 'Commander Adama told him "to move his ass!"'
        //         },
        //         correctAnswer: 'a',
        //         answerDetail: 'This event began Baltar\'s hallucinations on Kobol. Six called out to him to take her hand, and he had enough love for her to follow through with it. When he reached the exit, Crashdown broke him out of his trance and the two barely escaped before the Raptor exploded.'
        //     },
        //     {
        //         question: 'As a side to Colonial Day, the Quorum of Twelve, the legislative body of the fleet, was in the process of being elected. President Roslin was seriously disturbed by the delegate who was selected to represent Sagittaron. Who had been chosen?',
        //         answers: {
        //             a: 'Kara Thrace',
        //             b: 'Tom Zarek',
        //             c: 'Lee Adama'
        //         },
        //         correctAnswer: 'b',
        //         answerDetail: 'Tom Zarek, the terrorist who had blown up a government building on Sagittaron was selected to represent them. Many of the fleet had felt disenfranchised by the current leadership and thought Zarek would be the one to bring change. After the announcement of his office, he contacted the fleet from the Astral Queen and thanked those who had brought him to power.'
        //     }
        // ]
        //I want to iterate through the class yet only show one class at a time
        //to be able to show the next class (next question) player will have to answer the previous question correctly
        console.log(battleStarTriva[0].question)
        console.log(battleStarTriva[0].answers)
       }

    // populateAnswers: function(populateAswers) {
    //     const grabBodyTag
    // }
}

// Can I implament the createQuiz function which is housed in the myQuestions.js file into the createQuestions.js file. My hope is that I will be able to call the key-value pairs inside of the createQuestion and createAnswerBank functionin order to populate the DOM create HTML'
// figure out logic to determin the correct answer
// create logic for if the wrong answer is selected
