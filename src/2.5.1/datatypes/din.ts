import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 DIN Composite Data Type
 * 
 * HL7 v2.5 DIN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DIN.1 - Date
 */
export const DIN_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "DIN.1",
  "version": "2.5",
  "description": "Date",
  "type": "DataType",
  "length": 26,
  "optionality": "R"
});

/**
 * DIN.2 - Institution Name
 */
export const DIN_2 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "DIN.2",
  "version": "2.5",
  "description": "Institution Name",
  "type": "DataType",
  "length": 483,
  "optionality": "R"
});

/**
 * DIN - HL7 v2.5 DIN composite data type
 * 
 * Components:
 * - DIN.1: Date (TS)
 * - DIN.2: Institution Name (CE)
 */
export const DIN = z.object({
  "1": DIN_1,
  "2": DIN_2
}).register(hl7v2Metadata, {
  title: 'DIN',
  version: '2.5',
  description: 'HL7 v2.5 DIN composite data type'
});

/**
 * Type definition for DIN
 */
export type DIN = z.infer<typeof DIN>;
