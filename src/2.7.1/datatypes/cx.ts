import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.7 CX Composite Data Type
 * 
 * HL7 v2.7 CX composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CX.1 - ID Number
 */
export const CX_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "CX.1",
  "version": "2.7",
  "description": "ID Number",
  "type": "DataType",
  "optionality": "R"
});

/**
 * CX.2 - Identifier Check Digit
 */
export const CX_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CX.2",
  "version": "2.7",
  "description": "Identifier Check Digit",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.3 - Check Digit Scheme
 */
export const CX_3 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "CX.3",
  "version": "2.7",
  "description": "Check Digit Scheme",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * CX.4 - Assigning Authority
 */
export const CX_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CX.4",
  "version": "2.7",
  "description": "Assigning Authority",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.5 - Identifier Type Code
 */
export const CX_5 = SimpleTypes.ID.max(5).register(hl7v2Metadata, {
  "title": "CX.5",
  "version": "2.7",
  "description": "Identifier Type Code",
  "type": "DataType",
  "length": 5,
  "optionality": "R"
});

/**
 * CX.6 - Assigning Facility
 */
export const CX_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CX.6",
  "version": "2.7",
  "description": "Assigning Facility",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.7 - Effective Date
 */
export const CX_7 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  "title": "CX.7",
  "version": "2.7",
  "description": "Effective Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.8 - Expiration Date
 */
export const CX_8 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  "title": "CX.8",
  "version": "2.7",
  "description": "Expiration Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.9 - Assigning Jurisdiction
 */
export const CX_9 = CWE.optional().register(hl7v2Metadata, {
  "title": "CX.9",
  "version": "2.7",
  "description": "Assigning Jurisdiction",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.10 - Assigning Agency or Department
 */
export const CX_10 = CWE.optional().register(hl7v2Metadata, {
  "title": "CX.10",
  "version": "2.7",
  "description": "Assigning Agency or Department",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.11 - Security Check
 */
export const CX_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CX.11",
  "version": "2.7",
  "description": "Security Check",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CX.12 - Security Check Scheme
 */
export const CX_12 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "CX.12",
  "version": "2.7",
  "description": "Security Check Scheme",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * CX - HL7 v2.7 CX composite data type
 * 
 * Components:
 * - CX.1: ID Number (ST)
 * - CX.2: Identifier Check Digit (ST)
 * - CX.3: Check Digit Scheme (ID)
 * - CX.4: Assigning Authority (HD)
 * - CX.5: Identifier Type Code (ID)
 * - CX.6: Assigning Facility (HD)
 * - CX.7: Effective Date (DT)
 * - CX.8: Expiration Date (DT)
 * - CX.9: Assigning Jurisdiction (CWE)
 * - CX.10: Assigning Agency or Department (CWE)
 * - CX.11: Security Check (ST)
 * - CX.12: Security Check Scheme (ID)
 */
export const CX = z.object({
  [`1`]: CX_1,
  [`2`]: CX_2,
  [`3`]: CX_3,
  [`4`]: CX_4,
  [`5`]: CX_5,
  [`6`]: CX_6,
  [`7`]: CX_7,
  [`8`]: CX_8,
  [`9`]: CX_9,
  [`10`]: CX_10,
  [`11`]: CX_11,
  [`12`]: CX_12
}).register(hl7v2Metadata, {
  title: 'CX',
  version: '2.7',
  description: 'HL7 v2.7 CX composite data type'
});

/**
 * Type definition for CX
 */
export type CX = z.infer<typeof CX>;
