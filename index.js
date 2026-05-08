let database = [
  {
    username: "ken",
    password: "1234",
    email: "ken@gmail.com",
    isAdmin: true,
    login: function () {
      console.log("Welcome back, " + database.username + "!");
    },
  },
  {
    username: "ana",
    password: "abcd",
    email: "ana@gmail.com",
    isAdmin: false,
    login: function () {
      console.log("Welcome back, " + database.username + "!");
    },
  },
  {
    username: "leo",
    password: "pass",
    email: "leo@gmail.com",
    isAdmin: false,
    login: function () {
      console.log("Welcome back, " + database.username + "!");
    },
  },
];

let newsfeed = [
  {
    username: "ken",
    timeline: "Learning JavaScript today",
    likes: 10,
    comments: ["Great job"],
  },
  {
    username: "ana",
    timeline: "My first post",
    likes: 5,
    comments: ["Welcome"],
  },
  {
    username: "leo",
    timeline: "JavaScript is fun",
    likes: 8,
    comments: ["Cool"],
  },
];

// 1) Login

let usernameInput = prompt("Username");
let passwordInput = prompt("Password");
let currentUser = null;

// 2) Welcome Message

if (currentUser !== null) {
  console.log("Welcome back, " + currentUser.username);
}

// 3) Show all posts

for (let i = 0; i < database.length; i++) {
  if (
    database[i].username === usernameInput &&
    database[i].password === passwordInput
  ) {
    currentUser = database[i];
    currentUser.login();
  }
}

// 4) Show only my posts

for (let i = 0; i < newsfeed.length; i++) {
  if (newsfeed[i].username === currentUser.username) {
    console.log(newsfeed[i]);
  }
}

// 5) Add a new post

let newPost = prompt("New Post");

let newOne = {
  username: "",
  timeline: newPost,
  likes: 0,
  comments: [],
};

newsfeed.push(newOne);
console.log(newsfeed);

// 6) Like the first post

newsfeed[0].likes++;
console.log(newsfeed[0]);

// 7) Add a comment to the first post

let comment = prompt("Write comment");

newsfeed[0].comments.push(comment);
console.log(newsfeed[0]);

// 8) Admin Check Function

function isUserAdmin(username) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username) {
      if (database[i].isAdmin) {
        console.log(username + " is admin");
      } else {
        console.log(username + " is not admin");
      }
      return;
    }
  }
}

// 9) Full Logic: let option = prompt(“Choose an option:\n1. Show all posts\n2. Show my posts\n3. Add post\n4. Like first post\n5. Check admin\n6. Comment on first post”)
let option = prompt(
  "Choose an option:\n1. Show all posts\n2. Show my posts\n3. Add post\n4. Like first post\n5. Check admin\n6. Comment on first post",
);

switch (option) {
  case "1":
    newsfeed.forEach(function (item) {
      console.log(`${item.username} : ${item.timeline}`);
    });

    break;
  case "2":
    for (let i = 0; i < newsfeed.length; i++) {
      if (newsfeed[i].username === currentUser.username) {
        console.log("This is my newsfeed:", newsfeed[i].timeline);
      }
    }
    break;
  case "3":
    let post = prompt("Write your post:");

    let newPostObject = {
      username: currentUser.username,
      timeline: post,
      likes: 0,
      comments: [],
    };
    newsfeed.push(newPostObject);
    console.log("Post added!");
    console.log(newsfeed);
    break;

  case "4":
    newsfeed[0].likes++;
    console.log(newsfeed[0]);
    break;

  case "5":
    if (isUserAdmin(currentUser.username)) {
      console.log("User is admin");
    } else {
      console.log("User is not admin");
    }

  case "6":
    let newComment = prompt("Write comment:");
    newsfeed[0].comments.push(newComment);
    console.log("Comment added!");
    console.log(newsfeed[0]);
}
