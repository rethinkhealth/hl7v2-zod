import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.9 XON Composite Data Type
 * 
 * HL7 v2.9 XON composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XON.1 - Organization Name
 */
export const XON_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XON.1",
  "version": "2.9",
  "description": "Organization Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON.2 - Organization Name Type Code
 */
export const XON_2 = CWE.optional().register(hl7v2Metadata, {
  "title": "XON.2",
  "version": "2.9",
  "description": "Organization Name Type Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON.6 - Assigning Authority
 */
export const XON_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XON.6",
  "version": "2.9",
  "description": "Assigning Authority",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON.7 - Identifier Type Code
 */
export const XON_7 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XON.7",
  "version": "2.9",
  "description": "Identifier Type Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON.8 - Assigning Facility
 */
export const XON_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XON.8",
  "version": "2.9",
  "description": "Assigning Facility",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON.9 - Name Representation Code
 */
export const XON_9 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XON.9",
  "version": "2.9",
  "description": "Name Representation Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON.10 - Organization Identifier
 */
export const XON_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XON.10",
  "version": "2.9",
  "description": "Organization Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XON - HL7 v2.9 XON composite data type
 * 
 * Components:
 * - XON.1: Organization Name (ST)
 * - XON.2: Organization Name Type Code (CWE)
 * - XON.6: Assigning Authority (HD)
 * - XON.7: Identifier Type Code (ID)
 * - XON.8: Assigning Facility (HD)
 * - XON.9: Name Representation Code (ID)
 * - XON.10: Organization Identifier (ST)
 */
export const XON = z.object({
  [`1`]: XON_1,
  [`2`]: XON_2,
  [`3`]: XON_6,
  [`4`]: XON_7,
  [`5`]: XON_8,
  [`6`]: XON_9,
  [`7`]: XON_10
}).register(hl7v2Metadata, {
  title: 'XON',
  version: '2.9',
  description: 'HL7 v2.9 XON composite data type'
});

/**
 * Type definition for XON
 */
export type XON = z.infer<typeof XON>;
