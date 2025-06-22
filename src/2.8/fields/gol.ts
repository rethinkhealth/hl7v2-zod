import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 GOL Fields
 * 
 * HL7 v2.8 GOL field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GOL.1 - Action Code
 */
export const GOL_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "GOL.1",
  "version": "2.8",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "HL70206",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * GOL.2 - Action Date/Time
 */
export const GOL_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.2",
  "version": "2.8",
  "description": "Action Date/Time",
  "type": "Field",
  "item": 817,
  "table": "",
  "longName": "HL7Action Date/Time"
});

/**
 * GOL.3 - Goal ID
 */
export const GOL_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.3",
  "version": "2.8",
  "description": "Goal ID",
  "type": "Field",
  "item": 818,
  "table": "",
  "longName": "HL7Goal ID"
});

/**
 * GOL.4 - Goal Instance ID
 */
export const GOL_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "GOL.4",
  "version": "2.8",
  "description": "Goal Instance ID",
  "type": "Field",
  "item": 819,
  "table": "",
  "longName": "HL7Goal Instance ID"
});

/**
 * GOL.5 - Episode of Care ID
 */
export const GOL_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "GOL.5",
  "version": "2.8",
  "description": "Episode of Care ID",
  "type": "Field",
  "item": 820,
  "table": "",
  "longName": "HL7Episode of Care ID"
});

/**
 * GOL.6 - Goal List Priority
 */
export const GOL_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "GOL.6",
  "version": "2.8",
  "description": "Goal List Priority",
  "type": "Field",
  "item": 821,
  "table": "",
  "longName": "HL7Goal List Priority"
});

/**
 * GOL.7 - Goal Established Date/Time
 */
export const GOL_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.7",
  "version": "2.8",
  "description": "Goal Established Date/Time",
  "type": "Field",
  "item": 822,
  "table": "",
  "longName": "HL7Goal Established Date/Time"
});

/**
 * GOL.8 - Expected Goal Achieve Date/Time
 */
export const GOL_8 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.8",
  "version": "2.8",
  "description": "Expected Goal Achieve Date/Time",
  "type": "Field",
  "item": 824,
  "table": "",
  "longName": "HL7Expected Goal Achieve Date/Time"
});

/**
 * GOL.9 - Goal Classification
 */
export const GOL_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.9",
  "version": "2.8",
  "description": "Goal Classification",
  "type": "Field",
  "item": 825,
  "table": "",
  "longName": "HL7Goal Classification"
});

/**
 * GOL.10 - Goal Management Discipline
 */
export const GOL_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.10",
  "version": "2.8",
  "description": "Goal Management Discipline",
  "type": "Field",
  "item": 826,
  "table": "",
  "longName": "HL7Goal Management Discipline"
});

/**
 * GOL.11 - Current Goal Review Status
 */
export const GOL_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.11",
  "version": "2.8",
  "description": "Current Goal Review Status",
  "type": "Field",
  "item": 827,
  "table": "",
  "longName": "HL7Current Goal Review Status"
});

/**
 * GOL.12 - Current Goal Review Date/Time
 */
export const GOL_12 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.12",
  "version": "2.8",
  "description": "Current Goal Review Date/Time",
  "type": "Field",
  "item": 828,
  "table": "",
  "longName": "HL7Current Goal Review Date/Time"
});

/**
 * GOL.13 - Next Goal Review Date/Time
 */
export const GOL_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.13",
  "version": "2.8",
  "description": "Next Goal Review Date/Time",
  "type": "Field",
  "item": 829,
  "table": "",
  "longName": "HL7Next Goal Review Date/Time"
});

/**
 * GOL.14 - Previous Goal Review Date/Time
 */
export const GOL_14 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.14",
  "version": "2.8",
  "description": "Previous Goal Review Date/Time",
  "type": "Field",
  "item": 830,
  "table": "",
  "longName": "HL7Previous Goal Review Date/Time"
});

/**
 * GOL.16 - Goal Evaluation
 */
export const GOL_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.16",
  "version": "2.8",
  "description": "Goal Evaluation",
  "type": "Field",
  "item": 832,
  "table": "",
  "longName": "HL7Goal Evaluation"
});

/**
 * GOL.17 - Goal Evaluation Comment
 */
export const GOL_17 = datatypes.ST.register(hl7v2Metadata, {
  "title": "GOL.17",
  "version": "2.8",
  "description": "Goal Evaluation Comment",
  "type": "Field",
  "item": 833,
  "table": "",
  "longName": "HL7Goal Evaluation Comment"
});

/**
 * GOL.18 - Goal Life Cycle Status
 */
export const GOL_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.18",
  "version": "2.8",
  "description": "Goal Life Cycle Status",
  "type": "Field",
  "item": 834,
  "table": "",
  "longName": "HL7Goal Life Cycle Status"
});

/**
 * GOL.19 - Goal Life Cycle Status Date/Time
 */
export const GOL_19 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "GOL.19",
  "version": "2.8",
  "description": "Goal Life Cycle Status Date/Time",
  "type": "Field",
  "item": 835,
  "table": "",
  "longName": "HL7Goal Life Cycle Status Date/Time"
});

/**
 * GOL.20 - Goal Target Type
 */
export const GOL_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "GOL.20",
  "version": "2.8",
  "description": "Goal Target Type",
  "type": "Field",
  "item": 836,
  "table": "",
  "longName": "HL7Goal Target Type"
});

/**
 * GOL.21 - Goal Target Name
 */
export const GOL_21 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "GOL.21",
  "version": "2.8",
  "description": "Goal Target Name",
  "type": "Field",
  "item": 837,
  "table": "",
  "longName": "HL7Goal Target Name"
});

/**
 * GOL.22 - Mood Code
 */
export const GOL_22 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "GOL.22",
  "version": "2.8",
  "description": "Mood Code",
  "type": "Field",
  "item": 2182,
  "table": "HL70725",
  "longName": "HL7Mood Code"
});
