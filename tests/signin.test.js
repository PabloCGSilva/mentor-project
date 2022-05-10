import signin from '../src/signin';
import request from 'supertest';


test("It should response the GET method", async () => {
  const response = await request(signin).get("/signin");
  expect(response.statusCode).toBe(200);
});