import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 XON Composite Data Type
 * 
 * HL7 v2.5 XON composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XON.1 - Organization Name
 */
export const XON_1 = SimpleTypes.ST.max(50).optional().register(hl7v2Metadata, {
  "title": "XON.1",
  "version": "2.5",
  "description": "Organization Name",
  "type": "DataType",
  "length": 50,
  "optionality": "O"
});

/**
 * XON.2 - Organization Name Type Code
 */
export const XON_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "XON.2",
  "version": "2.5",
  "description": "Organization Name Type Code",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * XON.3 - ID Number
 */
export const XON_3 = SimpleTypes.NM.max(4).optional().register(hl7v2Metadata, {
  "title": "XON.3",
  "version": "2.5",
  "description": "ID Number",
  "type": "DataType",
  "length": 4,
  "optionality": "O"
});

/**
 * XON.4 - Check Digit
 */
export const XON_4 = SimpleTypes.NM.max(1).optional().register(hl7v2Metadata, {
  "title": "XON.4",
  "version": "2.5",
  "description": "Check Digit",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XON.5 - Check Digit Scheme
 */
export const XON_5 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "XON.5",
  "version": "2.5",
  "description": "Check Digit Scheme",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * XON.6 - Assigning Authority
 */
export const XON_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XON.6",
  "version": "2.5",
  "description": "Assigning Authority",
  "type": "DataType",
  "length": 227,
  "optionality": "O"
});

/**
 * XON.7 - Identifier Type Code
 */
export const XON_7 = SimpleTypes.ID.max(5).optional().register(hl7v2Metadata, {
  "title": "XON.7",
  "version": "2.5",
  "description": "Identifier Type Code",
  "type": "DataType",
  "length": 5,
  "optionality": "O"
});

/**
 * XON.8 - Assigning Facility
 */
export const XON_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "XON.8",
  "version": "2.5",
  "description": "Assigning Facility",
  "type": "DataType",
  "length": 227,
  "optionality": "O"
});

/**
 * XON.9 - Name Representation Code
 */
export const XON_9 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "XON.9",
  "version": "2.5",
  "description": "Name Representation Code",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * XON.10 - Organization Identifier
 */
export const XON_10 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "XON.10",
  "version": "2.5",
  "description": "Organization Identifier",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * XON - HL7 v2.5 XON composite data type
 * 
 * Components:
 * - XON.1: Organization Name (ST)
 * - XON.2: Organization Name Type Code (IS)
 * - XON.3: ID Number (NM)
 * - XON.4: Check Digit (NM)
 * - XON.5: Check Digit Scheme (ID)
 * - XON.6: Assigning Authority (HD)
 * - XON.7: Identifier Type Code (ID)
 * - XON.8: Assigning Facility (HD)
 * - XON.9: Name Representation Code (ID)
 * - XON.10: Organization Identifier (ST)
 */
export const XON = z.object({
  "1": XON_1,
  "2": XON_2,
  "3": XON_3,
  "4": XON_4,
  "5": XON_5,
  "6": XON_6,
  "7": XON_7,
  "8": XON_8,
  "9": XON_9,
  "10": XON_10
}).register(hl7v2Metadata, {
  title: 'XON',
  version: '2.5',
  description: 'HL7 v2.5 XON composite data type'
});

/**
 * Type definition for XON
 */
export type XON = z.infer<typeof XON>;
