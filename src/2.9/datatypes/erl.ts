import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 ERL Composite Data Type
 * 
 * HL7 v2.9 ERL composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ERL.1 - Segment ID
 */
export const ERL_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "ERL.1",
  "version": "2.9",
  "description": "Segment ID",
  "type": "DataType",
  "optionality": "R"
});

/**
 * ERL.2 - Segment Sequence
 */
export const ERL_2 = SimpleTypes.SI.register(hl7v2Metadata, {
  "title": "ERL.2",
  "version": "2.9",
  "description": "Segment Sequence",
  "type": "DataType",
  "optionality": "R"
});

/**
 * ERL.3 - Field Position
 */
export const ERL_3 = SimpleTypes.SI.optional().register(hl7v2Metadata, {
  "title": "ERL.3",
  "version": "2.9",
  "description": "Field Position",
  "type": "DataType",
  "optionality": "O"
});

/**
 * ERL.4 - Field Repetition
 */
export const ERL_4 = SimpleTypes.SI.optional().register(hl7v2Metadata, {
  "title": "ERL.4",
  "version": "2.9",
  "description": "Field Repetition",
  "type": "DataType",
  "optionality": "O"
});

/**
 * ERL.5 - Component Number
 */
export const ERL_5 = SimpleTypes.SI.optional().register(hl7v2Metadata, {
  "title": "ERL.5",
  "version": "2.9",
  "description": "Component Number",
  "type": "DataType",
  "optionality": "O"
});

/**
 * ERL.6 - Sub-Component Number
 */
export const ERL_6 = SimpleTypes.SI.optional().register(hl7v2Metadata, {
  "title": "ERL.6",
  "version": "2.9",
  "description": "Sub-Component Number",
  "type": "DataType",
  "optionality": "O"
});

/**
 * ERL - HL7 v2.9 ERL composite data type
 * 
 * Components:
 * - ERL.1: Segment ID (ST)
 * - ERL.2: Segment Sequence (SI)
 * - ERL.3: Field Position (SI)
 * - ERL.4: Field Repetition (SI)
 * - ERL.5: Component Number (SI)
 * - ERL.6: Sub-Component Number (SI)
 */
export const ERL = z.object({
  [`1`]: ERL_1,
  [`2`]: ERL_2,
  [`3`]: ERL_3,
  [`4`]: ERL_4,
  [`5`]: ERL_5,
  [`6`]: ERL_6
}).register(hl7v2Metadata, {
  title: 'ERL',
  version: '2.9',
  description: 'HL7 v2.9 ERL composite data type'
});

/**
 * Type definition for ERL
 */
export type ERL = z.infer<typeof ERL>;
