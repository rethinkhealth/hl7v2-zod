import { describe, it, expect } from 'vitest';
import { getVersion, type HL7Version, v2_6 } from '../src';

describe('HL7v2 Zod Schemas', () => {
  it('should export all supported versions', () => {
    const versions: HL7Version[] = ['2.6'];

    versions.forEach((version) => {
      expect(() => getVersion(version)).not.toThrow();
    });
  });

  it('should throw error for unsupported version', () => {
    expect(() => getVersion('2.1' as HL7Version)).toThrow('Unsupported HL7 version: 2.1');
  });

  it('should have correct structure for each version', () => {
    const version = getVersion('2.6');

    expect(version).toHaveProperty('segments');
    expect(version).toHaveProperty('fields');
    expect(version).toHaveProperty('datatypes');
    expect(version).toHaveProperty('hl7v2Metadata');
  });
});
