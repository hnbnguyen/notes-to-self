import { useEffect, useState } from 'react';
// components
import Card from '../components/Card';

const AllItems = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/api/items')
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
                    <Card key={item._id} item={item}/>
                ))}
            </div>
        </div>
     );
}
 
export default AllItems;