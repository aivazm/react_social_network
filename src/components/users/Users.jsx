import React from 'react'
import styles from './users.module.css'
import defaultUserAva from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const HOST = `https://social-network.samuraijs.com/api/1.0/`;
    const SERVICE = `follow/`;
    let params = {
        withCredentials: true,
        headers: {"API-KEY": "9712e13b-e93f-4d8e-9679-af3d1bcb1b3d"}
    };
    return (
        <div>
            <div className={styles.pagesNumbers}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageNumberChanged(p)
                                 }}>{p} </span>
                })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : defaultUserAva}
                                 className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(HOST + SERVICE + u.id, params)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    axios.post(HOST + SERVICE + u.id, {}, params)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>follow</button>}
                            </div>
                                </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                        </span>
                </div>)
            }
        </div>
    )
};

export default Users;
