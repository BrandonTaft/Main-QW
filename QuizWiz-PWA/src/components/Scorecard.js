import React, { useState, useEffect } from 'react';

function ScoreCard() {
    const [myScore, setMyScore] = useState(null)
    const [wizardName, setwizardName] = useState("")

    useEffect(() => {
        let name = localStorage.getItem('name')
        setwizardName(name.toUpperCase())
        getuserscore(name)
    }, []);

    function getuserscore(wizardName) {
        fetch(`https://damp-spire-28696.herokuapp.com/api/userscore?username=${wizardName}`)
            .then(response => response.json())
            .then(myScore => {
                setMyScore(myScore.score)
            })
    };

    return (
        <div className="scorecard">
            <p>Your Score</p>
            <div className="dial">      
                    {/* {myScore} */}
                    55555
            </div>
        </div>
    )
}

export default ScoreCard