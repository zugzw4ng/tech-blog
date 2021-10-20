const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id'
        ],
        order: [['created_at', 'DESC']]
    }).then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});