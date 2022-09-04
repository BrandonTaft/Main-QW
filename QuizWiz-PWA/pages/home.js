import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MovieIcon from '@mui/icons-material/Movie';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BalanceIcon from '@mui/icons-material/Balance';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';
function SelectionPage() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                cs: 400,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="container row column" >

                <Box className='m-auto'>
                    <Grid className="grid-container" container spacing={{ xs: 1, sm: 2.5, md: 3 }} columns={{ xs: 2, sm: 3 }}>
                        <Grid className='square' item xs={1} >
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { type: '9'},
                                    }}
                                >
                                    <div>
                                        <PsychologyIcon />
                                        <div>GENERAL INFO</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/11">
                                    <MovieIcon />
                                    <div>MOVIES</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/22">
                                    <LanguageIcon />
                                    <div>GEOGRAPHY</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/10">
                                    <AutoStoriesIcon />
                                    <div>BOOKS</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/15">
                                    <SportsEsportsIcon />
                                    <div>VIDEO GAMES</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/12">
                                    <MusicNoteIcon />
                                    <div>MUSIC</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/14">
                                    <LiveTvIcon />
                                    <div>TV</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/29">
                                    <BoltIcon />
                                    <div>COMICS</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/20">
                                    <BalanceIcon />
                                    <div>MYTHOLOGY</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/21">
                                    <SportsFootballIcon />
                                    <div>SPORTS</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/9">
                                    <PsychologyIcon />
                                    <div>GENERAL</div>
                                </a>
                            </Box>
                        </Grid>
                        <Grid className='square' item xs={1}>
                            <Box className="grid-item">
                                <a href="/quiz/9">
                                    <PsychologyIcon />
                                    <div>GENERAL</div>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <div className="fill">
                    <Image className='selection img' alt="wizard" src="/wiz5.png" layout='fill' objectFit='scale-down' />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SelectionPage
