import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.9 RFR Composite Data Type
 * 
 * HL7 v2.9 RFR composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RFR.1 - Numeric Range
 */
export const RFR_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "RFR.1",
  "version": "2.9",
  "description": "Numeric Range",
  "type": "DataType",
  "optionality": "R"
});

/**
 * RFR.2 - Administrative Sex
 */
export const RFR_2 = CWE.optional().register(hl7v2Metadata, {
  "title": "RFR.2",
  "version": "2.9",
  "description": "Administrative Sex",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RFR.3 - Age Range
 */
export const RFR_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "RFR.3",
  "version": "2.9",
  "description": "Age Range",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RFR.4 - Gestational Age Range
 */
export const RFR_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "RFR.4",
  "version": "2.9",
  "description": "Gestational Age Range",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RFR.5 - Species
 */
export const RFR_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "RFR.5",
  "version": "2.9",
  "description": "Species",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RFR.6 - Race/subspecies
 */
export const RFR_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "RFR.6",
  "version": "2.9",
  "description": "Race/subspecies",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RFR.7 - Conditions
 */
export const RFR_7 = MixedTypes.TX.optional().register(hl7v2Metadata, {
  "title": "RFR.7",
  "version": "2.9",
  "description": "Conditions",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RFR - HL7 v2.9 RFR composite data type
 * 
 * Components:
 * - RFR.1: Numeric Range (NR)
 * - RFR.2: Administrative Sex (CWE)
 * - RFR.3: Age Range (NR)
 * - RFR.4: Gestational Age Range (NR)
 * - RFR.5: Species (ST)
 * - RFR.6: Race/subspecies (ST)
 * - RFR.7: Conditions (TX)
 */
export const RFR = z.object({
  [`1`]: RFR_1,
  [`2`]: RFR_2,
  [`3`]: RFR_3,
  [`4`]: RFR_4,
  [`5`]: RFR_5,
  [`6`]: RFR_6,
  [`7`]: RFR_7
}).register(hl7v2Metadata, {
  title: 'RFR',
  version: '2.9',
  description: 'HL7 v2.9 RFR composite data type'
});

/**
 * Type definition for RFR
 */
export type RFR = z.infer<typeof RFR>;
