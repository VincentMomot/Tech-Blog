const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:
            {
                model: 'user',
                key: 'id',
            }

        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:
            {
                model: 'post',
                key: 'id',
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
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