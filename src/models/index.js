const Sequelize = require ('sequlize')

const db = Sequlize({
    database:'realworlddb',
    username:'realworlduser',
    password:'realwordpass',
    dialect:'mysql'
})

const User = db.define('user',{
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        },
        unique:true,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    bio: Sequelize.STRING,
    image: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false
    }

});

const Articles = db.define('article', {

    "slug": {
        type: Sequelize.STRING,
        primaryKey:true
    },

    "title": {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    "description": {
        type: Sequelize.STRING(100),
    },

    "body": Sequelize.STRING,

}); 

const Comments = db.define('comment', {
    body:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Tags = db.define('tag', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    }
});