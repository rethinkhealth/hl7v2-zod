import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 RQ1 Fields
 * 
 * HL7 v2.8 RQ1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQ1.1 - Anticipated Price
 */
export const RQ1_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQ1.1",
  "version": "2.8",
  "description": "Anticipated Price",
  "type": "Field",
  "item": 285,
  "table": "",
  "longName": "HL7Anticipated Price"
});

/**
 * RQ1.2 - Manufacturer Identifier
 */
export const RQ1_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RQ1.2",
  "version": "2.8",
  "description": "Manufacturer Identifier",
  "type": "Field",
  "item": 286,
  "table": "HL70385",
  "longName": "HL7Manufacturer Identifier"
});

/**
 * RQ1.3 - Manufacturer's Catalog
 */
export const RQ1_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQ1.3",
  "version": "2.8",
  "description": "Manufacturer's Catalog",
  "type": "Field",
  "item": 287,
  "table": "",
  "longName": "HL7Manufacturer's Catalog"
});

/**
 * RQ1.4 - Vendor ID
 */
export const RQ1_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RQ1.4",
  "version": "2.8",
  "description": "Vendor ID",
  "type": "Field",
  "item": 288,
  "table": "HL79999",
  "longName": "HL7Vendor ID"
});

/**
 * RQ1.5 - Vendor Catalog
 */
export const RQ1_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQ1.5",
  "version": "2.8",
  "description": "Vendor Catalog",
  "type": "Field",
  "item": 289,
  "table": "",
  "longName": "HL7Vendor Catalog"
});

/**
 * RQ1.6 - Taxable
 */
export const RQ1_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RQ1.6",
  "version": "2.8",
  "description": "Taxable",
  "type": "Field",
  "item": 290,
  "table": "HL70136",
  "longName": "HL7Taxable",
  "length": 1
});

/**
 * RQ1.7 - Substitute Allowed
 */
export const RQ1_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RQ1.7",
  "version": "2.8",
  "description": "Substitute Allowed",
  "type": "Field",
  "item": 291,
  "table": "HL70136",
  "longName": "HL7Substitute Allowed",
  "length": 1
});
