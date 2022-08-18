import Koa from "koa";

const app = new Koa();

/*
In Koa each callback function takes two arguments - ctx (context) and next.
In each callback we use ctx add some info to pass onto the next callback.
Next callback is called using await next(). When this is called the control passes on to the next callback present in sequence.
When the sequence of callbacks are exhausted or the callback doesn't await next, then the koa uses the ctx argument to
determine what it is going to send back to the client.
*/

app.use(async (ctx, next) => {
  ctx.type = "application/json";
  await next();
});

app.use(async (ctx, next) => {
  ctx.body = { name: "Aritra", id: 1 };
  await next();
});

app.use(async (ctx, next) => {
  ctx.cookies.set("trackingId", "123");
  await next();
});

app.listen(3000, () => {
  console.log("Koa server is listening on port 3000");
});
