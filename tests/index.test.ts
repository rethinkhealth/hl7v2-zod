import { describe, it, expect } from 'vitest';
import { getVersion, type HL7Version } from '../src/index';

describe('HL7v2 Zod Schemas', () => {
  it('should export all supported versions', () => {
    const versions: HL7Version[] = ['2.6', '2.7', '2.7.1', '2.8', '2.8.1', '2.8.2', '2.9'];

    versions.forEach((version) => {
      expect(() => getVersion(version)).not.toThrow();
    });
  });

  it('should throw error for unsupported version', () => {
    expect(() => getVersion('2.1' as HL7Version)).toThrow('Unsupported HL7 version: 2.1');
  });

  it('should have correct structure for each version', () => {
    const version = getVersion('2.8');

    expect(version).toHaveProperty('messages');
    expect(version).toHaveProperty('segments');
    expect(version).toHaveProperty('fields');
    expect(version).toHaveProperty('datatypes');
    expect(version).toHaveProperty('hl7v2Metadata');
  });
});
