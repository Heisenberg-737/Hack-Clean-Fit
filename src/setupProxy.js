const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/backend/*", { target: "http://localhost:5000/" }));
};
