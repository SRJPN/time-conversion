const { expect } = require("chai");
const { timeConversion } = require('./lib');

describe('timeConversion', () => {
    it('should convert 07:05:45PM to 24 hour format', () => {
        expect(timeConversion('07:05:45PM')).to.be.eql('19:05:45');
    })
});