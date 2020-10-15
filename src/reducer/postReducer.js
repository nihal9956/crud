const { CREATE_POST, DELETE_POST, EDIT_POST, UPDATE_POST } = require("../ActionType/actionType")

const initialState={

    post:[]
}


const postReducer=(state=initialState,action)=>{


    if(action.type===CREATE_POST){
      
        return({
            ...state,
            post:[action.data,...state.post]
        })
    }else if(action.type===DELETE_POST){
       let Post=state.post.filter((post)=>post.id!==action.id)
        return({
            ...state,
            post:Post
        })
    }else if(action.type===EDIT_POST){
          let Post=state.post.map((post)=>post.id===action.id?{...post,edit:!post.edit}:post)

          return({
              ...state,
              post:Post
          })
    }else if( action.type===UPDATE_POST){
        const result= state.post.map((post)=>{
            if(post.id === action.id) {
              return {
                 ...post,
                 title:action.data.newTitle,
                 post:action.data.newPost,
                 edit: !post.edit
              }
            } else return post;
          })

          return({
              ...state,
              post:result
          })
    }

    return({
 
        ...state
    }) 
}


export default postReducer