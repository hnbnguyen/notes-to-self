import { useItemsContext } from '../hooks/useItemsContext';

const Card = ({ item }) => {
    const { dispatch } = useItemsContext()

    const handleClick = async () => {
        const response = await fetch('/api/items/' + item._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_ITEM', payload: json })
        }
    }

    return ( 
        <div className="card">
            <h2>{item.content}</h2>
            <p>{item.type}</p>
            <p>{item.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
     );
}
 
export default Card;