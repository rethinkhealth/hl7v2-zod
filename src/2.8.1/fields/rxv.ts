import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 RXV Fields
 *
 * HL7 v2.8 RXV field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXV.1 - Set ID - RXV
 */
export const RXV_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "RXV.1",
  version: "2.8",
  description: "Set ID - RXV",
  type: "Field",
  item: 3318,
  table: "",
  longName: "HL7Set ID - RXV"
});

/**
 * RXV.2 - Bolus Type
 */
export const RXV_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXV.2",
  version: "2.8",
  description: "Bolus Type",
  type: "Field",
  item: 3319,
  table: "HL70917",
  longName: "HL7Bolus Type",
  length: 1
});

/**
 * RXV.3 - Bolus Dose Amount
 */
export const RXV_3 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.3",
  version: "2.8",
  description: "Bolus Dose Amount",
  type: "Field",
  item: 3320,
  table: "",
  longName: "HL7Bolus Dose Amount"
});

/**
 * RXV.4 - Bolus Dose Amount Units
 */
export const RXV_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.4",
  version: "2.8",
  description: "Bolus Dose Amount Units",
  type: "Field",
  item: 3321,
  table: "HL79999",
  longName: "HL7Bolus Dose Amount Units"
});

/**
 * RXV.5 - Bolus Dose Volume
 */
export const RXV_5 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.5",
  version: "2.8",
  description: "Bolus Dose Volume",
  type: "Field",
  item: 3322,
  table: "",
  longName: "HL7Bolus Dose Volume"
});

/**
 * RXV.6 - Bolus Dose Volume Units
 */
export const RXV_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.6",
  version: "2.8",
  description: "Bolus Dose Volume Units",
  type: "Field",
  item: 3323,
  table: "HL79999",
  longName: "HL7Bolus Dose Volume Units"
});

/**
 * RXV.7 - PCA Type
 */
export const RXV_7 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXV.7",
  version: "2.8",
  description: "PCA Type",
  type: "Field",
  item: 3324,
  table: "HL70918",
  longName: "HL7PCA Type",
  length: 2
});

/**
 * RXV.8 - PCA Dose Amount
 */
export const RXV_8 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.8",
  version: "2.8",
  description: "PCA Dose Amount",
  type: "Field",
  item: 3325,
  table: "",
  longName: "HL7PCA Dose Amount"
});

/**
 * RXV.9 - PCA Dose Amount Units
 */
export const RXV_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.9",
  version: "2.8",
  description: "PCA Dose Amount Units",
  type: "Field",
  item: 3326,
  table: "HL79999",
  longName: "HL7PCA Dose Amount Units"
});

/**
 * RXV.10 - PCA Dose Amount Volume
 */
export const RXV_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.10",
  version: "2.8",
  description: "PCA Dose Amount Volume",
  type: "Field",
  item: 3327,
  table: "",
  longName: "HL7PCA Dose Amount Volume"
});

/**
 * RXV.11 - PCA Dose Amount Volume Units
 */
export const RXV_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.11",
  version: "2.8",
  description: "PCA Dose Amount Volume Units",
  type: "Field",
  item: 3328,
  table: "HL79999",
  longName: "HL7PCA Dose Amount Volume Units"
});

/**
 * RXV.12 - Max Dose Amount
 */
export const RXV_12 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.12",
  version: "2.8",
  description: "Max Dose Amount",
  type: "Field",
  item: 3329,
  table: "",
  longName: "HL7Max Dose Amount"
});

/**
 * RXV.13 - Max Dose Amount Units
 */
export const RXV_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.13",
  version: "2.8",
  description: "Max Dose Amount Units",
  type: "Field",
  item: 3330,
  table: "HL79999",
  longName: "HL7Max Dose Amount Units"
});

/**
 * RXV.14 - Max Dose Amount Volume
 */
export const RXV_14 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.14",
  version: "2.8",
  description: "Max Dose Amount Volume",
  type: "Field",
  item: 3331,
  table: "",
  longName: "HL7Max Dose Amount Volume"
});

/**
 * RXV.15 - Max Dose Amount Volume Units
 */
export const RXV_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.15",
  version: "2.8",
  description: "Max Dose Amount Volume Units",
  type: "Field",
  item: 3332,
  table: "HL79999",
  longName: "HL7Max Dose Amount Volume Units"
});

/**
 * RXV.16 - Max Dose per Time
 */
export const RXV_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXV.16",
  version: "2.8",
  description: "Max Dose per Time",
  type: "Field",
  item: 3333,
  table: "",
  longName: "HL7Max Dose per Time"
});

/**
 * RXV.17 - Lockout Interval
 */
export const RXV_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXV.17",
  version: "2.8",
  description: "Lockout Interval",
  type: "Field",
  item: 3334,
  table: "",
  longName: "HL7Lockout Interval"
});

/**
 * RXV.18 - Syringe Manufacturer
 */
export const RXV_18 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.18",
  version: "2.8",
  description: "Syringe Manufacturer",
  type: "Field",
  item: 3339,
  table: "",
  longName: "HL7Syringe Manufacturer"
});

/**
 * RXV.19 - Syringe Model Number
 */
export const RXV_19 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.19",
  version: "2.8",
  description: "Syringe Model Number",
  type: "Field",
  item: 3385,
  table: "",
  longName: "HL7Syringe Model Number"
});

/**
 * RXV.20 - Syringe Size
 */
export const RXV_20 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXV.20",
  version: "2.8",
  description: "Syringe Size",
  type: "Field",
  item: 3386,
  table: "",
  longName: "HL7Syringe Size"
});

/**
 * RXV.21 - Syringe Size Units
 */
export const RXV_21 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXV.21",
  version: "2.8",
  description: "Syringe Size Units",
  type: "Field",
  item: 3431,
  table: "",
  longName: "HL7Syringe Size Units"
});

/**
 * RXV.22 - Action Code
 */
export const RXV_22 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXV.22",
  version: "2.8",
  description: "Action Code",
  type: "Field",
  item: 816,
  table: "HL70206",
  longName: "HL7Action Code"
});
