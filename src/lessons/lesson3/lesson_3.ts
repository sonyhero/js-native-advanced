import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})

export const JsonPlaceHolder = {
    getPosts() {
        return instance.get(`posts`)
            .then(res =>res.data)
    },
    addPosts(body: BodyType) {
        return instance.post(`posts`, body)
    },
    deletePost(postId: number) {
        return instance.delete(`posts/${postId}`)
    },
    updatePost(title: string, postId: number) {
        return instance.put(`posts/${postId}`,{title})
    }
}

export type BodyType = {
    title: string
    body: string
    userId: number
}