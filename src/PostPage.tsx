import { useEffect, useState } from "react"
type postType = {
    userId : number,
    id:number,
    title:string,
    body:string
}
const PostPage = ()=>{
    const [posts,setPosts] = useState<postType[]>([]);
    const getPosts = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resJson = await res.json();
        setPosts(resJson)
        console.log(resJson)
    }
    useEffect(()=>{
        getPosts();
    },[])
    return (
    <section>
        <h4>Posts Page</h4>
        {/* <button onClick={getPosts}>Click me</button> */}

        {posts.map((item)=>{
                return (
                    <div className="my-10 text-justify">
                        <h1 >{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                )
        })}

        
    </section>)
}

export default PostPage