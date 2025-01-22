console.log("scriptfile loaded"); // Debugging remove befor release


// Questions Data
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

    let currentQuestionIndex = 0;
    let score = 0;

    // Runs Game as soon as page loads
    showStartScreen();
    console.log(showStartScreen);
});