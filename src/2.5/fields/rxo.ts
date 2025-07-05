import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 RXO Fields
 *
 * HL7 v2.5 RXO field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXO.1 - Requested Give Code
 */
export const RXO_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.1",
  version: "2.5",
  description: "Requested Give Code",
  type: "Field",
  item: 292,
  table: "",
  longName: "HL7Requested Give Code",
  length: 250
});

/**
 * RXO.2 - Requested Give Amount - Minimum
 */
export const RXO_2 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.2",
  version: "2.5",
  description: "Requested Give Amount - Minimum",
  type: "Field",
  item: 293,
  table: "",
  longName: "HL7Requested Give Amount - Minimum",
  length: 20
});

/**
 * RXO.3 - Requested Give Amount - Maximum
 */
export const RXO_3 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.3",
  version: "2.5",
  description: "Requested Give Amount - Maximum",
  type: "Field",
  item: 294,
  table: "",
  longName: "HL7Requested Give Amount - Maximum",
  length: 20
});

/**
 * RXO.4 - Requested Give Units
 */
export const RXO_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.4",
  version: "2.5",
  description: "Requested Give Units",
  type: "Field",
  item: 295,
  table: "",
  longName: "HL7Requested Give Units",
  length: 250
});

/**
 * RXO.5 - Requested Dosage Form
 */
export const RXO_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.5",
  version: "2.5",
  description: "Requested Dosage Form",
  type: "Field",
  item: 296,
  table: "",
  longName: "HL7Requested Dosage Form",
  length: 250
});

/**
 * RXO.6 - Provider's Pharmacy/Treatment Instructions
 */
export const RXO_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.6",
  version: "2.5",
  description: "Provider's Pharmacy/Treatment Instructions",
  type: "Field",
  item: 297,
  table: "",
  longName: "HL7Provider's Pharmacy/Treatment Instructions",
  length: 250
});

/**
 * RXO.7 - Provider's Administration Instructions
 */
export const RXO_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.7",
  version: "2.5",
  description: "Provider's Administration Instructions",
  type: "Field",
  item: 298,
  table: "",
  longName: "HL7Provider's Administration Instructions",
  length: 250
});

/**
 * RXO.8 - Deliver-To Location
 */
export const RXO_8 = datatypes.LA1.register(hl7v2Metadata, {
  title: "RXO.8",
  version: "2.5",
  description: "Deliver-To Location",
  type: "Field",
  item: 299,
  table: "",
  longName: "HL7Deliver-To Location",
  length: 200
});

/**
 * RXO.9 - Allow Substitutions
 */
export const RXO_9 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXO.9",
  version: "2.5",
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
export const RXO_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.10",
  version: "2.5",
  description: "Requested Dispense Code",
  type: "Field",
  item: 301,
  table: "",
  longName: "HL7Requested Dispense Code",
  length: 250
});

/**
 * RXO.11 - Requested Dispense Amount
 */
export const RXO_11 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.11",
  version: "2.5",
  description: "Requested Dispense Amount",
  type: "Field",
  item: 302,
  table: "",
  longName: "HL7Requested Dispense Amount",
  length: 20
});

/**
 * RXO.12 - Requested Dispense Units
 */
export const RXO_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.12",
  version: "2.5",
  description: "Requested Dispense Units",
  type: "Field",
  item: 303,
  table: "",
  longName: "HL7Requested Dispense Units",
  length: 250
});

/**
 * RXO.13 - Number Of Refills
 */
export const RXO_13 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.13",
  version: "2.5",
  description: "Number Of Refills",
  type: "Field",
  item: 304,
  table: "",
  longName: "HL7Number Of Refills",
  length: 3
});

/**
 * RXO.14 - Ordering Provider's DEA Number
 */
export const RXO_14 = datatypes.XCN.register(hl7v2Metadata, {
  title: "RXO.14",
  version: "2.5",
  description: "Ordering Provider's DEA Number",
  type: "Field",
  item: 305,
  table: "",
  longName: "HL7Ordering Provider's DEA Number",
  length: 250
});

/**
 * RXO.15 - Pharmacist/Treatment Supplier's Verifier ID
 */
export const RXO_15 = datatypes.XCN.register(hl7v2Metadata, {
  title: "RXO.15",
  version: "2.5",
  description: "Pharmacist/Treatment Supplier's Verifier ID",
  type: "Field",
  item: 306,
  table: "",
  longName: "HL7Pharmacist/Treatment Supplier's Verifier ID",
  length: 250
});

/**
 * RXO.16 - Needs Human Review
 */
export const RXO_16 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXO.16",
  version: "2.5",
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
  version: "2.5",
  description: "Requested Give Per (Time Unit)",
  type: "Field",
  item: 308,
  table: "",
  longName: "HL7Requested Give Per (Time Unit)",
  length: 20
});

/**
 * RXO.18 - Requested Give Strength
 */
export const RXO_18 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.18",
  version: "2.5",
  description: "Requested Give Strength",
  type: "Field",
  item: 1121,
  table: "",
  longName: "HL7Requested Give Strength",
  length: 20
});

/**
 * RXO.19 - Requested Give Strength Units
 */
export const RXO_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.19",
  version: "2.5",
  description: "Requested Give Strength Units",
  type: "Field",
  item: 1122,
  table: "",
  longName: "HL7Requested Give Strength Units",
  length: 250
});

/**
 * RXO.20 - Indication
 */
export const RXO_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.20",
  version: "2.5",
  description: "Indication",
  type: "Field",
  item: 1123,
  table: "",
  longName: "HL7Indication",
  length: 250
});

/**
 * RXO.21 - Requested Give Rate Amount
 */
export const RXO_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.21",
  version: "2.5",
  description: "Requested Give Rate Amount",
  type: "Field",
  item: 1218,
  table: "",
  longName: "HL7Requested Give Rate Amount",
  length: 6
});

/**
 * RXO.22 - Requested Give Rate Units
 */
export const RXO_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.22",
  version: "2.5",
  description: "Requested Give Rate Units",
  type: "Field",
  item: 1219,
  table: "",
  longName: "HL7Requested Give Rate Units",
  length: 250
});

/**
 * RXO.23 - Total Daily Dose
 */
export const RXO_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.23",
  version: "2.5",
  description: "Total Daily Dose",
  type: "Field",
  item: 329,
  table: "",
  longName: "HL7Total Daily Dose",
  length: 10
});

/**
 * RXO.24 - Supplementary Code
 */
export const RXO_24 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXO.24",
  version: "2.5",
  description: "Supplementary Code",
  type: "Field",
  item: 1476,
  table: "",
  longName: "HL7Supplementary Code",
  length: 250
});

/**
 * RXO.25 - Requested Drug Strength Volume
 */
export const RXO_25 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXO.25",
  version: "2.5",
  description: "Requested Drug Strength Volume",
  type: "Field",
  item: 1666,
  table: "",
  longName: "HL7Requested Drug Strength Volume",
  length: 5
});

/**
 * RXO.26 - Requested Drug Strength Volume Units
 */
export const RXO_26 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXO.26",
  version: "2.5",
  description: "Requested Drug Strength Volume Units",
  type: "Field",
  item: 1667,
  table: "",
  longName: "HL7Requested Drug Strength Volume Units",
  length: 250
});

/**
 * RXO.27 - Pharmacy Order Type
 */
export const RXO_27 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXO.27",
  version: "2.5",
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
  version: "2.5",
  description: "Dispensing Interval",
  type: "Field",
  item: 1669,
  table: "",
  longName: "HL7Dispensing Interval",
  length: 20
});
