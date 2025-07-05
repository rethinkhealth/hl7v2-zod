import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 SN Composite Data Type
 * 
 * HL7 v2.5 SN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SN.1 - Comparator
 */
export const SN_1 = SimpleTypes.ST.max(2).optional().register(hl7v2Metadata, {
  "title": "SN.1",
  "version": "2.5",
  "description": "Comparator",
  "type": "DataType",
  "length": 2,
  "optionality": "O"
});

/**
 * SN.2 - Num1
 */
export const SN_2 = SimpleTypes.NM.max(15).optional().register(hl7v2Metadata, {
  "title": "SN.2",
  "version": "2.5",
  "description": "Num1",
  "type": "DataType",
  "length": 15,
  "optionality": "O"
});

/**
 * SN.3 - Separator/Suffix
 */
export const SN_3 = SimpleTypes.ST.max(1).optional().register(hl7v2Metadata, {
  "title": "SN.3",
  "version": "2.5",
  "description": "Separator/Suffix",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * SN.4 - Num2
 */
export const SN_4 = SimpleTypes.NM.max(15).optional().register(hl7v2Metadata, {
  "title": "SN.4",
  "version": "2.5",
  "description": "Num2",
  "type": "DataType",
  "length": 15,
  "optionality": "O"
});

/**
 * SN - HL7 v2.5 SN composite data type
 * 
 * Components:
 * - SN.1: Comparator (ST)
 * - SN.2: Num1 (NM)
 * - SN.3: Separator/Suffix (ST)
 * - SN.4: Num2 (NM)
 */
export const SN = z.object({
  "1": SN_1,
  "2": SN_2,
  "3": SN_3,
  "4": SN_4
}).register(hl7v2Metadata, {
  title: 'SN',
  version: '2.5',
  description: 'HL7 v2.5 SN composite data type'
});

/**
 * Type definition for SN
 */
export type SN = z.infer<typeof SN>;
