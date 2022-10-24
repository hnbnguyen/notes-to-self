const Card = ({ item }) => {
    return ( 
        <div className="card">
            <h2>{item.content}</h2>
            <p>{item.type}</p>
            <p>{item.createdAt}</p>
        </div>
     );
}
 
export default Card;