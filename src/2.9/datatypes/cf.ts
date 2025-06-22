import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 CF Composite Data Type
 * 
 * HL7 v2.9 CF composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CF.1 - Identifier
 */
export const CF_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.1",
  "version": "2.9",
  "description": "Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.2 - Formatted Text
 */
export const CF_2 = MixedTypes.FT.optional().register(hl7v2Metadata, {
  "title": "CF.2",
  "version": "2.9",
  "description": "Formatted Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.3 - Name of Coding System
 */
export const CF_3 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "CF.3",
  "version": "2.9",
  "description": "Name of Coding System",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.4 - Alternate Identifier
 */
export const CF_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.4",
  "version": "2.9",
  "description": "Alternate Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.5 - Alternate Formatted Text
 */
export const CF_5 = MixedTypes.FT.optional().register(hl7v2Metadata, {
  "title": "CF.5",
  "version": "2.9",
  "description": "Alternate Formatted Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.6 - Name of Alternate Coding System
 */
export const CF_6 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "CF.6",
  "version": "2.9",
  "description": "Name of Alternate Coding System",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.7 - Coding System Version ID
 */
export const CF_7 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.7",
  "version": "2.9",
  "description": "Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.8 - Alternate Coding System Version ID
 */
export const CF_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.8",
  "version": "2.9",
  "description": "Alternate Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.9 - Original Text
 */
export const CF_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.9",
  "version": "2.9",
  "description": "Original Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.10 - Second Alternate Identifier
 */
export const CF_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.10",
  "version": "2.9",
  "description": "Second Alternate Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.11 - Second Alternate Formatted Text
 */
export const CF_11 = MixedTypes.FT.optional().register(hl7v2Metadata, {
  "title": "CF.11",
  "version": "2.9",
  "description": "Second Alternate Formatted Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.12 - Name of Second Alternate Coding System
 */
export const CF_12 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "CF.12",
  "version": "2.9",
  "description": "Name of Second Alternate Coding System",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.13 - Second Alternate Coding System Version ID
 */
export const CF_13 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.13",
  "version": "2.9",
  "description": "Second Alternate Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.14 - Coding System OID
 */
export const CF_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.14",
  "version": "2.9",
  "description": "Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.15 - Value Set OID
 */
export const CF_15 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.15",
  "version": "2.9",
  "description": "Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.16 - Value Set Version ID
 */
export const CF_16 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CF.16",
  "version": "2.9",
  "description": "Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.17 - Alternate Coding System OID
 */
export const CF_17 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.17",
  "version": "2.9",
  "description": "Alternate Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.18 - Alternate Value Set OID
 */
export const CF_18 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.18",
  "version": "2.9",
  "description": "Alternate Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.19 - Alternate Value Set Version ID
 */
export const CF_19 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CF.19",
  "version": "2.9",
  "description": "Alternate Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.20 - Second Alternate Coding System OID
 */
export const CF_20 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.20",
  "version": "2.9",
  "description": "Second Alternate Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.21 - Second Alternate Value Set OID
 */
export const CF_21 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CF.21",
  "version": "2.9",
  "description": "Second Alternate Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF.22 - Second Alternate Value Set Version ID
 */
export const CF_22 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CF.22",
  "version": "2.9",
  "description": "Second Alternate Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CF - HL7 v2.9 CF composite data type
 * 
 * Components:
 * - CF.1: Identifier (ST)
 * - CF.2: Formatted Text (FT)
 * - CF.3: Name of Coding System (ID)
 * - CF.4: Alternate Identifier (ST)
 * - CF.5: Alternate Formatted Text (FT)
 * - CF.6: Name of Alternate Coding System (ID)
 * - CF.7: Coding System Version ID (ST)
 * - CF.8: Alternate Coding System Version ID (ST)
 * - CF.9: Original Text (ST)
 * - CF.10: Second Alternate Identifier (ST)
 * - CF.11: Second Alternate Formatted Text (FT)
 * - CF.12: Name of Second Alternate Coding System (ID)
 * - CF.13: Second Alternate Coding System Version ID (ST)
 * - CF.14: Coding System OID (ST)
 * - CF.15: Value Set OID (ST)
 * - CF.16: Value Set Version ID (DTM)
 * - CF.17: Alternate Coding System OID (ST)
 * - CF.18: Alternate Value Set OID (ST)
 * - CF.19: Alternate Value Set Version ID (DTM)
 * - CF.20: Second Alternate Coding System OID (ST)
 * - CF.21: Second Alternate Value Set OID (ST)
 * - CF.22: Second Alternate Value Set Version ID (DTM)
 */
export const CF = z.object({
  [`1`]: CF_1,
  [`2`]: CF_2,
  [`3`]: CF_3,
  [`4`]: CF_4,
  [`5`]: CF_5,
  [`6`]: CF_6,
  [`7`]: CF_7,
  [`8`]: CF_8,
  [`9`]: CF_9,
  [`10`]: CF_10,
  [`11`]: CF_11,
  [`12`]: CF_12,
  [`13`]: CF_13,
  [`14`]: CF_14,
  [`15`]: CF_15,
  [`16`]: CF_16,
  [`17`]: CF_17,
  [`18`]: CF_18,
  [`19`]: CF_19,
  [`20`]: CF_20,
  [`21`]: CF_21,
  [`22`]: CF_22
}).register(hl7v2Metadata, {
  title: 'CF',
  version: '2.9',
  description: 'HL7 v2.9 CF composite data type'
});

/**
 * Type definition for CF
 */
export type CF = z.infer<typeof CF>;
