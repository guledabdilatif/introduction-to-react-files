import { useState } from 'react';
import Post from './components/Post';
import './App.css';

function App() 
{
  
  const[title, setTitle] = useState(' ')
  const[posts, setPost]= useState(
 [
  {
    id:1,
    Title: 'Hello World',
    Description:'Headings must have content and the content must be accessible by a screen reader. Headings must have content and the content must be accessible by a screen reader. Headings must have content and the content must be accessible by a screen reader'
  },
  {
    id:2,
    Title: 'Hello World',
    Description:'Headings must have content and the content must be accessible by a screen reader. Headings must have content and the content must be accessible by a screen reader'
  }
 ]
)

  return (
<div className='container '>
<Post posts = {posts}/>
<input className='mt-5 form-control' type="text" value={title} onChange={e=>setTitle(e.target.value)} />
          {title}
</div>
  );
}

export default App;
