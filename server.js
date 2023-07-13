const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes for registering a user
server.post('/users', (req, res, next) => {
  const user = req.body;
  user.id = Date.now();
  
  // Extract the selected value from the dropdown
  const stateValue = req.body.state;
  
  // Set the selected value in the user object
  user.state = stateValue;
  
  router.db.get('users').push(user).write();
  res.status(201).json(user);
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
