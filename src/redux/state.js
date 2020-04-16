let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 20},
            {id: 2, message: 'It is my first post', likesCount: 10},
            {id: 3, message: 'Are you ok?', likesCount: 7},
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Lexa',
                avatar: 'https://www.modnapricha.info/wp-content/uploads/2019/01/kvadratnoje-litso-1-853x1024.jpg'
            },
            {
                id: 2,
                name: 'Sveta',
                avatar: 'https://ath2.unileverservices.com/wp-content/uploads/sites/7/2017/12/brunette-wavy-bob-bang.jpg'
            },
            {
                id: 3,
                name: 'Misha',
                avatar: 'https://style4man.com/wp-content/uploads/2014/08/men-eyeglasses-trends-2014.jpg'
            },
            {id: 4, name: 'Love', avatar: 'https://cs9.pikabu.ru/post_img/2020/01/04/7/1578134346135831614.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'kid'},
            {id: 3, message: 'do you'},
            {id: 4, message: 'like dope?'}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'first', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 2, name: 'second', avatar: 'https://klike.net/uploads/posts/2019-03/1551511791_8.jpg'},
            {
                id: 3,
                name: 'third',
                avatar: 'https://st.depositphotos.com/1491329/4426/i/950/depositphotos_44267909-stock-photo-beautiful-woman-with-black-lace.jpg'
            }
        ]
    }
};

export default state;