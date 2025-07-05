
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 PKG Fields
 * 
 * HL7 v2.6 PKG field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PKG.1 - Set Id - PKG
 */
export const PKG_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PKG.1",
  "version": "2.6",
  "description": "Set Id - PKG",
  "type": "Field",
  "item": 2221,
  "table": "",
  "longName": "HL7Set Id - PKG",
  "length": 2
});

/**
 * PKG.2 - Packaging Units
 */
export const PKG_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PKG.2",
  "version": "2.6",
  "description": "Packaging Units",
  "type": "Field",
  "item": 2222,
  "table": "HL70818",
  "longName": "HL7Packaging Units",
  "length": 250
});

/**
 * PKG.3 - Default Order Unit Of Measure Indicator
 */
export const PKG_3 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "PKG.3",
  "version": "2.6",
  "description": "Default Order Unit Of Measure Indicator",
  "type": "Field",
  "item": 2223,
  "table": "HL70532",
  "longName": "HL7Default Order Unit Of Measure Indicator",
  "length": 1
});

/**
 * PKG.4 - Package Quantity
 */
export const PKG_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PKG.4",
  "version": "2.6",
  "description": "Package Quantity",
  "type": "Field",
  "item": 2224,
  "table": "",
  "longName": "HL7Package Quantity",
  "length": 12
});

/**
 * PKG.5 - Price
 */
export const PKG_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PKG.5",
  "version": "2.6",
  "description": "Price",
  "type": "Field",
  "item": 2225,
  "table": "",
  "longName": "HL7Price",
  "length": 12
});

/**
 * PKG.6 - Future Item Price
 */
export const PKG_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PKG.6",
  "version": "2.6",
  "description": "Future Item Price",
  "type": "Field",
  "item": 2226,
  "table": "",
  "longName": "HL7Future Item Price",
  "length": 12
});

/**
 * PKG.7 - Future Item Price Effective Date
 */
export const PKG_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PKG.7",
  "version": "2.6",
  "description": "Future Item Price Effective Date",
  "type": "Field",
  "item": 2227,
  "table": "",
  "longName": "HL7Future Item Price Effective Date",
  "length": 24
});
