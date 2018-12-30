import { expect } from 'chai';
import { describe, it } from 'mocha';
import fromRaw from '@bitcoin-black/bcb-wallet-desktop/utils/from-raw';

describe('Unit | Utility | from raw', () => {
  // Replace this with your real tests.
  it('works', () => {
    const result = fromRaw('1000000000000000000000000000000');
    expect(result).to.be.ok;
  });
});
