import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/router';

function StartQuiz() {
  const router = useRouter()
  const { cat } = router.query
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionCounter, setQuestionCounter] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [wizardName, setWizardName] = useState("");
  let currentAnswers = [];

  // Run getQuestions unless the quiz is over, then it runs gameOver
  useEffect(() => {
    getQuestions(cat);
      console.log("got questions")
  }, []);

  // Retrieves questions from api and puts them in the questions state
  function getQuestions(cat) {
    // Gets user name out of local storage and puts in wizardName state
    setWizardName(localStorage.getItem('name'))
    // fetch(`https://damp-spire-28696.herokuapp.com/quiz/${cat["category"]}`)
    fetch(`http://127.0.0.1:8080/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        console.log("result", result)
        setQuestions([...result]);
      })
      .catch(error => console.log("error", error));
  }




  function playquiz() {
    // Fired from on click and removes the wizard image from page
    document.getElementById('wizard').classList.add('remove')
    document.getElementById('question').classList.add('minimum')
    //When the counter gets to 10 it sets  quizfinished to true
    // Which triggers the useEfect Hook
    if (questionCounter === 10) {
      setQuizFinished(true);
      console.log("game over")
      gameOver();
    } else {
      currentAnswers = [];
      // Then sets a question as the current question to be displayed
      setCurrentQuestion(
        questions[questionCounter].question
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&hellip;)/g, "...")
          .replace(/(&rdquo;)/g, '"')
      );
      // Then sets correct answer for that question in correct answer state
      setCorrectAnswer(
        questions[questionCounter].correct_answer
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&hellip;)/g, "...")
          .replace(/(&rdquo;)/g, '"')
      );
      // Then adds incorrect and correct answers to the current answers array
      for (let i = 0; i < 3; i++) {
        currentAnswers.push(
          questions[questionCounter].incorrect_answers[i]
            .replace(/(&quot;)/g, '"')
            .replace(/(&shy;)/g, "-")
            .replace(/(&#039;)/g, "'")
            .replace(/(&oacute;)/g, "ó")
            .replace(/(&rsquo;)/g, "’")
            .replace(/(&ldquo;)/g, "“")
            .replace(/(&rdquo;)/g, '"')
            .replace(/(&hellip;)/g, "...")
        );
      }
      currentAnswers.push(
        questions[questionCounter].correct_answer
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&rdquo;)/g, '"')
          .replace(/(&hellip;)/g, "...")
      );
      // Sorts the array of answers
      setAnswers(currentAnswers.sort(() => Math.random() - 0.5));
    }
  }
  // 
  function checkAnswer(i) {
    if (answers[i] === correctAnswer) {
      setCurrentScore(currentScore + 1);
    } 
    setQuestionCounter(questionCounter + 1);
    playquiz();
  }

  function gameOver() {
    setFinalScore(currentScore * 107 )
    fetch(`https://damp-spire-28696.herokuapp.com/api/userscore?username=${wizardName}`)
      .then(response => response.json())
      .then(result => {
        console.log("users high score is:" + result.score)
        setHighScore(result.score)

      })
      .catch(error => console.log('error', error));

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ "username": wizardName, "score": finalScore }),
      redirect: 'follow'
    };
    console.log("test before")
    // fetch("https://damp-spire-28696.herokuapp.com/api/submit", requestOptions)
      fetch("http://127.0.0.1:8080/api/submit", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log("test after")
  }



  


  return (

    <div className="quiz-page">
      <div className="quiz-container">
        {quizFinished != true ? (
          <div className="question-container" id="question-container">
            <div id="question" className="question"> {currentQuestion}</div>
            {questions.length > 0 && correctAnswer == null ? (
              <button className="btn quiz-btn" onClick={() => playquiz()}><span>Start Quiz</span></button>
            ) : null}
            {correctAnswer != null ? (
              <ButtonGroup
                className="button-group"
                orientation="vertical"
                aria-label="button group"
                variant="text"
              >
                <Button onClick={() => checkAnswer(0)} className="q-btn">{answers[0]}</Button>
                <Button onClick={() => checkAnswer(1)} className="q-btn">{answers[1]}</Button>
                <Button onClick={() => checkAnswer(2)} className="q-btn">{answers[2]}</Button>
                <Button onClick={() => checkAnswer(3)} className="q-btn">{answers[3]}</Button>
              </ButtonGroup>
            ) : null}
          </div>
        ) : (
          <div>

            <div className="done">
              <h1>Good Job!</h1>
              Your score was {finalScore}
              Your previous high score is {highScore}
              <a className="quiz-btn" href="/home">Go Back Home</a>
            </div>

          </div>
        )}
        <div id="wizard" className="quiz-wiz">
          <div className="bubble bubble-bottom">
            <p>Lol, You look scared!!!</p>
          </div>
          <Image className="" src="/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority />
        </div>

      </div>

    </div>
  );
}

export default StartQuiz;