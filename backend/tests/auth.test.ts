import request from 'supertest';
import app from '../src/app';

describe('Auth flow', () => {
  const testEmail = `test_${Date.now()}@example.com`;
  const testPassword = '123456';

  it('POST /api/auth/register debe crear usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: testEmail,
        password: testPassword,
      });

    expect(res.status).toBe(201);
    expect(res.body.email).toBe(testEmail);
  });

  it('POST /api/auth/login debe devolver token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: testEmail,
        password: testPassword,
      });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('GET /api/projects sin token debe devolver 401', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(401);
  });
});
