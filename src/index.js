const express= require('express');
const morgan = require('morgan');
require('./db/mongoose');
const userRouter= require('./routers/users');
const taskRouter= require('./routers/tasks');


const app= express();


app.use(express.json());
app.use(morgan('dev'));

const PORT= process.env.PORT || 2000;

app.use(userRouter);
app.use(taskRouter);


app.listen(PORT,()=>{
    console.log('server is running at port '+PORT);
})

