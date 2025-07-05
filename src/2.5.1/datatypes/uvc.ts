import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { CNE } from './cne';

/**
 * HL7 v2.5 UVC Composite Data Type
 * 
 * HL7 v2.5 UVC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UVC.1 - Value Code
 */
export const UVC_1 = CNE.register(hl7v2Metadata, {
  "title": "UVC.1",
  "version": "2.5",
  "description": "Value Code",
  "type": "DataType",
  "length": 20,
  "optionality": "R"
});

/**
 * UVC.2 - Value Amount
 */
export const UVC_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "UVC.2",
  "version": "2.5",
  "description": "Value Amount",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * UVC - HL7 v2.5 UVC composite data type
 * 
 * Components:
 * - UVC.1: Value Code (CNE)
 * - UVC.2: Value Amount (MO)
 */
export const UVC = z.object({
  "1": UVC_1,
  "2": UVC_2
}).register(hl7v2Metadata, {
  title: 'UVC',
  version: '2.5',
  description: 'HL7 v2.5 UVC composite data type'
});

/**
 * Type definition for UVC
 */
export type UVC = z.infer<typeof UVC>;
