import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.7 SAD Composite Data Type
 * 
 * HL7 v2.7 SAD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SAD.1 - Street or Mailing Address
 */
export const SAD_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "SAD.1",
  "version": "2.7",
  "description": "Street or Mailing Address",
  "type": "DataType",
  "optionality": "O"
});

/**
 * SAD.2 - Street Name
 */
export const SAD_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "SAD.2",
  "version": "2.7",
  "description": "Street Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * SAD.3 - Dwelling Number
 */
export const SAD_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "SAD.3",
  "version": "2.7",
  "description": "Dwelling Number",
  "type": "DataType",
  "optionality": "O"
});

/**
 * SAD - HL7 v2.7 SAD composite data type
 * 
 * Components:
 * - SAD.1: Street or Mailing Address (ST)
 * - SAD.2: Street Name (ST)
 * - SAD.3: Dwelling Number (ST)
 */
export const SAD = z.object({
  [`1`]: SAD_1,
  [`2`]: SAD_2,
  [`3`]: SAD_3
}).register(hl7v2Metadata, {
  title: 'SAD',
  version: '2.7',
  description: 'HL7 v2.7 SAD composite data type'
});

/**
 * Type definition for SAD
 */
export type SAD = z.infer<typeof SAD>;
