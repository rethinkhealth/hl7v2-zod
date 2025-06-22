import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.8 CSU Composite Data Type
 * 
 * HL7 v2.8 CSU composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSU.1 - Channel Sensitivity
 */
export const CSU_1 = SimpleTypes.NM.register(hl7v2Metadata, {
  "title": "CSU.1",
  "version": "2.8",
  "description": "Channel Sensitivity",
  "type": "DataType",
  "optionality": "R"
});

/**
 * CSU.2 - Unit of Measure Identifier
 */
export const CSU_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.2",
  "version": "2.8",
  "description": "Unit of Measure Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.3 - Unit of Measure Description
 */
export const CSU_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.3",
  "version": "2.8",
  "description": "Unit of Measure Description",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.4 - Unit of Measure Coding System
 */
export const CSU_4 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  "title": "CSU.4",
  "version": "2.8",
  "description": "Unit of Measure Coding System",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * CSU.5 - Alternate Unit of Measure Identifier
 */
export const CSU_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.5",
  "version": "2.8",
  "description": "Alternate Unit of Measure Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.6 - Alternate Unit of Measure Description
 */
export const CSU_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.6",
  "version": "2.8",
  "description": "Alternate Unit of Measure Description",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.7 - Alternate Unit of Measure Coding System
 */
export const CSU_7 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  "title": "CSU.7",
  "version": "2.8",
  "description": "Alternate Unit of Measure Coding System",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * CSU.8 - Unit of Measure Coding System Version ID
 */
export const CSU_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.8",
  "version": "2.8",
  "description": "Unit of Measure Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.9 - Alternate Unit of Measure Coding System Version ID
 */
export const CSU_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.9",
  "version": "2.8",
  "description": "Alternate Unit of Measure Coding System Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.10 - Original Text
 */
export const CSU_10 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "CSU.10",
  "version": "2.8",
  "description": "Original Text",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * CSU.11 - Second Alternate Unit of Measure Identifier
 */
export const CSU_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.11",
  "version": "2.8",
  "description": "Second Alternate Unit of Measure Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.12 - Second Alternate Unit of Measure Text
 */
export const CSU_12 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.12",
  "version": "2.8",
  "description": "Second Alternate Unit of Measure Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.13 - Name of Second Alternate Unit of Measure Coding Sy
 */
export const CSU_13 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  "title": "CSU.13",
  "version": "2.8",
  "description": "Name of Second Alternate Unit of Measure Coding Sy",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * CSU.14 - Second Alternate Unit of Measure Coding System Ver
 */
export const CSU_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.14",
  "version": "2.8",
  "description": "Second Alternate Unit of Measure Coding System Ver",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.15 - Unit of Measure Coding System OID
 */
export const CSU_15 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.15",
  "version": "2.8",
  "description": "Unit of Measure Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.16 - Unit of Measure Value Set OID
 */
export const CSU_16 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.16",
  "version": "2.8",
  "description": "Unit of Measure Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.17 - Unit of Measure Value Set Version ID
 */
export const CSU_17 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CSU.17",
  "version": "2.8",
  "description": "Unit of Measure Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.18 - Alternate Unit of Measure Coding System OID
 */
export const CSU_18 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.18",
  "version": "2.8",
  "description": "Alternate Unit of Measure Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.19 - Alternate Unit of Measure Value Set OID
 */
export const CSU_19 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.19",
  "version": "2.8",
  "description": "Alternate Unit of Measure Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.20 - Alternate Unit of Measure Value Set Version ID
 */
export const CSU_20 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "CSU.20",
  "version": "2.8",
  "description": "Alternate Unit of Measure Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.21 - Alternate Unit of Measure Coding System OID
 */
export const CSU_21 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.21",
  "version": "2.8",
  "description": "Alternate Unit of Measure Coding System OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.22 - Alternate Unit of Measure Value Set OID
 */
export const CSU_22 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.22",
  "version": "2.8",
  "description": "Alternate Unit of Measure Value Set OID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU.23 - Alternate Unit of Measure Value Set Version ID
 */
export const CSU_23 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CSU.23",
  "version": "2.8",
  "description": "Alternate Unit of Measure Value Set Version ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CSU - HL7 v2.8 CSU composite data type
 * 
 * Components:
 * - CSU.1: Channel Sensitivity (NM)
 * - CSU.2: Unit of Measure Identifier (ST)
 * - CSU.3: Unit of Measure Description (ST)
 * - CSU.4: Unit of Measure Coding System (ID)
 * - CSU.5: Alternate Unit of Measure Identifier (ST)
 * - CSU.6: Alternate Unit of Measure Description (ST)
 * - CSU.7: Alternate Unit of Measure Coding System (ID)
 * - CSU.8: Unit of Measure Coding System Version ID (ST)
 * - CSU.9: Alternate Unit of Measure Coding System Version ID (ST)
 * - CSU.10: Original Text (ST)
 * - CSU.11: Second Alternate Unit of Measure Identifier (ST)
 * - CSU.12: Second Alternate Unit of Measure Text (ST)
 * - CSU.13: Name of Second Alternate Unit of Measure Coding Sy (ID)
 * - CSU.14: Second Alternate Unit of Measure Coding System Ver (ST)
 * - CSU.15: Unit of Measure Coding System OID (ST)
 * - CSU.16: Unit of Measure Value Set OID (ST)
 * - CSU.17: Unit of Measure Value Set Version ID (DTM)
 * - CSU.18: Alternate Unit of Measure Coding System OID (ST)
 * - CSU.19: Alternate Unit of Measure Value Set OID (ST)
 * - CSU.20: Alternate Unit of Measure Value Set Version ID (DTM)
 * - CSU.21: Alternate Unit of Measure Coding System OID (ST)
 * - CSU.22: Alternate Unit of Measure Value Set OID (ST)
 * - CSU.23: Alternate Unit of Measure Value Set Version ID (ST)
 */
export const CSU = z.object({
  [`1`]: CSU_1,
  [`2`]: CSU_2,
  [`3`]: CSU_3,
  [`4`]: CSU_4,
  [`5`]: CSU_5,
  [`6`]: CSU_6,
  [`7`]: CSU_7,
  [`8`]: CSU_8,
  [`9`]: CSU_9,
  [`10`]: CSU_10,
  [`11`]: CSU_11,
  [`12`]: CSU_12,
  [`13`]: CSU_13,
  [`14`]: CSU_14,
  [`15`]: CSU_15,
  [`16`]: CSU_16,
  [`17`]: CSU_17,
  [`18`]: CSU_18,
  [`19`]: CSU_19,
  [`20`]: CSU_20,
  [`21`]: CSU_21,
  [`22`]: CSU_22,
  [`23`]: CSU_23
}).register(hl7v2Metadata, {
  title: 'CSU',
  version: '2.8',
  description: 'HL7 v2.8 CSU composite data type'
});

/**
 * Type definition for CSU
 */
export type CSU = z.infer<typeof CSU>;
