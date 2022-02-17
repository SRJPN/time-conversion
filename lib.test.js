const { expect } = require("chai");
const { timeConversion } = require('./lib');

describe('timeConversion', () => {
    it('should convert 07:05:45PM to 24 hour format', () => {
        expect(timeConversion('07:05:45PM')).to.be.eql('19:05:45');
    })

    it('should convert 12:45:54PM to 24 hour format', () => {
        expect(timeConversion('12:45:54PM')).to.be.eql('12:45:54');
    })
    
    it('should convert 12:40:22AM to 24 hour format', () => {
        expect(timeConversion('12:40:22AM')).to.be.eql('00:40:22');
    })

    it('should convert 12:00:00AM to 24 hour format', () => {
        expect(timeConversion('12:00:00AM')).to.be.eql('00:00:00');
    })
});

