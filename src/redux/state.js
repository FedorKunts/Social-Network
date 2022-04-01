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
    ],
  },
  profilePage: {
    posts: [
      { message: "Hello", likesCount: 1 },
      { message: "My first post", likesCount: 2 },
    ]
  }
};

export default state;
