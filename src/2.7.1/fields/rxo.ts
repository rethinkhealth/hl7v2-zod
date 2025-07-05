import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 RXO Fields
 *
 * HL7 v2.7 RXO field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXO.1 - Requested Give Code
 */
export const RXO_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.1",
  version: "2.7",
  description: "Requested Give Code",
  type: "Field",
  item: 292,
  table: "HL79999",
  longName: "HL7Requested Give Code"
});

/**
 * RXO.2 - Requested Give Amount - Minimum
 */
export const RXO_2 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.2",
  version: "2.7",
  description: "Requested Give Amount - Minimum",
  type: "Field",
  item: 293,
  table: "",
  longName: "HL7Requested Give Amount - Minimum"
});

/**
 * RXO.3 - Requested Give Amount - Maximum
 */
export const RXO_3 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.3",
  version: "2.7",
  description: "Requested Give Amount - Maximum",
  type: "Field",
  item: 294,
  table: "",
  longName: "HL7Requested Give Amount - Maximum"
});

/**
 * RXO.4 - Requested Give Units
 */
export const RXO_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.4",
  version: "2.7",
  description: "Requested Give Units",
  type: "Field",
  item: 295,
  table: "HL79999",
  longName: "HL7Requested Give Units"
});

/**
 * RXO.5 - Requested Dosage Form
 */
export const RXO_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.5",
  version: "2.7",
  description: "Requested Dosage Form",
  type: "Field",
  item: 296,
  table: "HL79999",
  longName: "HL7Requested Dosage Form"
});

/**
 * RXO.6 - Provider's Pharmacy/Treatment Instructions
 */
export const RXO_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.6",
  version: "2.7",
  description: "Provider's Pharmacy/Treatment Instructions",
  type: "Field",
  item: 297,
  table: "HL79999",
  longName: "HL7Provider's Pharmacy/Treatment Instructions"
});

/**
 * RXO.7 - Provider's Administration Instructions
 */
export const RXO_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.7",
  version: "2.7",
  description: "Provider's Administration Instructions",
  type: "Field",
  item: 298,
  table: "HL79999",
  longName: "HL7Provider's Administration Instructions"
});

/**
 * RXO.8 - Deliver-To Location
 */
export const RXO_8 = datatypes.LA1.register(hl7v2Metadata, {
  title: "RXO.8",
  version: "2.7",
  description: "Deliver-To Location",
  type: "Field",
  item: 299,
  table: "",
  longName: "HL7Deliver-To Location"
});

/**
 * RXO.9 - Allow Substitutions
 */
export const RXO_9 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXO.9",
  version: "2.7",
  description: "Allow Substitutions",
  type: "Field",
  item: 300,
  table: "HL70161",
  longName: "HL7Allow Substitutions",
  length: 1
});

/**
 * RXO.10 - Requested Dispense Code
 */
export const RXO_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.10",
  version: "2.7",
  description: "Requested Dispense Code",
  type: "Field",
  item: 301,
  table: "HL79999",
  longName: "HL7Requested Dispense Code"
});

/**
 * RXO.11 - Requested Dispense Amount
 */
export const RXO_11 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.11",
  version: "2.7",
  description: "Requested Dispense Amount",
  type: "Field",
  item: 302,
  table: "",
  longName: "HL7Requested Dispense Amount"
});

/**
 * RXO.12 - Requested Dispense Units
 */
export const RXO_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.12",
  version: "2.7",
  description: "Requested Dispense Units",
  type: "Field",
  item: 303,
  table: "HL79999",
  longName: "HL7Requested Dispense Units"
});

/**
 * RXO.13 - Number Of Refills
 */
export const RXO_13 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.13",
  version: "2.7",
  description: "Number Of Refills",
  type: "Field",
  item: 304,
  table: "",
  longName: "HL7Number Of Refills"
});

/**
 * RXO.14 - Ordering Provider's DEA Number
 */
export const RXO_14 = datatypes.XCN.register(hl7v2Metadata, {
  title: "RXO.14",
  version: "2.7",
  description: "Ordering Provider's DEA Number",
  type: "Field",
  item: 305,
  table: "",
  longName: "HL7Ordering Provider's DEA Number"
});

/**
 * RXO.15 - Pharmacist/Treatment Supplier's Verifier ID
 */
export const RXO_15 = datatypes.XCN.register(hl7v2Metadata, {
  title: "RXO.15",
  version: "2.7",
  description: "Pharmacist/Treatment Supplier's Verifier ID",
  type: "Field",
  item: 306,
  table: "",
  longName: "HL7Pharmacist/Treatment Supplier's Verifier ID"
});

/**
 * RXO.16 - Needs Human Review
 */
export const RXO_16 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXO.16",
  version: "2.7",
  description: "Needs Human Review",
  type: "Field",
  item: 307,
  table: "HL70136",
  longName: "HL7Needs Human Review",
  length: 1
});

/**
 * RXO.17 - Requested Give Per (Time Unit)
 */
export const RXO_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.17",
  version: "2.7",
  description: "Requested Give Per (Time Unit)",
  type: "Field",
  item: 308,
  table: "",
  longName: "HL7Requested Give Per (Time Unit)"
});

/**
 * RXO.18 - Requested Give Strength
 */
export const RXO_18 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.18",
  version: "2.7",
  description: "Requested Give Strength",
  type: "Field",
  item: 1121,
  table: "",
  longName: "HL7Requested Give Strength"
});

/**
 * RXO.19 - Requested Give Strength Units
 */
export const RXO_19 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.19",
  version: "2.7",
  description: "Requested Give Strength Units",
  type: "Field",
  item: 1122,
  table: "HL79999",
  longName: "HL7Requested Give Strength Units"
});

/**
 * RXO.20 - Indication
 */
export const RXO_20 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.20",
  version: "2.7",
  description: "Indication",
  type: "Field",
  item: 1123,
  table: "HL79999",
  longName: "HL7Indication"
});

/**
 * RXO.21 - Requested Give Rate Amount
 */
export const RXO_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.21",
  version: "2.7",
  description: "Requested Give Rate Amount",
  type: "Field",
  item: 1218,
  table: "",
  longName: "HL7Requested Give Rate Amount"
});

/**
 * RXO.22 - Requested Give Rate Units
 */
export const RXO_22 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.22",
  version: "2.7",
  description: "Requested Give Rate Units",
  type: "Field",
  item: 1219,
  table: "HL79999",
  longName: "HL7Requested Give Rate Units"
});

/**
 * RXO.23 - Total Daily Dose
 */
export const RXO_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.23",
  version: "2.7",
  description: "Total Daily Dose",
  type: "Field",
  item: 329,
  table: "",
  longName: "HL7Total Daily Dose"
});

/**
 * RXO.24 - Supplementary Code
 */
export const RXO_24 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.24",
  version: "2.7",
  description: "Supplementary Code",
  type: "Field",
  item: 1476,
  table: "HL79999",
  longName: "HL7Supplementary Code"
});

/**
 * RXO.25 - Requested Drug Strength Volume
 */
export const RXO_25 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.25",
  version: "2.7",
  description: "Requested Drug Strength Volume",
  type: "Field",
  item: 1666,
  table: "",
  longName: "HL7Requested Drug Strength Volume"
});

/**
 * RXO.26 - Requested Drug Strength Volume Units
 */
export const RXO_26 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.26",
  version: "2.7",
  description: "Requested Drug Strength Volume Units",
  type: "Field",
  item: 1667,
  table: "HL79999",
  longName: "HL7Requested Drug Strength Volume Units"
});

/**
 * RXO.27 - Pharmacy Order Type
 */
export const RXO_27 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXO.27",
  version: "2.7",
  description: "Pharmacy Order Type",
  type: "Field",
  item: 1668,
  table: "HL70480",
  longName: "HL7Pharmacy Order Type",
  length: 1
});

/**
 * RXO.28 - Dispensing Interval
 */
export const RXO_28 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.28",
  version: "2.7",
  description: "Dispensing Interval",
  type: "Field",
  item: 1669,
  table: "",
  longName: "HL7Dispensing Interval"
});

/**
 * RXO.29 - Medication Instance Identifier
 */
export const RXO_29 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.29",
  version: "2.7",
  description: "Medication Instance Identifier",
  type: "Field",
  item: 2149,
  table: "",
  longName: "HL7Medication Instance Identifier"
});

/**
 * RXO.30 - Segment Instance Identifier
 */
export const RXO_30 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.30",
  version: "2.7",
  description: "Segment Instance Identifier",
  type: "Field",
  item: 2150,
  table: "",
  longName: "HL7Segment Instance Identifier"
});

/**
 * RXO.31 - Mood Code
 */
export const RXO_31 = datatypes.CNE.register(hl7v2Metadata, {
  title: "RXO.31",
  version: "2.7",
  description: "Mood Code",
  type: "Field",
  item: 2151,
  table: "HL70725",
  longName: "HL7Mood Code"
});

/**
 * RXO.32 - Dispensing Pharmacy
 */
export const RXO_32 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.32",
  version: "2.7",
  description: "Dispensing Pharmacy",
  type: "Field",
  item: 1681,
  table: "HL79999",
  longName: "HL7Dispensing Pharmacy"
});

/**
 * RXO.33 - Dispensing Pharmacy Address
 */
export const RXO_33 = datatypes.XAD.register(hl7v2Metadata, {
  title: "RXO.33",
  version: "2.7",
  description: "Dispensing Pharmacy Address",
  type: "Field",
  item: 1682,
  table: "",
  longName: "HL7Dispensing Pharmacy Address"
});

/**
 * RXO.34 - Deliver-to Patient Location
 */
export const RXO_34 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.34",
  version: "2.7",
  description: "Deliver-to Patient Location",
  type: "Field",
  item: 1683,
  table: "",
  longName: "HL7Deliver-to Patient Location"
});

/**
 * RXO.35 - Deliver-to Address
 */
export const RXO_35 = datatypes.XAD.register(hl7v2Metadata, {
  title: "RXO.35",
  version: "2.7",
  description: "Deliver-to Address",
  type: "Field",
  item: 1684,
  table: "",
  longName: "HL7Deliver-to Address"
});

/**
 * RXO.36 - Pharmacy Phone Number
 */
export const RXO_36 = datatypes.XTN.register(hl7v2Metadata, {
  title: "RXO.36",
  version: "2.7",
  description: "Pharmacy Phone Number",
  type: "Field",
  item: 2309,
  table: "",
  longName: "HL7Pharmacy Phone Number"
});
