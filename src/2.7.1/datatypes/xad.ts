import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { SAD } from './sad';
import { CWE } from './cwe';

/**
 * HL7 v2.7 XAD Composite Data Type
 * 
 * HL7 v2.7 XAD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XAD.1 - Street Address
 */
export const XAD_1 = SAD.optional().register(hl7v2Metadata, {
  "title": "XAD.1",
  "version": "2.7",
  "description": "Street Address",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.2 - Other Designation
 */
export const XAD_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.2",
  "version": "2.7",
  "description": "Other Designation",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.3 - City
 */
export const XAD_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.3",
  "version": "2.7",
  "description": "City",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.4 - State or Province
 */
export const XAD_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.4",
  "version": "2.7",
  "description": "State or Province",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.5 - Zip or Postal Code
 */
export const XAD_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.5",
  "version": "2.7",
  "description": "Zip or Postal Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.6 - Country
 */
export const XAD_6 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "XAD.6",
  "version": "2.7",
  "description": "Country",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * XAD.7 - Address Type
 */
export const XAD_7 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "XAD.7",
  "version": "2.7",
  "description": "Address Type",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * XAD.8 - Other Geographic Designation
 */
export const XAD_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.8",
  "version": "2.7",
  "description": "Other Geographic Designation",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.9 - County/Parish Code
 */
export const XAD_9 = CWE.optional().register(hl7v2Metadata, {
  "title": "XAD.9",
  "version": "2.7",
  "description": "County/Parish Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.10 - Census Tract
 */
export const XAD_10 = CWE.optional().register(hl7v2Metadata, {
  "title": "XAD.10",
  "version": "2.7",
  "description": "Census Tract",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.11 - Address Representation Code
 */
export const XAD_11 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XAD.11",
  "version": "2.7",
  "description": "Address Representation Code",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XAD.13 - Effective Date
 */
export const XAD_13 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XAD.13",
  "version": "2.7",
  "description": "Effective Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.14 - Expiration Date
 */
export const XAD_14 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XAD.14",
  "version": "2.7",
  "description": "Expiration Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.15 - Expiration Reason
 */
export const XAD_15 = CWE.optional().register(hl7v2Metadata, {
  "title": "XAD.15",
  "version": "2.7",
  "description": "Expiration Reason",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.16 - Temporary Indicator
 */
export const XAD_16 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XAD.16",
  "version": "2.7",
  "description": "Temporary Indicator",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XAD.17 - Bad Address Indicator
 */
export const XAD_17 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XAD.17",
  "version": "2.7",
  "description": "Bad Address Indicator",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XAD.18 - Address Usage
 */
export const XAD_18 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XAD.18",
  "version": "2.7",
  "description": "Address Usage",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XAD.19 - Addressee
 */
export const XAD_19 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.19",
  "version": "2.7",
  "description": "Addressee",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.20 - Comment
 */
export const XAD_20 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.20",
  "version": "2.7",
  "description": "Comment",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.21 - Preference Order
 */
export const XAD_21 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "XAD.21",
  "version": "2.7",
  "description": "Preference Order",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.22 - Protection Code
 */
export const XAD_22 = CWE.optional().register(hl7v2Metadata, {
  "title": "XAD.22",
  "version": "2.7",
  "description": "Protection Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD.23 - Address Identifier
 */
export const XAD_23 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.23",
  "version": "2.7",
  "description": "Address Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XAD - HL7 v2.7 XAD composite data type
 * 
 * Components:
 * - XAD.1: Street Address (SAD)
 * - XAD.2: Other Designation (ST)
 * - XAD.3: City (ST)
 * - XAD.4: State or Province (ST)
 * - XAD.5: Zip or Postal Code (ST)
 * - XAD.6: Country (ID)
 * - XAD.7: Address Type (ID)
 * - XAD.8: Other Geographic Designation (ST)
 * - XAD.9: County/Parish Code (CWE)
 * - XAD.10: Census Tract (CWE)
 * - XAD.11: Address Representation Code (ID)
 * - XAD.13: Effective Date (DTM)
 * - XAD.14: Expiration Date (DTM)
 * - XAD.15: Expiration Reason (CWE)
 * - XAD.16: Temporary Indicator (ID)
 * - XAD.17: Bad Address Indicator (ID)
 * - XAD.18: Address Usage (ID)
 * - XAD.19: Addressee (ST)
 * - XAD.20: Comment (ST)
 * - XAD.21: Preference Order (NM)
 * - XAD.22: Protection Code (CWE)
 * - XAD.23: Address Identifier (EI)
 */
export const XAD = z.object({
  [`1`]: XAD_1,
  [`2`]: XAD_2,
  [`3`]: XAD_3,
  [`4`]: XAD_4,
  [`5`]: XAD_5,
  [`6`]: XAD_6,
  [`7`]: XAD_7,
  [`8`]: XAD_8,
  [`9`]: XAD_9,
  [`10`]: XAD_10,
  [`11`]: XAD_11,
  [`12`]: XAD_13,
  [`13`]: XAD_14,
  [`14`]: XAD_15,
  [`15`]: XAD_16,
  [`16`]: XAD_17,
  [`17`]: XAD_18,
  [`18`]: XAD_19,
  [`19`]: XAD_20,
  [`20`]: XAD_21,
  [`21`]: XAD_22,
  [`22`]: XAD_23
}).register(hl7v2Metadata, {
  title: 'XAD',
  version: '2.7',
  description: 'HL7 v2.7 XAD composite data type'
});

/**
 * Type definition for XAD
 */
export type XAD = z.infer<typeof XAD>;
