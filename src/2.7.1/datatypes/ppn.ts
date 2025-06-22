import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.7 PPN Composite Data Type
 * 
 * HL7 v2.7 PPN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PPN.1 - Person Identifier
 */
export const PPN_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.1",
  "version": "2.7",
  "description": "Person Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.2 - Family Name
 */
export const PPN_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.2",
  "version": "2.7",
  "description": "Family Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.3 - Given Name
 */
export const PPN_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.3",
  "version": "2.7",
  "description": "Given Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.4 - Second and Further Given Names or Initials Thereof
 */
export const PPN_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.4",
  "version": "2.7",
  "description": "Second and Further Given Names or Initials Thereof",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.5 - Suffix (e.g., JR or III)
 */
export const PPN_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.5",
  "version": "2.7",
  "description": "Suffix (e.g., JR or III)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.6 - Prefix (e.g., DR)
 */
export const PPN_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.6",
  "version": "2.7",
  "description": "Prefix (e.g., DR)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.8 - Source Table
 */
export const PPN_8 = CWE.optional().register(hl7v2Metadata, {
  "title": "PPN.8",
  "version": "2.7",
  "description": "Source Table",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.9 - Assigning Authority
 */
export const PPN_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.9",
  "version": "2.7",
  "description": "Assigning Authority",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.10 - Name Type Code
 */
export const PPN_10 = SimpleTypes.ID.max(5).optional().register(hl7v2Metadata, {
  "title": "PPN.10",
  "version": "2.7",
  "description": "Name Type Code",
  "type": "DataType",
  "length": 5,
  "optionality": "O"
});

/**
 * PPN.11 - Identifier Check Digit
 */
export const PPN_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.11",
  "version": "2.7",
  "description": "Identifier Check Digit",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.12 - Check Digit Scheme
 */
export const PPN_12 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "PPN.12",
  "version": "2.7",
  "description": "Check Digit Scheme",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * PPN.13 - Identifier Type Code
 */
export const PPN_13 = SimpleTypes.ID.max(5).optional().register(hl7v2Metadata, {
  "title": "PPN.13",
  "version": "2.7",
  "description": "Identifier Type Code",
  "type": "DataType",
  "length": 5,
  "optionality": "O"
});

/**
 * PPN.14 - Assigning Facility
 */
export const PPN_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.14",
  "version": "2.7",
  "description": "Assigning Facility",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.15 - Date/Time Action Performed
 */
export const PPN_15 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "PPN.15",
  "version": "2.7",
  "description": "Date/Time Action Performed",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.16 - Name Representation Code
 */
export const PPN_16 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "PPN.16",
  "version": "2.7",
  "description": "Name Representation Code",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * PPN.17 - Name Context
 */
export const PPN_17 = CWE.optional().register(hl7v2Metadata, {
  "title": "PPN.17",
  "version": "2.7",
  "description": "Name Context",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.19 - Name Assembly Order
 */
export const PPN_19 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "PPN.19",
  "version": "2.7",
  "description": "Name Assembly Order",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * PPN.20 - Effective Date
 */
export const PPN_20 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "PPN.20",
  "version": "2.7",
  "description": "Effective Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.21 - Expiration Date
 */
export const PPN_21 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "PPN.21",
  "version": "2.7",
  "description": "Expiration Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.22 - Professional Suffix
 */
export const PPN_22 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.22",
  "version": "2.7",
  "description": "Professional Suffix",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.23 - Assigning Jurisdiction
 */
export const PPN_23 = CWE.optional().register(hl7v2Metadata, {
  "title": "PPN.23",
  "version": "2.7",
  "description": "Assigning Jurisdiction",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.24 - Assigning Agency or Department
 */
export const PPN_24 = CWE.optional().register(hl7v2Metadata, {
  "title": "PPN.24",
  "version": "2.7",
  "description": "Assigning Agency or Department",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.25 - Security Check
 */
export const PPN_25 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PPN.25",
  "version": "2.7",
  "description": "Security Check",
  "type": "DataType",
  "optionality": "O"
});

/**
 * PPN.26 - Security Check Scheme
 */
export const PPN_26 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "PPN.26",
  "version": "2.7",
  "description": "Security Check Scheme",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * PPN - HL7 v2.7 PPN composite data type
 * 
 * Components:
 * - PPN.1: Person Identifier (ST)
 * - PPN.2: Family Name (FN)
 * - PPN.3: Given Name (ST)
 * - PPN.4: Second and Further Given Names or Initials Thereof (ST)
 * - PPN.5: Suffix (e.g., JR or III) (ST)
 * - PPN.6: Prefix (e.g., DR) (ST)
 * - PPN.8: Source Table (CWE)
 * - PPN.9: Assigning Authority (HD)
 * - PPN.10: Name Type Code (ID)
 * - PPN.11: Identifier Check Digit (ST)
 * - PPN.12: Check Digit Scheme (ID)
 * - PPN.13: Identifier Type Code (ID)
 * - PPN.14: Assigning Facility (HD)
 * - PPN.15: Date/Time Action Performed (DTM)
 * - PPN.16: Name Representation Code (ID)
 * - PPN.17: Name Context (CWE)
 * - PPN.19: Name Assembly Order (ID)
 * - PPN.20: Effective Date (DTM)
 * - PPN.21: Expiration Date (DTM)
 * - PPN.22: Professional Suffix (ST)
 * - PPN.23: Assigning Jurisdiction (CWE)
 * - PPN.24: Assigning Agency or Department (CWE)
 * - PPN.25: Security Check (ST)
 * - PPN.26: Security Check Scheme (ID)
 */
export const PPN = z.object({
  [`1`]: PPN_1,
  [`2`]: PPN_2,
  [`3`]: PPN_3,
  [`4`]: PPN_4,
  [`5`]: PPN_5,
  [`6`]: PPN_6,
  [`7`]: PPN_8,
  [`8`]: PPN_9,
  [`9`]: PPN_10,
  [`10`]: PPN_11,
  [`11`]: PPN_12,
  [`12`]: PPN_13,
  [`13`]: PPN_14,
  [`14`]: PPN_15,
  [`15`]: PPN_16,
  [`16`]: PPN_17,
  [`17`]: PPN_19,
  [`18`]: PPN_20,
  [`19`]: PPN_21,
  [`20`]: PPN_22,
  [`21`]: PPN_23,
  [`22`]: PPN_24,
  [`23`]: PPN_25,
  [`24`]: PPN_26
}).register(hl7v2Metadata, {
  title: 'PPN',
  version: '2.7',
  description: 'HL7 v2.7 PPN composite data type'
});

/**
 * Type definition for PPN
 */
export type PPN = z.infer<typeof PPN>;
