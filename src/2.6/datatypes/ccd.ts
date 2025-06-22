import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 CCD Composite Data Type
 * 
 * HL7 v2.6 CCD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCD.1 - Invocation Event
 */
export const CCD_1 = SimpleTypes.ID.max(1).register(hl7v2Metadata, {
  "title": "CCD.1",
  "version": "2.6",
  "description": "Invocation Event",
  "type": "DataType",
  "length": 1,
  "optionality": "R"
});

/**
 * CCD.2 - Date/time
 */
export const CCD_2 = SimpleTypes.DTM.max(24).optional().register(hl7v2Metadata, {
  "title": "CCD.2",
  "version": "2.6",
  "description": "Date/time",
  "type": "DataType",
  "length": 24,
  "optionality": "O"
});

/**
 * CCD - HL7 v2.6 CCD composite data type
 * 
 * Components:
 * - CCD.1: Invocation Event (ID)
 * - CCD.2: Date/time (DTM)
 */
export const CCD = z.object({
  [`1`]: CCD_1,
  [`2`]: CCD_2
}).register(hl7v2Metadata, {
  title: 'CCD',
  version: '2.6',
  description: 'HL7 v2.6 CCD composite data type'
});

/**
 * Type definition for CCD
 */
export type CCD = z.infer<typeof CCD>;
