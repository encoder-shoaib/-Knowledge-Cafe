
import PropTypes from 'prop-types'; // Import PropTypes

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="flex flex-col gap-8 p-5 m-4 bg-slate-200 rounded-xl">
                <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
