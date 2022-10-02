import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    frame: {
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
        justifyContent: "space-between",
        borderBottom: '1px solid black',
    },
    link: {
        textDecoration: "none",
        color: "black",
    }
})

const NavBar = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.frame}>
            <a href='./create' className={classes.link}>
                <p>Create note</p>
            </a>
            <a href='./read' className={classes.link}>
                <p>Read note</p>
            </a>
        </div>
     );
}
 
export default NavBar;