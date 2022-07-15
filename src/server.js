require('dotenv').config();
const app = require('./api');
const errorMiddleWare = require('./middlewares/error');
const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categoryRouter');
const postRouter = require('./router/postRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.use(errorMiddleWare);

app.listen(port, () => console.log('ouvindo porta', port));
