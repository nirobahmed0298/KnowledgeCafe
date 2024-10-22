import PropTypes from 'prop-types';

const Bookmark = ({ bkmark }) => {
    return (
        <>
            <div className='bg-white
                p-4' style={{ padding: '10px', borderRadius: '10px', margin: '10px' }}>
                <h2 className='font-bold'>{bkmark.title}</h2>
            </div>
        </>
    );
};

Bookmark.propTypes = {
    bkmark: PropTypes.object
};

export default Bookmark;