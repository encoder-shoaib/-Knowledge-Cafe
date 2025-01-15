
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks ,setBookmarks] = useState([])

  const handelBookmarks = (blog) =>{
    // console.log('book added coming soon')
    // console.log(blog)
    const newBookmarks =[...bookmarks ,blog]
    setBookmarks(newBookmarks)
  }

  const [readingTime ,setReadingTime] = useState(0);

  const handelReadingTime = (time ,id) =>{
    console.log('add reading time soon' , time)
    const netReadingTime = readingTime + time;
    setReadingTime(netReadingTime)

    // remove bookmarks

    const remainingBookMrk = bookmarks.filter(bookMark => bookMark.id !== id);
    setBookmarks(remainingBookMrk)
  }


  return (
    <>
    <div className='md:w-10/12 mx-auto p-4'>
    <Header></Header>
        
        <div className='md:flex'>
          <Blogs 
          handelBookmarks ={handelBookmarks}
          handelReadingTime ={handelReadingTime}
           >
           </Blogs>
          <Bookmarks 
           bookmarks ={bookmarks}
           readingTime= {readingTime}
           > 
           </Bookmarks>
        </div>
    </div>

    </>
  )
}

export default App
