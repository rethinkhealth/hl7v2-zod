import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 SPD Composite Data Type
 * 
 * HL7 v2.5 SPD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SPD.1 - Specialty Name
 */
export const SPD_1 = SimpleTypes.ST.max(50).register(hl7v2Metadata, {
  "title": "SPD.1",
  "version": "2.5",
  "description": "Specialty Name",
  "type": "DataType",
  "length": 50,
  "optionality": "R"
});

/**
 * SPD.2 - Governing Board
 */
export const SPD_2 = SimpleTypes.ST.max(50).optional().register(hl7v2Metadata, {
  "title": "SPD.2",
  "version": "2.5",
  "description": "Governing Board",
  "type": "DataType",
  "length": 50,
  "optionality": "O"
});

/**
 * SPD.3 - Eligible or Certified
 */
export const SPD_3 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "SPD.3",
  "version": "2.5",
  "description": "Eligible or Certified",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * SPD.4 - Date of Certification
 */
export const SPD_4 = SimpleTypes.DT.max(8).optional().register(hl7v2Metadata, {
  "title": "SPD.4",
  "version": "2.5",
  "description": "Date of Certification",
  "type": "DataType",
  "length": 8,
  "optionality": "O"
});

/**
 * SPD - HL7 v2.5 SPD composite data type
 * 
 * Components:
 * - SPD.1: Specialty Name (ST)
 * - SPD.2: Governing Board (ST)
 * - SPD.3: Eligible or Certified (ID)
 * - SPD.4: Date of Certification (DT)
 */
export const SPD = z.object({
  [`1`]: SPD_1,
  [`2`]: SPD_2,
  [`3`]: SPD_3,
  [`4`]: SPD_4
}).register(hl7v2Metadata, {
  title: 'SPD',
  version: '2.5',
  description: 'HL7 v2.5 SPD composite data type'
});

/**
 * Type definition for SPD
 */
export type SPD = z.infer<typeof SPD>;
