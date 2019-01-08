const messages = require("./message")
const questionCreation = require('./question-creator')

messages.message("hello from parcel!")
messages.talk('fuck this is cool')

messages.checkAnswer()

questionCreation.createQuestion()
