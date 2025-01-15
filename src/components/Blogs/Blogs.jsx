import { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'; // ES6



const Blogs = ({handelBookmarks,handelReadingTime}) => {

    const [blogs , setBlogs ] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(rsc => rsc.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className='md:w-2/3'>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog = {blog} 
                    handelReadingTime ={handelReadingTime}
                    handelBookmarks = {() => handelBookmarks(blog)} 
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelBookmarks:PropTypes.func.isRequired,
    handelReadingTime: PropTypes.func,
};

export default Blogs;