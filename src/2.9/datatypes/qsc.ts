import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 QSC Composite Data Type
 * 
 * HL7 v2.9 QSC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QSC.1 - Segment Field Name
 */
export const QSC_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "QSC.1",
  "version": "2.9",
  "description": "Segment Field Name",
  "type": "DataType",
  "optionality": "R"
});

/**
 * QSC.2 - Relational Operator
 */
export const QSC_2 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "QSC.2",
  "version": "2.9",
  "description": "Relational Operator",
  "type": "DataType",
  "optionality": "O"
});

/**
 * QSC.3 - Value
 */
export const QSC_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "QSC.3",
  "version": "2.9",
  "description": "Value",
  "type": "DataType",
  "optionality": "O"
});

/**
 * QSC.4 - Relational Conjunction
 */
export const QSC_4 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "QSC.4",
  "version": "2.9",
  "description": "Relational Conjunction",
  "type": "DataType",
  "optionality": "O"
});

/**
 * QSC - HL7 v2.9 QSC composite data type
 * 
 * Components:
 * - QSC.1: Segment Field Name (ST)
 * - QSC.2: Relational Operator (ID)
 * - QSC.3: Value (ST)
 * - QSC.4: Relational Conjunction (ID)
 */
export const QSC = z.object({
  [`1`]: QSC_1,
  [`2`]: QSC_2,
  [`3`]: QSC_3,
  [`4`]: QSC_4
}).register(hl7v2Metadata, {
  title: 'QSC',
  version: '2.9',
  description: 'HL7 v2.9 QSC composite data type'
});

/**
 * Type definition for QSC
 */
export type QSC = z.infer<typeof QSC>;
