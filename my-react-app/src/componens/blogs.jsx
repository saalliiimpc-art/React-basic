
export  function Blog(props){
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}
import Style from './blogs.module.css';
export default function Bl(){
    const blogs=[
        { title: "My Blog 1", content: "My blog 1 content" },
        { title: "My Blog 2", content: "My blog 2 content" },
        { title: "My Blog 3", content: "My blog 3 content"},
        { title: "My Blog 4", content: "My blog 4 content" },
        { title: "My Blog 5", content: "My blog 5 content" }
    ]
    return (
        <div className={Style.card}>
            <h1>blogs</h1>
            <hr />
            {blogs.map((blog,index)=>(
                <Blog
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    />
            ))}
        </div>
       
    )
}