import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { SAD } from './sad';

/**
 * HL7 v2.5 XAD Composite Data Type
 * 
 * HL7 v2.5 XAD composite data type
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
  "version": "2.5",
  "description": "Street Address",
  "type": "DataType",
  "length": 184,
  "optionality": "O"
});

/**
 * XAD.2 - Other Designation
 */
export const XAD_2 = SimpleTypes.ST.max(120).optional().register(hl7v2Metadata, {
  "title": "XAD.2",
  "version": "2.5",
  "description": "Other Designation",
  "type": "DataType",
  "length": 120,
  "optionality": "O"
});

/**
 * XAD.3 - City
 */
export const XAD_3 = SimpleTypes.ST.max(50).optional().register(hl7v2Metadata, {
  "title": "XAD.3",
  "version": "2.5",
  "description": "City",
  "type": "DataType",
  "length": 50,
  "optionality": "O"
});

/**
 * XAD.4 - State or Province
 */
export const XAD_4 = SimpleTypes.ST.max(50).optional().register(hl7v2Metadata, {
  "title": "XAD.4",
  "version": "2.5",
  "description": "State or Province",
  "type": "DataType",
  "length": 50,
  "optionality": "O"
});

/**
 * XAD.5 - Zip or Postal Code
 */
export const XAD_5 = SimpleTypes.ST.max(12).optional().register(hl7v2Metadata, {
  "title": "XAD.5",
  "version": "2.5",
  "description": "Zip or Postal Code",
  "type": "DataType",
  "length": 12,
  "optionality": "O"
});

/**
 * XAD.6 - Country
 */
export const XAD_6 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "XAD.6",
  "version": "2.5",
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
  "version": "2.5",
  "description": "Address Type",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * XAD.8 - Other Geographic Designation
 */
export const XAD_8 = SimpleTypes.ST.max(50).optional().register(hl7v2Metadata, {
  "title": "XAD.8",
  "version": "2.5",
  "description": "Other Geographic Designation",
  "type": "DataType",
  "length": 50,
  "optionality": "O"
});

/**
 * XAD.9 - County/Parish Code
 */
export const XAD_9 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "XAD.9",
  "version": "2.5",
  "description": "County/Parish Code",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * XAD.10 - Census Tract
 */
export const XAD_10 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "XAD.10",
  "version": "2.5",
  "description": "Census Tract",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * XAD.11 - Address Representation Code
 */
export const XAD_11 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XAD.11",
  "version": "2.5",
  "description": "Address Representation Code",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XAD.12 - Address Validity Range
 */
export const XAD_12 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.12",
  "version": "2.5",
  "description": "Address Validity Range",
  "type": "DataType",
  "length": 53,
  "optionality": "O"
});

/**
 * XAD.13 - Effective Date
 */
export const XAD_13 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.13",
  "version": "2.5",
  "description": "Effective Date",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * XAD.14 - Expiration Date
 */
export const XAD_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XAD.14",
  "version": "2.5",
  "description": "Expiration Date",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * XAD - HL7 v2.5 XAD composite data type
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
 * - XAD.9: County/Parish Code (IS)
 * - XAD.10: Census Tract (IS)
 * - XAD.11: Address Representation Code (ID)
 * - XAD.12: Address Validity Range (DR)
 * - XAD.13: Effective Date (TS)
 * - XAD.14: Expiration Date (TS)
 */
export const XAD = z.object({
  "1": XAD_1,
  "2": XAD_2,
  "3": XAD_3,
  "4": XAD_4,
  "5": XAD_5,
  "6": XAD_6,
  "7": XAD_7,
  "8": XAD_8,
  "9": XAD_9,
  "10": XAD_10,
  "11": XAD_11,
  "12": XAD_12,
  "13": XAD_13,
  "14": XAD_14
}).register(hl7v2Metadata, {
  title: 'XAD',
  version: '2.5',
  description: 'HL7 v2.5 XAD composite data type'
});

/**
 * Type definition for XAD
 */
export type XAD = z.infer<typeof XAD>;
