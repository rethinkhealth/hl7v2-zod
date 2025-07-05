import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.6 DLT Composite Data Type
 * 
 * HL7 v2.6 DLT composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DLT.1 - Normal Range
 */
export const DLT_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "DLT.1",
  "version": "2.6",
  "description": "Normal Range",
  "type": "DataType",
  "length": 33,
  "optionality": "O"
});

/**
 * DLT.2 - Numeric Threshold
 */
export const DLT_2 = SimpleTypes.NM.max(4).optional().register(hl7v2Metadata, {
  "title": "DLT.2",
  "version": "2.6",
  "description": "Numeric Threshold",
  "type": "DataType",
  "length": 4,
  "optionality": "O"
});

/**
 * DLT.3 - Change Computation
 */
export const DLT_3 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "DLT.3",
  "version": "2.6",
  "description": "Change Computation",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * DLT.4 - Days Retained
 */
export const DLT_4 = SimpleTypes.NM.max(4).optional().register(hl7v2Metadata, {
  "title": "DLT.4",
  "version": "2.6",
  "description": "Days Retained",
  "type": "DataType",
  "length": 4,
  "optionality": "O"
});

/**
 * DLT - HL7 v2.6 DLT composite data type
 * 
 * Components:
 * - DLT.1: Normal Range (NR)
 * - DLT.2: Numeric Threshold (NM)
 * - DLT.3: Change Computation (ID)
 * - DLT.4: Days Retained (NM)
 */
export const DLT = z.object({
  "1": DLT_1,
  "2": DLT_2,
  "3": DLT_3,
  "4": DLT_4
}).register(hl7v2Metadata, {
  title: 'DLT',
  version: '2.6',
  description: 'HL7 v2.6 DLT composite data type'
});

/**
 * Type definition for DLT
 */
export type DLT = z.infer<typeof DLT>;
