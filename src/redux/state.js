import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};


export default state;
