const request = require('supertest');
const app = require('../index');

describe('GET /status', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('service');
  });
});
