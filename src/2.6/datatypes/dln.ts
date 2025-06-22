import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 DLN Composite Data Type
 * 
 * HL7 v2.6 DLN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DLN.1 - License Number
 */
export const DLN_1 = SimpleTypes.ST.max(20).register(hl7v2Metadata, {
  "title": "DLN.1",
  "version": "2.6",
  "description": "License Number",
  "type": "DataType",
  "length": 20,
  "optionality": "R"
});

/**
 * DLN.2 - Issuing State, Province, Country
 */
export const DLN_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "DLN.2",
  "version": "2.6",
  "description": "Issuing State, Province, Country",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * DLN.3 - Expiration Date
 */
export const DLN_3 = SimpleTypes.DT.max(8).optional().register(hl7v2Metadata, {
  "title": "DLN.3",
  "version": "2.6",
  "description": "Expiration Date",
  "type": "DataType",
  "length": 8,
  "optionality": "O"
});

/**
 * DLN - HL7 v2.6 DLN composite data type
 * 
 * Components:
 * - DLN.1: License Number (ST)
 * - DLN.2: Issuing State, Province, Country (IS)
 * - DLN.3: Expiration Date (DT)
 */
export const DLN = z.object({
  [`1`]: DLN_1,
  [`2`]: DLN_2,
  [`3`]: DLN_3
}).register(hl7v2Metadata, {
  title: 'DLN',
  version: '2.6',
  description: 'HL7 v2.6 DLN composite data type'
});

/**
 * Type definition for DLN
 */
export type DLN = z.infer<typeof DLN>;
