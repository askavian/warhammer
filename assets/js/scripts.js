document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "Who founded Games Workshop?",
      answers: [
        "Ian Livingstone & friends",
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

  let currentQuestionIndex = 0;
  let score = 0;

  const userAnswers = [];

  // DOM Elements
  const quizContainer = document.getElementById("quiz-container");
  const errorMessage = document.getElementById("error-message");

  // Start screen
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

  // Show a question and its answers
  function showQuestion() {
    quizContainer.innerHTML = "";
    const question = questions[currentQuestionIndex];

    const questionElement = document.createElement("h2");
    questionElement.textContent = question.question;
    quizContainer.appendChild(questionElement);

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

  // Go back to the previous question
  function goBack() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Show the previous question
    showQuestion();
  }

  // Validate the selected answer
  function validateAnswer() {
    errorMessage.textContent = "";
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
 
    // Store the user's selected answer
    if (!selectedAnswer) {
      errorMessage.textContent = "Please select an answer.";
      return;
    }
 
    const selectedIndex = parseInt(selectedAnswer.value);
 
    // Check if the previous answer was correct
    if (userAnswers[currentQuestionIndex] !== undefined) {
      const previousAnswer = userAnswers[currentQuestionIndex];
      // prevents counter from previous false answer 
      if (previousAnswer === questions[currentQuestionIndex].correct && selectedIndex !== previousAnswer) {
        score--;
      } else if (previousAnswer !== questions[currentQuestionIndex].correct && selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
      }
    } else if (selectedIndex === questions[currentQuestionIndex].correct) {
      score++;
    }
 
    // Store the user's selected answer
    userAnswers[currentQuestionIndex] = selectedIndex;
 
    // Move to the next question or show the result page
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  // Show the result page
  function showResult() {
    quizContainer.innerHTML = "";

    // Display the result message
    const resultMessage = document.createElement("h2");
    if (score === questions.length) {
      resultMessage.textContent = "Congratulations! You answered all questions correctly!";
    } else {
      resultMessage.textContent = `You got ${score} out of ${questions.length} correct.`;
    }
    quizContainer.appendChild(resultMessage);

    // Review user answers
    const answerReview = document.createElement("div");
    answerReview.innerHTML = "<h3>Your Answers:</h3>";

    questions.forEach((q, index) => {
      const reviewItem = document.createElement("p");
      const userAnswer = q.answers[userAnswers[index]] || "No answer selected";

      // Display the question and user's answer
      reviewItem.innerHTML = `<strong>Question ${index + 1}:</strong> ${q.question}<br>
                              <strong>Your Answer:</strong> ${userAnswer}`;
      reviewItem.style.color = userAnswers[index] === q.correct ? "green" : "red";

      answerReview.appendChild(reviewItem);
    });

    quizContainer.appendChild(answerReview);

    // Restart button to reset the quiz
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    quizContainer.appendChild(restartButton);
  }

  // Restart the quiz and reset variables
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    errorMessage.textContent = "";
    showStartScreen();
  }

  showStartScreen();
});
