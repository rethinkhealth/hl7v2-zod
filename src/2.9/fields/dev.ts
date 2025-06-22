import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 DEV Fields
 * 
 * HL7 v2.9 DEV field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DEV.1 - Action Code
 */
export const DEV_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "DEV.1",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * DEV.2 - Unique Device Identifier
 */
export const DEV_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.2",
  "version": "2.9",
  "description": "Unique Device Identifier",
  "type": "Field",
  "item": 2457,
  "table": "",
  "longName": "HL7Unique Device Identifier"
});

/**
 * DEV.3 - Device Type
 */
export const DEV_3 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DEV.3",
  "version": "2.9",
  "description": "Device Type",
  "type": "Field",
  "item": 3483,
  "table": "HL70961",
  "longName": "HL7Device Type"
});

/**
 * DEV.4 - Device Status
 */
export const DEV_4 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DEV.4",
  "version": "2.9",
  "description": "Device Status",
  "type": "Field",
  "item": 2501,
  "table": "HL70962",
  "longName": "HL7Device Status"
});

/**
 * DEV.5 - Manufacturer/Distributor
 */
export const DEV_5 = datatypes.XON.register(hl7v2Metadata, {
  "title": "DEV.5",
  "version": "2.9",
  "description": "Manufacturer/Distributor",
  "type": "Field",
  "item": 1247,
  "table": "",
  "longName": "HL7Manufacturer/Distributor"
});

/**
 * DEV.6 - Brand Name
 */
export const DEV_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.6",
  "version": "2.9",
  "description": "Brand Name",
  "type": "Field",
  "item": 1249,
  "table": "",
  "longName": "HL7Brand Name"
});

/**
 * DEV.7 - Model Identifier
 */
export const DEV_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.7",
  "version": "2.9",
  "description": "Model Identifier",
  "type": "Field",
  "item": 1252,
  "table": "",
  "longName": "HL7Model Identifier"
});

/**
 * DEV.8 - Catalogue Identifier
 */
export const DEV_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.8",
  "version": "2.9",
  "description": "Catalogue Identifier",
  "type": "Field",
  "item": 1253,
  "table": "",
  "longName": "HL7Catalogue Identifier"
});

/**
 * DEV.9 - UDI Device Identifier
 */
export const DEV_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.9",
  "version": "2.9",
  "description": "UDI Device Identifier",
  "type": "Field",
  "item": 3476,
  "table": "",
  "longName": "HL7UDI Device Identifier"
});

/**
 * DEV.10 - Device Lot Number
 */
export const DEV_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.10",
  "version": "2.9",
  "description": "Device Lot Number",
  "type": "Field",
  "item": 3479,
  "table": "",
  "longName": "HL7Device Lot Number"
});

/**
 * DEV.11 - Device Serial Number
 */
export const DEV_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.11",
  "version": "2.9",
  "description": "Device Serial Number",
  "type": "Field",
  "item": 3480,
  "table": "",
  "longName": "HL7Device Serial Number"
});

/**
 * DEV.12 - Device Manufacture Date
 */
export const DEV_12 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DEV.12",
  "version": "2.9",
  "description": "Device Manufacture Date",
  "type": "Field",
  "item": 3477,
  "table": "",
  "longName": "HL7Device Manufacture Date"
});

/**
 * DEV.13 - Device Expiry Date
 */
export const DEV_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DEV.13",
  "version": "2.9",
  "description": "Device Expiry Date",
  "type": "Field",
  "item": 3478,
  "table": "",
  "longName": "HL7Device Expiry Date"
});

/**
 * DEV.14 - Safety Characteristics
 */
export const DEV_14 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "DEV.14",
  "version": "2.9",
  "description": "Safety Characteristics",
  "type": "Field",
  "item": 2465,
  "table": "HL70963",
  "longName": "HL7Safety Characteristics"
});

/**
 * DEV.15 - Device Donation Identification
 */
export const DEV_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.15",
  "version": "2.9",
  "description": "Device Donation Identification",
  "type": "Field",
  "item": 3481,
  "table": "",
  "longName": "HL7Device Donation Identification"
});

/**
 * DEV.16 - Software Version Number
 */
export const DEV_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DEV.16",
  "version": "2.9",
  "description": "Software Version Number",
  "type": "Field",
  "item": 2502,
  "table": "",
  "longName": "HL7Software Version Number"
});

/**
 * DEV.17 - Implantation Status
 */
export const DEV_17 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DEV.17",
  "version": "2.9",
  "description": "Implantation Status",
  "type": "Field",
  "item": 2459,
  "table": "HL70795",
  "longName": "HL7Implantation Status"
});
