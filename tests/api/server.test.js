import app from '/home/pablo/Documents/mentor-project/dist/app.js';
import request from 'supertest';
import 'regenerator-runtime/runtime'



test("It should response the GET method", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
});