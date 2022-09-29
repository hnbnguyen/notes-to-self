import { useState } from "react";

function Random(maxNumber){
    const randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    return randomNumber
}

const ItemShow = ({items, handleDelete}) => {
    const initalItemState = {
        content: '',
        type: '',
        id: 0
    }
    const [itemShown, setItemShown] = useState(initalItemState)
    
    const handleShow = () => {
        const rand = Random(7)
        console.log(rand)
        const one = items.filter(item => item.id === rand);
        console.log(one[0])
        console.log(one[0].content)
    };

    return ( 
        <div>
            <p>what you've saved for a rainy day 🌞</p>
            <button onClick={() => handleShow()}>show me a note</button>
            {/* {items.map(item => (
                <div key={item.id}>
                    <p>{item.type}</p>
                    <h1>{item.content}</h1>
                    <button onClick={() => handleDelete(item.id)}>delete item</button>
                </div>
            ))} */}
        </div>
     );
}
 
export default ItemShow;