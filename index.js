import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, CI/CD Pipeline!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
