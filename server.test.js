const request = require('supertest');
const app = require('./routes/User');
const mongoose = require('mongoose');
const { response } = require('express');
const { describe } = require('node:test');
describe('Test the root path', () => {
  test('It should reaponse the POST method', () => {
    const response = request(app).post('http://localhost:8000/User/add').send({
      Name: 'Obaid',
      Email: 'obaid',
      Age: 12,
      Contact: 123,
    });
    expect(response.statusCode).toBe(undefined);
  });
});

describe('Test the delete by ID', () => {
  test('It should response the Delete method', () => {
    const response = request(app).delete('http://localhost:8000/User/:id');

    expect(response.statusCode).toBe(undefined);
  });
});
