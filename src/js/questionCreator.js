module.exports = {
    createQuestion: function createQuestion(){
        const grabBodyTag = document.querySelector('body')
        const createDiv = document.createElement('div')
        // const questionDiv = document.querySelector("#question-div")
        const createQuestionParagraph = document.createElement('p')
        const createTextNode = document.createTextNode('At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape? ')

        grabBodyTag.appendChild(createDiv)
        createDiv.appendChild(createQuestionParagraph)
        createDiv.classList.add('question-paragraph')
        createQuestionParagraph.appendChild(createTextNode)
        createQuestionParagraph.classList.add('question')

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
    }

    // populateAnswers: function(populateAswers) {
    //     const grabBodyTag
    // }
}

// make it so possible answers populate onto screen
// addd click event to possible answers
// figure out logic to determin the correct answer
// create logic for if the wrong answer is selected
