import React from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_POST } from './ActionType/actionType'

function Update(props) {
    
    let getTitleInput=React.createRef()
    let getPostInput=React.createRef()

    const dispatch=useDispatch()




    function handleUpdate(e){
        e.preventDefault();
        dispatch({

            type:UPDATE_POST,
            data:{

                newTitle:getTitleInput.current.value,
                newPost:getPostInput.current.value,
               
            },
            id:props.Id
            
        })

    }

    return (
        <div>
              <form autoComplete='off'>
                <input type='text' name='title' ref={getTitleInput}/><br/><br/>
                <textarea rows='3' cols='18' ref={getPostInput}/><br/><br/>
                <button type="submit" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}

export default Update
