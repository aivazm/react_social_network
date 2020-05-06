import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios';
import defaultUserAva from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        const USERS_URL = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(USERS_URL)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });
    }

    onPageNumberChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        const USERS_URL = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
        axios.get(USERS_URL)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={styles.pagesNumbers}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                                     onClick={(e) => {
                                         this.onPageNumberChanged(p)
                                     }}>{p} </span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : defaultUserAva}
                                 className={styles.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
    }
}

export default Users;
