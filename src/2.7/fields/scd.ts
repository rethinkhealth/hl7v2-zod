import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 SCD Fields
 *
 * HL7 v2.7 SCD field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCD.1 - Cycle Start Time
 */
export const SCD_1 = datatypes.TM.register(hl7v2Metadata, {
  title: "SCD.1",
  version: "2.7",
  description: "Cycle Start Time",
  type: "Field",
  item: 2104,
  table: "",
  longName: "HL7Cycle Start Time"
});

/**
 * SCD.2 - Cycle Count
 */
export const SCD_2 = datatypes.NM.register(hl7v2Metadata, {
  title: "SCD.2",
  version: "2.7",
  description: "Cycle Count",
  type: "Field",
  item: 2105,
  table: "",
  longName: "HL7Cycle Count"
});

/**
 * SCD.3 - Temp Max
 */
export const SCD_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.3",
  version: "2.7",
  description: "Temp Max",
  type: "Field",
  item: 2106,
  table: "",
  longName: "HL7Temp Max"
});

/**
 * SCD.4 - Temp Min
 */
export const SCD_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.4",
  version: "2.7",
  description: "Temp Min",
  type: "Field",
  item: 2107,
  table: "",
  longName: "HL7Temp Min"
});

/**
 * SCD.5 - Load Number
 */
export const SCD_5 = datatypes.NM.register(hl7v2Metadata, {
  title: "SCD.5",
  version: "2.7",
  description: "Load Number",
  type: "Field",
  item: 2108,
  table: "",
  longName: "HL7Load Number"
});

/**
 * SCD.6 - Condition Time
 */
export const SCD_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.6",
  version: "2.7",
  description: "Condition Time",
  type: "Field",
  item: 2109,
  table: "",
  longName: "HL7Condition Time"
});

/**
 * SCD.7 - Sterilize Time
 */
export const SCD_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.7",
  version: "2.7",
  description: "Sterilize Time",
  type: "Field",
  item: 2110,
  table: "",
  longName: "HL7Sterilize Time"
});

/**
 * SCD.8 - Exhaust Time
 */
export const SCD_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.8",
  version: "2.7",
  description: "Exhaust Time",
  type: "Field",
  item: 2111,
  table: "",
  longName: "HL7Exhaust Time"
});

/**
 * SCD.9 - Total Cycle Time
 */
export const SCD_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.9",
  version: "2.7",
  description: "Total Cycle Time",
  type: "Field",
  item: 2112,
  table: "",
  longName: "HL7Total Cycle Time"
});

/**
 * SCD.10 - Device Status
 */
export const SCD_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SCD.10",
  version: "2.7",
  description: "Device Status",
  type: "Field",
  item: 2113,
  table: "HL70682",
  longName: "HL7Device Status"
});

/**
 * SCD.11 - Cycle Start Date/Time
 */
export const SCD_11 = datatypes.DTM.register(hl7v2Metadata, {
  title: "SCD.11",
  version: "2.7",
  description: "Cycle Start Date/Time",
  type: "Field",
  item: 2114,
  table: "",
  longName: "HL7Cycle Start Date/Time"
});

/**
 * SCD.12 - Dry Time
 */
export const SCD_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.12",
  version: "2.7",
  description: "Dry Time",
  type: "Field",
  item: 2115,
  table: "",
  longName: "HL7Dry Time"
});

/**
 * SCD.13 - Leak Rate
 */
export const SCD_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.13",
  version: "2.7",
  description: "Leak Rate",
  type: "Field",
  item: 2116,
  table: "",
  longName: "HL7Leak Rate"
});

/**
 * SCD.14 - Control Temperature
 */
export const SCD_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.14",
  version: "2.7",
  description: "Control Temperature",
  type: "Field",
  item: 2117,
  table: "",
  longName: "HL7Control Temperature"
});

/**
 * SCD.15 - Sterilizer Temperature
 */
export const SCD_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.15",
  version: "2.7",
  description: "Sterilizer Temperature",
  type: "Field",
  item: 2118,
  table: "",
  longName: "HL7Sterilizer Temperature"
});

/**
 * SCD.16 - Cycle Complete Time
 */
export const SCD_16 = datatypes.TM.register(hl7v2Metadata, {
  title: "SCD.16",
  version: "2.7",
  description: "Cycle Complete Time",
  type: "Field",
  item: 2119,
  table: "",
  longName: "HL7Cycle Complete Time"
});

/**
 * SCD.17 - Under Temperature
 */
export const SCD_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.17",
  version: "2.7",
  description: "Under Temperature",
  type: "Field",
  item: 2120,
  table: "",
  longName: "HL7Under Temperature"
});

/**
 * SCD.18 - Over Temperature
 */
export const SCD_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.18",
  version: "2.7",
  description: "Over Temperature",
  type: "Field",
  item: 2121,
  table: "",
  longName: "HL7Over Temperature"
});

/**
 * SCD.19 - Abort Cycle
 */
export const SCD_19 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.19",
  version: "2.7",
  description: "Abort Cycle",
  type: "Field",
  item: 2122,
  table: "HL70532",
  longName: "HL7Abort Cycle"
});

/**
 * SCD.20 - Alarm
 */
export const SCD_20 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.20",
  version: "2.7",
  description: "Alarm",
  type: "Field",
  item: 2123,
  table: "HL70532",
  longName: "HL7Alarm"
});

/**
 * SCD.21 - Long in Charge Phase
 */
export const SCD_21 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.21",
  version: "2.7",
  description: "Long in Charge Phase",
  type: "Field",
  item: 2124,
  table: "HL70532",
  longName: "HL7Long in Charge Phase"
});

/**
 * SCD.22 - Long in Exhaust Phase
 */
export const SCD_22 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.22",
  version: "2.7",
  description: "Long in Exhaust Phase",
  type: "Field",
  item: 2125,
  table: "HL70532",
  longName: "HL7Long in Exhaust Phase"
});

/**
 * SCD.23 - Long in Fast Exhaust Phase
 */
export const SCD_23 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.23",
  version: "2.7",
  description: "Long in Fast Exhaust Phase",
  type: "Field",
  item: 2126,
  table: "HL70532",
  longName: "HL7Long in Fast Exhaust Phase"
});

/**
 * SCD.24 - Reset
 */
export const SCD_24 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.24",
  version: "2.7",
  description: "Reset",
  type: "Field",
  item: 2127,
  table: "HL70532",
  longName: "HL7Reset"
});

/**
 * SCD.25 - Operator - Unload
 */
export const SCD_25 = datatypes.XCN.register(hl7v2Metadata, {
  title: "SCD.25",
  version: "2.7",
  description: "Operator - Unload",
  type: "Field",
  item: 2128,
  table: "",
  longName: "HL7Operator - Unload"
});

/**
 * SCD.26 - Door Open
 */
export const SCD_26 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.26",
  version: "2.7",
  description: "Door Open",
  type: "Field",
  item: 2129,
  table: "HL70532",
  longName: "HL7Door Open"
});

/**
 * SCD.27 - Reading Failure
 */
export const SCD_27 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.27",
  version: "2.7",
  description: "Reading Failure",
  type: "Field",
  item: 2130,
  table: "HL70532",
  longName: "HL7Reading Failure"
});

/**
 * SCD.28 - Cycle Type
 */
export const SCD_28 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SCD.28",
  version: "2.7",
  description: "Cycle Type",
  type: "Field",
  item: 2131,
  table: "HL70702",
  longName: "HL7Cycle Type"
});

/**
 * SCD.29 - Thermal Rinse Time
 */
export const SCD_29 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.29",
  version: "2.7",
  description: "Thermal Rinse Time",
  type: "Field",
  item: 2132,
  table: "",
  longName: "HL7Thermal Rinse Time"
});

/**
 * SCD.30 - Wash Time
 */
export const SCD_30 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.30",
  version: "2.7",
  description: "Wash Time",
  type: "Field",
  item: 2133,
  table: "",
  longName: "HL7Wash Time"
});

/**
 * SCD.31 - Injection Rate
 */
export const SCD_31 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.31",
  version: "2.7",
  description: "Injection Rate",
  type: "Field",
  item: 2134,
  table: "",
  longName: "HL7Injection Rate"
});

/**
 * SCD.32 - Procedure Code
 */
export const SCD_32 = datatypes.CNE.register(hl7v2Metadata, {
  title: "SCD.32",
  version: "2.7",
  description: "Procedure Code",
  type: "Field",
  item: 393,
  table: "HL70088",
  longName: "HL7Procedure Code"
});

/**
 * SCD.33 - Patient Identifier List
 */
export const SCD_33 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.33",
  version: "2.7",
  description: "Patient Identifier List",
  type: "Field",
  item: 106,
  table: "",
  longName: "HL7Patient Identifier List"
});

/**
 * SCD.34 - Attending Doctor
 */
export const SCD_34 = datatypes.XCN.register(hl7v2Metadata, {
  title: "SCD.34",
  version: "2.7",
  description: "Attending Doctor",
  type: "Field",
  item: 137,
  table: "HL70010",
  longName: "HL7Attending Doctor"
});

/**
 * SCD.35 - Dilution Factor
 */
export const SCD_35 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.35",
  version: "2.7",
  description: "Dilution Factor",
  type: "Field",
  item: 1356,
  table: "",
  longName: "HL7Dilution Factor"
});

/**
 * SCD.36 - Fill Time
 */
export const SCD_36 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.36",
  version: "2.7",
  description: "Fill Time",
  type: "Field",
  item: 2139,
  table: "",
  longName: "HL7Fill Time"
});

/**
 * SCD.37 - Inlet Temperature
 */
export const SCD_37 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCD.37",
  version: "2.7",
  description: "Inlet Temperature",
  type: "Field",
  item: 2140,
  table: "",
  longName: "HL7Inlet Temperature"
});
