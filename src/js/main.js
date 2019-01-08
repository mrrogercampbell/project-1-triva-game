const messages = require("./message")
const questionCreation = require('./questionCreator')
const myQuestions = require('./myQuestions')

// messages.message("hello from parcel!")
// messages.talk('fuck this is cool')

// messages.checkAnswer()

questionCreation.createQuestion()
myQuestions.createQuizClass()
