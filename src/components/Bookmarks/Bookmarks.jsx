import PropTypes from 'prop-types'; // Import PropTypes
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks ,readingTime  }) => {
    return (
        <div className="md:w-1/3 bg-slate-50 rounded mb-3">
            <div className='flex justify-center items-center border rounded-lg py-4'>
                <h1 className='text-2xl font-bold'>Spent time on read : <span className='text-purple-600'>{readingTime}</span> min</h1>
            </div>

            <h1 className='text-center text-3xl m-3'>Bookmarked Blogs: {bookmarks.length}</h1>

            {/* map  */}

            {
            bookmarks.map((bookmark ,idx )=> (
                <Bookmark key={idx} bookmark={bookmark}></Bookmark>
            ))
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired, // Validates that `bookmarks` is a require
    readingTime: PropTypes.func,
};

export default Bookmarks;
