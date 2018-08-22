import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));


const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));


const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id 
    }
}

const boundEditComment = text => dispatch(editComment(text, id));


const thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        likes: ++likes,
        id 
    }
}

const boundThumbUpComment = (id, likes) => dispatch(addComment(id, likes));

const thumbDownComment = (id, likes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        likes: --likes,
        id 
    }
}

const boundThumbDownComment = (id, likes) => dispatch(thumbDownComment(id, likes));


export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';