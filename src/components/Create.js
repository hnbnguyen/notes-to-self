import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    title: {
        fontSize: 50,
        marginLeft: 20
    }
})

const Create = () => {
    const classes = useStyles()
    const [content, setContent] = useState('');
    const [type, setType] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const items = {content, type};
        console.log('note submited')
    }

    return ( 
        <div>
            <h1 className={classes.title}>add a new item</h1>
            <form onSubmit={handleSubmit}>
                <label>add a new item</label>
                <textarea
                    type = "text"
                    required
                    value = {content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <label>item type</label>
                <select
                    value = {type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="note">note to self</option>
                    <option value="activity">thing i can do</option>
                </select>
                <button>add item</button>
            </form>
        </div>
     );
}
 
export default Create;