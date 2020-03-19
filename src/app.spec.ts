import { assert } from 'chai';
import { describe, it } from 'mocha';

import main from './app';

describe('main', () => {
  it('should exist', () => {
    assert.exists(main);
  });

  it('should be a function', () => {
    assert.isFunction(main);
  });
});
