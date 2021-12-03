const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const userData = require('./user.json');
const postData = require('./post.json');
const commentData = require('./comment.json');

const seedAll = async () => {
  try{
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });  

}
  catch(error){
    console.log(error)
  }

  process.exit(0);
};

seedAll();