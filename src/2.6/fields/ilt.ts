
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 ILT Fields
 * 
 * HL7 v2.6 ILT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ILT.1 - Set Id - ILT
 */
export const ILT_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "ILT.1",
  "version": "2.6",
  "description": "Set Id - ILT",
  "type": "Field",
  "item": 2086,
  "table": "",
  "longName": "HL7Set Id - ILT",
  "length": 4
});

/**
 * ILT.2 - Inventory Lot Number
 */
export const ILT_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ILT.2",
  "version": "2.6",
  "description": "Inventory Lot Number",
  "type": "Field",
  "item": 1800,
  "table": "",
  "longName": "HL7Inventory Lot Number",
  "length": 250
});

/**
 * ILT.3 - Inventory Expiration Date
 */
export const ILT_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ILT.3",
  "version": "2.6",
  "description": "Inventory Expiration Date",
  "type": "Field",
  "item": 1801,
  "table": "",
  "longName": "HL7Inventory Expiration Date",
  "length": 24
});

/**
 * ILT.4 - Inventory Received Date
 */
export const ILT_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ILT.4",
  "version": "2.6",
  "description": "Inventory Received Date",
  "type": "Field",
  "item": 1804,
  "table": "",
  "longName": "HL7Inventory Received Date",
  "length": 24
});

/**
 * ILT.5 - Inventory Received Quantity
 */
export const ILT_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ILT.5",
  "version": "2.6",
  "description": "Inventory Received Quantity",
  "type": "Field",
  "item": 1805,
  "table": "",
  "longName": "HL7Inventory Received Quantity",
  "length": 12
});

/**
 * ILT.6 - Inventory Received Quantity Unit
 */
export const ILT_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ILT.6",
  "version": "2.6",
  "description": "Inventory Received Quantity Unit",
  "type": "Field",
  "item": 1806,
  "table": "",
  "longName": "HL7Inventory Received Quantity Unit",
  "length": 250
});

/**
 * ILT.7 - Inventory Received Item Cost
 */
export const ILT_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ILT.7",
  "version": "2.6",
  "description": "Inventory Received Item Cost",
  "type": "Field",
  "item": 1807,
  "table": "",
  "longName": "HL7Inventory Received Item Cost",
  "length": 12
});

/**
 * ILT.8 - Inventory On Hand Date
 */
export const ILT_8 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "ILT.8",
  "version": "2.6",
  "description": "Inventory On Hand Date",
  "type": "Field",
  "item": 1808,
  "table": "",
  "longName": "HL7Inventory On Hand Date",
  "length": 24
});

/**
 * ILT.9 - Inventory On Hand Quantity
 */
export const ILT_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ILT.9",
  "version": "2.6",
  "description": "Inventory On Hand Quantity",
  "type": "Field",
  "item": 1809,
  "table": "",
  "longName": "HL7Inventory On Hand Quantity",
  "length": 12
});

/**
 * ILT.10 - Inventory On Hand Quantity Unit
 */
export const ILT_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ILT.10",
  "version": "2.6",
  "description": "Inventory On Hand Quantity Unit",
  "type": "Field",
  "item": 1810,
  "table": "",
  "longName": "HL7Inventory On Hand Quantity Unit",
  "length": 250
});
