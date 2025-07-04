import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.8 XTN Composite Data Type
 * 
 * HL7 v2.8 XTN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XTN.2 - Telecommunication Use Code
 */
export const XTN_2 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "XTN.2",
  "version": "2.8",
  "description": "Telecommunication Use Code",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * XTN.3 - Telecommunication Equipment Type
 */
export const XTN_3 = SimpleTypes.ID.max(8).register(hl7v2Metadata, {
  "title": "XTN.3",
  "version": "2.8",
  "description": "Telecommunication Equipment Type",
  "type": "DataType",
  "length": 8,
  "optionality": "R"
});

/**
 * XTN.4 - Communication Address
 */
export const XTN_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XTN.4",
  "version": "2.8",
  "description": "Communication Address",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.5 - Country Code
 */
export const XTN_5 = SimpleTypes.SNM.optional().register(hl7v2Metadata, {
  "title": "XTN.5",
  "version": "2.8",
  "description": "Country Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.6 - Area/City Code
 */
export const XTN_6 = SimpleTypes.SNM.optional().register(hl7v2Metadata, {
  "title": "XTN.6",
  "version": "2.8",
  "description": "Area/City Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.7 - Local Number
 */
export const XTN_7 = SimpleTypes.SNM.optional().register(hl7v2Metadata, {
  "title": "XTN.7",
  "version": "2.8",
  "description": "Local Number",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.8 - Extension
 */
export const XTN_8 = SimpleTypes.SNM.optional().register(hl7v2Metadata, {
  "title": "XTN.8",
  "version": "2.8",
  "description": "Extension",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.9 - Any Text
 */
export const XTN_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XTN.9",
  "version": "2.8",
  "description": "Any Text",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.10 - Extension Prefix
 */
export const XTN_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XTN.10",
  "version": "2.8",
  "description": "Extension Prefix",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.11 - Speed Dial Code
 */
export const XTN_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XTN.11",
  "version": "2.8",
  "description": "Speed Dial Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.12 - Unformatted Telephone number
 */
export const XTN_12 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XTN.12",
  "version": "2.8",
  "description": "Unformatted Telephone number",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.13 - Effective Start Date
 */
export const XTN_13 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XTN.13",
  "version": "2.8",
  "description": "Effective Start Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.14 - Expiration Date
 */
export const XTN_14 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "XTN.14",
  "version": "2.8",
  "description": "Expiration Date",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.15 - Expiration Reason
 */
export const XTN_15 = CWE.optional().register(hl7v2Metadata, {
  "title": "XTN.15",
  "version": "2.8",
  "description": "Expiration Reason",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.16 - Protection Code
 */
export const XTN_16 = CWE.optional().register(hl7v2Metadata, {
  "title": "XTN.16",
  "version": "2.8",
  "description": "Protection Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.17 - Shared Telecommunication Identifier
 */
export const XTN_17 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XTN.17",
  "version": "2.8",
  "description": "Shared Telecommunication Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN.18 - Preference Order
 */
export const XTN_18 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "XTN.18",
  "version": "2.8",
  "description": "Preference Order",
  "type": "DataType",
  "optionality": "O"
});

/**
 * XTN - HL7 v2.8 XTN composite data type
 * 
 * Components:
 * - XTN.2: Telecommunication Use Code (ID)
 * - XTN.3: Telecommunication Equipment Type (ID)
 * - XTN.4: Communication Address (ST)
 * - XTN.5: Country Code (SNM)
 * - XTN.6: Area/City Code (SNM)
 * - XTN.7: Local Number (SNM)
 * - XTN.8: Extension (SNM)
 * - XTN.9: Any Text (ST)
 * - XTN.10: Extension Prefix (ST)
 * - XTN.11: Speed Dial Code (ST)
 * - XTN.12: Unformatted Telephone number (ST)
 * - XTN.13: Effective Start Date (DTM)
 * - XTN.14: Expiration Date (DTM)
 * - XTN.15: Expiration Reason (CWE)
 * - XTN.16: Protection Code (CWE)
 * - XTN.17: Shared Telecommunication Identifier (EI)
 * - XTN.18: Preference Order (NM)
 */
export const XTN = z.object({
  [`1`]: XTN_2,
  [`2`]: XTN_3,
  [`3`]: XTN_4,
  [`4`]: XTN_5,
  [`5`]: XTN_6,
  [`6`]: XTN_7,
  [`7`]: XTN_8,
  [`8`]: XTN_9,
  [`9`]: XTN_10,
  [`10`]: XTN_11,
  [`11`]: XTN_12,
  [`12`]: XTN_13,
  [`13`]: XTN_14,
  [`14`]: XTN_15,
  [`15`]: XTN_16,
  [`16`]: XTN_17,
  [`17`]: XTN_18
}).register(hl7v2Metadata, {
  title: 'XTN',
  version: '2.8',
  description: 'HL7 v2.8 XTN composite data type'
});

/**
 * Type definition for XTN
 */
export type XTN = z.infer<typeof XTN>;
