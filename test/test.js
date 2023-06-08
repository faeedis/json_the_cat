const { expect } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');

describe('fetchBreedDescription', () => {
  it('should return the breed description when given a valid breed name', (done) => {
    fetchBreedDescription('Siberian', (error, description) => {
      expect(error).to.be.null;
      expect(description).to.be.a('string');
      done();
    });
  });

  it('should return an error when given an invalid breed name', (done) => {
    fetchBreedDescription('InvalidBreed', (error, description) => {
      expect(error).to.be.an('error');
      expect(description).to.be.null;
      done();
    });
  });
});
