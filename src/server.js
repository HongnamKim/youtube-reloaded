import express from "express";

const PORT = 4000;

// app이라고 하는 것은 convention 마음대로 해도 상관없음.
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>Hello World</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

// app.use() --> global middleware 모든 route에서 사용하게됨.
// app.get() 함수 이전에 사용되어야 함.
app.use(logger);
app.use(privateMiddleware);

// root page에 대한 request가 왔을 때 반응
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
