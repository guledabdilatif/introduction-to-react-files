
import React from 'react'
import PostItem from './PostItem'
const Post= ({posts}) => {
  const HandleClick=()=>{
    console.log('I am Clicked')
    console.log(posts)
  }
  return (
    <>
    
    <h5 className=" display-6 text-center">Latest Post</h5>
     {posts.map(title=>(
     
     <PostItem title={title} HandleClick={HandleClick}/>
     ))}
    
     
    </>
  )
}

export default Post