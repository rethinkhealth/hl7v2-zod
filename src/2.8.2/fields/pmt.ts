import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 PMT Fields
 * 
 * HL7 v2.8 PMT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PMT.1 - Payment/Remittance Advice Number
 */
export const PMT_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PMT.1",
  "version": "2.8",
  "description": "Payment/Remittance Advice Number",
  "type": "Field",
  "item": 2018,
  "table": "",
  "longName": "HL7Payment/Remittance Advice Number"
});

/**
 * PMT.2 - Payment/Remittance Effective Date/Time
 */
export const PMT_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PMT.2",
  "version": "2.8",
  "description": "Payment/Remittance Effective Date/Time",
  "type": "Field",
  "item": 2019,
  "table": "",
  "longName": "HL7Payment/Remittance Effective Date/Time"
});

/**
 * PMT.3 - Payment/Remittance Expiration Date/Time
 */
export const PMT_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PMT.3",
  "version": "2.8",
  "description": "Payment/Remittance Expiration Date/Time",
  "type": "Field",
  "item": 2020,
  "table": "",
  "longName": "HL7Payment/Remittance Expiration Date/Time"
});

/**
 * PMT.4 - Payment Method
 */
export const PMT_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PMT.4",
  "version": "2.8",
  "description": "Payment Method",
  "type": "Field",
  "item": 2021,
  "table": "HL70570",
  "longName": "HL7Payment Method"
});

/**
 * PMT.5 - Payment/Remittance Date/Time
 */
export const PMT_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PMT.5",
  "version": "2.8",
  "description": "Payment/Remittance Date/Time",
  "type": "Field",
  "item": 2022,
  "table": "",
  "longName": "HL7Payment/Remittance Date/Time"
});

/**
 * PMT.6 - Payment/Remittance Amount
 */
export const PMT_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PMT.6",
  "version": "2.8",
  "description": "Payment/Remittance Amount",
  "type": "Field",
  "item": 2023,
  "table": "",
  "longName": "HL7Payment/Remittance Amount"
});

/**
 * PMT.7 - Check Number
 */
export const PMT_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PMT.7",
  "version": "2.8",
  "description": "Check Number",
  "type": "Field",
  "item": 2024,
  "table": "",
  "longName": "HL7Check Number"
});

/**
 * PMT.8 - Payee Bank Identification
 */
export const PMT_8 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PMT.8",
  "version": "2.8",
  "description": "Payee Bank Identification",
  "type": "Field",
  "item": 2025,
  "table": "",
  "longName": "HL7Payee Bank Identification"
});

/**
 * PMT.9 - Payee Transit Number
 */
export const PMT_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PMT.9",
  "version": "2.8",
  "description": "Payee Transit Number",
  "type": "Field",
  "item": 2026,
  "table": "",
  "longName": "HL7Payee Transit Number"
});

/**
 * PMT.10 - Payee Bank Account ID
 */
export const PMT_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PMT.10",
  "version": "2.8",
  "description": "Payee Bank Account ID",
  "type": "Field",
  "item": 2027,
  "table": "",
  "longName": "HL7Payee Bank Account ID"
});

/**
 * PMT.11 - Payment Organization
 */
export const PMT_11 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PMT.11",
  "version": "2.8",
  "description": "Payment Organization",
  "type": "Field",
  "item": 2028,
  "table": "",
  "longName": "HL7Payment Organization"
});

/**
 * PMT.12 - ESR-Code-Line
 */
export const PMT_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PMT.12",
  "version": "2.8",
  "description": "ESR-Code-Line",
  "type": "Field",
  "item": 2029,
  "table": "",
  "longName": "HL7ESR-Code-Line"
});
