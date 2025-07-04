import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 CER Fields
 * 
 * HL7 v2.8 CER field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CER.1 - Set ID - CER
 */
export const CER_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "CER.1",
  "version": "2.8",
  "description": "Set ID - CER",
  "type": "Field",
  "item": 1856,
  "table": "",
  "longName": "HL7Set ID - CER",
  "length": 4
});

/**
 * CER.2 - Serial Number
 */
export const CER_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CER.2",
  "version": "2.8",
  "description": "Serial Number",
  "type": "Field",
  "item": 1857,
  "table": "",
  "longName": "HL7Serial Number"
});

/**
 * CER.3 - Version
 */
export const CER_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CER.3",
  "version": "2.8",
  "description": "Version",
  "type": "Field",
  "item": 1858,
  "table": "",
  "longName": "HL7Version"
});

/**
 * CER.4 - Granting Authority
 */
export const CER_4 = datatypes.XON.register(hl7v2Metadata, {
  "title": "CER.4",
  "version": "2.8",
  "description": "Granting Authority",
  "type": "Field",
  "item": 1859,
  "table": "",
  "longName": "HL7Granting Authority"
});

/**
 * CER.5 - Issuing Authority
 */
export const CER_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "CER.5",
  "version": "2.8",
  "description": "Issuing Authority",
  "type": "Field",
  "item": 1860,
  "table": "",
  "longName": "HL7Issuing Authority"
});

/**
 * CER.6 - Signature
 */
export const CER_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CER.6",
  "version": "2.8",
  "description": "Signature",
  "type": "Field",
  "item": 1861,
  "table": "",
  "longName": "HL7Signature"
});

/**
 * CER.7 - Granting Country
 */
export const CER_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "CER.7",
  "version": "2.8",
  "description": "Granting Country",
  "type": "Field",
  "item": 1862,
  "table": "HL70399",
  "longName": "HL7Granting Country",
  "length": 3
});

/**
 * CER.8 - Granting State/Province
 */
export const CER_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.8",
  "version": "2.8",
  "description": "Granting State/Province",
  "type": "Field",
  "item": 1863,
  "table": "HL70347",
  "longName": "HL7Granting State/Province"
});

/**
 * CER.9 - Granting County/Parish
 */
export const CER_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.9",
  "version": "2.8",
  "description": "Granting County/Parish",
  "type": "Field",
  "item": 1864,
  "table": "HL70289",
  "longName": "HL7Granting County/Parish"
});

/**
 * CER.10 - Certificate Type
 */
export const CER_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.10",
  "version": "2.8",
  "description": "Certificate Type",
  "type": "Field",
  "item": 1865,
  "table": "",
  "longName": "HL7Certificate Type"
});

/**
 * CER.11 - Certificate Domain
 */
export const CER_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.11",
  "version": "2.8",
  "description": "Certificate Domain",
  "type": "Field",
  "item": 1866,
  "table": "",
  "longName": "HL7Certificate Domain"
});

/**
 * CER.12 - Subject ID
 */
export const CER_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CER.12",
  "version": "2.8",
  "description": "Subject ID",
  "type": "Field",
  "item": 1867,
  "table": "",
  "longName": "HL7Subject ID"
});

/**
 * CER.13 - Subject Name
 */
export const CER_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CER.13",
  "version": "2.8",
  "description": "Subject Name",
  "type": "Field",
  "item": 1907,
  "table": "",
  "longName": "HL7Subject Name"
});

/**
 * CER.14 - Subject Directory Attribute Extension
 */
export const CER_14 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.14",
  "version": "2.8",
  "description": "Subject Directory Attribute Extension",
  "type": "Field",
  "item": 1868,
  "table": "",
  "longName": "HL7Subject Directory Attribute Extension"
});

/**
 * CER.15 - Subject Public Key Info
 */
export const CER_15 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.15",
  "version": "2.8",
  "description": "Subject Public Key Info",
  "type": "Field",
  "item": 1869,
  "table": "",
  "longName": "HL7Subject Public Key Info"
});

/**
 * CER.16 - Authority Key Identifier
 */
export const CER_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.16",
  "version": "2.8",
  "description": "Authority Key Identifier",
  "type": "Field",
  "item": 1870,
  "table": "",
  "longName": "HL7Authority Key Identifier"
});

/**
 * CER.17 - Basic Constraint
 */
export const CER_17 = datatypes.ID.register(hl7v2Metadata, {
  "title": "CER.17",
  "version": "2.8",
  "description": "Basic Constraint",
  "type": "Field",
  "item": 1871,
  "table": "HL70136",
  "longName": "HL7Basic Constraint",
  "length": 1
});

/**
 * CER.18 - CRL Distribution Point
 */
export const CER_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.18",
  "version": "2.8",
  "description": "CRL Distribution Point",
  "type": "Field",
  "item": 1872,
  "table": "",
  "longName": "HL7CRL Distribution Point"
});

/**
 * CER.19 - Jurisdiction Country
 */
export const CER_19 = datatypes.ID.register(hl7v2Metadata, {
  "title": "CER.19",
  "version": "2.8",
  "description": "Jurisdiction Country",
  "type": "Field",
  "item": 1875,
  "table": "HL70399",
  "longName": "HL7Jurisdiction Country",
  "length": 3
});

/**
 * CER.20 - Jurisdiction State/Province
 */
export const CER_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.20",
  "version": "2.8",
  "description": "Jurisdiction State/Province",
  "type": "Field",
  "item": 1873,
  "table": "HL70347",
  "longName": "HL7Jurisdiction State/Province"
});

/**
 * CER.21 - Jurisdiction County/Parish
 */
export const CER_21 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.21",
  "version": "2.8",
  "description": "Jurisdiction County/Parish",
  "type": "Field",
  "item": 1874,
  "table": "HL70289",
  "longName": "HL7Jurisdiction County/Parish"
});

/**
 * CER.22 - Jurisdiction Breadth
 */
export const CER_22 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.22",
  "version": "2.8",
  "description": "Jurisdiction Breadth",
  "type": "Field",
  "item": 1895,
  "table": "HL70547",
  "longName": "HL7Jurisdiction Breadth"
});

/**
 * CER.23 - Granting Date
 */
export const CER_23 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.23",
  "version": "2.8",
  "description": "Granting Date",
  "type": "Field",
  "item": 1876,
  "table": "",
  "longName": "HL7Granting Date"
});

/**
 * CER.24 - Issuing Date
 */
export const CER_24 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.24",
  "version": "2.8",
  "description": "Issuing Date",
  "type": "Field",
  "item": 1877,
  "table": "",
  "longName": "HL7Issuing Date"
});

/**
 * CER.25 - Activation Date
 */
export const CER_25 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.25",
  "version": "2.8",
  "description": "Activation Date",
  "type": "Field",
  "item": 1878,
  "table": "",
  "longName": "HL7Activation Date"
});

/**
 * CER.26 - Inactivation Date
 */
export const CER_26 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.26",
  "version": "2.8",
  "description": "Inactivation Date",
  "type": "Field",
  "item": 1879,
  "table": "",
  "longName": "HL7Inactivation Date"
});

/**
 * CER.27 - Expiration Date
 */
export const CER_27 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.27",
  "version": "2.8",
  "description": "Expiration Date",
  "type": "Field",
  "item": 1880,
  "table": "",
  "longName": "HL7Expiration Date"
});

/**
 * CER.28 - Renewal Date
 */
export const CER_28 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.28",
  "version": "2.8",
  "description": "Renewal Date",
  "type": "Field",
  "item": 1881,
  "table": "",
  "longName": "HL7Renewal Date"
});

/**
 * CER.29 - Revocation Date
 */
export const CER_29 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CER.29",
  "version": "2.8",
  "description": "Revocation Date",
  "type": "Field",
  "item": 1882,
  "table": "",
  "longName": "HL7Revocation Date"
});

/**
 * CER.30 - Revocation Reason Code
 */
export const CER_30 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.30",
  "version": "2.8",
  "description": "Revocation Reason Code",
  "type": "Field",
  "item": 1883,
  "table": "",
  "longName": "HL7Revocation Reason Code"
});

/**
 * CER.31 - Certificate Status Code
 */
export const CER_31 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CER.31",
  "version": "2.8",
  "description": "Certificate Status Code",
  "type": "Field",
  "item": 1884,
  "table": "HL70536",
  "longName": "HL7Certificate Status Code"
});
