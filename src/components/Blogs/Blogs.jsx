import { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'; // ES6



const Blogs = ({handelBookmarks}) => {

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
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog = {blog} 
                    handelBookmarks = {() => handelBookmarks(blog)} 
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelBookmarks:PropTypes.func.isRequired,
};

export default Blogs;