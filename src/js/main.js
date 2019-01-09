const messages = require("./message")
const questionCreation = require('./createQuestion')
const myQuestions = require('./myQuestions')

// messages.message("hello from parcel!")
// messages.talk('fuck this is cool')

// messages.checkAnswer()

questionCreation.createQuestion()
questionCreation.createAnswerBank()
questionCreation.createQuizClass()
// myQuestions.createQuizClass()
