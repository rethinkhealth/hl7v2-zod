import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 BUI Fields
 * 
 * HL7 v2.8 BUI field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BUI.1 - Set ID - BUI
 */
export const BUI_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "BUI.1",
  "version": "2.8",
  "description": "Set ID - BUI",
  "type": "Field",
  "item": 3373,
  "table": "",
  "longName": "HL7Set ID - BUI",
  "length": 4
});

/**
 * BUI.2 - Blood Unit Identifier
 */
export const BUI_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BUI.2",
  "version": "2.8",
  "description": "Blood Unit Identifier",
  "type": "Field",
  "item": 3374,
  "table": "",
  "longName": "HL7Blood Unit Identifier"
});

/**
 * BUI.3 - Blood Unit Type
 */
export const BUI_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BUI.3",
  "version": "2.8",
  "description": "Blood Unit Type",
  "type": "Field",
  "item": 3375,
  "table": "HL70566",
  "longName": "HL7Blood Unit Type"
});

/**
 * BUI.4 - Blood Unit Weight
 */
export const BUI_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "BUI.4",
  "version": "2.8",
  "description": "Blood Unit Weight",
  "type": "Field",
  "item": 3376,
  "table": "",
  "longName": "HL7Blood Unit Weight"
});

/**
 * BUI.5 - Weight Units
 */
export const BUI_5 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "BUI.5",
  "version": "2.8",
  "description": "Weight Units",
  "type": "Field",
  "item": 3377,
  "table": "HL70929",
  "longName": "HL7Weight Units"
});

/**
 * BUI.6 - Blood Unit Volume
 */
export const BUI_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "BUI.6",
  "version": "2.8",
  "description": "Blood Unit Volume",
  "type": "Field",
  "item": 3378,
  "table": "",
  "longName": "HL7Blood Unit Volume"
});

/**
 * BUI.7 - Volume Units
 */
export const BUI_7 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "BUI.7",
  "version": "2.8",
  "description": "Volume Units",
  "type": "Field",
  "item": 3379,
  "table": "HL70930",
  "longName": "HL7Volume Units"
});

/**
 * BUI.8 - Container Catalog Number
 */
export const BUI_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BUI.8",
  "version": "2.8",
  "description": "Container Catalog Number",
  "type": "Field",
  "item": 3380,
  "table": "",
  "longName": "HL7Container Catalog Number"
});

/**
 * BUI.9 - Container Lot Number
 */
export const BUI_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BUI.9",
  "version": "2.8",
  "description": "Container Lot Number",
  "type": "Field",
  "item": 3381,
  "table": "",
  "longName": "HL7Container Lot Number"
});

/**
 * BUI.10 - Container Manufacturer
 */
export const BUI_10 = datatypes.XON.register(hl7v2Metadata, {
  "title": "BUI.10",
  "version": "2.8",
  "description": "Container Manufacturer",
  "type": "Field",
  "item": 3382,
  "table": "",
  "longName": "HL7Container Manufacturer"
});

/**
 * BUI.11 - Transport Temperature
 */
export const BUI_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BUI.11",
  "version": "2.8",
  "description": "Transport Temperature",
  "type": "Field",
  "item": 3383,
  "table": "",
  "longName": "HL7Transport Temperature"
});

/**
 * BUI.12 - Transport Temperature Units
 */
export const BUI_12 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "BUI.12",
  "version": "2.8",
  "description": "Transport Temperature Units",
  "type": "Field",
  "item": 3384,
  "table": "HL70931",
  "longName": "HL7Transport Temperature Units"
});
