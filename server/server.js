require('dotenv').config()

const express = require('express');
const blogRoutes = require('./routes/blog')

//express app
const app = express();
//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

//routes
app.use('/api/routes', blogRoutes())

//listen on request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})