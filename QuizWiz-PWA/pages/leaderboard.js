import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScoreCard from '../src/components/Scorecard';
import Background from '../src/components/Background';

function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        getLeaderboard()
    }, []);

    const getLeaderboard = () => {
        // fetch('https://damp-spire-28696.herokuapp.com/api/highscore')
        fetch('http://127.0.0.1:8080/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    };

    const leaderboardList = leaderboard.map((score, index) => {
        return (
            <tr key={index}>
                <td className="left-column"><Image className="prize" src="/icons/trophy.png" alt="leaderboard icon" width={30} height={35} /></td>
                <td className="middle-column">{score.username}</td>
                <td className="right-column" >{score.score}</td>
            </tr>
        )
    });
    return (
        <div className='leaderboard-page '>
            <Background />
                <ScoreCard />
                <div className='flex'>
                    <div className='table-title w-50 ma-auto'>Wizard</div>
                    <div className='table-title w-50 ma-auto'>High Score</div>
                </div>
                <div className="lead-container">
                    <table>
                        <tbody>
                            {leaderboardList}
                        </tbody>
                    </table>
                </div>
            <div className='ss'><div className='world'></div></div>
        </div>
    )
};
export default Leaderboard