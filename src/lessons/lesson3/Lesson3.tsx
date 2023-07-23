import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import {JsonPlaceHolder} from './lesson_3';

type PostsType = {
    userId: number
    id: number
    title: string
    body: string
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');
    const [posts, setPosts] = useState<PostsType[]>([])

    const searchFilm = async () => {
        const data = await API.searchFilmsByTitle(searchName)
        setSerachResult(JSON.stringify(data))
    };

    const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        const data = await API.searchFilmsByType(searchNameByType, type)
        setSerachResultByType(JSON.stringify(data))
    }

    const showPosts = async () => {
        const data = await JsonPlaceHolder.getPosts()
        setPosts(data)
    }

    const addPosts = async () => {
                const data = await JsonPlaceHolder.addPosts({
                    body: 'postBody',
                    title: 'postTitle',
                    userId: 5
                })
        console.log(data)
    }
    const deletePosts = async () => {
        const data = await JsonPlaceHolder.deletePost(5)
        console.log(data)
    }

    const updatePost = async () => {
        const data = await JsonPlaceHolder.updatePost('lala', 5)
        console.log(data)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t="movie">Movie</button>
                <button onClick={searchByType} data-t="series">Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>

            <div>
                <h2>Posts</h2>
                <button onClick={showPosts}>show posts</button>
                <button onClick={()=>setPosts([])}>delete posts</button>
                <div>{
                    posts.map(el => {
                        return (
                            <li key={el.id}>
                                <div>title: {el.title}</div>
                                <div>body: {el.body}</div>
                                </li>
                        )
                    })
                }
                </div>
                <h2>Add Post</h2>
                <button onClick={addPosts}>add post</button>
                <h2>Delete Post</h2>
                <button onClick={deletePosts}>delete post</button>
                <h2>Update Post</h2>
                <button onClick={updatePost}>update post</button>

            </div>

        </div>
    );
}
export default Lesson3;