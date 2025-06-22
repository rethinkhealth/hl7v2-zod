import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 BTX Fields
 * 
 * HL7 v2.8 BTX field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BTX.1 - Set ID - BTX
 */
export const BTX_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "BTX.1",
  "version": "2.8",
  "description": "Set ID - BTX",
  "type": "Field",
  "item": 1735,
  "table": "",
  "longName": "HL7Set ID - BTX",
  "length": 4
});

/**
 * BTX.2 - BC Donation ID
 */
export const BTX_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BTX.2",
  "version": "2.8",
  "description": "BC Donation ID",
  "type": "Field",
  "item": 1736,
  "table": "",
  "longName": "HL7BC Donation ID"
});

/**
 * BTX.3 - BC Component
 */
export const BTX_3 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "BTX.3",
  "version": "2.8",
  "description": "BC Component",
  "type": "Field",
  "item": 1737,
  "table": "HL79999",
  "longName": "HL7BC Component"
});

/**
 * BTX.4 - BC Blood Group
 */
export const BTX_4 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "BTX.4",
  "version": "2.8",
  "description": "BC Blood Group",
  "type": "Field",
  "item": 1738,
  "table": "HL79999",
  "longName": "HL7BC Blood Group"
});

/**
 * BTX.5 - CP Commercial Product
 */
export const BTX_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BTX.5",
  "version": "2.8",
  "description": "CP Commercial Product",
  "type": "Field",
  "item": 1739,
  "table": "HL70512",
  "longName": "HL7CP Commercial Product"
});

/**
 * BTX.6 - CP Manufacturer
 */
export const BTX_6 = datatypes.XON.register(hl7v2Metadata, {
  "title": "BTX.6",
  "version": "2.8",
  "description": "CP Manufacturer",
  "type": "Field",
  "item": 1740,
  "table": "",
  "longName": "HL7CP Manufacturer"
});

/**
 * BTX.7 - CP Lot Number
 */
export const BTX_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BTX.7",
  "version": "2.8",
  "description": "CP Lot Number",
  "type": "Field",
  "item": 1741,
  "table": "",
  "longName": "HL7CP Lot Number"
});

/**
 * BTX.8 - BP Quantity
 */
export const BTX_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "BTX.8",
  "version": "2.8",
  "description": "BP Quantity",
  "type": "Field",
  "item": 1742,
  "table": "",
  "longName": "HL7BP Quantity"
});

/**
 * BTX.9 - BP Amount
 */
export const BTX_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "BTX.9",
  "version": "2.8",
  "description": "BP Amount",
  "type": "Field",
  "item": 1743,
  "table": "",
  "longName": "HL7BP Amount"
});

/**
 * BTX.10 - BP Units
 */
export const BTX_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BTX.10",
  "version": "2.8",
  "description": "BP Units",
  "type": "Field",
  "item": 1744,
  "table": "HL79999",
  "longName": "HL7BP Units"
});

/**
 * BTX.11 - BP Transfusion/Disposition Status
 */
export const BTX_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BTX.11",
  "version": "2.8",
  "description": "BP Transfusion/Disposition Status",
  "type": "Field",
  "item": 1745,
  "table": "HL70513",
  "longName": "HL7BP Transfusion/Disposition Status"
});

/**
 * BTX.12 - BP Message Status
 */
export const BTX_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "BTX.12",
  "version": "2.8",
  "description": "BP Message Status",
  "type": "Field",
  "item": 1746,
  "table": "HL70511",
  "longName": "HL7BP Message Status",
  "length": 1
});

/**
 * BTX.13 - BP Date/Time of Status
 */
export const BTX_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "BTX.13",
  "version": "2.8",
  "description": "BP Date/Time of Status",
  "type": "Field",
  "item": 1747,
  "table": "",
  "longName": "HL7BP Date/Time of Status"
});

/**
 * BTX.14 - BP Transfusion Administrator
 */
export const BTX_14 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "BTX.14",
  "version": "2.8",
  "description": "BP Transfusion Administrator",
  "type": "Field",
  "item": 1748,
  "table": "",
  "longName": "HL7BP Transfusion Administrator"
});

/**
 * BTX.15 - BP Transfusion Verifier
 */
export const BTX_15 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "BTX.15",
  "version": "2.8",
  "description": "BP Transfusion Verifier",
  "type": "Field",
  "item": 1749,
  "table": "",
  "longName": "HL7BP Transfusion Verifier"
});

/**
 * BTX.16 - BP Transfusion Start Date/Time of Status
 */
export const BTX_16 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "BTX.16",
  "version": "2.8",
  "description": "BP Transfusion Start Date/Time of Status",
  "type": "Field",
  "item": 1750,
  "table": "",
  "longName": "HL7BP Transfusion Start Date/Time of Status"
});

/**
 * BTX.17 - BP Transfusion End Date/Time of Status
 */
export const BTX_17 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "BTX.17",
  "version": "2.8",
  "description": "BP Transfusion End Date/Time of Status",
  "type": "Field",
  "item": 1751,
  "table": "",
  "longName": "HL7BP Transfusion End Date/Time of Status"
});

/**
 * BTX.18 - BP Adverse Reaction Type
 */
export const BTX_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BTX.18",
  "version": "2.8",
  "description": "BP Adverse Reaction Type",
  "type": "Field",
  "item": 1752,
  "table": "HL70514",
  "longName": "HL7BP Adverse Reaction Type"
});

/**
 * BTX.19 - BP Transfusion Interrupted Reason
 */
export const BTX_19 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BTX.19",
  "version": "2.8",
  "description": "BP Transfusion Interrupted Reason",
  "type": "Field",
  "item": 1753,
  "table": "HL70515",
  "longName": "HL7BP Transfusion Interrupted Reason"
});

/**
 * BTX.20 - BP Unique ID
 */
export const BTX_20 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BTX.20",
  "version": "2.8",
  "description": "BP Unique ID",
  "type": "Field",
  "item": 3391,
  "table": "",
  "longName": "HL7BP Unique ID"
});
