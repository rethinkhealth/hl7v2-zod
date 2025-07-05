
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 SCH Fields
 * 
 * HL7 v2.6 SCH field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCH.1 - Placer Appointment ID
 */
export const SCH_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.1",
  "version": "2.6",
  "description": "Placer Appointment ID",
  "type": "Field",
  "item": 860,
  "table": "",
  "longName": "HL7Placer Appointment ID",
  "length": 75
});

/**
 * SCH.2 - Filler Appointment ID
 */
export const SCH_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.2",
  "version": "2.6",
  "description": "Filler Appointment ID",
  "type": "Field",
  "item": 861,
  "table": "",
  "longName": "HL7Filler Appointment ID",
  "length": 75
});

/**
 * SCH.3 - Occurrence Number
 */
export const SCH_3 = datatypes.NM.register(hl7v2Metadata, {
  "title": "SCH.3",
  "version": "2.6",
  "description": "Occurrence Number",
  "type": "Field",
  "item": 862,
  "table": "",
  "longName": "HL7Occurrence Number",
  "length": 5
});

/**
 * SCH.4 - Placer Group Number
 */
export const SCH_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.4",
  "version": "2.6",
  "description": "Placer Group Number",
  "type": "Field",
  "item": 218,
  "table": "",
  "longName": "HL7Placer Group Number",
  "length": 22
});

/**
 * SCH.5 - Schedule ID
 */
export const SCH_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SCH.5",
  "version": "2.6",
  "description": "Schedule ID",
  "type": "Field",
  "item": 864,
  "table": "",
  "longName": "HL7Schedule ID",
  "length": 250
});

/**
 * SCH.6 - Event Reason
 */
export const SCH_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SCH.6",
  "version": "2.6",
  "description": "Event Reason",
  "type": "Field",
  "item": 883,
  "table": "",
  "longName": "HL7Event Reason",
  "length": 250
});

/**
 * SCH.7 - Appointment Reason
 */
export const SCH_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SCH.7",
  "version": "2.6",
  "description": "Appointment Reason",
  "type": "Field",
  "item": 866,
  "table": "HL70276",
  "longName": "HL7Appointment Reason",
  "length": 250
});

/**
 * SCH.8 - Appointment Type
 */
export const SCH_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SCH.8",
  "version": "2.6",
  "description": "Appointment Type",
  "type": "Field",
  "item": 867,
  "table": "HL70277",
  "longName": "HL7Appointment Type",
  "length": 250
});

/**
 * SCH.9 - Appointment Duration
 */
export const SCH_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "SCH.9",
  "version": "2.6",
  "description": "Appointment Duration",
  "type": "Field",
  "item": 868,
  "table": "",
  "longName": "HL7Appointment Duration"
});

/**
 * SCH.10 - Appointment Duration Units
 */
export const SCH_10 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "SCH.10",
  "version": "2.6",
  "description": "Appointment Duration Units",
  "type": "Field",
  "item": 869,
  "table": "",
  "longName": "HL7Appointment Duration Units"
});

/**
 * SCH.11 - Appointment Timing Quantity
 */
export const SCH_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.11",
  "version": "2.6",
  "description": "Appointment Timing Quantity",
  "type": "Field",
  "item": 884,
  "table": "",
  "longName": "HL7Appointment Timing Quantity"
});

/**
 * SCH.12 - Placer Contact Person
 */
export const SCH_12 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "SCH.12",
  "version": "2.6",
  "description": "Placer Contact Person",
  "type": "Field",
  "item": 874,
  "table": "",
  "longName": "HL7Placer Contact Person",
  "length": 250
});

/**
 * SCH.13 - Placer Contact Phone Number
 */
export const SCH_13 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "SCH.13",
  "version": "2.6",
  "description": "Placer Contact Phone Number",
  "type": "Field",
  "item": 875,
  "table": "",
  "longName": "HL7Placer Contact Phone Number",
  "length": 250
});

/**
 * SCH.14 - Placer Contact Address
 */
export const SCH_14 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "SCH.14",
  "version": "2.6",
  "description": "Placer Contact Address",
  "type": "Field",
  "item": 876,
  "table": "",
  "longName": "HL7Placer Contact Address",
  "length": 250
});

/**
 * SCH.15 - Placer Contact Location
 */
export const SCH_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.15",
  "version": "2.6",
  "description": "Placer Contact Location",
  "type": "Field",
  "item": 877,
  "table": "",
  "longName": "HL7Placer Contact Location",
  "length": 80
});

/**
 * SCH.16 - Filler Contact Person
 */
export const SCH_16 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "SCH.16",
  "version": "2.6",
  "description": "Filler Contact Person",
  "type": "Field",
  "item": 885,
  "table": "",
  "longName": "HL7Filler Contact Person",
  "length": 250
});

/**
 * SCH.17 - Filler Contact Phone Number
 */
export const SCH_17 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "SCH.17",
  "version": "2.6",
  "description": "Filler Contact Phone Number",
  "type": "Field",
  "item": 886,
  "table": "",
  "longName": "HL7Filler Contact Phone Number",
  "length": 250
});

/**
 * SCH.18 - Filler Contact Address
 */
export const SCH_18 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "SCH.18",
  "version": "2.6",
  "description": "Filler Contact Address",
  "type": "Field",
  "item": 887,
  "table": "",
  "longName": "HL7Filler Contact Address",
  "length": 250
});

/**
 * SCH.19 - Filler Contact Location
 */
export const SCH_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.19",
  "version": "2.6",
  "description": "Filler Contact Location",
  "type": "Field",
  "item": 888,
  "table": "",
  "longName": "HL7Filler Contact Location",
  "length": 80
});

/**
 * SCH.20 - Entered By Person
 */
export const SCH_20 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "SCH.20",
  "version": "2.6",
  "description": "Entered By Person",
  "type": "Field",
  "item": 878,
  "table": "",
  "longName": "HL7Entered By Person",
  "length": 250
});

/**
 * SCH.21 - Entered By Phone Number
 */
export const SCH_21 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "SCH.21",
  "version": "2.6",
  "description": "Entered By Phone Number",
  "type": "Field",
  "item": 879,
  "table": "",
  "longName": "HL7Entered By Phone Number",
  "length": 250
});

/**
 * SCH.22 - Entered By Location
 */
export const SCH_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.22",
  "version": "2.6",
  "description": "Entered By Location",
  "type": "Field",
  "item": 880,
  "table": "",
  "longName": "HL7Entered By Location",
  "length": 80
});

/**
 * SCH.23 - Parent Placer Appointment ID
 */
export const SCH_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.23",
  "version": "2.6",
  "description": "Parent Placer Appointment ID",
  "type": "Field",
  "item": 881,
  "table": "",
  "longName": "HL7Parent Placer Appointment ID",
  "length": 75
});

/**
 * SCH.24 - Parent Filler Appointment ID
 */
export const SCH_24 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.24",
  "version": "2.6",
  "description": "Parent Filler Appointment ID",
  "type": "Field",
  "item": 882,
  "table": "",
  "longName": "HL7Parent Filler Appointment ID",
  "length": 75
});

/**
 * SCH.25 - Filler Status Code
 */
export const SCH_25 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SCH.25",
  "version": "2.6",
  "description": "Filler Status Code",
  "type": "Field",
  "item": 889,
  "table": "HL70278",
  "longName": "HL7Filler Status Code",
  "length": 250
});

/**
 * SCH.26 - Placer Order Number
 */
export const SCH_26 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.26",
  "version": "2.6",
  "description": "Placer Order Number",
  "type": "Field",
  "item": 216,
  "table": "",
  "longName": "HL7Placer Order Number",
  "length": 427
});

/**
 * SCH.27 - Filler Order Number
 */
export const SCH_27 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SCH.27",
  "version": "2.6",
  "description": "Filler Order Number",
  "type": "Field",
  "item": 217,
  "table": "",
  "longName": "HL7Filler Order Number",
  "length": 427
});
