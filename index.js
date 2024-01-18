const http = require("http");

const method = (req, res) => {
  if (req.method === "GET" && req.url === "/books") {
    res.write("Response from the GET books method.");
    res.end();
  } else if (req.method === "PUT" && req.url === "/books") {
    res.write("Response from the PUT books method.");
    res.end();
  } else if (req.method === "DELETE" && req.url === "/books") {
    res.write("Response from the DELETE books method.");
    res.end();
  } else if (req.method === "GET" && req.url === "/books/author") {
    res.write("Response from the GET books author method.");
    res.end();
  } else if (req.method === "POST" && req.url === "/books/author") {
    res.write("Response from the POST books author method.");
    res.end();
  } else if (req.method === "PUT" && req.url === "/books/author") {
    res.write("Response from the PUT books author method.");
    res.end();
  } else {
    res.write("Hello there");
    res.end();
  }
};

const server = http.createServer(method);
server.listen(8000, null, null, () => {
  console.log("Server is running on port 8000.");
});
