const app = require("./app");
const { createServer } = require("http");

const server = createServer(app);

server.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
