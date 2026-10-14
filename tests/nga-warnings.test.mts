import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ngaWarningRecords } from '../server/_shared/nga-warnings.ts';

describe('ngaWarningRecords', () => {
  it('reads the hyphenated broadcast-warn key NGA actually returns', () => {
    const rec = { msgYear: 2024, msgNumber: 517, navArea: '4', text: 'x' };
    assert.deepEqual(ngaWarningRecords({ 'broadcast-warn': [rec] }), [rec]);
  });

  it('accepts a bare array', () => {
    assert.deepEqual(ngaWarningRecords([{ a: 1 }]), [{ a: 1 }]);
  });

  it('returns [] for other shapes', () => {
    assert.deepEqual(ngaWarningRecords({ broadcast_warn: [{ a: 1 }] }), []);
    assert.deepEqual(ngaWarningRecords(null), []);
    assert.deepEqual(ngaWarningRecords({ 'broadcast-warn': 'nope' }), []);
  });
});
