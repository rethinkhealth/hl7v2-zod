import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 ED Composite Data Type
 * 
 * HL7 v2.9 ED composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ED.1 - Source Application
 */
export const ED_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "ED.1",
  "version": "2.9",
  "description": "Source Application",
  "type": "DataType",
  "optionality": "O"
});

/**
 * ED.2 - Type of Data
 */
export const ED_2 = SimpleTypes.ID.register(hl7v2Metadata, {
  "title": "ED.2",
  "version": "2.9",
  "description": "Type of Data",
  "type": "DataType",
  "optionality": "R"
});

/**
 * ED.3 - Data Subtype
 */
export const ED_3 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "ED.3",
  "version": "2.9",
  "description": "Data Subtype",
  "type": "DataType",
  "optionality": "O"
});

/**
 * ED.4 - Encoding
 */
export const ED_4 = SimpleTypes.ID.register(hl7v2Metadata, {
  "title": "ED.4",
  "version": "2.9",
  "description": "Encoding",
  "type": "DataType",
  "optionality": "R"
});

/**
 * ED.5 - Data
 */
export const ED_5 = MixedTypes.TX.register(hl7v2Metadata, {
  "title": "ED.5",
  "version": "2.9",
  "description": "Data",
  "type": "DataType",
  "optionality": "R"
});

/**
 * ED - HL7 v2.9 ED composite data type
 * 
 * Components:
 * - ED.1: Source Application (HD)
 * - ED.2: Type of Data (ID)
 * - ED.3: Data Subtype (ID)
 * - ED.4: Encoding (ID)
 * - ED.5: Data (TX)
 */
export const ED = z.object({
  [`1`]: ED_1,
  [`2`]: ED_2,
  [`3`]: ED_3,
  [`4`]: ED_4,
  [`5`]: ED_5
}).register(hl7v2Metadata, {
  title: 'ED',
  version: '2.9',
  description: 'HL7 v2.9 ED composite data type'
});

/**
 * Type definition for ED
 */
export type ED = z.infer<typeof ED>;
