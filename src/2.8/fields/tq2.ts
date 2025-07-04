import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 TQ2 Fields
 * 
 * HL7 v2.8 TQ2 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TQ2.1 - Set ID - TQ2
 */
export const TQ2_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "TQ2.1",
  "version": "2.8",
  "description": "Set ID - TQ2",
  "type": "Field",
  "item": 1648,
  "table": "",
  "longName": "HL7Set ID - TQ2",
  "length": 4
});

/**
 * TQ2.2 - Sequence/Results Flag
 */
export const TQ2_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TQ2.2",
  "version": "2.8",
  "description": "Sequence/Results Flag",
  "type": "Field",
  "item": 1649,
  "table": "HL70503",
  "longName": "HL7Sequence/Results Flag",
  "length": 1
});

/**
 * TQ2.3 - Related Placer Number
 */
export const TQ2_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TQ2.3",
  "version": "2.8",
  "description": "Related Placer Number",
  "type": "Field",
  "item": 1650,
  "table": "",
  "longName": "HL7Related Placer Number"
});

/**
 * TQ2.4 - Related Filler Number
 */
export const TQ2_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TQ2.4",
  "version": "2.8",
  "description": "Related Filler Number",
  "type": "Field",
  "item": 1651,
  "table": "",
  "longName": "HL7Related Filler Number"
});

/**
 * TQ2.5 - Related Placer Group Number
 */
export const TQ2_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TQ2.5",
  "version": "2.8",
  "description": "Related Placer Group Number",
  "type": "Field",
  "item": 1652,
  "table": "",
  "longName": "HL7Related Placer Group Number"
});

/**
 * TQ2.6 - Sequence Condition Code
 */
export const TQ2_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TQ2.6",
  "version": "2.8",
  "description": "Sequence Condition Code",
  "type": "Field",
  "item": 1653,
  "table": "HL70504",
  "longName": "HL7Sequence Condition Code"
});

/**
 * TQ2.7 - Cyclic Entry/Exit Indicator
 */
export const TQ2_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TQ2.7",
  "version": "2.8",
  "description": "Cyclic Entry/Exit Indicator",
  "type": "Field",
  "item": 1654,
  "table": "HL70505",
  "longName": "HL7Cyclic Entry/Exit Indicator",
  "length": 1
});

/**
 * TQ2.8 - Sequence Condition Time Interval
 */
export const TQ2_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TQ2.8",
  "version": "2.8",
  "description": "Sequence Condition Time Interval",
  "type": "Field",
  "item": 1655,
  "table": "",
  "longName": "HL7Sequence Condition Time Interval"
});

/**
 * TQ2.9 - Cyclic Group Maximum Number of Repeats
 */
export const TQ2_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "TQ2.9",
  "version": "2.8",
  "description": "Cyclic Group Maximum Number of Repeats",
  "type": "Field",
  "item": 1656,
  "table": "",
  "longName": "HL7Cyclic Group Maximum Number of Repeats"
});

/**
 * TQ2.10 - Special Service Request Relationship
 */
export const TQ2_10 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TQ2.10",
  "version": "2.8",
  "description": "Special Service Request Relationship",
  "type": "Field",
  "item": 1657,
  "table": "HL70506",
  "longName": "HL7Special Service Request Relationship",
  "length": 1
});
