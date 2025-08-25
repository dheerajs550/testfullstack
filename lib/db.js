// const {username, password}=process.env
// const username = process.env.username
// const password = process.env.password
// export  const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.hxqglx0.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
// DB_USER=dheeraj
// DB_PASS=12345Dheeraj
// DB_NAME=productDB

export const connectionSrt = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hxqglx0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
