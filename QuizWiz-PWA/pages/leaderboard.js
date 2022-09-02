import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScoreCard from '../src/components/Scorecard';
import Background from '../src/components/Background';

function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        getLeaderboard()
    }, [])

    const getLeaderboard = () => {
        fetch('https://damp-spire-28696.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
                console.log(leaderboard[0].score)
            }
            )
    }

    const leaderboardList = leaderboard.map((score, index) => {
        return (
            <tr key={index}>
                <td style={{ paddingLeft: "8px" }}><Image className="trophy" src="/icons/trophy.png" alt="leaderboard icon" width={55} height={60} /></td>
                <td>{score.username}</td>
                <td style={{ textAlign: "right", paddingRight: "16px" }} >{score.score}</td>
            </tr>
        )
    })
    return (
        <div className='leaderboard-page '>
            <Background />
            <div className="leader-main">
            <ScoreCard />
            
            <div className='flex p-8 pt-0'>
                        <div className='table-title w-50 ma-auto'>Wizard</div>
                        <div className='table-title w-50 ma-auto'>High Score</div>
                    </div>
                <table>
                    
                    {leaderboardList}
                </table>
            </div>
        </div>
    )
}
export default Leaderboard