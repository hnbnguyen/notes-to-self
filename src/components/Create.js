import { useState } from "react";

const Create = () => {
    const [content, setContent] = useState('');
    const [type, setType] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const items = {content, type};
    }

    return ( 
        <div>
            <h1>add a new item</h1>
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