import request from 'supertest';
import app from '../src/app';

describe('API básico', () => {
  it('GET /health debe responder 200', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET /api/status debe responder 200', async () => {
    const res = await request(app).get('/api/status');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
