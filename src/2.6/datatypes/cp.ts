import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.6 CP Composite Data Type
 * 
 * HL7 v2.6 CP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CP.1 - Price
 */
export const CP_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "CP.1",
  "version": "2.6",
  "description": "Price",
  "type": "DataType",
  "length": 20,
  "optionality": "R"
});

/**
 * CP.2 - Price Type
 */
export const CP_2 = SimpleTypes.ID.max(2).optional().register(hl7v2Metadata, {
  "title": "CP.2",
  "version": "2.6",
  "description": "Price Type",
  "type": "DataType",
  "length": 2,
  "optionality": "O"
});

/**
 * CP.3 - From Value
 */
export const CP_3 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "CP.3",
  "version": "2.6",
  "description": "From Value",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * CP.4 - To Value
 */
export const CP_4 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "CP.4",
  "version": "2.6",
  "description": "To Value",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * CP.5 - Range Units
 */
export const CP_5 = CWE.optional().register(hl7v2Metadata, {
  "title": "CP.5",
  "version": "2.6",
  "description": "Range Units",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * CP.6 - Range Type
 */
export const CP_6 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "CP.6",
  "version": "2.6",
  "description": "Range Type",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * CP - HL7 v2.6 CP composite data type
 * 
 * Components:
 * - CP.1: Price (MO)
 * - CP.2: Price Type (ID)
 * - CP.3: From Value (NM)
 * - CP.4: To Value (NM)
 * - CP.5: Range Units (CWE)
 * - CP.6: Range Type (ID)
 */
export const CP = z.object({
  [`1`]: CP_1,
  [`2`]: CP_2,
  [`3`]: CP_3,
  [`4`]: CP_4,
  [`5`]: CP_5,
  [`6`]: CP_6
}).register(hl7v2Metadata, {
  title: 'CP',
  version: '2.6',
  description: 'HL7 v2.6 CP composite data type'
});

/**
 * Type definition for CP
 */
export type CP = z.infer<typeof CP>;
