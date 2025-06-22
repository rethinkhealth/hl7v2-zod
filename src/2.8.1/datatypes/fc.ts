import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.8 FC Composite Data Type
 * 
 * HL7 v2.8 FC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FC.1 - Financial Class Code
 */
export const FC_1 = CWE.register(hl7v2Metadata, {
  "title": "FC.1",
  "version": "2.8",
  "description": "Financial Class Code",
  "type": "DataType",
  "optionality": "R"
});

/**
 * FC.2 - Effective Date
 */
export const FC_2 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "FC.2",
  "version": "2.8",
  "description": "Effective Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * FC - HL7 v2.8 FC composite data type
 * 
 * Components:
 * - FC.1: Financial Class Code (CWE)
 * - FC.2: Effective Date (DTM)
 */
export const FC = z.object({
  [`1`]: FC_1,
  [`2`]: FC_2
}).register(hl7v2Metadata, {
  title: 'FC',
  version: '2.8',
  description: 'HL7 v2.8 FC composite data type'
});

/**
 * Type definition for FC
 */
export type FC = z.infer<typeof FC>;
