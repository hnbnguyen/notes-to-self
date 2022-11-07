import { useEffect, useState } from 'react';
import { useItemsContext } from '../hooks/useItemsContext'
// components
import Card from '../components/Card';

const AllItems = () => {
    const {items, dispatch} = useItemsContext()

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