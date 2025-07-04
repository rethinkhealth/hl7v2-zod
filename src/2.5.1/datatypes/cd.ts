import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { WVI } from './wvi';
import { WVS } from './wvs';
import { CSU } from './csu';
import { CCP } from './ccp';

/**
 * HL7 v2.5 CD Composite Data Type
 * 
 * HL7 v2.5 CD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CD.1 - Channel Identifier
 */
export const CD_1 = WVI.optional().register(hl7v2Metadata, {
  "title": "CD.1",
  "version": "2.5",
  "description": "Channel Identifier",
  "type": "DataType",
  "length": 22,
  "optionality": "O"
});

/**
 * CD.2 - Waveform Source
 */
export const CD_2 = WVS.optional().register(hl7v2Metadata, {
  "title": "CD.2",
  "version": "2.5",
  "description": "Waveform Source",
  "type": "DataType",
  "length": 17,
  "optionality": "O"
});

/**
 * CD.3 - Channel Sensitivity/Units
 */
export const CD_3 = CSU.optional().register(hl7v2Metadata, {
  "title": "CD.3",
  "version": "2.5",
  "description": "Channel Sensitivity/Units",
  "type": "DataType",
  "length": 478,
  "optionality": "O"
});

/**
 * CD.4 - Channel Calibration Parameters
 */
export const CD_4 = CCP.optional().register(hl7v2Metadata, {
  "title": "CD.4",
  "version": "2.5",
  "description": "Channel Calibration Parameters",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * CD.5 - Channel Sampling Frequency
 */
export const CD_5 = SimpleTypes.NM.max(6).optional().register(hl7v2Metadata, {
  "title": "CD.5",
  "version": "2.5",
  "description": "Channel Sampling Frequency",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * CD.6 - Minimum/Maximum Data Values
 */
export const CD_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CD.6",
  "version": "2.5",
  "description": "Minimum/Maximum Data Values",
  "type": "DataType",
  "length": 33,
  "optionality": "O"
});

/**
 * CD - HL7 v2.5 CD composite data type
 * 
 * Components:
 * - CD.1: Channel Identifier (WVI)
 * - CD.2: Waveform Source (WVS)
 * - CD.3: Channel Sensitivity/Units (CSU)
 * - CD.4: Channel Calibration Parameters (CCP)
 * - CD.5: Channel Sampling Frequency (NM)
 * - CD.6: Minimum/Maximum Data Values (NR)
 */
export const CD = z.object({
  [`1`]: CD_1,
  [`2`]: CD_2,
  [`3`]: CD_3,
  [`4`]: CD_4,
  [`5`]: CD_5,
  [`6`]: CD_6
}).register(hl7v2Metadata, {
  title: 'CD',
  version: '2.5',
  description: 'HL7 v2.5 CD composite data type'
});

/**
 * Type definition for CD
 */
export type CD = z.infer<typeof CD>;
