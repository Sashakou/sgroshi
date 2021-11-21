import React from 'react';
import Header from "../header";
import * as axios from "axios";
import InputMask from 'react-input-mask';
import {useState, useEffect} from 'react';

const Posts = (data) => {
    return (
        <div className="post">
            <div className="title">{data.posts.title}</div>
            <div className="body">{data.posts.body}</div>
        </div>
    )
}
 const Inquiries = () => {
     const [isLoading, setIsLoading] = useState(false);
     const [posts, setPosts] = useState([]);
     const [userId, setUserId] = useState(null);
     const [inputDisable, setInputDisable] = useState(true);
     useEffect (() => {
         RequestPosts();
     }, [])


     const RequestPosts = () => {
        setIsLoading(true);
        axios.get(
            `http://jsonplaceholder.typicode.com/posts`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                console.log(response.data);
                setPosts(response.data.slice(0,10));
                setIsLoading(false);
                setUserId(null);
            })
            .catch((error) => {
                console.log(error.response);

            });
    }
     const RequestUserPosts = (id) => {
        setIsLoading(true);
        console.log(`http://jsonplaceholder.typicode.com/users/${id}/posts`);
        axios.get(
            `http://jsonplaceholder.typicode.com/users/${id}/posts`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
     const handleSearch = () => {
        if(!setInputDisable){
            RequestUserPosts(userId);
        }
    }
     const handleSearchEnter = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    }
     const handUserId = (e) => {
        console.log(e.target.value);

        if(e.target.value != ''){
            setUserId(e.target.value);
            setInputDisable(false);
        }else{
            setInputDisable(true);
        }
    }
    return (
        <div className="inquiries">
            <Header/>
            <div className="coverBlock">
                <div className="searchBlock">
                    <InputMask maskChar="" mask="999999999999" type="text" value={userId} onChange={handUserId} onKeyDown={handleSearchEnter} placeholder="Введіть id"/>
                    <button disabled={inputDisable ? 'disabled' : ''} onClick={handleSearch}>Пошук</button>
                </div>
                <div className="postsBlock">
                    {
                        isLoading
                            ? <div className="coverloader">
                                <div className="loader"></div>
                            </div>
                            : posts.length == 0
                            ? <div className="post">
                                <div className="title">За вашим запитом нічого незнайдено</div>
                            </div>
                            : posts.map((item, index) => (
                                <Posts
                                    key={index}
                                    posts={item}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}


export default Inquiries;