import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';
import { MOP } from './mop';

/**
 * HL7 v2.7 RMC Composite Data Type
 * 
 * HL7 v2.7 RMC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RMC.1 - Room Type
 */
export const RMC_1 = CWE.register(hl7v2Metadata, {
  "title": "RMC.1",
  "version": "2.7",
  "description": "Room Type",
  "type": "DataType",
  "optionality": "R"
});

/**
 * RMC.2 - Amount Type
 */
export const RMC_2 = CWE.optional().register(hl7v2Metadata, {
  "title": "RMC.2",
  "version": "2.7",
  "description": "Amount Type",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RMC.4 - Money or Percentage
 */
export const RMC_4 = MOP.register(hl7v2Metadata, {
  "title": "RMC.4",
  "version": "2.7",
  "description": "Money or Percentage",
  "type": "DataType",
  "optionality": "R"
});

/**
 * RMC - HL7 v2.7 RMC composite data type
 * 
 * Components:
 * - RMC.1: Room Type (CWE)
 * - RMC.2: Amount Type (CWE)
 * - RMC.4: Money or Percentage (MOP)
 */
export const RMC = z.object({
  [`1`]: RMC_1,
  [`2`]: RMC_2,
  [`3`]: RMC_4
}).register(hl7v2Metadata, {
  title: 'RMC',
  version: '2.7',
  description: 'HL7 v2.7 RMC composite data type'
});

/**
 * Type definition for RMC
 */
export type RMC = z.infer<typeof RMC>;
