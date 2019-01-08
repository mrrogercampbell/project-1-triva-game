// function displayWinMessage(player){
//     var textContainer = document.querySelector('.text-container')
//     var paragraph = document.createElement('p')
//     var textNode = document.createTextNode(`${ player } Wins!!`)
//     paragraph.classList.add('createdP')
//     paragraph.appendChild(textNode)
//     textContainer.appendChild(paragraph)
// }


module.exports = {
    createQuestion: function createQuestion(){
        const testBody = document.querySelector('body')
        const createDiv = document.createElement('div')
        // const questionDiv = document.querySelector("#question-div")
        const createQuestionParagraph = document.createElement('p')
        const createTextNode = document.createTextNode('At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape? ')

        console.log(testBody)
        testBody.appendChild(createDiv)
        createDiv.appendChild(createQuestionParagraph)
        createDiv.classList.add('question-paragraph')
        createQuestionParagraph.appendChild(createTextNode)
        // questionDiv.appendChild(createQuestionParagraph)
    }
}