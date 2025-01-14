import { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
const Blogs = () => {

    const [blogs , setBlogs ] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(rsc => rsc.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className='md:w-2/3'>
            <h1>Blogs!!!</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;