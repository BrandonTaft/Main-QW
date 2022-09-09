import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popup from "reactjs-popup";
import { useRouter } from 'next/router';


function StartQuiz() {
  const router = useRouter()
  const { cat } = router.query
  const [currentquestion, setcurrentquestion] = useState("");
  let [questioncounter, setquestioncounter] = useState(0);
  const [questions, setquestions] = useState([]);
  const [correctanswer, setcorrectanswer] = useState(null);
  const [answers, setanswers] = useState([]);
  let [quizfinished, setquizfinished] = useState(false);
  let currentanswers = [];
  let [currentscore, setcurrentscore] = useState(0);
  let [finalscore, setfinalscore] = useState(0);
  let finaltempscore = 0
  let [highscore, sethighscore] = useState(0);
  let [wizardName, setwizardName] = useState("");



  function getquestions(cat) {
    // fetch(`https://damp-spire-28696.herokuapp.com/quiz/${cat["category"]}`)
    fetch(`http://127.0.0.1:8080/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        setquestions([...result]);
      })
      .catch(error => console.log("error", error));
  }

  function gamesOver() {
    let randomizer = Math.floor(Math.random() * 72)
    console.log(randomizer)
    finaltempscore = currentscore * 7 * randomizer
    setfinalscore(finaltempscore)
    console.log(finaltempscore)

    fetch("https://damp-spire-28696.herokuapp.com/api/userscore?username=" + wizardName)
      .then(response => response.json())
      .then(result => {
        console.log("users high score is:" + result.score)
        sethighscore(result.score)

      })
      .catch(error => console.log('error', error));

    var myHeaders = new Headers();
    myHeaders.append("Content-cat", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ "userName": wizardName, "score": finaltempscore }),
      redirect: 'follow'
    };

    // fetch("https://damp-spire-28696.herokuapp.com/api/submit", requestOptions)
    fetch("http://127.0.0.1:8080/api/submit", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  function playquiz() {
    document.getElementById('wizard').classList.add('remove')
    if (questioncounter === 10) {
      setquizfinished(true);
    } else {
      currentanswers = [];
      setcurrentquestion(
        questions[questioncounter].question
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&hellip;)/g, "...")
          .replace(/(&rdquo;)/g, '"')
      );
      setcorrectanswer(
        questions[questioncounter].correct_answer
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&hellip;)/g, "...")
          .replace(/(&rdquo;)/g, '"')
      );

      for (let i = 0; i < 3; i++) {
        currentanswers.push(
          questions[questioncounter].incorrect_answers[i]
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
      currentanswers.push(
        questions[questioncounter].correct_answer
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&rdquo;)/g, '"')
          .replace(/(&hellip;)/g, "...")
      );
      setanswers(currentanswers.sort(() => Math.random() - 0.5));
    }
  }

  function checkAnswer(i) {
    if (answers[i] === correctanswer) {
      console.log("right answer!");
      setcurrentscore(currentscore + 1);
    } else {
      console.log("you dummy");
    }
    setquestioncounter((questioncounter += 1));
    playquiz();
  }

  useEffect(() => {
    setwizardName(localStorage.getItem('name'))
    console.log("name", wizardName)
    console.log(currentscore);


    if (questions.length === 0) {
      getquestions(cat);
    }
    if (quizfinished === true) {
      gamesOver();
    }
    // return <div>{currentquestion}</div>;
  }, [quizfinished, currentscore, highscore]);

  return (

    <div className="quiz-page">
      <div className="quiz-container">
        {quizfinished != true ? (
          <div className="question-container" id="question-container">
            <div className="question"> {currentquestion}</div>
            {correctanswer != null ? null : (
              <button className="quiz-btn" onClick={() => playquiz()}><span>Start Quiz</span></button>
            )}
            {correctanswer != null ? (
              <ButtonGroup
                className="button-group"
                orientation="vertical"
                aria-label="button group"
                variant="text"
              >
                <Button onClick={() => checkAnswer(0)} id="q-btn">{answers[0]}</Button>
                <Button onClick={() => checkAnswer(1)} id="q-btn">{answers[1]}</Button>
                <Button onClick={() => checkAnswer(2)} id="q-btn">{answers[2]}</Button>
                <Button onClick={() => checkAnswer(3)} id="q-btn">{answers[3]}</Button>
              </ButtonGroup>
            ) : null}
          </div>
        ) : (
          <div>
            {/* <Popup modal trigger={<Button id="sub-btn">Submit Quiz</Button>}>
              {" "} */}
            <div className="done">
              <h1>Good Job!</h1>
              Your score was {finalscore}
              Your previous high score is {highscore}
            </div>
            {/* {" "}
            </Popup> */}
          </div>
        )}
        <div id="wizard" className="quiz-wiz">
          <div class="bubble bubble-bottom">
            <p className="first-sentence">Lol, You look scared!!!</p>
          </div>
          <Image className="" src="/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" />
        </div>

      </div>

    </div>
  );
}

export default StartQuiz;