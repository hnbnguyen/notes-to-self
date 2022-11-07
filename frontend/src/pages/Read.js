import { useState } from "react";
import NavBar from "../components/NavBar";
import { useItemsContext } from '../hooks/useItemsContext'
import { useEffect } from 'react';
import Card from '../components/Card';

const Read = () => {
    const { items, dispatch } = useItemsContext()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/api/items')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_ITEMS', payload: json})
            }
        }

        fetchItems()
    }, [])
    // const [items, setItems] = useState('')

    // const words = [
    //     'you are the best person your mom knows',
    //     'I Love that you are kind to people',
    //     'a girl working at starbucks gave me a sandwich for free (by accident) today, that was nice',
    //     'go get an ice cream',
    //     'sit by a random bench and people watch, let your thoughts run',
    //     'create a new inspo board on pinterest - anything goes'
    // ]

    // const handleShow = (rand) => {
    //     const len = words.length;
    //     setItems(words[Math.floor(Math.random() * len)])
    //     console.log(items)
    // }

    // return ( 
    //     <div className="read">
    //         <h1>read my notes</h1>
    //         <button onClick={handleShow}>show me a note</button>
    //         <div className="flashCard">{items}</div>
    //     </div>
    //  );

    return (
        <div className="read">
            <h1>read my notes</h1>
            <button>show me a note</button>
            <div>
                {items && items.map((item) => (
                    <Card key={item._id} item={item}></Card>
                ))}
            </div>
        </div>
    );
}
 
export default Read;