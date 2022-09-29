import { useEffect, useState } from "react";
import ItemShow from "./ItemShow";

const Read = () => {
    const [items, setItems] = useState([
        { content: 'you are the best person your mom knows', type: 'note to self 🧸', id: 1},
        { content: 'i love that you are kind to people, but i love that you are kind to yourself more', type: 'note to self 🧸', id: 2},
        { content: 'a girl working at starbucks gave me a sandwich for free (by accident) today, that was nice', type: 'note to self 🧸', id: 3},
        { content: 'go get an ice cream', type: 'an action item 🎱', id: 4},
        { content: 'sit by a random bench and people watch, let your thoughts run', type: 'an action item 🎱', id: 5},
        { content: 'create a new inspo board on pinterest - anything goes', type: 'an action item 🎱', id: 6}
    ]);

    const handleDelete = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    useEffect(() => {
    })
    
    return ( 
        <div>
            <ItemShow items={items} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Read;