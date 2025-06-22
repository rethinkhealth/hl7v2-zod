import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';

/**
 * HL7 v2.9 Mixed Data Types
 * 
 * These are mixed data types used in HL7 v2.9 messages.
 * Mixed types can contain both text content and escape sequences.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * escapeType - HL7 escapeType mixed data type (can contain escape sequences)
 */
export const escapeType = z.string().register(hl7v2Metadata, {
  title: 'escapeType',
  version: '2.9',
  description: 'HL7 escapeType mixed data type (can contain escape sequences)',
  type: 'mixed',
});

/**
 * Export all mixed types as a single object for convenience
 */
export const MixedTypes = {
  escapeType
} as const;

/**
 * Type definitions for the mixed types
 */
export type escapeType = z.infer<typeof escapeType>;
