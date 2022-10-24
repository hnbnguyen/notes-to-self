import { useState } from "react";
import ItemForm from "../components/ItemForm";

const Create = () => {
    const [content, setContent] = useState('');
    const [type, setType] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('note submited')
    }

    return ( 
        <div className="create">
            <ItemForm />
        </div>
        
     );
}
 
export default Create;