import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.6 OSD Composite Data Type
 * 
 * HL7 v2.6 OSD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OSD.1 - Sequence/Results Flag
 */
export const OSD_1 = SimpleTypes.ID.max(1).register(hl7v2Metadata, {
  "title": "OSD.1",
  "version": "2.6",
  "description": "Sequence/Results Flag",
  "type": "DataType",
  "length": 1,
  "optionality": "R"
});

/**
 * OSD.2 - Placer Order Number: Entity Identifier
 */
export const OSD_2 = SimpleTypes.ST.max(15).register(hl7v2Metadata, {
  "title": "OSD.2",
  "version": "2.6",
  "description": "Placer Order Number: Entity Identifier",
  "type": "DataType",
  "length": 15,
  "optionality": "R"
});

/**
 * OSD.3 - Placer Order Number: Namespace ID
 */
export const OSD_3 = SimpleTypes.IS.max(6).optional().register(hl7v2Metadata, {
  "title": "OSD.3",
  "version": "2.6",
  "description": "Placer Order Number: Namespace ID",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * OSD.4 - Filler Order Number: Entity Identifier
 */
export const OSD_4 = SimpleTypes.ST.max(15).register(hl7v2Metadata, {
  "title": "OSD.4",
  "version": "2.6",
  "description": "Filler Order Number: Entity Identifier",
  "type": "DataType",
  "length": 15,
  "optionality": "R"
});

/**
 * OSD.5 - Filler Order Number: Namespace ID
 */
export const OSD_5 = SimpleTypes.IS.max(6).optional().register(hl7v2Metadata, {
  "title": "OSD.5",
  "version": "2.6",
  "description": "Filler Order Number: Namespace ID",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * OSD.6 - Sequence Condition Value
 */
export const OSD_6 = SimpleTypes.ST.max(12).optional().register(hl7v2Metadata, {
  "title": "OSD.6",
  "version": "2.6",
  "description": "Sequence Condition Value",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * OSD.7 - Maximum Number of Repeats
 */
export const OSD_7 = SimpleTypes.NM.max(3).optional().register(hl7v2Metadata, {
  "title": "OSD.7",
  "version": "2.6",
  "description": "Maximum Number of Repeats",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * OSD.8 - Placer Order Number: Universal ID
 */
export const OSD_8 = SimpleTypes.ST.max(15).register(hl7v2Metadata, {
  "title": "OSD.8",
  "version": "2.6",
  "description": "Placer Order Number: Universal ID",
  "type": "DataType",
  "length": 15,
  "optionality": "R"
});

/**
 * OSD.9 - Placer Order Number: Universal ID Type
 */
export const OSD_9 = SimpleTypes.ID.max(6).optional().register(hl7v2Metadata, {
  "title": "OSD.9",
  "version": "2.6",
  "description": "Placer Order Number: Universal ID Type",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * OSD.10 - Filler Order Number: Universal ID
 */
export const OSD_10 = SimpleTypes.ST.max(15).register(hl7v2Metadata, {
  "title": "OSD.10",
  "version": "2.6",
  "description": "Filler Order Number: Universal ID",
  "type": "DataType",
  "length": 15,
  "optionality": "R"
});

/**
 * OSD.11 - Filler Order Number: Universal ID Type
 */
export const OSD_11 = SimpleTypes.ID.max(6).optional().register(hl7v2Metadata, {
  "title": "OSD.11",
  "version": "2.6",
  "description": "Filler Order Number: Universal ID Type",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * OSD - HL7 v2.6 OSD composite data type
 * 
 * Components:
 * - OSD.1: Sequence/Results Flag (ID)
 * - OSD.2: Placer Order Number: Entity Identifier (ST)
 * - OSD.3: Placer Order Number: Namespace ID (IS)
 * - OSD.4: Filler Order Number: Entity Identifier (ST)
 * - OSD.5: Filler Order Number: Namespace ID (IS)
 * - OSD.6: Sequence Condition Value (ST)
 * - OSD.7: Maximum Number of Repeats (NM)
 * - OSD.8: Placer Order Number: Universal ID (ST)
 * - OSD.9: Placer Order Number: Universal ID Type (ID)
 * - OSD.10: Filler Order Number: Universal ID (ST)
 * - OSD.11: Filler Order Number: Universal ID Type (ID)
 */
export const OSD = z.object({
  "1": OSD_1,
  "2": OSD_2,
  "3": OSD_3,
  "4": OSD_4,
  "5": OSD_5,
  "6": OSD_6,
  "7": OSD_7,
  "8": OSD_8,
  "9": OSD_9,
  "10": OSD_10,
  "11": OSD_11
}).register(hl7v2Metadata, {
  title: 'OSD',
  version: '2.6',
  description: 'HL7 v2.6 OSD composite data type'
});

/**
 * Type definition for OSD
 */
export type OSD = z.infer<typeof OSD>;
