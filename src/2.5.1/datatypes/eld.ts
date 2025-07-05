import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 ELD Composite Data Type
 * 
 * HL7 v2.5 ELD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ELD.1 - Segment ID
 */
export const ELD_1 = SimpleTypes.ST.max(3).optional().register(hl7v2Metadata, {
  "title": "ELD.1",
  "version": "2.5",
  "description": "Segment ID",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * ELD.2 - Segment Sequence
 */
export const ELD_2 = SimpleTypes.NM.max(2).optional().register(hl7v2Metadata, {
  "title": "ELD.2",
  "version": "2.5",
  "description": "Segment Sequence",
  "type": "DataType",
  "length": 2,
  "optionality": "O"
});

/**
 * ELD.3 - Field Position
 */
export const ELD_3 = SimpleTypes.NM.max(2).optional().register(hl7v2Metadata, {
  "title": "ELD.3",
  "version": "2.5",
  "description": "Field Position",
  "type": "DataType",
  "length": 2,
  "optionality": "O"
});

/**
 * ELD.4 - Code Identifying Error
 */
export const ELD_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "ELD.4",
  "version": "2.5",
  "description": "Code Identifying Error",
  "type": "DataType",
  "length": 483,
  "optionality": "O"
});

/**
 * ELD - HL7 v2.5 ELD composite data type
 * 
 * Components:
 * - ELD.1: Segment ID (ST)
 * - ELD.2: Segment Sequence (NM)
 * - ELD.3: Field Position (NM)
 * - ELD.4: Code Identifying Error (CE)
 */
export const ELD = z.object({
  "1": ELD_1,
  "2": ELD_2,
  "3": ELD_3,
  "4": ELD_4
}).register(hl7v2Metadata, {
  title: 'ELD',
  version: '2.5',
  description: 'HL7 v2.5 ELD composite data type'
});

/**
 * Type definition for ELD
 */
export type ELD = z.infer<typeof ELD>;
