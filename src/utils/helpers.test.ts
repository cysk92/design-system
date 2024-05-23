import { indigo, slate } from '@radix-ui/colors';

import { getRadii } from '.';
import { ColorTypes, RadiusTypes, theme } from '../theme';
import { abbreviateNumber, getColor, pxToRem } from './helpers';

describe('pxToRem', () => {
  it('should not convert 0 value', () => {
    expect(pxToRem(0)).toBe('0rem');
  });

  it('should not convert string value', () => {
    expect(pxToRem('auto')).toBe('auto');
  });

  it('should convert any number of arguments', () => {
    expect(pxToRem(16)).toBe('1rem');
    expect(pxToRem(16, 16)).toBe('1rem 1rem');
    expect(pxToRem(16, 16, 16)).toBe('1rem 1rem 1rem');
    expect(pxToRem(16, 16, 16, 16)).toBe('1rem 1rem 1rem 1rem');
  });

  it('should return correct value is arguments are mixed', () => {
    expect(pxToRem(16, 0, 8, 'auto')).toBe('1rem 0rem 0.5rem auto');
  });
});

describe('abbreviateNumber', () => {
  it('should convert long number to abbreviated format', () => {
    expect(abbreviateNumber(1000)).toBe('1K');
    expect(abbreviateNumber(1000000)).toBe('1M');
    expect(abbreviateNumber(1000000000)).toBe('1B');
  });

  it('should display rounded value with maximum of 2 decimals', () => {
    expect(abbreviateNumber(1000)).toBe('1K');
    expect(abbreviateNumber(1100)).toBe('1.1K');
    expect(abbreviateNumber(1110)).toBe('1.11K');
    expect(abbreviateNumber(1114)).toBe('1.11K');
    expect(abbreviateNumber(1115)).toBe('1.12K');
    expect(abbreviateNumber(1119)).toBe('1.12K');
  });
});

describe('getColor', () => {
  it('should return correct color for current keys', () => {
    expect(getColor(ColorTypes.primary900, { theme })).toBe(indigo.indigo12);
    expect(getColor(ColorTypes.neutral900, { theme })).toBe(slate.slate12);
  });
});

describe('getRadii', () => {
  it('should return correct value', () => {
    expect(getRadii(RadiusTypes.default, { theme })).toBe('4px');
    expect(getRadii(RadiusTypes.circle, { theme })).toBe('100%');
    expect(getRadii(RadiusTypes.half, { theme })).toBe('2px');
    expect(getRadii(RadiusTypes.round, { theme })).toBe('50em');
  });
});
