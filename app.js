import express from "express";
import fs from "node:fs";
const app = express();
const port = process.env.PORT || 3000;
/*
app.use((req, res, next) => {
  res.locals = { path: process.cwd() };
  return next();
});
*/

app.use(express.static(`${process.cwd()}/website/`));

/*
app.get("/", (req, res) => {
  const { path } = res.locals;
  res.status(200).sendFile(`${path}/index.html`);
});
*/
app.listen(port, () => console.log(`http://localhost:${port}`));
