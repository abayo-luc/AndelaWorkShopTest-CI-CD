import request from "supertest";
import app from "../index";

describe("/API", () => {
  test("should return message", () => {
    request(app)
      .get("/api/welcome")
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });
});
