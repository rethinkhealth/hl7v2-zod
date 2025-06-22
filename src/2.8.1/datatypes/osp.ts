import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CNE } from './cne';

/**
 * HL7 v2.8 OSP Composite Data Type
 * 
 * HL7 v2.8 OSP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OSP.1 - Occurrence Span Code
 */
export const OSP_1 = CNE.register(hl7v2Metadata, {
  "title": "OSP.1",
  "version": "2.8",
  "description": "Occurrence Span Code",
  "type": "DataType",
  "optionality": "R"
});

/**
 * OSP.2 - Occurrence Span Start Date
 */
export const OSP_2 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  "title": "OSP.2",
  "version": "2.8",
  "description": "Occurrence Span Start Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * OSP.3 - Occurrence Span Stop Date
 */
export const OSP_3 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  "title": "OSP.3",
  "version": "2.8",
  "description": "Occurrence Span Stop Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * OSP - HL7 v2.8 OSP composite data type
 * 
 * Components:
 * - OSP.1: Occurrence Span Code (CNE)
 * - OSP.2: Occurrence Span Start Date (DT)
 * - OSP.3: Occurrence Span Stop Date (DT)
 */
export const OSP = z.object({
  [`1`]: OSP_1,
  [`2`]: OSP_2,
  [`3`]: OSP_3
}).register(hl7v2Metadata, {
  title: 'OSP',
  version: '2.8',
  description: 'HL7 v2.8 OSP composite data type'
});

/**
 * Type definition for OSP
 */
export type OSP = z.infer<typeof OSP>;
