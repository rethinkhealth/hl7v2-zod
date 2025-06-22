import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 CNE Composite Data Type
 * 
 * HL7 v2.6 CNE composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CNE.1 - Identifier
 */
export const CNE_1 = SimpleTypes.ST.max(20).register(hl7v2Metadata, {
  "title": "CNE.1",
  "version": "2.6",
  "description": "Identifier",
  "type": "DataType",
  "length": 20,
  "optionality": "R"
});

/**
 * CNE.2 - Text
 */
export const CNE_2 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "CNE.2",
  "version": "2.6",
  "description": "Text",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * CNE.3 - Name of Coding System
 */
export const CNE_3 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  "title": "CNE.3",
  "version": "2.6",
  "description": "Name of Coding System",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CNE.4 - Alternate Identifier
 */
export const CNE_4 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "CNE.4",
  "version": "2.6",
  "description": "Alternate Identifier",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CNE.5 - Alternate Text
 */
export const CNE_5 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "CNE.5",
  "version": "2.6",
  "description": "Alternate Text",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * CNE.6 - Name of Alternate Coding System
 */
export const CNE_6 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  "title": "CNE.6",
  "version": "2.6",
  "description": "Name of Alternate Coding System",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CNE.7 - Coding System Version ID
 */
export const CNE_7 = SimpleTypes.ST.max(10).optional().register(hl7v2Metadata, {
  "title": "CNE.7",
  "version": "2.6",
  "description": "Coding System Version ID",
  "type": "DataType",
  "length": 10,
  "optionality": "O"
});

/**
 * CNE.8 - Alternate Coding System Version ID
 */
export const CNE_8 = SimpleTypes.ST.max(10).optional().register(hl7v2Metadata, {
  "title": "CNE.8",
  "version": "2.6",
  "description": "Alternate Coding System Version ID",
  "type": "DataType",
  "length": 10,
  "optionality": "O"
});

/**
 * CNE.9 - Original Text
 */
export const CNE_9 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "CNE.9",
  "version": "2.6",
  "description": "Original Text",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * CNE - HL7 v2.6 CNE composite data type
 * 
 * Components:
 * - CNE.1: Identifier (ST)
 * - CNE.2: Text (ST)
 * - CNE.3: Name of Coding System (ID)
 * - CNE.4: Alternate Identifier (ST)
 * - CNE.5: Alternate Text (ST)
 * - CNE.6: Name of Alternate Coding System (ID)
 * - CNE.7: Coding System Version ID (ST)
 * - CNE.8: Alternate Coding System Version ID (ST)
 * - CNE.9: Original Text (ST)
 */
export const CNE = z.object({
  [`1`]: CNE_1,
  [`2`]: CNE_2,
  [`3`]: CNE_3,
  [`4`]: CNE_4,
  [`5`]: CNE_5,
  [`6`]: CNE_6,
  [`7`]: CNE_7,
  [`8`]: CNE_8,
  [`9`]: CNE_9
}).register(hl7v2Metadata, {
  title: 'CNE',
  version: '2.6',
  description: 'HL7 v2.6 CNE composite data type'
});

/**
 * Type definition for CNE
 */
export type CNE = z.infer<typeof CNE>;
