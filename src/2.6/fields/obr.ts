
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 OBR Fields
 * 
 * HL7 v2.6 OBR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OBR.1 - Set ID - OBR
 */
export const OBR_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "OBR.1",
  "version": "2.6",
  "description": "Set ID - OBR",
  "type": "Field",
  "item": 237,
  "table": "",
  "longName": "HL7Set ID - OBR",
  "length": 4
});

/**
 * OBR.2 - Placer Order Number
 */
export const OBR_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.2",
  "version": "2.6",
  "description": "Placer Order Number",
  "type": "Field",
  "item": 216,
  "table": "",
  "longName": "HL7Placer Order Number",
  "length": 427
});

/**
 * OBR.3 - Filler Order Number
 */
export const OBR_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.3",
  "version": "2.6",
  "description": "Filler Order Number",
  "type": "Field",
  "item": 217,
  "table": "",
  "longName": "HL7Filler Order Number",
  "length": 427
});

/**
 * OBR.4 - Universal Service Identifier
 */
export const OBR_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.4",
  "version": "2.6",
  "description": "Universal Service Identifier",
  "type": "Field",
  "item": 238,
  "table": "",
  "longName": "HL7Universal Service Identifier",
  "length": 705
});

/**
 * OBR.5 - Priority
 */
export const OBR_5 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.5",
  "version": "2.6",
  "description": "Priority",
  "type": "Field",
  "item": 239,
  "table": "",
  "longName": "HL7Priority"
});

/**
 * OBR.6 - Requested Date/Time
 */
export const OBR_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OBR.6",
  "version": "2.6",
  "description": "Requested Date/Time",
  "type": "Field",
  "item": 240,
  "table": "",
  "longName": "HL7Requested Date/Time"
});

/**
 * OBR.7 - Observation Date/Time #
 */
export const OBR_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OBR.7",
  "version": "2.6",
  "description": "Observation Date/Time #",
  "type": "Field",
  "item": 241,
  "table": "",
  "longName": "HL7Observation Date/Time #",
  "length": 24
});

/**
 * OBR.8 - Observation End Date/Time #
 */
export const OBR_8 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OBR.8",
  "version": "2.6",
  "description": "Observation End Date/Time #",
  "type": "Field",
  "item": 242,
  "table": "",
  "longName": "HL7Observation End Date/Time #",
  "length": 24
});

/**
 * OBR.9 - Collection Volume *
 */
export const OBR_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.9",
  "version": "2.6",
  "description": "Collection Volume *",
  "type": "Field",
  "item": 243,
  "table": "",
  "longName": "HL7Collection Volume *",
  "length": 722
});

/**
 * OBR.10 - Collector Identifier *
 */
export const OBR_10 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "OBR.10",
  "version": "2.6",
  "description": "Collector Identifier *",
  "type": "Field",
  "item": 244,
  "table": "",
  "longName": "HL7Collector Identifier *",
  "length": 3220
});

/**
 * OBR.11 - Specimen Action Code *
 */
export const OBR_11 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.11",
  "version": "2.6",
  "description": "Specimen Action Code *",
  "type": "Field",
  "item": 245,
  "table": "HL70065",
  "longName": "HL7Specimen Action Code *",
  "length": 1
});

/**
 * OBR.12 - Danger Code
 */
export const OBR_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.12",
  "version": "2.6",
  "description": "Danger Code",
  "type": "Field",
  "item": 246,
  "table": "HL79999",
  "longName": "HL7Danger Code",
  "length": 705
});

/**
 * OBR.13 - Relevant Clinical Information
 */
export const OBR_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.13",
  "version": "2.6",
  "description": "Relevant Clinical Information",
  "type": "Field",
  "item": 247,
  "table": "",
  "longName": "HL7Relevant Clinical Information",
  "length": 300
});

/**
 * OBR.14 - Specimen Received Date/Time
 */
export const OBR_14 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OBR.14",
  "version": "2.6",
  "description": "Specimen Received Date/Time",
  "type": "Field",
  "item": 248,
  "table": "",
  "longName": "HL7Specimen Received Date/Time",
  "length": 24
});

/**
 * OBR.15 - Specimen Source
 */
export const OBR_15 = datatypes.SPS.register(hl7v2Metadata, {
  "title": "OBR.15",
  "version": "2.6",
  "description": "Specimen Source",
  "type": "Field",
  "item": 249,
  "table": "",
  "longName": "HL7Specimen Source"
});

/**
 * OBR.16 - Ordering Provider
 */
export const OBR_16 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "OBR.16",
  "version": "2.6",
  "description": "Ordering Provider",
  "type": "Field",
  "item": 226,
  "table": "",
  "longName": "HL7Ordering Provider",
  "length": 3220
});

/**
 * OBR.17 - Order Callback Phone Number
 */
export const OBR_17 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "OBR.17",
  "version": "2.6",
  "description": "Order Callback Phone Number",
  "type": "Field",
  "item": 250,
  "table": "",
  "longName": "HL7Order Callback Phone Number",
  "length": 2743
});

/**
 * OBR.18 - Placer Field 1
 */
export const OBR_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.18",
  "version": "2.6",
  "description": "Placer Field 1",
  "type": "Field",
  "item": 251,
  "table": "",
  "longName": "HL7Placer Field 1",
  "length": 199
});

/**
 * OBR.19 - Placer Field 2
 */
export const OBR_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.19",
  "version": "2.6",
  "description": "Placer Field 2",
  "type": "Field",
  "item": 252,
  "table": "",
  "longName": "HL7Placer Field 2",
  "length": 199
});

/**
 * OBR.20 - Filler Field 1 +
 */
export const OBR_20 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.20",
  "version": "2.6",
  "description": "Filler Field 1 +",
  "type": "Field",
  "item": 253,
  "table": "",
  "longName": "HL7Filler Field 1 +",
  "length": 199
});

/**
 * OBR.21 - Filler Field 2 +
 */
export const OBR_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.21",
  "version": "2.6",
  "description": "Filler Field 2 +",
  "type": "Field",
  "item": 254,
  "table": "",
  "longName": "HL7Filler Field 2 +",
  "length": 199
});

/**
 * OBR.22 - Results Rpt/Status Chng - Date/Time +
 */
export const OBR_22 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OBR.22",
  "version": "2.6",
  "description": "Results Rpt/Status Chng - Date/Time +",
  "type": "Field",
  "item": 255,
  "table": "",
  "longName": "HL7Results Rpt/Status Chng - Date/Time +",
  "length": 24
});

/**
 * OBR.23 - Charge to Practice +
 */
export const OBR_23 = datatypes.MOC.register(hl7v2Metadata, {
  "title": "OBR.23",
  "version": "2.6",
  "description": "Charge to Practice +",
  "type": "Field",
  "item": 256,
  "table": "",
  "longName": "HL7Charge to Practice +",
  "length": 504
});

/**
 * OBR.24 - Diagnostic Serv Sect ID
 */
export const OBR_24 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.24",
  "version": "2.6",
  "description": "Diagnostic Serv Sect ID",
  "type": "Field",
  "item": 257,
  "table": "HL70074",
  "longName": "HL7Diagnostic Serv Sect ID",
  "length": 10
});

/**
 * OBR.25 - Result Status +
 */
export const OBR_25 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.25",
  "version": "2.6",
  "description": "Result Status +",
  "type": "Field",
  "item": 258,
  "table": "HL70123",
  "longName": "HL7Result Status +",
  "length": 1
});

/**
 * OBR.26 - Parent Result +
 */
export const OBR_26 = datatypes.PRL.register(hl7v2Metadata, {
  "title": "OBR.26",
  "version": "2.6",
  "description": "Parent Result +",
  "type": "Field",
  "item": 259,
  "table": "",
  "longName": "HL7Parent Result +",
  "length": 977
});

/**
 * OBR.27 - Quantity/Timing
 */
export const OBR_27 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OBR.27",
  "version": "2.6",
  "description": "Quantity/Timing",
  "type": "Field",
  "item": 221,
  "table": "",
  "longName": "HL7Quantity/Timing"
});

/**
 * OBR.28 - Result Copies To
 */
export const OBR_28 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "OBR.28",
  "version": "2.6",
  "description": "Result Copies To",
  "type": "Field",
  "item": 260,
  "table": "",
  "longName": "HL7Result Copies To",
  "length": 3220
});

/**
 * OBR.29 - Parent
 */
export const OBR_29 = datatypes.EIP.register(hl7v2Metadata, {
  "title": "OBR.29",
  "version": "2.6",
  "description": "Parent",
  "type": "Field",
  "item": 261,
  "table": "",
  "longName": "HL7Parent",
  "length": 855
});

/**
 * OBR.30 - Transportation Mode
 */
export const OBR_30 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.30",
  "version": "2.6",
  "description": "Transportation Mode",
  "type": "Field",
  "item": 262,
  "table": "HL70124",
  "longName": "HL7Transportation Mode",
  "length": 20
});

/**
 * OBR.31 - Reason for Study
 */
export const OBR_31 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.31",
  "version": "2.6",
  "description": "Reason for Study",
  "type": "Field",
  "item": 263,
  "table": "HL79999",
  "longName": "HL7Reason for Study",
  "length": 705
});

/**
 * OBR.32 - Principal Result Interpreter +
 */
export const OBR_32 = datatypes.NDL.register(hl7v2Metadata, {
  "title": "OBR.32",
  "version": "2.6",
  "description": "Principal Result Interpreter +",
  "type": "Field",
  "item": 264,
  "table": "",
  "longName": "HL7Principal Result Interpreter +"
});

/**
 * OBR.33 - Assistant Result Interpreter +
 */
export const OBR_33 = datatypes.NDL.register(hl7v2Metadata, {
  "title": "OBR.33",
  "version": "2.6",
  "description": "Assistant Result Interpreter +",
  "type": "Field",
  "item": 265,
  "table": "",
  "longName": "HL7Assistant Result Interpreter +"
});

/**
 * OBR.34 - Technician +
 */
export const OBR_34 = datatypes.NDL.register(hl7v2Metadata, {
  "title": "OBR.34",
  "version": "2.6",
  "description": "Technician +",
  "type": "Field",
  "item": 266,
  "table": "",
  "longName": "HL7Technician +"
});

/**
 * OBR.35 - Transcriptionist +
 */
export const OBR_35 = datatypes.NDL.register(hl7v2Metadata, {
  "title": "OBR.35",
  "version": "2.6",
  "description": "Transcriptionist +",
  "type": "Field",
  "item": 267,
  "table": "",
  "longName": "HL7Transcriptionist +"
});

/**
 * OBR.36 - Scheduled Date/Time +
 */
export const OBR_36 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "OBR.36",
  "version": "2.6",
  "description": "Scheduled Date/Time +",
  "type": "Field",
  "item": 268,
  "table": "",
  "longName": "HL7Scheduled Date/Time +",
  "length": 24
});

/**
 * OBR.37 - Number of Sample Containers *
 */
export const OBR_37 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OBR.37",
  "version": "2.6",
  "description": "Number of Sample Containers *",
  "type": "Field",
  "item": 1028,
  "table": "",
  "longName": "HL7Number of Sample Containers *",
  "length": 16
});

/**
 * OBR.38 - Transport Logistics of Collected Sample *
 */
export const OBR_38 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.38",
  "version": "2.6",
  "description": "Transport Logistics of Collected Sample *",
  "type": "Field",
  "item": 1029,
  "table": "HL79999",
  "longName": "HL7Transport Logistics of Collected Sample *",
  "length": 705
});

/**
 * OBR.39 - Collector's Comment *
 */
export const OBR_39 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.39",
  "version": "2.6",
  "description": "Collector's Comment *",
  "type": "Field",
  "item": 1030,
  "table": "HL79999",
  "longName": "HL7Collector's Comment *",
  "length": 705
});

/**
 * OBR.40 - Transport Arrangement Responsibility
 */
export const OBR_40 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.40",
  "version": "2.6",
  "description": "Transport Arrangement Responsibility",
  "type": "Field",
  "item": 1031,
  "table": "HL79999",
  "longName": "HL7Transport Arrangement Responsibility",
  "length": 705
});

/**
 * OBR.41 - Transport Arranged
 */
export const OBR_41 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.41",
  "version": "2.6",
  "description": "Transport Arranged",
  "type": "Field",
  "item": 1032,
  "table": "HL70224",
  "longName": "HL7Transport Arranged",
  "length": 30
});

/**
 * OBR.42 - Escort Required
 */
export const OBR_42 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OBR.42",
  "version": "2.6",
  "description": "Escort Required",
  "type": "Field",
  "item": 1033,
  "table": "HL70225",
  "longName": "HL7Escort Required",
  "length": 1
});

/**
 * OBR.43 - Planned Patient Transport Comment
 */
export const OBR_43 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.43",
  "version": "2.6",
  "description": "Planned Patient Transport Comment",
  "type": "Field",
  "item": 1034,
  "table": "HL79999",
  "longName": "HL7Planned Patient Transport Comment",
  "length": 705
});

/**
 * OBR.44 - Procedure Code
 */
export const OBR_44 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "OBR.44",
  "version": "2.6",
  "description": "Procedure Code",
  "type": "Field",
  "item": 393,
  "table": "HL70088",
  "longName": "HL7Procedure Code",
  "length": 705
});

/**
 * OBR.45 - Procedure Code Modifier
 */
export const OBR_45 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "OBR.45",
  "version": "2.6",
  "description": "Procedure Code Modifier",
  "type": "Field",
  "item": 1316,
  "table": "HL70340",
  "longName": "HL7Procedure Code Modifier",
  "length": 705
});

/**
 * OBR.46 - Placer Supplemental Service Information
 */
export const OBR_46 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.46",
  "version": "2.6",
  "description": "Placer Supplemental Service Information",
  "type": "Field",
  "item": 1474,
  "table": "HL70411",
  "longName": "HL7Placer Supplemental Service Information",
  "length": 705
});

/**
 * OBR.47 - Filler Supplemental Service Information
 */
export const OBR_47 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.47",
  "version": "2.6",
  "description": "Filler Supplemental Service Information",
  "type": "Field",
  "item": 1475,
  "table": "HL70411",
  "longName": "HL7Filler Supplemental Service Information",
  "length": 705
});

/**
 * OBR.48 - Medically Necessary Duplicate Procedure Reason
 */
export const OBR_48 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.48",
  "version": "2.6",
  "description": "Medically Necessary Duplicate Procedure Reason",
  "type": "Field",
  "item": 1646,
  "table": "HL70476",
  "longName": "HL7Medically Necessary Duplicate Procedure Reason",
  "length": 705
});

/**
 * OBR.49 - Result Handling
 */
export const OBR_49 = datatypes.IS.register(hl7v2Metadata, {
  "title": "OBR.49",
  "version": "2.6",
  "description": "Result Handling",
  "type": "Field",
  "item": 1647,
  "table": "HL70507",
  "longName": "HL7Result Handling",
  "length": 2
});

/**
 * OBR.50 - Parent Universal Service Identifier
 */
export const OBR_50 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OBR.50",
  "version": "2.6",
  "description": "Parent Universal Service Identifier",
  "type": "Field",
  "item": 2286,
  "table": "",
  "longName": "HL7Parent Universal Service Identifier",
  "length": 705
});
