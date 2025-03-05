import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Tabpanel from '../../components/project/Tabpanel';
import Project from '../../components/project/Project';
import NoLinkProject from '../../components/project/NoLinkProject';

const content = {
    dataswarm: `An Intro to Game Development project that I was a part
                        of. The game is a 2.5D turn-based puzzle game, made in
                        Unity, where the goal is to hack all the enemies and
                        reach the escape point without getting hit by them! The
                        caveat is when they're hacked, they really start to
                        move!`,
    novajack: `A 2D game of Blackjack, where you can discard cards before you commit to a decision. Keep in mind that you only have access to half a deck of playing cards and will play until you run out of cards!`,
    houseGame: `A Brackeys Game Jam 2025.1 submission. This is more of a tech demo rather than an actual game with plot and stuff. We did little to no playtesting, there was supposed to be a broad range of visual effects and actual polishing but those 5 minutes before submission closes done their part. Enjoy!`,
    portfolio: `I made this portfolio website from React/Vite, Typescript and the MUI library. This is here mostly to put together all the work I've done. I plan on continuing on building this website up!`,
    dungeon: `Currently planning out a solo indie game inspired by Darkest Dungeons. Still in the early stages of planning and development.`,
    vtm: `Planning out a Vampire the Masquerade Campaign using Foundry VTT. The setting takes place in the World of Darkness universe, set in the mid 1990s Toronto. The world is soon reaching the turn of a century, and the city's Prince gives a harrowing prophecy of the world's end...`,
    cyberpunk: `I am a fan of cyberpunk and have been sandboxing ideas and flash fiction ideas. At the moment, I wrote a short piece set in the universe. It's more on the level of fanfiction, I wanted to explore moments character development and growth`,
};

const Portfolio = () => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ m: 8, paddingTop: 8 }} id='Portfolio'>
            <Typography
                fontSize={30}
                fontFamily={'monospace'}
                fontWeight={700}
                sx={{ m: 4 }}
            >
                Portfolio
            </Typography>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    textColor: 'white',
                }}
            >
                <Tabs
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    centered={true}
                >
                    <Tab
                        label='Software Development'
                        id='tab0'
                        sx={{ color: 'white' }}
                    />
                    <Tab
                        label='Creative Writing'
                        id='tab1'
                        sx={{ color: 'white' }}
                    />
                    <Tab label='Art' id='tab2' sx={{ color: 'white' }} />
                </Tabs>
            </Box>
            <Tabpanel value={value} index={0}>
                <Box sx={{ marginTop: 4, flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid size={4}>
                            <Project
                                title='Into the Dataswarm'
                                content={content.dataswarm}
                                link='https://pokemonball34.itch.io/into-the-dataswarm'
                                image='DataswarmBanner.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='Novajack'
                                content={content.novajack}
                                link='https://pokemonball34.itch.io/novajack'
                                image='novajack.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='Untitled House Game'
                                content={content.houseGame}
                                link='https://john-io.itch.io/untitled-house-game'
                                image='housebanner.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='Portfolio Website'
                                content={content.portfolio}
                                link='#'
                                image='homebanner.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <NoLinkProject
                                title='Dungeon Management Sim'
                                content={content.dungeon}
                                image='#'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Tabpanel>
            <Tabpanel value={value} index={1}>
                <Box sx={{ marginTop: 4, flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid size={4}>
                            <NoLinkProject
                                title='Vampire the Masquerade'
                                content={content.vtm}
                                image='vtm.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='What We Leave Behind'
                                content={content.cyberpunk}
                                link='/What We Leave Behind.pdf'
                                image='cyberpunk.jpg'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Tabpanel>
            <Tabpanel value={value} index={2}>
                <Box sx={{ marginTop: 4, flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid size={4}>
                            <Project
                                title='Practice Piece - Heimer'
                                content='A practice piece based on a tutorial. Wanted to practice layering colours while maintaining form.'
                                link='/heimer.png'
                                image='heimer.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='Practice Piece - Thresh'
                                content='Practice Piece of janitor Thresh from League of Legends. I have a weakness for villains in uniform.'
                                link='/thresh.png'
                                image='thresh.png'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='My dog'
                                content='My dog Sushi! He is a cutie patooie!'
                                link='/dog.jpg'
                                image='dog.jpg'
                            />
                        </Grid>
                        <Grid size={4}>
                            <Project
                                title='Study Piece - Light'
                                content='Practice on light on skin.'
                                link='/balls.PNG'
                                image='balls.PNG'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Tabpanel>
        </Box>
    );
};

export default Portfolio;
