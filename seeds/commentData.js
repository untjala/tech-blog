const {Comment} = require('../models');

const commentData = [
    {
        "content": "Wish some of that could've gone to me!",
        "user_id": 2,
        "post_id": 1
    },
    {
        "content": "Seld-friving cars just aren't going to be ready anytime soon.",
        "user_id": 1,
        "post_id": 2
    },
    {
        "content": "Not sure how to feel about this one.",
        "user_id": 3,
        "post_id": 3
    },
]

const seedComments = () => Comment.bulkCreate(commentData)
module.exports = seedComments();