import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    heading: {
        fontSize: 50,
    },
    simplehighlighta: {
        backgroundColor: '#ff7709',
        borderRadius: 50,
    },
    simplehighlightb: {
        backgroundColor: '#b4ff44',
        borderRadius: 50,
    },
    carebear: {
        // backgroundColor: '#aa75ff',
        borderRadius: 50,
        fontSize: 20,
    },
    options: {
        // display: 'flex',
        // justifyContent: 'space-around'
    }

})

const Home = () => {
    const classes = useStyles()
    return ( 
        <div className="home">
            <h1 className={classes.heading}>
                Hi <span className={classes.simplehighlighta}>cara</span> 👀, <span className={classes.simplehighlightb}>i'm nori</span> 🐻🍙 
                <span className={classes.carebear}> (your designated care bear)</span> <br />
                i'm here to make sure you are okay :)
            </h1>
            <h1>how are you feeling right now?</h1>
            <div className={classes.options}>
                <h3>🤗 i'm grateful</h3>
                <h3>😌 just content</h3>
                <h3>😶 could be better</h3>
                <h3>😞 not my best today</h3>
            </div>
            
        </div>
     );
}
 
export default Home;