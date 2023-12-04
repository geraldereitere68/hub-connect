// Filename: ComplexCode.js
//
// This code is a complex implementation of a social network feed algorithm
// It uses various techniques and data structures to organize and display posts in the feed

// User class representing a user in the social network
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.posts = [];
    this.friends = [];
  }

  addFriend(user) {
    this.friends.push(user);
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    return post;
  }
}

// Post class representing a post in the feed
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Comment class representing a comment on a post
class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize users and create friendship connections
const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);
const user3 = new User("Charlie", 3);
const user4 = new User("Dave", 4);
const user5 = new User("Eve", 5);

user1.addFriend(user2);
user1.addFriend(user3);
user2.addFriend(user3);
user3.addFriend(user4);
user4.addFriend(user5);

// Generate random posts and comments
for (let i = 0; i < 100; i++) {
  const randomUser = [user1, user2, user3, user4, user5][getRandomNumber(0, 4)];
  const post = randomUser.createPost(`Post ${i + 1}`);

  // Generate random likes and comments for each post
  for (let j = 0; j < getRandomNumber(0, 10); j++) {
    post.like();

    const randomFriend = randomUser.friends[getRandomNumber(0, randomUser.friends.length - 1)];
    post.addComment(new Comment(randomFriend, `Comment ${j + 1}`));
  }
}

// Display feed based on complex algorithm (simplified here)
function displayFeed(user) {
  const feed = [];

  // Add posts from user's friends
  for (const friend of user.friends) {
    for (const post of friend.posts) {
      feed.push(post);
    }
  }

  // Sort posts by number of likes
  feed.sort((a, b) => b.likes - a.likes);

  // Print posts in the feed
  for (const post of feed) {
    console.log(`User: ${post.user.name}`);
    console.log(`Post: ${post.content}`);
    console.log(`Likes: ${post.likes}`);
    console.log(`Comments:`);

    for (const comment of post.comments) {
      console.log(`- ${comment.user.name}: ${comment.content}`);
    }

    console.log("---");
  }
}

// Display feed for user1
displayFeed(user1);