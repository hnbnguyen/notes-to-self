import { useState } from "react";
import NavBar from "./NavBar";


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
            <NavBar />
            <div className="read">
                <h1>read my notes</h1>
                <button onClick={handleShow}>show me a note</button>
                <div className="flashCard">{items}</div>
            </div>
        </div>
     );
}
 
export default Read;