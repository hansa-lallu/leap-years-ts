import { expect } from 'chai';
import {leapYears } from '../src/leapYears'

describe('leapYears', () => { 
    it('returns true for all years that are divisable by 400', () =>{
      let year: number = 2000
      expect(leapYears(year)).to.equal(true);
    });
});

