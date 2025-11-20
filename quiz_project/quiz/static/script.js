 const questions = [
  
    {
      question: "{{ q.question_text|escapejs }}",
      options: [
        "{{ option1|escapejs }}",
        "{{ option2|escapejs }}",
        "{{ option3|escapejs }}",
        "{{ option4|escapejs }}"
      ],
      correct: "{{ correct_option|escapejs }}"
    }
    
  ];

  let index = 0; // Start from the first question
  let score = 0; // Keep track of correct answers

  function showQuestion() {
    document.getElementById("result").style.display = "none";
    
    if (index < questions.length) {
      // Show question text
      document.getElementById("question").textContent = questions[index].question;

      // Show options (buttons)
      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = "";

      questions[index].options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
      });
    } else {
      // If quiz is done, show the result
      document.getElementById("quizBox").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("result").textContent = `Your score: ${score}/${questions.length}`;
    }
  }

  function checkAnswer(selected) {
    // Check if selected option is correct
    if (selected === questions[index].correct) {
      score++;
    }
    index++;
    showQuestion(); // Show next question
  }

  showQuestion(); // Start quiz