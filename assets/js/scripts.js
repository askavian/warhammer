console.log("scriptfile loaded"); // Debugging remove befor release


// Questions Data counts from 0 upwards
// Event Listener starts question only when DOM is created
document.addEventListener("DOMContentLoaded", () => {
    const questions = [
      {
        question: "Who founded Games Workshop?",
        answers: [
          "John Peake, Ian Livingstone and Steve Jackson",
          "Peter Dinklage",
          "Superman",
          "Michael Myers",
        ],
        correct: 0,
      },
      {
        question: "Who is the most prominent Games Workshop fan?",
        answers: [
          "Brad Pitt",
          "Alfred Hitchcock",
          "Leonardo DiCaprio",
          "Henry Cavill",
        ],
        correct: 3,
      },
      {
        question: "Which Warhammer Game sequel was released in 2024?",
        answers: [
          "Batman & Robin",
          "Space Marines 2",
          "Friday 13th",
          "Lord of the Rings 2",
        ],
        correct: 1,
      },
      {
        question: "Which provider is currently planning a live action realization of Warhammer?",
        answers: ["eBay", "Apple", "Amazon", "Microsoft"],
        correct: 2,
      },
    ];

    // Tracks current question
    let currentQuestionIndex = 0;
    // Stores Current Score
    let score = 0;
    // Constant for User Answers
    const userAnswers = [];
 
    // DOM Elements from HTML 
    const quizContainer = document.getElementById("quiz-container");
    const errorMessage = document.getElementById("error-message");
 
    // Start screen function
    function showStartScreen() {
      quizContainer.innerHTML = "";
 
      const startMessage = document.createElement("h1");
      startMessage.textContent = "Welcome to my Warhammer Quiz!";
      quizContainer.appendChild(startMessage);
 
      const startButton = document.createElement("button");
      startButton.textContent = "Start Quiz";
      startButton.addEventListener("click", showQuestion);
      quizContainer.appendChild(startButton);
    }

    // Dispys a question and ANSWERS MISSING ATM
    function showQuestion() {
      quizContainer.innerHTML = "";
      const question = questions[currentQuestionIndex];
       
      const questionElement = document.createElement("h2");
      questionElement.textContent = question.question;
      quizContainer.appendChild(questionElement);
    }

      // Render answer as a radio button
      question.answers.forEach((answer, index) => {
        const answerContainer = document.createElement("div");
        answerContainer.classList.add("answer");
     
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answer";
        radioInput.value = index;
        radioInput.id = `answer-${index}`;
    
        // Pre-fill previously selected answer
        if (userAnswers[currentQuestionIndex] === index) {
            radioInput.checked = true;
          }
           
            const label = document.createElement("label");
            label.htmlFor = `answer-${index}`;
            label.textContent = answer;
           
            answerContainer.appendChild(radioInput);
            answerContainer.appendChild(label);
            quizContainer.appendChild(answerContainer);
        });

        // Create a container for navigation buttons
      const navigationContainer = document.createElement("div");
      navigationContainer.classList.add("navigation-buttons");
 
      // Back button to move to the previous question
      if (currentQuestionIndex > 0) {
        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.addEventListener("click", goBack);
        navigationContainer.appendChild(backButton);
      }
 
      // Next button to move to the next question
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next";
      nextButton.addEventListener("click", validateAnswer);
      navigationContainer.appendChild(nextButton);
 
      quizContainer.appendChild(navigationContainer);
    }

 

    // Runs Game as soon as page loads
    //showStartScreen();
    //console.log(showStartScreen);  // remove before release

);