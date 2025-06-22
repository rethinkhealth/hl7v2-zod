import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 GP2 Fields
 * 
 * HL7 v2.7 GP2 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GP2.1 - Revenue Code
 */
export const GP2_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.1",
  "version": "2.7",
  "description": "Revenue Code",
  "type": "Field",
  "item": 1600,
  "table": "HL70456",
  "longName": "HL7Revenue Code"
});

/**
 * GP2.2 - Number of Service Units
 */
export const GP2_2 = datatypes.NM.register(hl7v2Metadata, {
  "title": "GP2.2",
  "version": "2.7",
  "description": "Number of Service Units",
  "type": "Field",
  "item": 1604,
  "table": "",
  "longName": "HL7Number of Service Units"
});

/**
 * GP2.3 - Charge
 */
export const GP2_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "GP2.3",
  "version": "2.7",
  "description": "Charge",
  "type": "Field",
  "item": 1605,
  "table": "",
  "longName": "HL7Charge"
});

/**
 * GP2.4 - Reimbursement Action Code
 */
export const GP2_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.4",
  "version": "2.7",
  "description": "Reimbursement Action Code",
  "type": "Field",
  "item": 1606,
  "table": "HL70459",
  "longName": "HL7Reimbursement Action Code"
});

/**
 * GP2.5 - Denial or Rejection Code
 */
export const GP2_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.5",
  "version": "2.7",
  "description": "Denial or Rejection Code",
  "type": "Field",
  "item": 1607,
  "table": "HL70460",
  "longName": "HL7Denial or Rejection Code"
});

/**
 * GP2.6 - OCE Edit Code
 */
export const GP2_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.6",
  "version": "2.7",
  "description": "OCE Edit Code",
  "type": "Field",
  "item": 1608,
  "table": "HL70458",
  "longName": "HL7OCE Edit Code"
});

/**
 * GP2.7 - Ambulatory Payment Classification Code
 */
export const GP2_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.7",
  "version": "2.7",
  "description": "Ambulatory Payment Classification Code",
  "type": "Field",
  "item": 1609,
  "table": "HL70466",
  "longName": "HL7Ambulatory Payment Classification Code"
});

/**
 * GP2.8 - Modifier Edit Code
 */
export const GP2_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.8",
  "version": "2.7",
  "description": "Modifier Edit Code",
  "type": "Field",
  "item": 1610,
  "table": "HL70467",
  "longName": "HL7Modifier Edit Code"
});

/**
 * GP2.9 - Payment Adjustment Code
 */
export const GP2_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.9",
  "version": "2.7",
  "description": "Payment Adjustment Code",
  "type": "Field",
  "item": 1611,
  "table": "HL70468",
  "longName": "HL7Payment Adjustment Code"
});

/**
 * GP2.10 - Packaging Status Code
 */
export const GP2_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.10",
  "version": "2.7",
  "description": "Packaging Status Code",
  "type": "Field",
  "item": 1617,
  "table": "HL70469",
  "longName": "HL7Packaging Status Code"
});

/**
 * GP2.11 - Expected CMS Payment Amount
 */
export const GP2_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "GP2.11",
  "version": "2.7",
  "description": "Expected CMS Payment Amount",
  "type": "Field",
  "item": 1618,
  "table": "",
  "longName": "HL7Expected CMS Payment Amount"
});

/**
 * GP2.12 - Reimbursement Type Code
 */
export const GP2_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GP2.12",
  "version": "2.7",
  "description": "Reimbursement Type Code",
  "type": "Field",
  "item": 1619,
  "table": "HL70470",
  "longName": "HL7Reimbursement Type Code"
});

/**
 * GP2.13 - Co-Pay Amount
 */
export const GP2_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "GP2.13",
  "version": "2.7",
  "description": "Co-Pay Amount",
  "type": "Field",
  "item": 1620,
  "table": "",
  "longName": "HL7Co-Pay Amount"
});

/**
 * GP2.14 - Pay Rate per Service Unit
 */
export const GP2_14 = datatypes.NM.register(hl7v2Metadata, {
  "title": "GP2.14",
  "version": "2.7",
  "description": "Pay Rate per Service Unit",
  "type": "Field",
  "item": 1621,
  "table": "",
  "longName": "HL7Pay Rate per Service Unit"
});
