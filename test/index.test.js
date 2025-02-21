const request = require("supertest");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, CI/CD Pipeline!");
});

test("Should return 'Hello, CI/CD Pipeline!'", async () => {
  const response = await request(server).get("/");
  expect(response.text).toBe("Hello, CI/CD Pipeline!");
});
