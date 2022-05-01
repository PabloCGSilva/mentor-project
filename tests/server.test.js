const app = require('../src/app');
const request = require('supertest')


test("It should response the GET method", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
});