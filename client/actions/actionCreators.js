//increment
export function increment(index){
  return{
    type: 'INCREMENT_LIKES',
    index
  }
} 

//add comments
export function addComment(postId, author , comment){
  return{
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove commentss
export function removeComment (postId){
  return{
  type:'REMOVE_COMMENT',
  postId
  }
}
