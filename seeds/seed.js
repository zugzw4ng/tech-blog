const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const postSeedData = require('./postSeedData.json');
const commentSeedData = require('./commentSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  const posts = await Post.bulkCreate(postSeedData);

  for (comment of commentSeedData) {
    const newComment = await Comment.create({
      ...Comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();