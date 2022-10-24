import { useState } from "react";

const Create = () => {
    const [content, setContent] = useState('');
    const [type, setType] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('note submited')
    }

    return ( 
        <div className="create">
            <h1>create note</h1>
            <form onSubmit={handleSubmit}>
                <label>add a new item</label>
                <textarea
                    type = "text"
                    required
                    value = {content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <label>item type</label>
                <form
                    value = {type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <label>
                        <input
                        type="radio"
                        value="note"/>
                        <span>note</span>
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="activity"/>
                        <span>activity</span>
                    </label>
                </form>
                <button>add item</button>
            </form>
        </div>
        
     );
}
 
export default Create;