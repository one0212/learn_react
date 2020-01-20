import { getPosts } from '../services/post_api';

// 因為為異步方法
export const loadPostsAction = async dispatch => {
    const res = await getPosts()
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
}