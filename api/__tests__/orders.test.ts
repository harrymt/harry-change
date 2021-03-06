import request from 'supertest';
import app from '../app';

describe('GET /orders', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/orders')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/, done);
    });

    it('responds with 200', function(done) {
        request(app)
            .get('/orders')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('responds with an orders object with an empty json array', function(done) {
        request(app)
            .get('/orders')
            .set('Accept', 'application/json')
            .expect({ response: [] }, done)
    });
});
