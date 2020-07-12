import { expect } from 'chai';
import {leapYears } from '../src/leapYears'

describe('leapYears', () => { 
    it('returns true for all years that are divisable by 400', () => {
      let year: number = 2000
      expect(leapYears(year)).to.equal(true);
    });

    it('returns false for all years that are divisable by 100', () => {
      let year: number = 1700
      expect(leapYears(year)).to.equal(false);
    }); 
});

