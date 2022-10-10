import { app } from "..";
import request from "supertest";

describe("Test book api", () => {});

it("should get all booked tables", async () => {
  await request(app).get("/api/allbookedTables").expect(200);
});

it("should receive an error message if name is not provided", async () => {
  await request(app)
    .post("/api/bookTable")
    .expect(400, {
      errors: [
        {
          message: "Add a name!",
          status: 400,
        },
      ],
    });
});
