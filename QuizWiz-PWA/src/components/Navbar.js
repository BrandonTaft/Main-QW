import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from './Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { yellow } from '@mui/material/colors';

function Navbar() {
    const router = useRouter()
    const [name, setName] = useState("")
    useEffect(() => {
        // Perform localStorage action
        const name = localStorage.getItem("name")
        setName(name)
      }, [])
    // Clear user info and send back to login page
    function logOut() {
        localStorage.clear()
        router.push('/')
    }
    // Determines initial of user to put in avatar
    function stringAvatar(name) {
        return {
          children: `${name.split(' ')[0][0]}` ,
        };
      }

    return (
        <Box className="iconBar">
            <Link href="/home">
                <Image src="/icons/house.png" alt="home icon" width={60} height={60} />
            </Link>
            <Link href="/leaderboard">
                <Image className="trophy" src="/icons/trophy.png" alt="leaderboard icon" width={55} height={60} />
            </Link>
            <span onClick={logOut} >
                <Image src="/icons/exit.png" alt="logout icon" width={60} height={60} />
            </span>
            <Link href="/profile">
            <Avatar className="avatar" sx={{ bgcolor: '#28175a', color: '#ceb728' }} {...stringAvatar(name.toUpperCase())} />
            </Link>
        </Box>
    )
}

export default Navbar