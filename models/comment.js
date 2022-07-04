const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection');

class Comment extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            tyoe: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
           refrences: {
            mode: 'user',
            key: 'id',
           },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
           refrences: {
            mode: 'post',
            key: 'id',
           },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
