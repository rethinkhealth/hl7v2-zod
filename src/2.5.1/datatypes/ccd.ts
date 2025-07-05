import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 CCD Composite Data Type
 * 
 * HL7 v2.5 CCD composite data type
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
  "version": "2.5",
  "description": "Invocation Event",
  "type": "DataType",
  "length": 1,
  "optionality": "R"
});

/**
 * CCD.2 - Date/time
 */
export const CCD_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CCD.2",
  "version": "2.5",
  "description": "Date/time",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * CCD - HL7 v2.5 CCD composite data type
 * 
 * Components:
 * - CCD.1: Invocation Event (ID)
 * - CCD.2: Date/time (TS)
 */
export const CCD = z.object({
  "1": CCD_1,
  "2": CCD_2
}).register(hl7v2Metadata, {
  title: 'CCD',
  version: '2.5',
  description: 'HL7 v2.5 CCD composite data type'
});

/**
 * Type definition for CCD
 */
export type CCD = z.infer<typeof CCD>;
