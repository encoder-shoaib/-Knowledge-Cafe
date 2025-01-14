import PropTypes from 'prop-types'; // ES6
import './Blog.css';

const Blog = ({ blog }) => {
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
                <div className='flex gap-4'>
                    <p>{reading_time} min read</p>
                    <img className='h-5' src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000" alt="" />
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
};

export default Blog;
