import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 PRT Fields
 * 
 * HL7 v2.9 PRT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRT.1 - Participation Instance ID
 */
export const PRT_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.1",
  "version": "2.9",
  "description": "Participation Instance ID",
  "type": "Field",
  "item": 2379,
  "table": "",
  "longName": "HL7Participation Instance ID",
  "length": 4
});

/**
 * PRT.2 - Action Code
 */
export const PRT_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PRT.2",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * PRT.3 - Action Reason
 */
export const PRT_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PRT.3",
  "version": "2.9",
  "description": "Action Reason",
  "type": "Field",
  "item": 2380,
  "table": "",
  "longName": "HL7Action Reason"
});

/**
 * PRT.4 - Role of Participation
 */
export const PRT_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PRT.4",
  "version": "2.9",
  "description": "Role of Participation",
  "type": "Field",
  "item": 2381,
  "table": "HL70912",
  "longName": "HL7Role of Participation"
});

/**
 * PRT.5 - Person
 */
export const PRT_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PRT.5",
  "version": "2.9",
  "description": "Person",
  "type": "Field",
  "item": 2382,
  "table": "",
  "longName": "HL7Person"
});

/**
 * PRT.6 - Person Provider Type
 */
export const PRT_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PRT.6",
  "version": "2.9",
  "description": "Person Provider Type",
  "type": "Field",
  "item": 2383,
  "table": "",
  "longName": "HL7Person Provider Type"
});

/**
 * PRT.7 - Organization Unit Type
 */
export const PRT_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PRT.7",
  "version": "2.9",
  "description": "Organization Unit Type",
  "type": "Field",
  "item": 2384,
  "table": "HL70406",
  "longName": "HL7Organization Unit Type"
});

/**
 * PRT.8 - Organization
 */
export const PRT_8 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PRT.8",
  "version": "2.9",
  "description": "Organization",
  "type": "Field",
  "item": 2385,
  "table": "",
  "longName": "HL7Organization"
});

/**
 * PRT.9 - Location
 */
export const PRT_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.9",
  "version": "2.9",
  "description": "Location",
  "type": "Field",
  "item": 2386,
  "table": "",
  "longName": "HL7Location"
});

/**
 * PRT.10 - Device
 */
export const PRT_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.10",
  "version": "2.9",
  "description": "Device",
  "type": "Field",
  "item": 2348,
  "table": "",
  "longName": "HL7Device"
});

/**
 * PRT.11 - Begin Date/Time (arrival time)
 */
export const PRT_11 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PRT.11",
  "version": "2.9",
  "description": "Begin Date/Time (arrival time)",
  "type": "Field",
  "item": 2387,
  "table": "",
  "longName": "HL7Begin Date/Time (arrival time)"
});

/**
 * PRT.12 - End Date/Time (departure time)
 */
export const PRT_12 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PRT.12",
  "version": "2.9",
  "description": "End Date/Time (departure time)",
  "type": "Field",
  "item": 2388,
  "table": "",
  "longName": "HL7End Date/Time (departure time)"
});

/**
 * PRT.13 - Qualitative Duration
 */
export const PRT_13 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PRT.13",
  "version": "2.9",
  "description": "Qualitative Duration",
  "type": "Field",
  "item": 2389,
  "table": "",
  "longName": "HL7Qualitative Duration"
});

/**
 * PRT.14 - Address
 */
export const PRT_14 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PRT.14",
  "version": "2.9",
  "description": "Address",
  "type": "Field",
  "item": 2390,
  "table": "",
  "longName": "HL7Address"
});

/**
 * PRT.15 - Telecommunication Address
 */
export const PRT_15 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PRT.15",
  "version": "2.9",
  "description": "Telecommunication Address",
  "type": "Field",
  "item": 2391,
  "table": "",
  "longName": "HL7Telecommunication Address"
});

/**
 * PRT.16 - UDI Device Identifier
 */
export const PRT_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.16",
  "version": "2.9",
  "description": "UDI Device Identifier",
  "type": "Field",
  "item": 3476,
  "table": "",
  "longName": "HL7UDI Device Identifier"
});

/**
 * PRT.17 - Device Manufacture Date
 */
export const PRT_17 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PRT.17",
  "version": "2.9",
  "description": "Device Manufacture Date",
  "type": "Field",
  "item": 3477,
  "table": "",
  "longName": "HL7Device Manufacture Date"
});

/**
 * PRT.18 - Device Expiry Date
 */
export const PRT_18 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PRT.18",
  "version": "2.9",
  "description": "Device Expiry Date",
  "type": "Field",
  "item": 3478,
  "table": "",
  "longName": "HL7Device Expiry Date"
});

/**
 * PRT.19 - Device Lot Number
 */
export const PRT_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.19",
  "version": "2.9",
  "description": "Device Lot Number",
  "type": "Field",
  "item": 3479,
  "table": "",
  "longName": "HL7Device Lot Number"
});

/**
 * PRT.20 - Device Serial Number
 */
export const PRT_20 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.20",
  "version": "2.9",
  "description": "Device Serial Number",
  "type": "Field",
  "item": 3480,
  "table": "",
  "longName": "HL7Device Serial Number"
});

/**
 * PRT.21 - Device Donation Identification
 */
export const PRT_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRT.21",
  "version": "2.9",
  "description": "Device Donation Identification",
  "type": "Field",
  "item": 3481,
  "table": "",
  "longName": "HL7Device Donation Identification"
});

/**
 * PRT.22 - Device Type
 */
export const PRT_22 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "PRT.22",
  "version": "2.9",
  "description": "Device Type",
  "type": "Field",
  "item": 3483,
  "table": "HL70961",
  "longName": "HL7Device Type"
});

/**
 * PRT.23 - Preferred Method of Contact
 */
export const PRT_23 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PRT.23",
  "version": "2.9",
  "description": "Preferred Method of Contact",
  "type": "Field",
  "item": 684,
  "table": "HL70185",
  "longName": "HL7Preferred Method of Contact"
});

/**
 * PRT.24 - Contact Identifiers
 */
export const PRT_24 = datatypes.PLN.register(hl7v2Metadata, {
  "title": "PRT.24",
  "version": "2.9",
  "description": "Contact Identifiers",
  "type": "Field",
  "item": 1171,
  "table": "HL70338",
  "longName": "HL7Contact Identifiers"
});
