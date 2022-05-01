const signin = require('../src/signin');
const request = require('supertest')


test("It should response the GET method", async () => {
  const response = await request(signin).get("/signin");
  expect(response.statusCode).toBe(200);
});