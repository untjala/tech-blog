const {Post} = require('../models');

const postData = [
    {
        "title": "Google settles for 90 million dollars in app developer suit ",
        "content": "Last Friday, Google settled a case with Android app developers, who claimed the tech giant over-charged for in-app fees.",
        "user_id": 1
    },
    {
        "title": "Self-driving car freezes in road",
        "content": "Eight General Motors self-driving cars halted traffic on a San Fransico street after all navigating to the same place.",
        "user_id": 2
    },
    {
        "title": "FCC commissioner petitions for TikTok ban",
        "content": "The commissioner alleges TikTok user data is not secure, and sjould be banned from US app stores.",
        "user_id": 3
    },
]

const seedPosts = () => Post.bulkCreate(postData)
module.exports = seedPosts();