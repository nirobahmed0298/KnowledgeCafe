import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({ bookmark, readTime }) => {
    return (
        <>
            <div className="md:w-2/4 bg-[#1111110D] rounded-lg p-5">
                <h2 className='font-bold'>Bookmarks Blogs : {bookmark.length}</h2>
                {
                    bookmark.map((bkmark,idx) => <Bookmark bkmark={bkmark} key={idx} readTime={readTime}></Bookmark>)
                }
            </div>
        </>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array,
    readTime:PropTypes.number
};

export default Bookmarks;