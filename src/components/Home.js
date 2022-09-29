import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    heading: {
        fontSize: 50,
    },

})

const Home = () => {
    const classes = useStyles()
    return ( 
        <div className="home">
            <h1 className={classes.heading}>
                Note-to-self 🦭
            </h1>
            <p>aren't you glad you came prepared:)</p>
            <div>
                <a href='./create'>
                    <p>Create note</p>
                </a>
                <a href='./read'>
                    <p>Read note</p>
                </a>
            </div>
        </div>
     );
}
 
export default Home;