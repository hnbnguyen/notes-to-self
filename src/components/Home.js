import React from 'react';
import NavBar from './NavBar';
import { createUseStyles } from 'react-jss';
import SplitText from './SplitText';

const useStyles  = createUseStyles({
    subText: {
        marginLeft: 20
    }

})

const Home = () => {

    const classes = useStyles()
    return ( 
        <div className="home">
            <NavBar />
            <h1 className='header'>
                <SplitText copy = 'Note to self 🦭: send your future self a kind note
                and come back when you need to hear it most'/> 
            </h1>
            <p className={classes.subText}>made with 🤍</p>
        </div>
     );
}
 
export default Home;