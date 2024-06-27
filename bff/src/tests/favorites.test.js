const request = require('supertest');
const app = require('../src/index');

describe('Favorites API', () => {
    it('should add a favorite', async () => {
        const res = await request(app)
            .post('/api/favorites')
            .send({ videoId: '123' });

        expect(res.statusCode).toEqual(200);
    });

    it('should get favorite count', async () => {
        const res = await request(app)
            .get('/api/favorites/count');

        expect(res.body.count).toBeGreaterThanOrEqual(1);
    });
});
