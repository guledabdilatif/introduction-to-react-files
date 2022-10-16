import React from 'react'

const PostItem = ({HandleClick, title} ) => {
  return (
    <div key={title.id} className={`card border-0 shadow mt-1 ${title.id===2 && 'bg-danger'}`}> 
    <div className='card-body'>
      <h5 className="card-title">{title.Title}</h5>
         <p className="card-text">{title.Description} </p>
         <button onClick={HandleClick} className='btn btn-primary'>Submit</button>
       </div> 
       </div>
  )
}

export default PostItem