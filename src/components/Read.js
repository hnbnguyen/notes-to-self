import { useState } from "react";

const Read = () => {
    const [items, setItems] = useState('')
    const words = [
        'you are the best person your mom knows',
        'I Love that you are kind to people',
        'a girl working at starbucks gave me a sandwich for free (by accident) today, that was nice',
        'go get an ice cream',
        'sit by a random bench and people watch, let your thoughts run',
        'create a new inspo board on pinterest - anything goes'
    ]

    const handleShow = (rand) => {
        const len = words.length;
        setItems(words[Math.floor(Math.random() * len)])
        console.log(items)
    }

    return ( 
        <div>
            <button onClick={handleShow}>show me a note</button>
            <div>{items}</div>
        </div>
     );
}
 
export default Read;