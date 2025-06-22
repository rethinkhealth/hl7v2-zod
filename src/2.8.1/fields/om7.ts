import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 OM7 Fields
 * 
 * HL7 v2.8 OM7 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM7.1 - Sequence Number - Test/Observation Master File
 */
export const OM7_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM7.1",
  "version": "2.8",
  "description": "Sequence Number - Test/Observation Master File",
  "type": "Field",
  "item": 586,
  "table": "",
  "longName": "HL7Sequence Number - Test/Observation Master File"
});

/**
 * OM7.2 - Universal Service Identifier
 */
export const OM7_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.2",
  "version": "2.8",
  "description": "Universal Service Identifier",
  "type": "Field",
  "item": 238,
  "table": "",
  "longName": "HL7Universal Service Identifier"
});

/**
 * OM7.3 - Category Identifier
 */
export const OM7_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.3",
  "version": "2.8",
  "description": "Category Identifier",
  "type": "Field",
  "item": 1481,
  "table": "HL70412",
  "longName": "HL7Category Identifier"
});

/**
 * OM7.4 - Category Description
 */
export const OM7_4 = datatypes.TX.register(hl7v2Metadata, {
  "title": "OM7.4",
  "version": "2.8",
  "description": "Category Description",
  "type": "Field",
  "item": 1482,
  "table": "",
  "longName": "HL7Category Description"
});

/**
 * OM7.5 - Category Synonym
 */
export const OM7_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OM7.5",
  "version": "2.8",
  "description": "Category Synonym",
  "type": "Field",
  "item": 1483,
  "table": "",
  "longName": "HL7Category Synonym"
});

/**
 * OM7.6 - Effective Test/Service Start Date/Time
 */
export const OM7_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OM7.6",
  "version": "2.8",
  "description": "Effective Test/Service Start Date/Time",
  "type": "Field",
  "item": 1484,
  "table": "",
  "longName": "HL7Effective Test/Service Start Date/Time"
});

/**
 * OM7.7 - Effective Test/Service End Date/Time
 */
export const OM7_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OM7.7",
  "version": "2.8",
  "description": "Effective Test/Service End Date/Time",
  "type": "Field",
  "item": 1485,
  "table": "",
  "longName": "HL7Effective Test/Service End Date/Time"
});

/**
 * OM7.8 - Test/Service Default Duration Quantity
 */
export const OM7_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM7.8",
  "version": "2.8",
  "description": "Test/Service Default Duration Quantity",
  "type": "Field",
  "item": 1486,
  "table": "",
  "longName": "HL7Test/Service Default Duration Quantity"
});

/**
 * OM7.9 - Test/Service Default Duration Units
 */
export const OM7_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.9",
  "version": "2.8",
  "description": "Test/Service Default Duration Units",
  "type": "Field",
  "item": 1487,
  "table": "HL79999",
  "longName": "HL7Test/Service Default Duration Units"
});

/**
 * OM7.10 - Test/Service Default Frequency
 */
export const OM7_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.10",
  "version": "2.8",
  "description": "Test/Service Default Frequency",
  "type": "Field",
  "item": 1488,
  "table": "",
  "longName": "HL7Test/Service Default Frequency"
});

/**
 * OM7.11 - Consent Indicator
 */
export const OM7_11 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OM7.11",
  "version": "2.8",
  "description": "Consent Indicator",
  "type": "Field",
  "item": 1489,
  "table": "HL70136",
  "longName": "HL7Consent Indicator",
  "length": 1
});

/**
 * OM7.12 - Consent Identifier
 */
export const OM7_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.12",
  "version": "2.8",
  "description": "Consent Identifier",
  "type": "Field",
  "item": 1490,
  "table": "HL70413",
  "longName": "HL7Consent Identifier"
});

/**
 * OM7.13 - Consent Effective Start Date/Time
 */
export const OM7_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OM7.13",
  "version": "2.8",
  "description": "Consent Effective Start Date/Time",
  "type": "Field",
  "item": 1491,
  "table": "",
  "longName": "HL7Consent Effective Start Date/Time"
});

/**
 * OM7.14 - Consent Effective End Date/Time
 */
export const OM7_14 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OM7.14",
  "version": "2.8",
  "description": "Consent Effective End Date/Time",
  "type": "Field",
  "item": 1492,
  "table": "",
  "longName": "HL7Consent Effective End Date/Time"
});

/**
 * OM7.15 - Consent Interval Quantity
 */
export const OM7_15 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM7.15",
  "version": "2.8",
  "description": "Consent Interval Quantity",
  "type": "Field",
  "item": 1493,
  "table": "",
  "longName": "HL7Consent Interval Quantity"
});

/**
 * OM7.16 - Consent Interval Units
 */
export const OM7_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.16",
  "version": "2.8",
  "description": "Consent Interval Units",
  "type": "Field",
  "item": 1494,
  "table": "HL70414",
  "longName": "HL7Consent Interval Units"
});

/**
 * OM7.17 - Consent Waiting Period Quantity
 */
export const OM7_17 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM7.17",
  "version": "2.8",
  "description": "Consent Waiting Period Quantity",
  "type": "Field",
  "item": 1495,
  "table": "",
  "longName": "HL7Consent Waiting Period Quantity"
});

/**
 * OM7.18 - Consent Waiting Period Units
 */
export const OM7_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.18",
  "version": "2.8",
  "description": "Consent Waiting Period Units",
  "type": "Field",
  "item": 1496,
  "table": "HL70414",
  "longName": "HL7Consent Waiting Period Units"
});

/**
 * OM7.19 - Effective Date/Time of Change
 */
export const OM7_19 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OM7.19",
  "version": "2.8",
  "description": "Effective Date/Time of Change",
  "type": "Field",
  "item": 607,
  "table": "",
  "longName": "HL7Effective Date/Time of Change"
});

/**
 * OM7.20 - Entered By
 */
export const OM7_20 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "OM7.20",
  "version": "2.8",
  "description": "Entered By",
  "type": "Field",
  "item": 224,
  "table": "",
  "longName": "HL7Entered By"
});

/**
 * OM7.21 - Orderable-at Location
 */
export const OM7_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OM7.21",
  "version": "2.8",
  "description": "Orderable-at Location",
  "type": "Field",
  "item": 1497,
  "table": "",
  "longName": "HL7Orderable-at Location"
});

/**
 * OM7.22 - Formulary Status
 */
export const OM7_22 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.22",
  "version": "2.8",
  "description": "Formulary Status",
  "type": "Field",
  "item": 1498,
  "table": "HL70473",
  "longName": "HL7Formulary Status"
});

/**
 * OM7.23 - Special Order Indicator
 */
export const OM7_23 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OM7.23",
  "version": "2.8",
  "description": "Special Order Indicator",
  "type": "Field",
  "item": 1499,
  "table": "HL70136",
  "longName": "HL7Special Order Indicator",
  "length": 1
});

/**
 * OM7.24 - Primary Key Value - CDM
 */
export const OM7_24 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM7.24",
  "version": "2.8",
  "description": "Primary Key Value - CDM",
  "type": "Field",
  "item": 1306,
  "table": "",
  "longName": "HL7Primary Key Value - CDM"
});
