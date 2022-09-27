import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    heading: {
        fontSize: 50,
    }
})

const Home = () => {
    const classes = useStyles()
    return ( 
        <div className="home">
            <h1 className={classes.heading}>
                Hi, I'm mimi, and this is my recent activities on:
                spotify, instagram, tiktok, linkedin, youtube, gmail, pinterest, and discord 
            </h1>
        </div>
     );
}
 
export default Home;