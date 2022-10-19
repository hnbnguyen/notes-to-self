import { useEffect, useState } from 'react';

const AllItems = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:4000/api/items')
            const json = await response.json()

            if (response.ok) {
                setItems(json)
            }
        }

        fetchItems()
    }, [])

    return ( 
        <div className = "allItems">
            <h2>all items </h2>
            <div className="items">
                {items && items.map((item) => (
                    <p key={item._id}>{item.content}</p>
                ))}
            </div>
        </div>
     );
}
 
export default AllItems;