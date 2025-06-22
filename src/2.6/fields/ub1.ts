import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 UB1 Fields
 * 
 * HL7 v2.6 UB1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UB1.1 - Set ID - UB1
 */
export const UB1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "UB1.1",
  "version": "2.6",
  "description": "Set ID - UB1",
  "type": "Field",
  "item": 530,
  "table": "",
  "longName": "HL7Set ID - UB1",
  "length": 4
});

/**
 * UB1.3 - Blood Furnished-Pints
 */
export const UB1_3 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.3",
  "version": "2.6",
  "description": "Blood Furnished-Pints",
  "type": "Field",
  "item": 532,
  "table": "",
  "longName": "HL7Blood Furnished-Pints",
  "length": 2
});

/**
 * UB1.4 - Blood Replaced-Pints
 */
export const UB1_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.4",
  "version": "2.6",
  "description": "Blood Replaced-Pints",
  "type": "Field",
  "item": 533,
  "table": "",
  "longName": "HL7Blood Replaced-Pints",
  "length": 2
});

/**
 * UB1.5 - Blood Not Replaced-Pints
 */
export const UB1_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.5",
  "version": "2.6",
  "description": "Blood Not Replaced-Pints",
  "type": "Field",
  "item": 534,
  "table": "",
  "longName": "HL7Blood Not Replaced-Pints",
  "length": 2
});

/**
 * UB1.6 - Co-Insurance Days
 */
export const UB1_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.6",
  "version": "2.6",
  "description": "Co-Insurance Days",
  "type": "Field",
  "item": 535,
  "table": "",
  "longName": "HL7Co-Insurance Days"
});

/**
 * UB1.7 - Condition Code
 */
export const UB1_7 = datatypes.IS.register(hl7v2Metadata, {
  "title": "UB1.7",
  "version": "2.6",
  "description": "Condition Code",
  "type": "Field",
  "item": 536,
  "table": "HL70043",
  "longName": "HL7Condition Code"
});

/**
 * UB1.8 - Covered Days
 */
export const UB1_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.8",
  "version": "2.6",
  "description": "Covered Days",
  "type": "Field",
  "item": 537,
  "table": "",
  "longName": "HL7Covered Days"
});

/**
 * UB1.9 - Non Covered Days
 */
export const UB1_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.9",
  "version": "2.6",
  "description": "Non Covered Days",
  "type": "Field",
  "item": 538,
  "table": "",
  "longName": "HL7Non Covered Days"
});

/**
 * UB1.10 - Value Amount & Code
 */
export const UB1_10 = datatypes.UVC.register(hl7v2Metadata, {
  "title": "UB1.10",
  "version": "2.6",
  "description": "Value Amount & Code",
  "type": "Field",
  "item": 539,
  "table": "",
  "longName": "HL7Value Amount & Code"
});

/**
 * UB1.11 - Number Of Grace Days
 */
export const UB1_11 = datatypes.NM.register(hl7v2Metadata, {
  "title": "UB1.11",
  "version": "2.6",
  "description": "Number Of Grace Days",
  "type": "Field",
  "item": 540,
  "table": "",
  "longName": "HL7Number Of Grace Days",
  "length": 2
});

/**
 * UB1.12 - Special Program Indicator
 */
export const UB1_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "UB1.12",
  "version": "2.6",
  "description": "Special Program Indicator",
  "type": "Field",
  "item": 541,
  "table": "HL70348",
  "longName": "HL7Special Program Indicator",
  "length": 250
});

/**
 * UB1.13 - PSRO/UR Approval Indicator
 */
export const UB1_13 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "UB1.13",
  "version": "2.6",
  "description": "PSRO/UR Approval Indicator",
  "type": "Field",
  "item": 542,
  "table": "HL70349",
  "longName": "HL7PSRO/UR Approval Indicator",
  "length": 250
});

/**
 * UB1.14 - PSRO/UR Approved Stay-Fm
 */
export const UB1_14 = datatypes.DT.register(hl7v2Metadata, {
  "title": "UB1.14",
  "version": "2.6",
  "description": "PSRO/UR Approved Stay-Fm",
  "type": "Field",
  "item": 543,
  "table": "",
  "longName": "HL7PSRO/UR Approved Stay-Fm",
  "length": 8
});

/**
 * UB1.15 - PSRO/UR Approved Stay-To
 */
export const UB1_15 = datatypes.DT.register(hl7v2Metadata, {
  "title": "UB1.15",
  "version": "2.6",
  "description": "PSRO/UR Approved Stay-To",
  "type": "Field",
  "item": 544,
  "table": "",
  "longName": "HL7PSRO/UR Approved Stay-To",
  "length": 8
});

/**
 * UB1.16 - Occurrence
 */
export const UB1_16 = datatypes.OCD.register(hl7v2Metadata, {
  "title": "UB1.16",
  "version": "2.6",
  "description": "Occurrence",
  "type": "Field",
  "item": 545,
  "table": "",
  "longName": "HL7Occurrence"
});

/**
 * UB1.17 - Occurrence Span
 */
export const UB1_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "UB1.17",
  "version": "2.6",
  "description": "Occurrence Span",
  "type": "Field",
  "item": 546,
  "table": "HL70351",
  "longName": "HL7Occurrence Span"
});

/**
 * UB1.18 - Occur Span Start Date
 */
export const UB1_18 = datatypes.DT.register(hl7v2Metadata, {
  "title": "UB1.18",
  "version": "2.6",
  "description": "Occur Span Start Date",
  "type": "Field",
  "item": 547,
  "table": "",
  "longName": "HL7Occur Span Start Date"
});

/**
 * UB1.19 - Occur Span End Date
 */
export const UB1_19 = datatypes.DT.register(hl7v2Metadata, {
  "title": "UB1.19",
  "version": "2.6",
  "description": "Occur Span End Date",
  "type": "Field",
  "item": 548,
  "table": "",
  "longName": "HL7Occur Span End Date"
});

/**
 * UB1.20 - UB-82 Locator 2
 */
export const UB1_20 = datatypes.ST.register(hl7v2Metadata, {
  "title": "UB1.20",
  "version": "2.6",
  "description": "UB-82 Locator 2",
  "type": "Field",
  "item": 549,
  "table": "",
  "longName": "HL7UB-82 Locator 2"
});

/**
 * UB1.21 - UB-82 Locator 9
 */
export const UB1_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "UB1.21",
  "version": "2.6",
  "description": "UB-82 Locator 9",
  "type": "Field",
  "item": 550,
  "table": "",
  "longName": "HL7UB-82 Locator 9"
});

/**
 * UB1.22 - UB-82 Locator 27
 */
export const UB1_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "UB1.22",
  "version": "2.6",
  "description": "UB-82 Locator 27",
  "type": "Field",
  "item": 551,
  "table": "",
  "longName": "HL7UB-82 Locator 27"
});

/**
 * UB1.23 - UB-82 Locator 45
 */
export const UB1_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "UB1.23",
  "version": "2.6",
  "description": "UB-82 Locator 45",
  "type": "Field",
  "item": 552,
  "table": "",
  "longName": "HL7UB-82 Locator 45"
});
