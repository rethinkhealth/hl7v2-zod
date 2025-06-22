import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.9 XCN Composite Data Type
 * 
 * HL7 v2.9 XCN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XCN.1 - Person Identifier
 */
export const XCN_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.1",
  "version": "2.9",
  "description": "Person Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.2 - Family Name
 */
export const XCN_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.2",
  "version": "2.9",
  "description": "Family Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.3 - Given Name
 */
export const XCN_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.3",
  "version": "2.9",
  "description": "Given Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.4 - Second and Further Given Names or Initials Thereof
 */
export const XCN_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.4",
  "version": "2.9",
  "description": "Second and Further Given Names or Initials Thereof",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.5 - Suffix (e.g., JR or III)
 */
export const XCN_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.5",
  "version": "2.9",
  "description": "Suffix (e.g., JR or III)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.6 - Prefix (e.g., DR)
 */
export const XCN_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.6",
  "version": "2.9",
  "description": "Prefix (e.g., DR)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.8 - Source Table
 */
export const XCN_8 = CWE.optional().register(hl7v2Metadata, {
  "title": "XCN.8",
  "version": "2.9",
  "description": "Source Table",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.9 - Assigning Authority
 */
export const XCN_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.9",
  "version": "2.9",
  "description": "Assigning Authority",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.10 - Name Type Code
 */
export const XCN_10 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XCN.10",
  "version": "2.9",
  "description": "Name Type Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.11 - Identifier Check Digit
 */
export const XCN_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.11",
  "version": "2.9",
  "description": "Identifier Check Digit",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.12 - Check Digit Scheme
 */
export const XCN_12 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XCN.12",
  "version": "2.9",
  "description": "Check Digit Scheme",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.13 - Identifier Type Code
 */
export const XCN_13 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XCN.13",
  "version": "2.9",
  "description": "Identifier Type Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.14 - Assigning Facility
 */
export const XCN_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.14",
  "version": "2.9",
  "description": "Assigning Facility",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.15 - Name Representation Code
 */
export const XCN_15 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XCN.15",
  "version": "2.9",
  "description": "Name Representation Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.16 - Name Context
 */
export const XCN_16 = CWE.optional().register(hl7v2Metadata, {
  "title": "XCN.16",
  "version": "2.9",
  "description": "Name Context",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.18 - Name Assembly Order
 */
export const XCN_18 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XCN.18",
  "version": "2.9",
  "description": "Name Assembly Order",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.19 - Effective Date
 */
export const XCN_19 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XCN.19",
  "version": "2.9",
  "description": "Effective Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.20 - Expiration Date
 */
export const XCN_20 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XCN.20",
  "version": "2.9",
  "description": "Expiration Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.21 - Professional Suffix
 */
export const XCN_21 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.21",
  "version": "2.9",
  "description": "Professional Suffix",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.22 - Assigning Jurisdiction
 */
export const XCN_22 = CWE.optional().register(hl7v2Metadata, {
  "title": "XCN.22",
  "version": "2.9",
  "description": "Assigning Jurisdiction",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.23 - Assigning Agency or Department
 */
export const XCN_23 = CWE.optional().register(hl7v2Metadata, {
  "title": "XCN.23",
  "version": "2.9",
  "description": "Assigning Agency or Department",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.24 - Security Check
 */
export const XCN_24 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XCN.24",
  "version": "2.9",
  "description": "Security Check",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN.25 - Security Check Scheme
 */
export const XCN_25 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "XCN.25",
  "version": "2.9",
  "description": "Security Check Scheme",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XCN - HL7 v2.9 XCN composite data type
 * 
 * Components:
 * - XCN.1: Person Identifier (ST)
 * - XCN.2: Family Name (FN)
 * - XCN.3: Given Name (ST)
 * - XCN.4: Second and Further Given Names or Initials Thereof (ST)
 * - XCN.5: Suffix (e.g., JR or III) (ST)
 * - XCN.6: Prefix (e.g., DR) (ST)
 * - XCN.8: Source Table (CWE)
 * - XCN.9: Assigning Authority (HD)
 * - XCN.10: Name Type Code (ID)
 * - XCN.11: Identifier Check Digit (ST)
 * - XCN.12: Check Digit Scheme (ID)
 * - XCN.13: Identifier Type Code (ID)
 * - XCN.14: Assigning Facility (HD)
 * - XCN.15: Name Representation Code (ID)
 * - XCN.16: Name Context (CWE)
 * - XCN.18: Name Assembly Order (ID)
 * - XCN.19: Effective Date (DTM)
 * - XCN.20: Expiration Date (DTM)
 * - XCN.21: Professional Suffix (ST)
 * - XCN.22: Assigning Jurisdiction (CWE)
 * - XCN.23: Assigning Agency or Department (CWE)
 * - XCN.24: Security Check (ST)
 * - XCN.25: Security Check Scheme (ID)
 */
export const XCN = z.object({
  [`1`]: XCN_1,
  [`2`]: XCN_2,
  [`3`]: XCN_3,
  [`4`]: XCN_4,
  [`5`]: XCN_5,
  [`6`]: XCN_6,
  [`7`]: XCN_8,
  [`8`]: XCN_9,
  [`9`]: XCN_10,
  [`10`]: XCN_11,
  [`11`]: XCN_12,
  [`12`]: XCN_13,
  [`13`]: XCN_14,
  [`14`]: XCN_15,
  [`15`]: XCN_16,
  [`16`]: XCN_18,
  [`17`]: XCN_19,
  [`18`]: XCN_20,
  [`19`]: XCN_21,
  [`20`]: XCN_22,
  [`21`]: XCN_23,
  [`22`]: XCN_24,
  [`23`]: XCN_25
}).register(hl7v2Metadata, {
  title: 'XCN',
  version: '2.9',
  description: 'HL7 v2.9 XCN composite data type'
});

/**
 * Type definition for XCN
 */
export type XCN = z.infer<typeof XCN>;
