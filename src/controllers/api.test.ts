const app = require("../index");
const request = require("supertest");

describe("Test book api", () => {
  //   it("should create new book", async () => {
  //     const res = await request(app).post("/api/bookTable");

  //     expect(res.body).toHaveProperty("name");
  //   });
  it("shoul get all booked tables", async () => {
    const res = await request(app).get("/api/allbookedTables");

    expect(res.body).toHaveProperty("name");
  });
});
