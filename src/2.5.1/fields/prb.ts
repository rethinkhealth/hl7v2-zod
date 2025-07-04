import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 PRB Fields
 * 
 * HL7 v2.5 PRB field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRB.1 - Action Code
 */
export const PRB_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PRB.1",
  "version": "2.5",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "HL70287",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * PRB.2 - Action Date/Time
 */
export const PRB_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.2",
  "version": "2.5",
  "description": "Action Date/Time",
  "type": "Field",
  "item": 817,
  "table": "",
  "longName": "HL7Action Date/Time",
  "length": 26
});

/**
 * PRB.3 - Problem ID
 */
export const PRB_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.3",
  "version": "2.5",
  "description": "Problem ID",
  "type": "Field",
  "item": 838,
  "table": "",
  "longName": "HL7Problem ID",
  "length": 250
});

/**
 * PRB.4 - Problem Instance ID
 */
export const PRB_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.4",
  "version": "2.5",
  "description": "Problem Instance ID",
  "type": "Field",
  "item": 839,
  "table": "",
  "longName": "HL7Problem Instance ID",
  "length": 60
});

/**
 * PRB.5 - Episode of Care ID
 */
export const PRB_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.5",
  "version": "2.5",
  "description": "Episode of Care ID",
  "type": "Field",
  "item": 820,
  "table": "",
  "longName": "HL7Episode of Care ID",
  "length": 60
});

/**
 * PRB.6 - Problem List Priority
 */
export const PRB_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PRB.6",
  "version": "2.5",
  "description": "Problem List Priority",
  "type": "Field",
  "item": 841,
  "table": "",
  "longName": "HL7Problem List Priority",
  "length": 60
});

/**
 * PRB.7 - Problem Established Date/Time
 */
export const PRB_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.7",
  "version": "2.5",
  "description": "Problem Established Date/Time",
  "type": "Field",
  "item": 842,
  "table": "",
  "longName": "HL7Problem Established Date/Time",
  "length": 26
});

/**
 * PRB.8 - Anticipated Problem Resolution Date/Time
 */
export const PRB_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.8",
  "version": "2.5",
  "description": "Anticipated Problem Resolution Date/Time",
  "type": "Field",
  "item": 843,
  "table": "",
  "longName": "HL7Anticipated Problem Resolution Date/Time",
  "length": 26
});

/**
 * PRB.9 - Actual Problem Resolution Date/Time
 */
export const PRB_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.9",
  "version": "2.5",
  "description": "Actual Problem Resolution Date/Time",
  "type": "Field",
  "item": 844,
  "table": "",
  "longName": "HL7Actual Problem Resolution Date/Time",
  "length": 26
});

/**
 * PRB.10 - Problem Classification
 */
export const PRB_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.10",
  "version": "2.5",
  "description": "Problem Classification",
  "type": "Field",
  "item": 845,
  "table": "",
  "longName": "HL7Problem Classification",
  "length": 250
});

/**
 * PRB.11 - Problem Management Discipline
 */
export const PRB_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.11",
  "version": "2.5",
  "description": "Problem Management Discipline",
  "type": "Field",
  "item": 846,
  "table": "",
  "longName": "HL7Problem Management Discipline",
  "length": 250
});

/**
 * PRB.12 - Problem Persistence
 */
export const PRB_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.12",
  "version": "2.5",
  "description": "Problem Persistence",
  "type": "Field",
  "item": 847,
  "table": "",
  "longName": "HL7Problem Persistence",
  "length": 250
});

/**
 * PRB.13 - Problem Confirmation Status
 */
export const PRB_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.13",
  "version": "2.5",
  "description": "Problem Confirmation Status",
  "type": "Field",
  "item": 848,
  "table": "",
  "longName": "HL7Problem Confirmation Status",
  "length": 250
});

/**
 * PRB.14 - Problem Life Cycle Status
 */
export const PRB_14 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.14",
  "version": "2.5",
  "description": "Problem Life Cycle Status",
  "type": "Field",
  "item": 849,
  "table": "",
  "longName": "HL7Problem Life Cycle Status",
  "length": 250
});

/**
 * PRB.15 - Problem Life Cycle Status Date/Time
 */
export const PRB_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.15",
  "version": "2.5",
  "description": "Problem Life Cycle Status Date/Time",
  "type": "Field",
  "item": 850,
  "table": "",
  "longName": "HL7Problem Life Cycle Status Date/Time",
  "length": 26
});

/**
 * PRB.16 - Problem Date of Onset
 */
export const PRB_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.16",
  "version": "2.5",
  "description": "Problem Date of Onset",
  "type": "Field",
  "item": 851,
  "table": "",
  "longName": "HL7Problem Date of Onset",
  "length": 26
});

/**
 * PRB.17 - Problem Onset Text
 */
export const PRB_17 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.17",
  "version": "2.5",
  "description": "Problem Onset Text",
  "type": "Field",
  "item": 852,
  "table": "",
  "longName": "HL7Problem Onset Text",
  "length": 80
});

/**
 * PRB.18 - Problem Ranking
 */
export const PRB_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.18",
  "version": "2.5",
  "description": "Problem Ranking",
  "type": "Field",
  "item": 853,
  "table": "",
  "longName": "HL7Problem Ranking",
  "length": 250
});

/**
 * PRB.19 - Certainty of Problem
 */
export const PRB_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.19",
  "version": "2.5",
  "description": "Certainty of Problem",
  "type": "Field",
  "item": 854,
  "table": "",
  "longName": "HL7Certainty of Problem",
  "length": 250
});

/**
 * PRB.20 - Probability of Problem (0-1)
 */
export const PRB_20 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PRB.20",
  "version": "2.5",
  "description": "Probability of Problem (0-1)",
  "type": "Field",
  "item": 855,
  "table": "",
  "longName": "HL7Probability of Problem (0-1)",
  "length": 5
});

/**
 * PRB.21 - Individual Awareness of Problem
 */
export const PRB_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.21",
  "version": "2.5",
  "description": "Individual Awareness of Problem",
  "type": "Field",
  "item": 856,
  "table": "",
  "longName": "HL7Individual Awareness of Problem",
  "length": 250
});

/**
 * PRB.22 - Problem Prognosis
 */
export const PRB_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.22",
  "version": "2.5",
  "description": "Problem Prognosis",
  "type": "Field",
  "item": 857,
  "table": "",
  "longName": "HL7Problem Prognosis",
  "length": 250
});

/**
 * PRB.23 - Individual Awareness of Prognosis
 */
export const PRB_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.23",
  "version": "2.5",
  "description": "Individual Awareness of Prognosis",
  "type": "Field",
  "item": 858,
  "table": "",
  "longName": "HL7Individual Awareness of Prognosis",
  "length": 250
});

/**
 * PRB.24 - Family/Significant Other Awareness of Problem/Prognosis
 */
export const PRB_24 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.24",
  "version": "2.5",
  "description": "Family/Significant Other Awareness of Problem/Prognosis",
  "type": "Field",
  "item": 859,
  "table": "",
  "longName": "HL7Family/Significant Other Awareness of Problem/Prognosis",
  "length": 200
});

/**
 * PRB.25 - Security/Sensitivity
 */
export const PRB_25 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRB.25",
  "version": "2.5",
  "description": "Security/Sensitivity",
  "type": "Field",
  "item": 823,
  "table": "",
  "longName": "HL7Security/Sensitivity",
  "length": 250
});
