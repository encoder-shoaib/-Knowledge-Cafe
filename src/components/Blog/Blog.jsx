import PropTypes from 'prop-types'; // ES6
import './Blog.css';

const Blog = ({ blog }) => {
    const { cover } = blog;
    return (
        <div>
            <img src={cover} alt="" />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default Blog;
