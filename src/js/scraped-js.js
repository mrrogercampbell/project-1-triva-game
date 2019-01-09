// This was the function I used from the walkthrough. Where it does work I am having a hard time understanding it. So I am going bakc to what I had before. 
// function createQuiz() {
    //     const output = []
    //     battleStarTriva.forEach( (currentQuestion, questionNumber) => {
    //         const answers = []
    //         for(letter in currentQuestion.answers) {
    //             answers.push(
    //                 `<label>
    //                      <input type='button' name='quesstion${questionNumber}' value='${letter}'>
    //                         ${letter}: 
    //                         ${currentQuestion.answers[letter]}
    //                 </label>`
    //             )
    //         }
    //         output.push(
    //             `<div class ='question'>${currentQuestion.question}</div>
    //             <div class='answers'> ${answers.join('')}</div>`
    //         )
    //     })
    //     console.log('I am working')
    
    // }
    
    // createQuiz()
    


    // const battleStarTriva = [
    //     { 
    //         question: 'At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape?',
    //         answers: {
    //             a: { 
    //                 text: 'Six convinced him to take her hand',
    //                 correct: true,
    //             },
    //             b: { 
    //                 text: 'Helo dragged him out of the rackage ',
    //                 correct: false,
    //             }, 
    //             c: {
    //                 text:'Commander Adama told him to "move his ass!"',
    //                 correct: false,
    //             }
    //         },
    //         answerDetail: 'This event began Baltar\'s hallucinations on Kobol. Six called out to him to take her hand, and he had enough love for her to follow through with it. When he reached the exit, Crashdown broke him out of his trance and the two barely escaped before the Raptor exploded.'
    //     },
    //     {
    //         question: 'As a side to Colonial Day, the Quorum of Twelve, the legislative body of the fleet, was in the process of being elected. President Roslin was seriously disturbed by the delegate who was selected to represent Sagittaron. Who had been chosen?',
    //         answers: {
    //             a: { 
    //                 text: 'Kara Thrace',
    //                 correct: true
    //             },
    //             b: { 
    //                 text: 'Tom Zarek',
    //                 correct: false,
    //             }, 
    //             c: {
    //                 text:'Lee Adama',
    //                 correct: false
    //             }
    //         },
    //         answerDetail: 'Tom Zarek, the terrorist who had blown up a government building on Sagittaron was selected to represent them. Many of the fleet had felt disenfranchised by the current leadership and thought Zarek would be the one to bring change. After the announcement of his office, he contacted the fleet from the Astral Queen and thanked those who had brought him to power.'
    //     }
    // ]