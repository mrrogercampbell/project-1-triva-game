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
        const body = document.getElementsByTagName('body')
        const createDiv = document.createElement('div')
        // const questionDiv = document.querySelector("#question-div")
        const createQuestionParagraph = document.createElement('p')
        const createTextNode = document.createTextNode('At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in')

        console.log(body)
        body.appendChild(createDiv)
        createDiv.appendChild(createQuestionParagraph)
        createDiv.classList.add('question-paragraph')
        createQuestionParagraph.appendChild(createTextNode)
        questionDiv.appendChild(createQuestionParagraph)
    }
}