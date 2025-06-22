import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 VND Fields
 * 
 * HL7 v2.7 VND field definitions
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
  "version": "2.7",
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
  "version": "2.7",
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
  "version": "2.7",
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
  "version": "2.7",
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
  "version": "2.7",
  "description": "Primary Vendor Indicator",
  "type": "Field",
  "item": 2220,
  "table": "HL70532",
  "longName": "HL7Primary Vendor Indicator"
});
