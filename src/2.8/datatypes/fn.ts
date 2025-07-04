import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.8 FN Composite Data Type
 * 
 * HL7 v2.8 FN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FN.1 - Surname
 */
export const FN_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "FN.1",
  "version": "2.8",
  "description": "Surname",
  "type": "DataType",
  "optionality": "R"
});

/**
 * FN.2 - Own Surname Prefix
 */
export const FN_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "FN.2",
  "version": "2.8",
  "description": "Own Surname Prefix",
  "type": "DataType",
  "optionality": "O"
});

/**
 * FN.3 - Own Surname
 */
export const FN_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "FN.3",
  "version": "2.8",
  "description": "Own Surname",
  "type": "DataType",
  "optionality": "O"
});

/**
 * FN.4 - Surname Prefix from Partner/Spouse
 */
export const FN_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "FN.4",
  "version": "2.8",
  "description": "Surname Prefix from Partner/Spouse",
  "type": "DataType",
  "optionality": "O"
});

/**
 * FN.5 - Surname from Partner/Spouse
 */
export const FN_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "FN.5",
  "version": "2.8",
  "description": "Surname from Partner/Spouse",
  "type": "DataType",
  "optionality": "O"
});

/**
 * FN - HL7 v2.8 FN composite data type
 * 
 * Components:
 * - FN.1: Surname (ST)
 * - FN.2: Own Surname Prefix (ST)
 * - FN.3: Own Surname (ST)
 * - FN.4: Surname Prefix from Partner/Spouse (ST)
 * - FN.5: Surname from Partner/Spouse (ST)
 */
export const FN = z.object({
  [`1`]: FN_1,
  [`2`]: FN_2,
  [`3`]: FN_3,
  [`4`]: FN_4,
  [`5`]: FN_5
}).register(hl7v2Metadata, {
  title: 'FN',
  version: '2.8',
  description: 'HL7 v2.8 FN composite data type'
});

/**
 * Type definition for FN
 */
export type FN = z.infer<typeof FN>;
