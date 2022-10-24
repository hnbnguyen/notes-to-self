import { useState } from "react";

const ItemForm = () => {
    const [ content, setContent ] = useState('')
    const [ type, setType ] = useState('')
    const [ error, setError ] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // prevent auto refresh of the page

        const item = {content, type}

        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setContent('')
            setType('')
            setError(null)
            console.log('new item added')
        }
    }

    return (
        <div>
            <form className="create" onSubmit={handleSubmit}>
                <h3>add a new item</h3>

                <label>content:</label>
                <textarea
                    type = "text"
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />

                <label>type:</label>
                <select 
                    value={type} 
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="note">note</option>
                    <option value="action item">action item</option>
                </select>

                <button>add</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
      );
}
 
export default ItemForm;