
import { useState } from 'react';
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/bookmarks'
import Header from './Header/Header'

function App() {
  let [bookmark,setBookmark] = useState([]);
  let [readTime,setReadtime] = useState(0);
  let handleAddBookmark =(blog)=>{
    let newBookmark=[...bookmark,blog]
    setBookmark(newBookmark)
  }
  let handleReadTime = (id,time)=>{
    setReadtime(readTime + time);
    const remainingBookmarks = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(remainingBookmarks);
  }
  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <div className='text-center my-2 p-6 rounded-xl bg-[#6047EC1A] text-[#6047EC] border-[#6047EC]'>
           <h1 className='font-bold text-xl'>Spent time on read : {readTime}</h1>
        </div>
        <div className='md:flex my-10'>
        <Blogs handleAddBookmark={handleAddBookmark} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks readTime={readTime} bookmark={bookmark}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
