import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 VND Fields
 * 
 * HL7 v2.9 VND field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VND.1 - Set Id - VND
 */
export const VND_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "VND.1",
  "version": "2.9",
  "description": "Set Id - VND",
  "type": "Field",
  "item": 2217,
  "table": "",
  "longName": "HL7Set Id - VND",
  "length": 4
});

/**
 * VND.2 - Vendor Identifier
 */
export const VND_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VND.2",
  "version": "2.9",
  "description": "Vendor Identifier",
  "type": "Field",
  "item": 2218,
  "table": "",
  "longName": "HL7Vendor Identifier"
});

/**
 * VND.3 - Vendor Name
 */
export const VND_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VND.3",
  "version": "2.9",
  "description": "Vendor Name",
  "type": "Field",
  "item": 2276,
  "table": "",
  "longName": "HL7Vendor Name"
});

/**
 * VND.4 - Vendor Catalog Number
 */
export const VND_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VND.4",
  "version": "2.9",
  "description": "Vendor Catalog Number",
  "type": "Field",
  "item": 2219,
  "table": "",
  "longName": "HL7Vendor Catalog Number"
});

/**
 * VND.5 - Primary Vendor Indicator
 */
export const VND_5 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "VND.5",
  "version": "2.9",
  "description": "Primary Vendor Indicator",
  "type": "Field",
  "item": 2220,
  "table": "HL70532",
  "longName": "HL7Primary Vendor Indicator"
});

/**
 * VND.6 - Corporation
 */
export const VND_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VND.6",
  "version": "2.9",
  "description": "Corporation",
  "type": "Field",
  "item": 2420,
  "table": "",
  "longName": "HL7Corporation"
});

/**
 * VND.7 - Primary Contact
 */
export const VND_7 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "VND.7",
  "version": "2.9",
  "description": "Primary Contact",
  "type": "Field",
  "item": 2421,
  "table": "",
  "longName": "HL7Primary Contact"
});

/**
 * VND.8 - Contract Adjustment
 */
export const VND_8 = datatypes.MOP.register(hl7v2Metadata, {
  "title": "VND.8",
  "version": "2.9",
  "description": "Contract Adjustment",
  "type": "Field",
  "item": 2422,
  "table": "",
  "longName": "HL7Contract Adjustment"
});

/**
 * VND.9 - Associated Contract ID
 */
export const VND_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VND.9",
  "version": "2.9",
  "description": "Associated Contract ID",
  "type": "Field",
  "item": 2423,
  "table": "",
  "longName": "HL7Associated Contract ID"
});

/**
 * VND.10 - Class of Trade
 */
export const VND_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VND.10",
  "version": "2.9",
  "description": "Class of Trade",
  "type": "Field",
  "item": 2424,
  "table": "",
  "longName": "HL7Class of Trade"
});

/**
 * VND.11 - Pricing Tier Level
 */
export const VND_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "VND.11",
  "version": "2.9",
  "description": "Pricing Tier Level",
  "type": "Field",
  "item": 2425,
  "table": "",
  "longName": "HL7Pricing Tier Level"
});
