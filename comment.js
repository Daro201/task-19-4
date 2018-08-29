import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT,
} from './actions';

const initialState = {
    comments: [],
    users: []
};

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...comments];

        case REMOVE_COMMENT:
            return comments: comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return comments: comments.map(comment => {
            	if(comment.id === action.id) {
            	return {...comment, text: action.text} 
            	}  
            return comment;
        	});
    	case THUMB_UP_COMMENT:
            return comments: comments.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: ++comment.votes}
                }
            return comment;
            });
        case THUMB_DOWN_COMMENT:
            return comments: comments.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: --comment.votes}
                }
            return comment;
           	});
        default: 
    		return state;
    }
}


export default comments;









