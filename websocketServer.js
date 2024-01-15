const options = {
  cors: { origin: ["http://localhost:3000"] },
};
const io = require("socket.io")(3001, options);

io.httpServer.on("request", (req, res) => {
  if (req.url == "/api/webhook") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const requestData = JSON.parse(body);

      console.log("received");
      console.log(requestData);

      io.emit("invoice", requestData);

      res.statusCode = 200;
      res.end("success");
    });
  }
});
