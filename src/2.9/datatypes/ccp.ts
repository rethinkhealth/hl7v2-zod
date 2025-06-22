import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 CCP Composite Data Type
 * 
 * HL7 v2.9 CCP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCP.1 - Channel Calibration Sensitivity Correction Factor
 */
export const CCP_1 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "CCP.1",
  "version": "2.9",
  "description": "Channel Calibration Sensitivity Correction Factor",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CCP.2 - Channel Calibration Baseline
 */
export const CCP_2 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "CCP.2",
  "version": "2.9",
  "description": "Channel Calibration Baseline",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CCP.3 - Channel Calibration Time Skew
 */
export const CCP_3 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "CCP.3",
  "version": "2.9",
  "description": "Channel Calibration Time Skew",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CCP - HL7 v2.9 CCP composite data type
 * 
 * Components:
 * - CCP.1: Channel Calibration Sensitivity Correction Factor (NM)
 * - CCP.2: Channel Calibration Baseline (NM)
 * - CCP.3: Channel Calibration Time Skew (NM)
 */
export const CCP = z.object({
  [`1`]: CCP_1,
  [`2`]: CCP_2,
  [`3`]: CCP_3
}).register(hl7v2Metadata, {
  title: 'CCP',
  version: '2.9',
  description: 'HL7 v2.9 CCP composite data type'
});

/**
 * Type definition for CCP
 */
export type CCP = z.infer<typeof CCP>;
