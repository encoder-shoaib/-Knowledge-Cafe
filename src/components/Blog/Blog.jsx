import PropTypes from 'prop-types'; // ES6
import { CiBookmark } from "react-icons/ci";
import './Blog.css';

const Blog = ({ blog ,handelBookmarks}) => {
    const { title ,cover,author_img ,reading_time,author,posted_date,hashtags} = blog;
    return (
        <div className='flex flex-col gap-5'>
            <img className='rounded-2xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='h-14' src={author_img} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>{reading_time} min read</p>
                    <button
                        onClick={handelBookmarks} 
                        className='text-2xl'> <CiBookmark />
                    </button>
                </div>
            </div>
            <h1 className='text-2xl font-bold  w-1/2'>{title}</h1>

            <p className='mb-9 font-bold'>
                {
                    hashtags.map((hash,idx)=> <span key={idx}> <a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmarks:PropTypes.func.isRequired,
};

export default Blog;
