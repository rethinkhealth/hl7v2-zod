import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.7 UVC Composite Data Type
 * 
 * HL7 v2.7 UVC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UVC.1 - Value Code
 */
export const UVC_1 = CWE.register(hl7v2Metadata, {
  "title": "UVC.1",
  "version": "2.7",
  "description": "Value Code",
  "type": "DataType",
  "optionality": "R"
});

/**
 * UVC.2 - Value Amount
 */
export const UVC_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "UVC.2",
  "version": "2.7",
  "description": "Value Amount",
  "type": "DataType",
  "optionality": "O"
});

/**
 * UVC.3 - Non-Monetary Value Amount / Quantity
 */
export const UVC_3 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "UVC.3",
  "version": "2.7",
  "description": "Non-Monetary Value Amount / Quantity",
  "type": "DataType",
  "optionality": "O"
});

/**
 * UVC.4 - Non-Monetary Value Amount / Units
 */
export const UVC_4 = CWE.optional().register(hl7v2Metadata, {
  "title": "UVC.4",
  "version": "2.7",
  "description": "Non-Monetary Value Amount / Units",
  "type": "DataType",
  "optionality": "O"
});

/**
 * UVC - HL7 v2.7 UVC composite data type
 * 
 * Components:
 * - UVC.1: Value Code (CWE)
 * - UVC.2: Value Amount (MO)
 * - UVC.3: Non-Monetary Value Amount / Quantity (NM)
 * - UVC.4: Non-Monetary Value Amount / Units (CWE)
 */
export const UVC = z.object({
  [`1`]: UVC_1,
  [`2`]: UVC_2,
  [`3`]: UVC_3,
  [`4`]: UVC_4
}).register(hl7v2Metadata, {
  title: 'UVC',
  version: '2.7',
  description: 'HL7 v2.7 UVC composite data type'
});

/**
 * Type definition for UVC
 */
export type UVC = z.infer<typeof UVC>;
