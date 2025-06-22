import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 RXG Fields
 * 
 * HL7 v2.9 RXG field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXG.1 - Give Sub-ID Counter
 */
export const RXG_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.1",
  "version": "2.9",
  "description": "Give Sub-ID Counter",
  "type": "Field",
  "item": 342,
  "table": "",
  "longName": "HL7Give Sub-ID Counter"
});

/**
 * RXG.2 - Dispense Sub-ID Counter
 */
export const RXG_2 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.2",
  "version": "2.9",
  "description": "Dispense Sub-ID Counter",
  "type": "Field",
  "item": 334,
  "table": "",
  "longName": "HL7Dispense Sub-ID Counter"
});

/**
 * RXG.4 - Give Code
 */
export const RXG_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.4",
  "version": "2.9",
  "description": "Give Code",
  "type": "Field",
  "item": 317,
  "table": "HL70292",
  "longName": "HL7Give Code"
});

/**
 * RXG.5 - Give Amount - Minimum
 */
export const RXG_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.5",
  "version": "2.9",
  "description": "Give Amount - Minimum",
  "type": "Field",
  "item": 318,
  "table": "",
  "longName": "HL7Give Amount - Minimum"
});

/**
 * RXG.6 - Give Amount - Maximum
 */
export const RXG_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.6",
  "version": "2.9",
  "description": "Give Amount - Maximum",
  "type": "Field",
  "item": 319,
  "table": "",
  "longName": "HL7Give Amount - Maximum"
});

/**
 * RXG.7 - Give Units
 */
export const RXG_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.7",
  "version": "2.9",
  "description": "Give Units",
  "type": "Field",
  "item": 320,
  "table": "HL70715",
  "longName": "HL7Give Units"
});

/**
 * RXG.8 - Give Dosage Form
 */
export const RXG_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.8",
  "version": "2.9",
  "description": "Give Dosage Form",
  "type": "Field",
  "item": 321,
  "table": "HL70716",
  "longName": "HL7Give Dosage Form"
});

/**
 * RXG.9 - Administration Notes
 */
export const RXG_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.9",
  "version": "2.9",
  "description": "Administration Notes",
  "type": "Field",
  "item": 351,
  "table": "HL70691",
  "longName": "HL7Administration Notes"
});

/**
 * RXG.10 - Substitution Status
 */
export const RXG_10 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXG.10",
  "version": "2.9",
  "description": "Substitution Status",
  "type": "Field",
  "item": 322,
  "table": "HL70167",
  "longName": "HL7Substitution Status",
  "length": 1
});

/**
 * RXG.12 - Needs Human Review
 */
export const RXG_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXG.12",
  "version": "2.9",
  "description": "Needs Human Review",
  "type": "Field",
  "item": 307,
  "table": "HL70136",
  "longName": "HL7Needs Human Review",
  "length": 1
});

/**
 * RXG.13 - Special Administration Instructions
 */
export const RXG_13 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.13",
  "version": "2.9",
  "description": "Special Administration Instructions",
  "type": "Field",
  "item": 343,
  "table": "HL70738",
  "longName": "HL7Special Administration Instructions",
  "length": 250
});

/**
 * RXG.14 - Give Per (Time Unit)
 */
export const RXG_14 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXG.14",
  "version": "2.9",
  "description": "Give Per (Time Unit)",
  "type": "Field",
  "item": 331,
  "table": "",
  "longName": "HL7Give Per (Time Unit)"
});

/**
 * RXG.15 - Give Rate Amount
 */
export const RXG_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXG.15",
  "version": "2.9",
  "description": "Give Rate Amount",
  "type": "Field",
  "item": 332,
  "table": "",
  "longName": "HL7Give Rate Amount"
});

/**
 * RXG.16 - Give Rate Units
 */
export const RXG_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.16",
  "version": "2.9",
  "description": "Give Rate Units",
  "type": "Field",
  "item": 333,
  "table": "HL70722",
  "longName": "HL7Give Rate Units"
});

/**
 * RXG.17 - Give Strength
 */
export const RXG_17 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.17",
  "version": "2.9",
  "description": "Give Strength",
  "type": "Field",
  "item": 1126,
  "table": "",
  "longName": "HL7Give Strength"
});

/**
 * RXG.18 - Give Strength Units
 */
export const RXG_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.18",
  "version": "2.9",
  "description": "Give Strength Units",
  "type": "Field",
  "item": 1127,
  "table": "HL70723",
  "longName": "HL7Give Strength Units"
});

/**
 * RXG.19 - Substance Lot Number
 */
export const RXG_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXG.19",
  "version": "2.9",
  "description": "Substance Lot Number",
  "type": "Field",
  "item": 1129,
  "table": "",
  "longName": "HL7Substance Lot Number"
});

/**
 * RXG.20 - Substance Expiration Date
 */
export const RXG_20 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXG.20",
  "version": "2.9",
  "description": "Substance Expiration Date",
  "type": "Field",
  "item": 1130,
  "table": "",
  "longName": "HL7Substance Expiration Date"
});

/**
 * RXG.21 - Substance Manufacturer Name
 */
export const RXG_21 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.21",
  "version": "2.9",
  "description": "Substance Manufacturer Name",
  "type": "Field",
  "item": 1131,
  "table": "",
  "longName": "HL7Substance Manufacturer Name"
});

/**
 * RXG.22 - Indication
 */
export const RXG_22 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.22",
  "version": "2.9",
  "description": "Indication",
  "type": "Field",
  "item": 1123,
  "table": "HL70694",
  "longName": "HL7Indication"
});

/**
 * RXG.23 - Give Drug Strength Volume
 */
export const RXG_23 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.23",
  "version": "2.9",
  "description": "Give Drug Strength Volume",
  "type": "Field",
  "item": 1692,
  "table": "",
  "longName": "HL7Give Drug Strength Volume"
});

/**
 * RXG.24 - Give Drug Strength Volume Units
 */
export const RXG_24 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.24",
  "version": "2.9",
  "description": "Give Drug Strength Volume Units",
  "type": "Field",
  "item": 1693,
  "table": "HL70744",
  "longName": "HL7Give Drug Strength Volume Units"
});

/**
 * RXG.25 - Give Barcode Identifier
 */
export const RXG_25 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.25",
  "version": "2.9",
  "description": "Give Barcode Identifier",
  "type": "Field",
  "item": 1694,
  "table": "HL70745",
  "longName": "HL7Give Barcode Identifier"
});

/**
 * RXG.26 - Pharmacy Order Type
 */
export const RXG_26 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXG.26",
  "version": "2.9",
  "description": "Pharmacy Order Type",
  "type": "Field",
  "item": 1695,
  "table": "HL70480",
  "longName": "HL7Pharmacy Order Type",
  "length": 1
});

/**
 * RXG.29 - Deliver-to Patient Location
 */
export const RXG_29 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXG.29",
  "version": "2.9",
  "description": "Deliver-to Patient Location",
  "type": "Field",
  "item": 1683,
  "table": "",
  "longName": "HL7Deliver-to Patient Location"
});

/**
 * RXG.30 - Deliver-to Address
 */
export const RXG_30 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "RXG.30",
  "version": "2.9",
  "description": "Deliver-to Address",
  "type": "Field",
  "item": 1684,
  "table": "",
  "longName": "HL7Deliver-to Address"
});

/**
 * RXG.31 - Give Tag Identifier
 */
export const RXG_31 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXG.31",
  "version": "2.9",
  "description": "Give Tag Identifier",
  "type": "Field",
  "item": 3393,
  "table": "",
  "longName": "HL7Give Tag Identifier"
});

/**
 * RXG.32 - Dispense Amount
 */
export const RXG_32 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXG.32",
  "version": "2.9",
  "description": "Dispense Amount",
  "type": "Field",
  "item": 3316,
  "table": "",
  "longName": "HL7Dispense Amount"
});

/**
 * RXG.33 - Dispense Units
 */
export const RXG_33 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXG.33",
  "version": "2.9",
  "description": "Dispense Units",
  "type": "Field",
  "item": 3317,
  "table": "HL70746",
  "longName": "HL7Dispense Units"
});
