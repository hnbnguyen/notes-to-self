import { useState } from "react";

function Random(maxNumber){
    const randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    return randomNumber
}

const ItemShow = ({items, handleDelete}) => {
    const [itemShown, setItemShown] = useState(items)

    // const rand = Random(7)
    // const one = items.filter(item => item.id === rand);
    // setItemShown(one);
    // console.log(one)

    return ( 
        <div>
            {/* <h1>{itemShown.content}</h1> */}
            <p>heheheh</p>
            {items.map(item => (
                <div key={item.id}>
                    <p>{item.type}</p>
                    <h1>{item.content}</h1>
                    <button onClick={() => handleDelete(item.id)}>delete item</button>
                </div>
            ))}
        </div>
     );
}
 
export default ItemShow;