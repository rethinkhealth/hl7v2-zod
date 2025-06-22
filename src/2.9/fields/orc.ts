import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 ORC Fields
 * 
 * HL7 v2.9 ORC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORC.1 - Order Control
 */
export const ORC_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORC.1",
  "version": "2.9",
  "description": "Order Control",
  "type": "Field",
  "item": 215,
  "table": "HL70119",
  "longName": "HL7Order Control",
  "length": 2
});

/**
 * ORC.2 - Placer Order Number
 */
export const ORC_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORC.2",
  "version": "2.9",
  "description": "Placer Order Number",
  "type": "Field",
  "item": 216,
  "table": "",
  "longName": "HL7Placer Order Number"
});

/**
 * ORC.3 - Filler Order Number
 */
export const ORC_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORC.3",
  "version": "2.9",
  "description": "Filler Order Number",
  "type": "Field",
  "item": 217,
  "table": "",
  "longName": "HL7Filler Order Number"
});

/**
 * ORC.4 - Placer Order Group Number
 */
export const ORC_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORC.4",
  "version": "2.9",
  "description": "Placer Order Group Number",
  "type": "Field",
  "item": 218,
  "table": "",
  "longName": "HL7Placer Order Group Number"
});

/**
 * ORC.5 - Order Status
 */
export const ORC_5 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORC.5",
  "version": "2.9",
  "description": "Order Status",
  "type": "Field",
  "item": 219,
  "table": "HL70038",
  "longName": "HL7Order Status",
  "length": 2
});

/**
 * ORC.6 - Response Flag
 */
export const ORC_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORC.6",
  "version": "2.9",
  "description": "Response Flag",
  "type": "Field",
  "item": 220,
  "table": "HL70121",
  "longName": "HL7Response Flag",
  "length": 1
});

/**
 * ORC.8 - Parent Order
 */
export const ORC_8 = datatypes.EIP.register(hl7v2Metadata, {
  "title": "ORC.8",
  "version": "2.9",
  "description": "Parent Order",
  "type": "Field",
  "item": 222,
  "table": "",
  "longName": "HL7Parent Order"
});

/**
 * ORC.9 - Date/Time of Order Event
 */
export const ORC_9 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ORC.9",
  "version": "2.9",
  "description": "Date/Time of Order Event",
  "type": "Field",
  "item": 223,
  "table": "",
  "longName": "HL7Date/Time of Order Event"
});

/**
 * ORC.13 - Enterer's Location
 */
export const ORC_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORC.13",
  "version": "2.9",
  "description": "Enterer's Location",
  "type": "Field",
  "item": 227,
  "table": "",
  "longName": "HL7Enterer's Location"
});

/**
 * ORC.14 - Call Back Phone Number
 */
export const ORC_14 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "ORC.14",
  "version": "2.9",
  "description": "Call Back Phone Number",
  "type": "Field",
  "item": 228,
  "table": "",
  "longName": "HL7Call Back Phone Number"
});

/**
 * ORC.15 - Order Effective Date/Time
 */
export const ORC_15 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ORC.15",
  "version": "2.9",
  "description": "Order Effective Date/Time",
  "type": "Field",
  "item": 229,
  "table": "",
  "longName": "HL7Order Effective Date/Time"
});

/**
 * ORC.16 - Order Control Code Reason
 */
export const ORC_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.16",
  "version": "2.9",
  "description": "Order Control Code Reason",
  "type": "Field",
  "item": 230,
  "table": "HL70949",
  "longName": "HL7Order Control Code Reason"
});

/**
 * ORC.20 - Advanced Beneficiary Notice Code
 */
export const ORC_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.20",
  "version": "2.9",
  "description": "Advanced Beneficiary Notice Code",
  "type": "Field",
  "item": 1310,
  "table": "HL70339",
  "longName": "HL7Advanced Beneficiary Notice Code"
});

/**
 * ORC.25 - Order Status Modifier
 */
export const ORC_25 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.25",
  "version": "2.9",
  "description": "Order Status Modifier",
  "type": "Field",
  "item": 1473,
  "table": "HL70950",
  "longName": "HL7Order Status Modifier"
});

/**
 * ORC.26 - Advanced Beneficiary Notice Override Reason
 */
export const ORC_26 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.26",
  "version": "2.9",
  "description": "Advanced Beneficiary Notice Override Reason",
  "type": "Field",
  "item": 1641,
  "table": "HL70552",
  "longName": "HL7Advanced Beneficiary Notice Override Reason"
});

/**
 * ORC.27 - Filler's Expected Availability Date/Time
 */
export const ORC_27 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ORC.27",
  "version": "2.9",
  "description": "Filler's Expected Availability Date/Time",
  "type": "Field",
  "item": 1642,
  "table": "",
  "longName": "HL7Filler's Expected Availability Date/Time"
});

/**
 * ORC.28 - Confidentiality Code
 */
export const ORC_28 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.28",
  "version": "2.9",
  "description": "Confidentiality Code",
  "type": "Field",
  "item": 615,
  "table": "HL70177",
  "longName": "HL7Confidentiality Code"
});

/**
 * ORC.29 - Order Type
 */
export const ORC_29 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.29",
  "version": "2.9",
  "description": "Order Type",
  "type": "Field",
  "item": 1643,
  "table": "HL70482",
  "longName": "HL7Order Type"
});

/**
 * ORC.30 - Enterer Authorization Mode
 */
export const ORC_30 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ORC.30",
  "version": "2.9",
  "description": "Enterer Authorization Mode",
  "type": "Field",
  "item": 1644,
  "table": "HL70483",
  "longName": "HL7Enterer Authorization Mode"
});

/**
 * ORC.32 - Advanced Beneficiary Notice Date
 */
export const ORC_32 = datatypes.DT.register(hl7v2Metadata, {
  "title": "ORC.32",
  "version": "2.9",
  "description": "Advanced Beneficiary Notice Date",
  "type": "Field",
  "item": 2301,
  "table": "",
  "longName": "HL7Advanced Beneficiary Notice Date"
});

/**
 * ORC.33 - Alternate Placer Order Number
 */
export const ORC_33 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORC.33",
  "version": "2.9",
  "description": "Alternate Placer Order Number",
  "type": "Field",
  "item": 3300,
  "table": "",
  "longName": "HL7Alternate Placer Order Number"
});

/**
 * ORC.34 - Order Workflow Profile
 */
export const ORC_34 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORC.34",
  "version": "2.9",
  "description": "Order Workflow Profile",
  "type": "Field",
  "item": 3387,
  "table": "HL70934",
  "longName": "HL7Order Workflow Profile"
});

/**
 * ORC.35 - Action Code
 */
export const ORC_35 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORC.35",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * ORC.36 - Order Status Date Range
 */
export const ORC_36 = datatypes.DR.register(hl7v2Metadata, {
  "title": "ORC.36",
  "version": "2.9",
  "description": "Order Status Date Range",
  "type": "Field",
  "item": 3509,
  "table": "",
  "longName": "HL7Order Status Date Range"
});

/**
 * ORC.37 - Order Creation Date/Time
 */
export const ORC_37 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ORC.37",
  "version": "2.9",
  "description": "Order Creation Date/Time",
  "type": "Field",
  "item": 3515,
  "table": "",
  "longName": "HL7Order Creation Date/Time"
});

/**
 * ORC.38 - Filler Order Group Number
 */
export const ORC_38 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORC.38",
  "version": "2.9",
  "description": "Filler Order Group Number",
  "type": "Field",
  "item": 2482,
  "table": "",
  "longName": "HL7Filler Order Group Number"
});
