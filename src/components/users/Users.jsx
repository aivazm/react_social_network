import React from 'react'
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    avatar: 'https://um.plus/wp-content/uploads/2018/02/1-2.jpg',
                    followed: false,
                    fullName: 'Dmintry',
                    status: 'I am D-man',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    avatar: 'https://www.kino-teatr.ru/person/515/6157.jpg',
                    followed: true,
                    fullName: 'Alex',
                    status: 'I am not Sasha Gray',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    avatar: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2020%2F01%2Fkate-upton-what-its-like-to-have-people-talk-about-your-body.jpg&q=85',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'Whats up',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        );    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatar} className={styles.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;
