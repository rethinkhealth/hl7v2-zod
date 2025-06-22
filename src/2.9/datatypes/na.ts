import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 NA Composite Data Type
 * 
 * HL7 v2.9 NA composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NA.1 - Value1
 */
export const NA_1 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "NA.1",
  "version": "2.9",
  "description": "Value1",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NA.2 - Value2
 */
export const NA_2 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "NA.2",
  "version": "2.9",
  "description": "Value2",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NA.3 - Value3
 */
export const NA_3 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "NA.3",
  "version": "2.9",
  "description": "Value3",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NA.4 - Value4
 */
export const NA_4 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "NA.4",
  "version": "2.9",
  "description": "Value4",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NA.5 - xx
 */
export const NA_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "NA.5",
  "version": "2.9",
  "description": "xx",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NA - HL7 v2.9 NA composite data type
 * 
 * Components:
 * - NA.1: Value1 (NM)
 * - NA.2: Value2 (NM)
 * - NA.3: Value3 (NM)
 * - NA.4: Value4 (NM)
 * - NA.5: xx (NA)
 */
export const NA = z.object({
  [`1`]: NA_1,
  [`2`]: NA_2,
  [`3`]: NA_3,
  [`4`]: NA_4,
  [`5`]: NA_5
}).register(hl7v2Metadata, {
  title: 'NA',
  version: '2.9',
  description: 'HL7 v2.9 NA composite data type'
});

/**
 * Type definition for NA
 */
export type NA = z.infer<typeof NA>;
