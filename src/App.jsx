
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


  return (
    <>
    <div className='md:w-10/12 mx-auto p-4'>
    <Header></Header>
        
        <div className='md:flex'>
          <Blogs handelBookmarks ={handelBookmarks} ></Blogs>
          <Bookmarks bookmarks ={bookmarks}></Bookmarks>
        </div>
    </div>

    </>
  )
}

export default App
