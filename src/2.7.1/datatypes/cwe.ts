import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.7 CWE Composite Data Type
 * 
 * HL7 v2.7 CWE composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CWE.1 - Identifier
 */
export const CWE_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.1",
  "version": "2.7",
  "description": "Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.2 - Text
 */
export const CWE_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.2",
  "version": "2.7",
  "description": "Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.3 - Name of Coding System
 */
export const CWE_3 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  "title": "CWE.3",
  "version": "2.7",
  "description": "Name of Coding System",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * CWE.4 - Alternate Identifier
 */
export const CWE_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.4",
  "version": "2.7",
  "description": "Alternate Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.5 - Alternate Text
 */
export const CWE_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.5",
  "version": "2.7",
  "description": "Alternate Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.6 - Name of Alternate Coding System
 */
export const CWE_6 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  "title": "CWE.6",
  "version": "2.7",
  "description": "Name of Alternate Coding System",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * CWE.7 - Coding System Version ID
 */
export const CWE_7 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.7",
  "version": "2.7",
  "description": "Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.8 - Alternate Coding System Version ID
 */
export const CWE_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.8",
  "version": "2.7",
  "description": "Alternate Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.9 - Original Text
 */
export const CWE_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.9",
  "version": "2.7",
  "description": "Original Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.10 - Second Alternate Identifier
 */
export const CWE_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.10",
  "version": "2.7",
  "description": "Second Alternate Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.11 - Second Alternate Text
 */
export const CWE_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.11",
  "version": "2.7",
  "description": "Second Alternate Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.12 - Name of Second Alternate Coding System
 */
export const CWE_12 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  "title": "CWE.12",
  "version": "2.7",
  "description": "Name of Second Alternate Coding System",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * CWE.13 - Second Alternate Coding System Version ID
 */
export const CWE_13 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.13",
  "version": "2.7",
  "description": "Second Alternate Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.14 - Coding System OID
 */
export const CWE_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.14",
  "version": "2.7",
  "description": "Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.15 - Value Set OID
 */
export const CWE_15 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.15",
  "version": "2.7",
  "description": "Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.16 - Value Set Version ID
 */
export const CWE_16 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CWE.16",
  "version": "2.7",
  "description": "Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.17 - Alternate Coding System OID
 */
export const CWE_17 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.17",
  "version": "2.7",
  "description": "Alternate Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.18 - Alternate Value Set OID
 */
export const CWE_18 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.18",
  "version": "2.7",
  "description": "Alternate Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.19 - Alternate Value Set Version ID
 */
export const CWE_19 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CWE.19",
  "version": "2.7",
  "description": "Alternate Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.20 - Second Alternate Coding System OID
 */
export const CWE_20 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.20",
  "version": "2.7",
  "description": "Second Alternate Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.21 - Second Alternate Value Set OID
 */
export const CWE_21 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CWE.21",
  "version": "2.7",
  "description": "Second Alternate Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE.22 - Second Alternate Value Set Version ID
 */
export const CWE_22 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CWE.22",
  "version": "2.7",
  "description": "Second Alternate Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CWE - HL7 v2.7 CWE composite data type
 * 
 * Components:
 * - CWE.1: Identifier (ST)
 * - CWE.2: Text (ST)
 * - CWE.3: Name of Coding System (ID)
 * - CWE.4: Alternate Identifier (ST)
 * - CWE.5: Alternate Text (ST)
 * - CWE.6: Name of Alternate Coding System (ID)
 * - CWE.7: Coding System Version ID (ST)
 * - CWE.8: Alternate Coding System Version ID (ST)
 * - CWE.9: Original Text (ST)
 * - CWE.10: Second Alternate Identifier (ST)
 * - CWE.11: Second Alternate Text (ST)
 * - CWE.12: Name of Second Alternate Coding System (ID)
 * - CWE.13: Second Alternate Coding System Version ID (ST)
 * - CWE.14: Coding System OID (ST)
 * - CWE.15: Value Set OID (ST)
 * - CWE.16: Value Set Version ID (DTM)
 * - CWE.17: Alternate Coding System OID (ST)
 * - CWE.18: Alternate Value Set OID (ST)
 * - CWE.19: Alternate Value Set Version ID (DTM)
 * - CWE.20: Second Alternate Coding System OID (ST)
 * - CWE.21: Second Alternate Value Set OID (ST)
 * - CWE.22: Second Alternate Value Set Version ID (DTM)
 */
export const CWE = z.object({
  [`1`]: CWE_1,
  [`2`]: CWE_2,
  [`3`]: CWE_3,
  [`4`]: CWE_4,
  [`5`]: CWE_5,
  [`6`]: CWE_6,
  [`7`]: CWE_7,
  [`8`]: CWE_8,
  [`9`]: CWE_9,
  [`10`]: CWE_10,
  [`11`]: CWE_11,
  [`12`]: CWE_12,
  [`13`]: CWE_13,
  [`14`]: CWE_14,
  [`15`]: CWE_15,
  [`16`]: CWE_16,
  [`17`]: CWE_17,
  [`18`]: CWE_18,
  [`19`]: CWE_19,
  [`20`]: CWE_20,
  [`21`]: CWE_21,
  [`22`]: CWE_22
}).register(hl7v2Metadata, {
  title: 'CWE',
  version: '2.7',
  description: 'HL7 v2.7 CWE composite data type'
});

/**
 * Type definition for CWE
 */
export type CWE = z.infer<typeof CWE>;
