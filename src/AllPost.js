import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_POST, EDIT_POST } from './ActionType/actionType'
import './AllPost.css'
import Update from './Update'
function AllPost() {

    const post = useSelector(state => state.post)
    const dispacth=useDispatch()
    function Delete(Id){
       
        dispacth({

            type:DELETE_POST,
            id:Id

        })
     }


    function Edit(Id){
        dispacth({
            type:EDIT_POST,
            id:Id
        })
    }





    return (

        <div className='post'>

          
            
            <h1>All Post</h1>
          
          {post.map(item=>{
    
    return  <div className='post__container'>
                  
              {item.edit?<Update Id={item.id}/>:<div className='myPost'>
              <h1>{item.title}</h1>
          <p>{item.post}</p>
       
          <button onClick={()=>Edit(item.id)}>Edit</button>
          <button onClick={()=>Delete(item.id)}>Delete</button>
          </div>}
          </div>
          })}
        </div>
    )
}

export default AllPost
