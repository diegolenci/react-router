import MainNav from "../components/MainNav"
import { useState, useEffect } from "react"
import axios from "axios"

const PostList = () => {

    const [ posts, setPosts ] = useState([])

    useEffect( () => {
        axios.get('http://localhost:3000/api/posts')
        .then( res => setPosts(res.data))
    }, [] )
    return(
        <>
            <MainNav/>
            <div className="container">
                <div className="row">
                    {
                        posts.map((elem) => {
                            return(
                                <div key={elem.id} className="col-4">
                                    <div className="card">
                                        {/*<img className="card-img-top" src="" alt="" />*/}
                                        <div className="card-body">
                                            <h4 className="card-title">{elem.title}</h4>
                                            <p className="card-text">{elem.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PostList