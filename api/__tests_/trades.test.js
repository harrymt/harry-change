const request = require('supertest');
const app = require('../app');

describe('GET /trades', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/trades')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/, done);
    });

    it('responds with 200', function(done) {
        request(app)
            .get('/trades')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
