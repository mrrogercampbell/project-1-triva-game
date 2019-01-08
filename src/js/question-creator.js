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
        const body = document.querySelector('body')
        const createDiv = document.createElement('div').classList.add('question-div')
        const createQuestionParagraph = document.createElement('p').classList.add('question-paragraph')
        const createTextNode = document.createTextNode('At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape?')

        body.appendChild(createDiv)
        createDiv.appendChild(createQuestionParagraph)
        createQuestionParagraph.appendChild(createTextNode)
    },
    
} 