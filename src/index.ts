// Main entry point for the HL7v2 Zod schemas package

// Import all version modules
import * as v2_6 from './2.6'
import * as v2_7 from './2.7'
import * as v2_7_1 from './2.7.1'
import * as v2_8 from './2.8'
import * as v2_8_1 from './2.8.1'
import * as v2_8_2 from './2.8.2'
import * as v2_9 from './2.9'

// Export version-specific modules with namespacing to avoid conflicts
export { v2_6, v2_7, v2_7_1, v2_8, v2_8_1, v2_8_2, v2_9 }

// Export types
export type HL7Version = 
  | '2.6'
  | '2.7'
  | '2.7.1'
  | '2.8'
  | '2.8.1'
  | '2.8.2'
  | '2.9'

// Utility function to get schemas for a specific version
export function getVersion(version: HL7Version) {
  switch (version) {
    case '2.6': return v2_6
    case '2.7': return v2_7
    case '2.7.1': return v2_7_1
    case '2.8': return v2_8
    case '2.8.1': return v2_8_1
    case '2.8.2': return v2_8_2
    case '2.9': return v2_9
    default:
      throw new Error(`Unsupported HL7 version: ${version}`)
  }
}
