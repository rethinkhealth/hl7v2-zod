import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.9 XPN Composite Data Type
 * 
 * HL7 v2.9 XPN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XPN.1 - Family Name
 */
export const XPN_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.1",
  "version": "2.9",
  "description": "Family Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.2 - Given Name
 */
export const XPN_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.2",
  "version": "2.9",
  "description": "Given Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.3 - Second and Further Given Names or Initials Thereof
 */
export const XPN_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.3",
  "version": "2.9",
  "description": "Second and Further Given Names or Initials Thereof",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.4 - Suffix (e.g., JR or III)
 */
export const XPN_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.4",
  "version": "2.9",
  "description": "Suffix (e.g., JR or III)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.5 - Prefix (e.g., DR)
 */
export const XPN_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.5",
  "version": "2.9",
  "description": "Prefix (e.g., DR)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.7 - Name Type Code
 */
export const XPN_7 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XPN.7",
  "version": "2.9",
  "description": "Name Type Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.8 - Name Representation Code
 */
export const XPN_8 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XPN.8",
  "version": "2.9",
  "description": "Name Representation Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.9 - Name Context
 */
export const XPN_9 = CWE.optional().register(hl7v2Metadata, {
  "title": "XPN.9",
  "version": "2.9",
  "description": "Name Context",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.11 - Name Assembly Order
 */
export const XPN_11 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XPN.11",
  "version": "2.9",
  "description": "Name Assembly Order",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.12 - Effective Date
 */
export const XPN_12 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XPN.12",
  "version": "2.9",
  "description": "Effective Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.13 - Expiration Date
 */
export const XPN_13 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XPN.13",
  "version": "2.9",
  "description": "Expiration Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.14 - Professional Suffix
 */
export const XPN_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.14",
  "version": "2.9",
  "description": "Professional Suffix",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN.15 - Called By
 */
export const XPN_15 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.15",
  "version": "2.9",
  "description": "Called By",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XPN - HL7 v2.9 XPN composite data type
 * 
 * Components:
 * - XPN.1: Family Name (FN)
 * - XPN.2: Given Name (ST)
 * - XPN.3: Second and Further Given Names or Initials Thereof (ST)
 * - XPN.4: Suffix (e.g., JR or III) (ST)
 * - XPN.5: Prefix (e.g., DR) (ST)
 * - XPN.7: Name Type Code (ID)
 * - XPN.8: Name Representation Code (ID)
 * - XPN.9: Name Context (CWE)
 * - XPN.11: Name Assembly Order (ID)
 * - XPN.12: Effective Date (DTM)
 * - XPN.13: Expiration Date (DTM)
 * - XPN.14: Professional Suffix (ST)
 * - XPN.15: Called By (ST)
 */
export const XPN = z.object({
  [`1`]: XPN_1,
  [`2`]: XPN_2,
  [`3`]: XPN_3,
  [`4`]: XPN_4,
  [`5`]: XPN_5,
  [`6`]: XPN_7,
  [`7`]: XPN_8,
  [`8`]: XPN_9,
  [`9`]: XPN_11,
  [`10`]: XPN_12,
  [`11`]: XPN_13,
  [`12`]: XPN_14,
  [`13`]: XPN_15
}).register(hl7v2Metadata, {
  title: 'XPN',
  version: '2.9',
  description: 'HL7 v2.9 XPN composite data type'
});

/**
 * Type definition for XPN
 */
export type XPN = z.infer<typeof XPN>;
