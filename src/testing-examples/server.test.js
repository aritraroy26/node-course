import request from "supertest";
import { app } from "./server";

describe("/hello endpoint fucntionality", () => {
  it("it replies with Hello! when get request is send", (done) => {
    request(app).get("/hello").expect("Hello!", done);
  });
  //done - it is used to await till the request is completed. if not used request.get will go through without failing
  //        and expect will not wait till the response is received and will pass the test.
});
