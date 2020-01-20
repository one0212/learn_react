import { get } from 'axios';

// 發送api請求 獲取數據
export function getPosts() {
    return get('https://jsonplaceholder.typicode.com/posts') 
}