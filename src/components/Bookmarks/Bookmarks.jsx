import PropTypes from 'prop-types'; // Import PropTypes
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-slate-50 rounded">
            <h1 className='text-center text-3xl m-3'>Bookmarked Blogs: {bookmarks.length}</h1>
            {bookmarks.map(bookmark => (
                <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired, // Validates that `bookmarks` is a required array of objects
};

export default Bookmarks;
