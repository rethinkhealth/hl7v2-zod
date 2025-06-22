// Main entry point for the HL7v2 Zod schemas package

// Import all version modules
import * as v2_6 from './2.6';

// Export version-specific modules with namespacing to avoid conflicts
export { v2_6 };

// Export types
export type HL7Version = '2.6';

// Utility function to get schemas for a specific version
export function getVersion(version: HL7Version) {
  switch (version) {
    case '2.6':
      return v2_6;
    default:
      throw new Error(`Unsupported HL7 version: ${version}`);
  }
}
