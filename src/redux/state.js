let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Tom" },
        { id: 2, name: "Mary" },
        { id: 3, name: "Jack" },
        { id: 4, name: "Ammy" },
        { id: 5, name: "Ron" },
        { id: 6, name: "Harry" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Hello" },
        { id: 5, message: "Hello" },
        { id: 6, message: "Hello" },
      ]
    },
    profilePage: {
      posts: [
        {id: 1, message: "Hello", likesCount: 1 },
        {id: 2, message: "My first post", likesCount: 2 },
      ],
      newPostText: 'Hello from state'
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
