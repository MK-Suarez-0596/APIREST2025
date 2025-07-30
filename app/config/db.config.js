module.exports ={
    HOST: "ep-rough-pine-afmee4xl-pooler.c-2.us-west-2.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_oaBjUd0yfDh2",
    DB: "neondb",
    dialect: "postgres",
        ssl:{
            require: true,
            rejectUnauthorized: false
        },
        pool :{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 1000
        }
    };