import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 CTR Fields
 * 
 * HL7 v2.9 CTR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTR.1 - Contract Identifier
 */
export const CTR_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CTR.1",
  "version": "2.9",
  "description": "Contract Identifier",
  "type": "Field",
  "item": 2392,
  "table": "",
  "longName": "HL7Contract Identifier"
});

/**
 * CTR.2 - Contract Description
 */
export const CTR_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CTR.2",
  "version": "2.9",
  "description": "Contract Description",
  "type": "Field",
  "item": 2393,
  "table": "",
  "longName": "HL7Contract Description"
});

/**
 * CTR.3 - Contract Status
 */
export const CTR_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTR.3",
  "version": "2.9",
  "description": "Contract Status",
  "type": "Field",
  "item": 2394,
  "table": "HL70536",
  "longName": "HL7Contract Status"
});

/**
 * CTR.4 - Effective Date
 */
export const CTR_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CTR.4",
  "version": "2.9",
  "description": "Effective Date",
  "type": "Field",
  "item": 2395,
  "table": "",
  "longName": "HL7Effective Date"
});

/**
 * CTR.5 - Expiration Date
 */
export const CTR_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CTR.5",
  "version": "2.9",
  "description": "Expiration Date",
  "type": "Field",
  "item": 2396,
  "table": "",
  "longName": "HL7Expiration Date"
});

/**
 * CTR.6 - Contract Owner Name
 */
export const CTR_6 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "CTR.6",
  "version": "2.9",
  "description": "Contract Owner Name",
  "type": "Field",
  "item": 2397,
  "table": "",
  "longName": "HL7Contract Owner Name"
});

/**
 * CTR.7 - Contract Originator Name
 */
export const CTR_7 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "CTR.7",
  "version": "2.9",
  "description": "Contract Originator Name",
  "type": "Field",
  "item": 2398,
  "table": "",
  "longName": "HL7Contract Originator Name"
});

/**
 * CTR.8 - Supplier Type
 */
export const CTR_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTR.8",
  "version": "2.9",
  "description": "Supplier Type",
  "type": "Field",
  "item": 2399,
  "table": "HL70946",
  "longName": "HL7Supplier Type"
});

/**
 * CTR.9 - Contract Type
 */
export const CTR_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTR.9",
  "version": "2.9",
  "description": "Contract Type",
  "type": "Field",
  "item": 2400,
  "table": "HL70965",
  "longName": "HL7Contract Type"
});

/**
 * CTR.10 - Free On Board Freight Terms
 */
export const CTR_10 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "CTR.10",
  "version": "2.9",
  "description": "Free On Board Freight Terms",
  "type": "Field",
  "item": 2401,
  "table": "HL70532",
  "longName": "HL7Free On Board Freight Terms"
});

/**
 * CTR.11 - Price Protection Date
 */
export const CTR_11 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CTR.11",
  "version": "2.9",
  "description": "Price Protection Date",
  "type": "Field",
  "item": 2402,
  "table": "",
  "longName": "HL7Price Protection Date"
});

/**
 * CTR.12 - Fixed Price Contract Indicator
 */
export const CTR_12 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "CTR.12",
  "version": "2.9",
  "description": "Fixed Price Contract Indicator",
  "type": "Field",
  "item": 2403,
  "table": "HL70532",
  "longName": "HL7Fixed Price Contract Indicator"
});

/**
 * CTR.13 - Group Purchasing Organization
 */
export const CTR_13 = datatypes.XON.register(hl7v2Metadata, {
  "title": "CTR.13",
  "version": "2.9",
  "description": "Group Purchasing Organization",
  "type": "Field",
  "item": 2404,
  "table": "",
  "longName": "HL7Group Purchasing Organization"
});

/**
 * CTR.14 - Maximum Markup
 */
export const CTR_14 = datatypes.MOP.register(hl7v2Metadata, {
  "title": "CTR.14",
  "version": "2.9",
  "description": "Maximum Markup",
  "type": "Field",
  "item": 2405,
  "table": "",
  "longName": "HL7Maximum Markup"
});

/**
 * CTR.15 - Actual Markup
 */
export const CTR_15 = datatypes.MOP.register(hl7v2Metadata, {
  "title": "CTR.15",
  "version": "2.9",
  "description": "Actual Markup",
  "type": "Field",
  "item": 2406,
  "table": "",
  "longName": "HL7Actual Markup"
});

/**
 * CTR.16 - Corporation
 */
export const CTR_16 = datatypes.XON.register(hl7v2Metadata, {
  "title": "CTR.16",
  "version": "2.9",
  "description": "Corporation",
  "type": "Field",
  "item": 2407,
  "table": "",
  "longName": "HL7Corporation"
});

/**
 * CTR.17 - Parent of Corporation
 */
export const CTR_17 = datatypes.XON.register(hl7v2Metadata, {
  "title": "CTR.17",
  "version": "2.9",
  "description": "Parent of Corporation",
  "type": "Field",
  "item": 2408,
  "table": "",
  "longName": "HL7Parent of Corporation"
});

/**
 * CTR.18 - Pricing Tier Level
 */
export const CTR_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTR.18",
  "version": "2.9",
  "description": "Pricing Tier Level",
  "type": "Field",
  "item": 2409,
  "table": "HL70966",
  "longName": "HL7Pricing Tier Level"
});

/**
 * CTR.19 - Contract Priority
 */
export const CTR_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CTR.19",
  "version": "2.9",
  "description": "Contract Priority",
  "type": "Field",
  "item": 2410,
  "table": "",
  "longName": "HL7Contract Priority"
});

/**
 * CTR.20 - Class of Trade
 */
export const CTR_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTR.20",
  "version": "2.9",
  "description": "Class of Trade",
  "type": "Field",
  "item": 2411,
  "table": "HL70947",
  "longName": "HL7Class of Trade"
});

/**
 * CTR.21 - Associated Contract ID
 */
export const CTR_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CTR.21",
  "version": "2.9",
  "description": "Associated Contract ID",
  "type": "Field",
  "item": 2412,
  "table": "",
  "longName": "HL7Associated Contract ID"
});
