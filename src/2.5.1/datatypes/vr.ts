import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 VR Composite Data Type
 * 
 * HL7 v2.5 VR composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VR.1 - First Data Code Value
 */
export const VR_1 = SimpleTypes.ST.max(6).optional().register(hl7v2Metadata, {
  "title": "VR.1",
  "version": "2.5",
  "description": "First Data Code Value",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * VR.2 - Last Data Code Value
 */
export const VR_2 = SimpleTypes.ST.max(6).optional().register(hl7v2Metadata, {
  "title": "VR.2",
  "version": "2.5",
  "description": "Last Data Code Value",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * VR - HL7 v2.5 VR composite data type
 * 
 * Components:
 * - VR.1: First Data Code Value (ST)
 * - VR.2: Last Data Code Value (ST)
 */
export const VR = z.object({
  [`1`]: VR_1,
  [`2`]: VR_2
}).register(hl7v2Metadata, {
  title: 'VR',
  version: '2.5',
  description: 'HL7 v2.5 VR composite data type'
});

/**
 * Type definition for VR
 */
export type VR = z.infer<typeof VR>;
