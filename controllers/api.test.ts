import app from "..";
import request from "supertest";

describe("Test book routes", () => {
  it("should get all booked tables", async () => {
    await request(app).get("/api/allbookedTables").expect(200);
  });

  it("should book a table", async () => {
    await request(app)
      .post("/api/bookTable")
      .send({
        name: "Test Test",
        date: "19/12/22",
        hour: "18:00",
        tableId: "9c9682ca-c78c-4f13-a30b-dc081db4d30b",
      })
      .expect(200);
  });

  it("should receive an error message if name is not provided", async () => {
    request(app)
      .post("/api/bookTable")
      .send({})
      .expect(400, {
        errors: [{ code: "ValidationError", message: "Add a name!" }],
      });
  });
});

describe("Test table routes", () => {
  it("should get all tables", async () => {
    await request(app).get("/api/allTables").expect(200);
  });

  it("should create new table", async () => {
    await request(app)
      .post("/api/newTable")
      .send({ table_num: 1, chairs: 1, price: 1 })
      .expect(200);
  });

  it("should receive an error message if table num, chair or price is not provided", async () => {
    request(app)
      .post("/api/newTable")
      .send({})
      .expect(400, {
        errors: [{ code: "ValidationError", message: "Add all fields!" }],
      });
  });

  it("should update table", async () => {
    await request(app)
      .put("/api/updateTable/9c9682ca-c78c-4f13-a30b-dc081db4d30b")
      .send({ table_num: 1, chairs: 1, price: 1 })
      .expect(200);
  });

  it("should delete a specific table", async () => {
    await request(app)
      .delete("/api/deleteTable/9beb1735-bc88-461a-8de9-3402b6d2e2c0")
      .expect(200);
  });
});
