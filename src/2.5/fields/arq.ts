import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 ARQ Fields
 *
 * HL7 v2.5 ARQ field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ARQ.1 - Placer Appointment ID
 */
export const ARQ_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.1",
  version: "2.5",
  description: "Placer Appointment ID",
  type: "Field",
  item: 860,
  table: "",
  longName: "HL7Placer Appointment ID",
  length: 75
});

/**
 * ARQ.2 - Filler Appointment ID
 */
export const ARQ_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.2",
  version: "2.5",
  description: "Filler Appointment ID",
  type: "Field",
  item: 861,
  table: "",
  longName: "HL7Filler Appointment ID",
  length: 75
});

/**
 * ARQ.3 - Occurrence Number
 */
export const ARQ_3 = datatypes.NM.register(hl7v2Metadata, {
  title: "ARQ.3",
  version: "2.5",
  description: "Occurrence Number",
  type: "Field",
  item: 862,
  table: "",
  longName: "HL7Occurrence Number",
  length: 5
});

/**
 * ARQ.4 - Placer Group Number
 */
export const ARQ_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.4",
  version: "2.5",
  description: "Placer Group Number",
  type: "Field",
  item: 218,
  table: "",
  longName: "HL7Placer Group Number",
  length: 22
});

/**
 * ARQ.5 - Schedule ID
 */
export const ARQ_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.5",
  version: "2.5",
  description: "Schedule ID",
  type: "Field",
  item: 864,
  table: "",
  longName: "HL7Schedule ID",
  length: 250
});

/**
 * ARQ.6 - Request Event Reason
 */
export const ARQ_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.6",
  version: "2.5",
  description: "Request Event Reason",
  type: "Field",
  item: 865,
  table: "",
  longName: "HL7Request Event Reason",
  length: 250
});

/**
 * ARQ.7 - Appointment Reason
 */
export const ARQ_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.7",
  version: "2.5",
  description: "Appointment Reason",
  type: "Field",
  item: 866,
  table: "HL70276",
  longName: "HL7Appointment Reason",
  length: 250
});

/**
 * ARQ.8 - Appointment Type
 */
export const ARQ_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.8",
  version: "2.5",
  description: "Appointment Type",
  type: "Field",
  item: 867,
  table: "HL70277",
  longName: "HL7Appointment Type",
  length: 250
});

/**
 * ARQ.9 - Appointment Duration
 */
export const ARQ_9 = datatypes.NM.register(hl7v2Metadata, {
  title: "ARQ.9",
  version: "2.5",
  description: "Appointment Duration",
  type: "Field",
  item: 868,
  table: "",
  longName: "HL7Appointment Duration",
  length: 20
});

/**
 * ARQ.10 - Appointment Duration Units
 */
export const ARQ_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.10",
  version: "2.5",
  description: "Appointment Duration Units",
  type: "Field",
  item: 869,
  table: "",
  longName: "HL7Appointment Duration Units",
  length: 250
});

/**
 * ARQ.11 - Requested Start Date/Time Range
 */
export const ARQ_11 = datatypes.DR.register(hl7v2Metadata, {
  title: "ARQ.11",
  version: "2.5",
  description: "Requested Start Date/Time Range",
  type: "Field",
  item: 870,
  table: "",
  longName: "HL7Requested Start Date/Time Range",
  length: 53
});

/**
 * ARQ.12 - Priority-ARQ
 */
export const ARQ_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.12",
  version: "2.5",
  description: "Priority-ARQ",
  type: "Field",
  item: 871,
  table: "",
  longName: "HL7Priority-ARQ",
  length: 5
});

/**
 * ARQ.13 - Repeating Interval
 */
export const ARQ_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.13",
  version: "2.5",
  description: "Repeating Interval",
  type: "Field",
  item: 872,
  table: "",
  longName: "HL7Repeating Interval",
  length: 100
});

/**
 * ARQ.14 - Repeating Interval Duration
 */
export const ARQ_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.14",
  version: "2.5",
  description: "Repeating Interval Duration",
  type: "Field",
  item: 873,
  table: "",
  longName: "HL7Repeating Interval Duration",
  length: 5
});

/**
 * ARQ.15 - Placer Contact Person
 */
export const ARQ_15 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ARQ.15",
  version: "2.5",
  description: "Placer Contact Person",
  type: "Field",
  item: 874,
  table: "",
  longName: "HL7Placer Contact Person",
  length: 250
});

/**
 * ARQ.16 - Placer Contact Phone Number
 */
export const ARQ_16 = datatypes.XTN.register(hl7v2Metadata, {
  title: "ARQ.16",
  version: "2.5",
  description: "Placer Contact Phone Number",
  type: "Field",
  item: 875,
  table: "",
  longName: "HL7Placer Contact Phone Number",
  length: 250
});

/**
 * ARQ.17 - Placer Contact Address
 */
export const ARQ_17 = datatypes.XAD.register(hl7v2Metadata, {
  title: "ARQ.17",
  version: "2.5",
  description: "Placer Contact Address",
  type: "Field",
  item: 876,
  table: "",
  longName: "HL7Placer Contact Address",
  length: 250
});

/**
 * ARQ.18 - Placer Contact Location
 */
export const ARQ_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.18",
  version: "2.5",
  description: "Placer Contact Location",
  type: "Field",
  item: 877,
  table: "",
  longName: "HL7Placer Contact Location",
  length: 80
});

/**
 * ARQ.19 - Entered By Person
 */
export const ARQ_19 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ARQ.19",
  version: "2.5",
  description: "Entered By Person",
  type: "Field",
  item: 878,
  table: "",
  longName: "HL7Entered By Person",
  length: 250
});

/**
 * ARQ.20 - Entered By Phone Number
 */
export const ARQ_20 = datatypes.XTN.register(hl7v2Metadata, {
  title: "ARQ.20",
  version: "2.5",
  description: "Entered By Phone Number",
  type: "Field",
  item: 879,
  table: "",
  longName: "HL7Entered By Phone Number",
  length: 250
});

/**
 * ARQ.21 - Entered By Location
 */
export const ARQ_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.21",
  version: "2.5",
  description: "Entered By Location",
  type: "Field",
  item: 880,
  table: "",
  longName: "HL7Entered By Location",
  length: 80
});

/**
 * ARQ.22 - Parent Placer Appointment ID
 */
export const ARQ_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.22",
  version: "2.5",
  description: "Parent Placer Appointment ID",
  type: "Field",
  item: 881,
  table: "",
  longName: "HL7Parent Placer Appointment ID",
  length: 75
});

/**
 * ARQ.23 - Parent Filler Appointment ID
 */
export const ARQ_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.23",
  version: "2.5",
  description: "Parent Filler Appointment ID",
  type: "Field",
  item: 882,
  table: "",
  longName: "HL7Parent Filler Appointment ID",
  length: 75
});

/**
 * ARQ.24 - Placer Order Number
 */
export const ARQ_24 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.24",
  version: "2.5",
  description: "Placer Order Number",
  type: "Field",
  item: 216,
  table: "",
  longName: "HL7Placer Order Number",
  length: 22
});

/**
 * ARQ.25 - Filler Order Number
 */
export const ARQ_25 = datatypes.ST.register(hl7v2Metadata, {
  title: "ARQ.25",
  version: "2.5",
  description: "Filler Order Number",
  type: "Field",
  item: 217,
  table: "",
  longName: "HL7Filler Order Number",
  length: 22
});
