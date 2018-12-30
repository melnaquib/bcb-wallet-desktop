import { expect } from 'chai';
import { describe, it } from 'mocha';
import getPlatform from '@bitcoin-black/bcb-wallet-desktop/utils/get-platform';

describe('Unit | Utility | get platform', () => {
  // Replace this with your real tests.
  it('works', () => {
    const result = getPlatform();
    expect(result).to.be.ok;
  });
});
