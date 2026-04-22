// it contain data for stories section in home page.
export const storiesData = [
  { id: 1, image: "/images/model1.jpg" },
  { id: 2, image: "/images/model2.jpg" },
  { id: 3, image: "/images/model3.jpg" },
  { id: 4, image: "/images/model4.jpg" },
  { id: 5, image: "/images/model5.jpg" },
  { id: 6, image: "/images/model5.jpg" },
  { id: 7, image: "/images/model5.jpg" },
];

// it contain data for posts section in home page.
export const posts = [
  {
    id: 1,
    username: "Masad",
    userImage: "/images/model1.jpg",
    postImage: "/images/post1.jpg",
    likes: 100,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.more...",
    comments: 16,
    time: "30 minutes ago",
  },
  {
    id: 2,
    username: "Muhammad Hassan",
    userImage: "/images/model2.jpg",
    postImage: "/images/post2.jpg",
    likes: 100,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.more...",
    comments: 16,
    time: "30 minutes ago",
  },
];


// suggested user (right sidebar on home page) data.

export const suggestedUsers =[
  {
    id: 1,
    username: "Masad",
    userImage: "/images/model1.jpg",
    isFollowing: false,
  },
  {
    id: 2,
    username: "Noor Rehamn",
    userImage: "/images/model2.jpg",
    isFollowing: false,
  },
  {
    id: 3,
    username: "Atif",
    userImage: "/images/model3.jpg",
    isFollowing: false,
  },
  {
    id: 4,
    username: "Danyal",
    userImage: "/images/model4.jpg",
    isFollowing: false,
  },
  {
    id: 5,
    username: "Atif",
    userImage: "/images/model5.jpg",
    isFollowing: false,
  },
]

// data for model users (model, influencer, hostess) in models page.

export const modelUsers = [
  {
    id: 1,
    name : "Muhammad",
    country: "UAE",
    type : "model",
    image: "/images/modelUser1.jpg",
  },
  {
    id: 2,
    name : "Ali",
    country: "Egypt",
    type : "model",
    image: "/images/modelUser2.jpg",
  },
  {
    id: 3,
    name : "Khan",
    country: "UAE",
    type : "model",
    image: "/images/modelUser3.jpg",
  },
  {
    id: 4,
    name : "Ahmad",
    country: "UAE",
    type : "model",
    image: "/images/modelUser4.jpg",
  },
  {
    id: 5,
    name : "Ahmad",
    country: "UAE",
    type : "model",
    image: "/images/modelUser5.jpg",
  },
  {
    id: 6,
    name : "Ahmad",
    country: "UAE",
    type : "model",
    image: "/images/modelUser6.jpg",
  },
  {
    id: 7,
    name : "Ahmad",
    country: "UAE",
    type : "model",
    image: "/images/modelUser7.jpg",
  },
  {
    id: 8,
    name : "Ahmad",
    country: "UAE",
    type : "model",
    image: "/images/modelUser8.jpg",
  },
  {
    id: 9,
    name : "Ahmad",
    country: "UAE",
    type : "influencer",
    image: "/images/modelUser4.jpg",
  },
  {
    id: 10,
    name : "Ahmad",
    country: "UAE",
    type : "influencer",
    image: "/images/modelUser5.jpg",
  },
  {
    id: 11,
    name : "Ahmad",
    country: "UAE",
    type : "influencer",
    image: "/images/modelUser6.jpg",
  },
  {
    id: 12,
    name : "Ahmad",
    country: "UAE",
    type : "hostess",
    image: "/images/modelUser2.jpg",
  },
  {
    id: 13,
    name : "Ahmad",
    country: "UAE",
    type : "hostess",
    image: "/images/modelUser3.jpg",
  },
  {
    id: 14,
    name : "Ahmad",
    country: "UAE",
    type : "hostess",
    image: "/images/modelUser7.jpg",
  },
]


// data for casting page.
// data.js

export const castingData = [
  {
    id: 1,
    type: "casting",
    title: "Fashion Week Model Search",
    image: "/images/studio1.png", // Path fixed as per your previous requirement
    location: "Cairo, Egypt",
    date: "30 July 2024",
    category: "Paid shoot or event",
    requirements: "This is casting all requirements or description about casting",
    preference: {
      gender: "Male",
      ethnicity: "White / Caucasic / Latino / Hispanic",
      age: "From 24 years",
      height: "From 172 inches"
    }
  },
  {
    id: 2,
    type: "casting",
    title: "Commercial TV Ad",
    image: "/images/studio2.png",
    location: "Abu Dhabi",
    date: "12 Nov 2026",
    category: "Contract Based",
    requirements: "Looking for fresh faces for a telecommunication brand advertisement.",
    preference: {
      gender: "Male / Female",
      ethnicity: "Middle Eastern",
      age: "20-35",
      height: "Any"
    }
  },
  {
    id: 3,
    type: "mycasting", 
    title: "Jewelry Brand Shoot",
    image: "/images/studio3.png",
    location: "Sharjah",
    date: "05 Dec 2026",
    category: "Premium Paid",
    requirements: "High-end jewelry brand shoot. Needs elegant hand and face features.",
    preference: {
      gender: "Female",
      ethnicity: "Any",
      age: "22-30",
      height: "5'6\"+"
    }
  }
];

// SIRF EK BAAR EXPORT KAREIN:
// Ye line automatic un items ko nikal legi jinka type 'mycasting' hai
export const myCastingData = castingData.filter(item => item.type === "mycasting");