import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 AUT Fields
 * 
 * HL7 v2.5 AUT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AUT.1 - Authorizing Payor, Plan ID
 */
export const AUT_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.1",
  "version": "2.5",
  "description": "Authorizing Payor, Plan ID",
  "type": "Field",
  "item": 1146,
  "table": "HL70072",
  "longName": "HL7Authorizing Payor, Plan ID",
  "length": 250
});

/**
 * AUT.2 - Authorizing Payor, Company ID
 */
export const AUT_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.2",
  "version": "2.5",
  "description": "Authorizing Payor, Company ID",
  "type": "Field",
  "item": 1147,
  "table": "HL70285",
  "longName": "HL7Authorizing Payor, Company ID",
  "length": 250
});

/**
 * AUT.3 - Authorizing Payor, Company Name
 */
export const AUT_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.3",
  "version": "2.5",
  "description": "Authorizing Payor, Company Name",
  "type": "Field",
  "item": 1148,
  "table": "",
  "longName": "HL7Authorizing Payor, Company Name",
  "length": 45
});

/**
 * AUT.4 - Authorization Effective Date
 */
export const AUT_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.4",
  "version": "2.5",
  "description": "Authorization Effective Date",
  "type": "Field",
  "item": 1149,
  "table": "",
  "longName": "HL7Authorization Effective Date",
  "length": 26
});

/**
 * AUT.5 - Authorization Expiration Date
 */
export const AUT_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.5",
  "version": "2.5",
  "description": "Authorization Expiration Date",
  "type": "Field",
  "item": 1150,
  "table": "",
  "longName": "HL7Authorization Expiration Date",
  "length": 26
});

/**
 * AUT.6 - Authorization Identifier
 */
export const AUT_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.6",
  "version": "2.5",
  "description": "Authorization Identifier",
  "type": "Field",
  "item": 1151,
  "table": "",
  "longName": "HL7Authorization Identifier",
  "length": 30
});

/**
 * AUT.7 - Reimbursement Limit
 */
export const AUT_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.7",
  "version": "2.5",
  "description": "Reimbursement Limit",
  "type": "Field",
  "item": 1152,
  "table": "",
  "longName": "HL7Reimbursement Limit",
  "length": 25
});

/**
 * AUT.8 - Requested Number of Treatments
 */
export const AUT_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "AUT.8",
  "version": "2.5",
  "description": "Requested Number of Treatments",
  "type": "Field",
  "item": 1153,
  "table": "",
  "longName": "HL7Requested Number of Treatments",
  "length": 2
});

/**
 * AUT.9 - Authorized Number of Treatments
 */
export const AUT_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "AUT.9",
  "version": "2.5",
  "description": "Authorized Number of Treatments",
  "type": "Field",
  "item": 1154,
  "table": "",
  "longName": "HL7Authorized Number of Treatments",
  "length": 2
});

/**
 * AUT.10 - Process Date
 */
export const AUT_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AUT.10",
  "version": "2.5",
  "description": "Process Date",
  "type": "Field",
  "item": 1145,
  "table": "",
  "longName": "HL7Process Date",
  "length": 26
});
