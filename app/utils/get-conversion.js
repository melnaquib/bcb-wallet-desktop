import { defineError } from 'ember-exex/error';

import BigNumber from 'bignumber.js';

const base10 = BigNumber(10);

export const Gbcb = 'Gbcb';
export const Mbcb = 'Mbcb';
export const kbcb = 'kbcb';
export const bcb = 'bcb';
export const mbcb = 'mbcb';
export const ubcb = 'ubcb';

export const DEFAULT_UNIT = Mbcb;

export const units = new Set([
  Gbcb,
  Mbcb,
  kbcb,
  bcb,
  mbcb,
  ubcb,
]);

export const conversionFactors = new Map([
  [Gbcb, base10.pow(33)],
  [Mbcb, base10.pow(30)],
  [kbcb, base10.pow(27)],
  [bcb, base10.pow(24)],
  [mbcb, base10.pow(21)],
  [ubcb, base10.pow(18)],
]);

export const InvalidUnitError = defineError({
  name: 'InvalidUnitError',
  message: 'Invalid unit: {unit}',
  extends: TypeError,
});

export default function getConversion(unit = DEFAULT_UNIT) {
  if (!units.has(unit)) {
    throw new InvalidUnitError({ params: { unit } });
  }

  return conversionFactors.get(unit);
}
