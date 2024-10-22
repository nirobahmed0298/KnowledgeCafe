
import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";
const Blog = ({id, blog,handleAddBookmark,handleReadTime }) => {
    let {hashtags, reading_time, posted_date, author, author_img, title, cover } = (blog)
    return (
        <div>
            <div className='w-full space-y-3 mb-5'>
                <img className='rounded-md' src={cover} alt={title} />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <img className='w-20' src={author_img} />
                        <div>
                            <h4>{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{reading_time} min Read
                        <button onClick={()=> handleAddBookmark(blog)}><FaBookmark></FaBookmark></button>
                        </p>
                    </div>
                </div>
                <h1 className='font-bold text-3xl'>{title}</h1>
                <p>
                    {hashtags.map((hash,inx)=><span key={inx}>#{hash} </span>)}
                </p>
                <button onClick={()=>handleReadTime(id,reading_time)} className='underline font-bold text-sm text-[#6047EC]'>Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleReadTime:PropTypes.func,
    id:PropTypes.object
}
export default Blog;