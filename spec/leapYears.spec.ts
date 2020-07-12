import { expect } from 'chai';
import {leapYears } from '../src/leapYears'

describe('leapYears', () => { 
  it('returns true for all years that are divisable by 400', () => {
    let year: number = 2000
    expect(leapYears(year)).to.equal(true);
  });

  it('returns false for all years that are divisable by 100 but not 400', () => {
    let year: number = 1700
    expect(leapYears(year)).to.equal(false);
  }); 

  it('returns true for all years divisable by 4 and not by 100', () => {
    let year: number = 2004
    expect(leapYears(year)).to.equal(true);
  });

  it('returns false for all years that are not divisable by 4', () => {
    let year = 2009
    expect(leapYears(year)).to.equal(false)
  });
});



