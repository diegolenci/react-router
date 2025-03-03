import { useParams } from "react-router-dom";

const SinglePost = () => {
    
    const{id} = useParams()

    return(

        <h1>Singolo prodotto: {id} </h1>
    )
}

export default SinglePost