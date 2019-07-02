const request = require('supertest');
const app = require('../app');

describe('POST /order', function() {
    it('responds with 200 OK', function(done) {
        request(app)
            .post('/order')
            .send({ name: 'john' }) // TODO convert to ts
            .set('Accept', 'application/json')
            .expect(200, { response: 'OK' }, done);
    });
});
