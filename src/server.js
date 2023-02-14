import express from "express";

const PORT = 4000;

// app이라고 하는 것은 convention 마음대로 해도 상관없음.
const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Hello World</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

// root page에 대한 request가 왔을 때 반응
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
