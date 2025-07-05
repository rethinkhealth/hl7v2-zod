import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 XPN Composite Data Type
 * 
 * HL7 v2.5 XPN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XPN.1 - Family Name
 */
export const XPN_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.1",
  "version": "2.5",
  "description": "Family Name",
  "type": "DataType",
  "length": 194,
  "optionality": "O"
});

/**
 * XPN.2 - Given Name
 */
export const XPN_2 = SimpleTypes.ST.max(30).optional().register(hl7v2Metadata, {
  "title": "XPN.2",
  "version": "2.5",
  "description": "Given Name",
  "type": "DataType",
  "length": 30,
  "optionality": "O"
});

/**
 * XPN.3 - Second and Further Given Names or Initials Thereof
 */
export const XPN_3 = SimpleTypes.ST.max(30).optional().register(hl7v2Metadata, {
  "title": "XPN.3",
  "version": "2.5",
  "description": "Second and Further Given Names or Initials Thereof",
  "type": "DataType",
  "length": 30,
  "optionality": "O"
});

/**
 * XPN.4 - Suffix (e.g., JR or III)
 */
export const XPN_4 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "XPN.4",
  "version": "2.5",
  "description": "Suffix (e.g., JR or III)",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * XPN.5 - Prefix (e.g., DR)
 */
export const XPN_5 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "XPN.5",
  "version": "2.5",
  "description": "Prefix (e.g., DR)",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * XPN.6 - Degree (e.g., MD)
 */
export const XPN_6 = SimpleTypes.IS.max(6).optional().register(hl7v2Metadata, {
  "title": "XPN.6",
  "version": "2.5",
  "description": "Degree (e.g., MD)",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * XPN.7 - Name Type Code
 */
export const XPN_7 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XPN.7",
  "version": "2.5",
  "description": "Name Type Code",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XPN.8 - Name Representation Code
 */
export const XPN_8 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XPN.8",
  "version": "2.5",
  "description": "Name Representation Code",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XPN.9 - Name Context
 */
export const XPN_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.9",
  "version": "2.5",
  "description": "Name Context",
  "type": "DataType",
  "length": 483,
  "optionality": "O"
});

/**
 * XPN.10 - Name Validity Range
 */
export const XPN_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.10",
  "version": "2.5",
  "description": "Name Validity Range",
  "type": "DataType",
  "length": 53,
  "optionality": "O"
});

/**
 * XPN.11 - Name Assembly Order
 */
export const XPN_11 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XPN.11",
  "version": "2.5",
  "description": "Name Assembly Order",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XPN.12 - Effective Date
 */
export const XPN_12 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.12",
  "version": "2.5",
  "description": "Effective Date",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * XPN.13 - Expiration Date
 */
export const XPN_13 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XPN.13",
  "version": "2.5",
  "description": "Expiration Date",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * XPN.14 - Professional Suffix
 */
export const XPN_14 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "XPN.14",
  "version": "2.5",
  "description": "Professional Suffix",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * XPN - HL7 v2.5 XPN composite data type
 * 
 * Components:
 * - XPN.1: Family Name (FN)
 * - XPN.2: Given Name (ST)
 * - XPN.3: Second and Further Given Names or Initials Thereof (ST)
 * - XPN.4: Suffix (e.g., JR or III) (ST)
 * - XPN.5: Prefix (e.g., DR) (ST)
 * - XPN.6: Degree (e.g., MD) (IS)
 * - XPN.7: Name Type Code (ID)
 * - XPN.8: Name Representation Code (ID)
 * - XPN.9: Name Context (CE)
 * - XPN.10: Name Validity Range (DR)
 * - XPN.11: Name Assembly Order (ID)
 * - XPN.12: Effective Date (TS)
 * - XPN.13: Expiration Date (TS)
 * - XPN.14: Professional Suffix (ST)
 */
export const XPN = z.object({
  "1": XPN_1,
  "2": XPN_2,
  "3": XPN_3,
  "4": XPN_4,
  "5": XPN_5,
  "6": XPN_6,
  "7": XPN_7,
  "8": XPN_8,
  "9": XPN_9,
  "10": XPN_10,
  "11": XPN_11,
  "12": XPN_12,
  "13": XPN_13,
  "14": XPN_14
}).register(hl7v2Metadata, {
  title: 'XPN',
  version: '2.5',
  description: 'HL7 v2.5 XPN composite data type'
});

/**
 * Type definition for XPN
 */
export type XPN = z.infer<typeof XPN>;
