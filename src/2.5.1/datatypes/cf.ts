import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 CF Composite Data Type
 * 
 * HL7 v2.5 CF composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CF.1 - Identifier
 */
export const CF_1 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "CF.1",
  "version": "2.5",
  "description": "Identifier",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CF.2 - Formatted Text
 */
export const CF_2 = MixedTypes.FT.optional().register(hl7v2Metadata, {
  "title": "CF.2",
  "version": "2.5",
  "description": "Formatted Text",
  "type": "DataType",
  "length": 65536,
  "optionality": "O"
});

/**
 * CF.3 - Name of Coding System
 */
export const CF_3 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  "title": "CF.3",
  "version": "2.5",
  "description": "Name of Coding System",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CF.4 - Alternate Identifier
 */
export const CF_4 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "CF.4",
  "version": "2.5",
  "description": "Alternate Identifier",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CF.5 - Alternate Formatted Text
 */
export const CF_5 = MixedTypes.FT.optional().register(hl7v2Metadata, {
  "title": "CF.5",
  "version": "2.5",
  "description": "Alternate Formatted Text",
  "type": "DataType",
  "length": 65536,
  "optionality": "O"
});

/**
 * CF.6 - Name of Alternate Coding System
 */
export const CF_6 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  "title": "CF.6",
  "version": "2.5",
  "description": "Name of Alternate Coding System",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CF - HL7 v2.5 CF composite data type
 * 
 * Components:
 * - CF.1: Identifier (ST)
 * - CF.2: Formatted Text (FT)
 * - CF.3: Name of Coding System (ID)
 * - CF.4: Alternate Identifier (ST)
 * - CF.5: Alternate Formatted Text (FT)
 * - CF.6: Name of Alternate Coding System (ID)
 */
export const CF = z.object({
  [`1`]: CF_1,
  [`2`]: CF_2,
  [`3`]: CF_3,
  [`4`]: CF_4,
  [`5`]: CF_5,
  [`6`]: CF_6
}).register(hl7v2Metadata, {
  title: 'CF',
  version: '2.5',
  description: 'HL7 v2.5 CF composite data type'
});

/**
 * Type definition for CF
 */
export type CF = z.infer<typeof CF>;
