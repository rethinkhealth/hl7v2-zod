import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 PRL Composite Data Type
 * 
 * HL7 v2.5 PRL composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRL.1 - Parent Observation Identifier
 */
export const PRL_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "PRL.1",
  "version": "2.5",
  "description": "Parent Observation Identifier",
  "type": "DataType",
  "length": 483,
  "optionality": "R"
});

/**
 * PRL.2 - Parent Observation Sub-identifier
 */
export const PRL_2 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "PRL.2",
  "version": "2.5",
  "description": "Parent Observation Sub-identifier",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PRL.3 - Parent Observation Value Descriptor
 */
export const PRL_3 = MixedTypes.TX.optional().register(hl7v2Metadata, {
  "title": "PRL.3",
  "version": "2.5",
  "description": "Parent Observation Value Descriptor",
  "type": "DataType",
  "length": 250,
  "optionality": "O"
});

/**
 * PRL - HL7 v2.5 PRL composite data type
 * 
 * Components:
 * - PRL.1: Parent Observation Identifier (CE)
 * - PRL.2: Parent Observation Sub-identifier (ST)
 * - PRL.3: Parent Observation Value Descriptor (TX)
 */
export const PRL = z.object({
  "1": PRL_1,
  "2": PRL_2,
  "3": PRL_3
}).register(hl7v2Metadata, {
  title: 'PRL',
  version: '2.5',
  description: 'HL7 v2.5 PRL composite data type'
});

/**
 * Type definition for PRL
 */
export type PRL = z.infer<typeof PRL>;
