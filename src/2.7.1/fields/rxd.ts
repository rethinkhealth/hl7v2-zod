import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 RXD Fields
 *
 * HL7 v2.7 RXD field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXD.1 - Dispense Sub-ID Counter
 */
export const RXD_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXD.1",
  version: "2.7",
  description: "Dispense Sub-ID Counter",
  type: "Field",
  item: 334,
  table: "",
  longName: "HL7Dispense Sub-ID Counter"
});

/**
 * RXD.2 - Dispense/Give Code
 */
export const RXD_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.2",
  version: "2.7",
  description: "Dispense/Give Code",
  type: "Field",
  item: 335,
  table: "HL70292",
  longName: "HL7Dispense/Give Code"
});

/**
 * RXD.3 - Date/Time Dispensed
 */
export const RXD_3 = datatypes.DTM.register(hl7v2Metadata, {
  title: "RXD.3",
  version: "2.7",
  description: "Date/Time Dispensed",
  type: "Field",
  item: 336,
  table: "",
  longName: "HL7Date/Time Dispensed"
});

/**
 * RXD.4 - Actual Dispense Amount
 */
export const RXD_4 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXD.4",
  version: "2.7",
  description: "Actual Dispense Amount",
  type: "Field",
  item: 337,
  table: "",
  longName: "HL7Actual Dispense Amount"
});

/**
 * RXD.5 - Actual Dispense Units
 */
export const RXD_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.5",
  version: "2.7",
  description: "Actual Dispense Units",
  type: "Field",
  item: 338,
  table: "HL79999",
  longName: "HL7Actual Dispense Units"
});

/**
 * RXD.6 - Actual Dosage Form
 */
export const RXD_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.6",
  version: "2.7",
  description: "Actual Dosage Form",
  type: "Field",
  item: 339,
  table: "HL79999",
  longName: "HL7Actual Dosage Form"
});

/**
 * RXD.7 - Prescription Number
 */
export const RXD_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXD.7",
  version: "2.7",
  description: "Prescription Number",
  type: "Field",
  item: 325,
  table: "",
  longName: "HL7Prescription Number"
});

/**
 * RXD.8 - Number of Refills Remaining
 */
export const RXD_8 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXD.8",
  version: "2.7",
  description: "Number of Refills Remaining",
  type: "Field",
  item: 326,
  table: "",
  longName: "HL7Number of Refills Remaining"
});

/**
 * RXD.9 - Dispense Notes
 */
export const RXD_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXD.9",
  version: "2.7",
  description: "Dispense Notes",
  type: "Field",
  item: 340,
  table: "",
  longName: "HL7Dispense Notes"
});

/**
 * RXD.10 - Dispensing Provider
 */
export const RXD_10 = datatypes.XCN.register(hl7v2Metadata, {
  title: "RXD.10",
  version: "2.7",
  description: "Dispensing Provider",
  type: "Field",
  item: 341,
  table: "",
  longName: "HL7Dispensing Provider"
});

/**
 * RXD.11 - Substitution Status
 */
export const RXD_11 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXD.11",
  version: "2.7",
  description: "Substitution Status",
  type: "Field",
  item: 322,
  table: "HL70167",
  longName: "HL7Substitution Status",
  length: 1
});

/**
 * RXD.12 - Total Daily Dose
 */
export const RXD_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXD.12",
  version: "2.7",
  description: "Total Daily Dose",
  type: "Field",
  item: 329,
  table: "",
  longName: "HL7Total Daily Dose"
});

/**
 * RXD.13 - Dispense-to Location
 */
export const RXD_13 = datatypes.LA2.register(hl7v2Metadata, {
  title: "RXD.13",
  version: "2.7",
  description: "Dispense-to Location",
  type: "Field",
  item: 1303,
  table: "",
  longName: "HL7Dispense-to Location"
});

/**
 * RXD.14 - Needs Human Review
 */
export const RXD_14 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXD.14",
  version: "2.7",
  description: "Needs Human Review",
  type: "Field",
  item: 307,
  table: "HL70136",
  longName: "HL7Needs Human Review",
  length: 1
});

/**
 * RXD.15 - Pharmacy/Treatment Supplier's Special Dispensing Instructions
 */
export const RXD_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.15",
  version: "2.7",
  description: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
  type: "Field",
  item: 330,
  table: "HL79999",
  longName: "HL7Pharmacy/Treatment Supplier's Special Dispensing Instructions"
});

/**
 * RXD.16 - Actual Strength
 */
export const RXD_16 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXD.16",
  version: "2.7",
  description: "Actual Strength",
  type: "Field",
  item: 1132,
  table: "",
  longName: "HL7Actual Strength"
});

/**
 * RXD.17 - Actual Strength Unit
 */
export const RXD_17 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.17",
  version: "2.7",
  description: "Actual Strength Unit",
  type: "Field",
  item: 1133,
  table: "HL79999",
  longName: "HL7Actual Strength Unit"
});

/**
 * RXD.18 - Substance Lot Number
 */
export const RXD_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "RXD.18",
  version: "2.7",
  description: "Substance Lot Number",
  type: "Field",
  item: 1129,
  table: "",
  longName: "HL7Substance Lot Number"
});

/**
 * RXD.19 - Substance Expiration Date
 */
export const RXD_19 = datatypes.DTM.register(hl7v2Metadata, {
  title: "RXD.19",
  version: "2.7",
  description: "Substance Expiration Date",
  type: "Field",
  item: 1130,
  table: "",
  longName: "HL7Substance Expiration Date"
});

/**
 * RXD.20 - Substance Manufacturer Name
 */
export const RXD_20 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.20",
  version: "2.7",
  description: "Substance Manufacturer Name",
  type: "Field",
  item: 1131,
  table: "HL70227",
  longName: "HL7Substance Manufacturer Name"
});

/**
 * RXD.21 - Indication
 */
export const RXD_21 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.21",
  version: "2.7",
  description: "Indication",
  type: "Field",
  item: 1123,
  table: "HL79999",
  longName: "HL7Indication"
});

/**
 * RXD.22 - Dispense Package Size
 */
export const RXD_22 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXD.22",
  version: "2.7",
  description: "Dispense Package Size",
  type: "Field",
  item: 1220,
  table: "",
  longName: "HL7Dispense Package Size"
});

/**
 * RXD.23 - Dispense Package Size Unit
 */
export const RXD_23 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.23",
  version: "2.7",
  description: "Dispense Package Size Unit",
  type: "Field",
  item: 1221,
  table: "HL79999",
  longName: "HL7Dispense Package Size Unit"
});

/**
 * RXD.24 - Dispense Package Method
 */
export const RXD_24 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXD.24",
  version: "2.7",
  description: "Dispense Package Method",
  type: "Field",
  item: 1222,
  table: "HL70321",
  longName: "HL7Dispense Package Method",
  length: 2
});

/**
 * RXD.25 - Supplementary Code
 */
export const RXD_25 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.25",
  version: "2.7",
  description: "Supplementary Code",
  type: "Field",
  item: 1476,
  table: "HL79999",
  longName: "HL7Supplementary Code"
});

/**
 * RXD.26 - Initiating Location
 */
export const RXD_26 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.26",
  version: "2.7",
  description: "Initiating Location",
  type: "Field",
  item: 1477,
  table: "HL79999",
  longName: "HL7Initiating Location"
});

/**
 * RXD.27 - Packaging/Assembly Location
 */
export const RXD_27 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.27",
  version: "2.7",
  description: "Packaging/Assembly Location",
  type: "Field",
  item: 1478,
  table: "HL79999",
  longName: "HL7Packaging/Assembly Location"
});

/**
 * RXD.28 - Actual Drug Strength Volume
 */
export const RXD_28 = datatypes.NM.register(hl7v2Metadata, {
  title: "RXD.28",
  version: "2.7",
  description: "Actual Drug Strength Volume",
  type: "Field",
  item: 1686,
  table: "",
  longName: "HL7Actual Drug Strength Volume"
});

/**
 * RXD.29 - Actual Drug Strength Volume Units
 */
export const RXD_29 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.29",
  version: "2.7",
  description: "Actual Drug Strength Volume Units",
  type: "Field",
  item: 1687,
  table: "HL79999",
  longName: "HL7Actual Drug Strength Volume Units"
});

/**
 * RXD.30 - Dispense to Pharmacy
 */
export const RXD_30 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.30",
  version: "2.7",
  description: "Dispense to Pharmacy",
  type: "Field",
  item: 1688,
  table: "HL79999",
  longName: "HL7Dispense to Pharmacy"
});

/**
 * RXD.31 - Dispense to Pharmacy Address
 */
export const RXD_31 = datatypes.XAD.register(hl7v2Metadata, {
  title: "RXD.31",
  version: "2.7",
  description: "Dispense to Pharmacy Address",
  type: "Field",
  item: 1689,
  table: "",
  longName: "HL7Dispense to Pharmacy Address"
});

/**
 * RXD.32 - Pharmacy Order Type
 */
export const RXD_32 = datatypes.ID.register(hl7v2Metadata, {
  title: "RXD.32",
  version: "2.7",
  description: "Pharmacy Order Type",
  type: "Field",
  item: 1690,
  table: "HL70480",
  longName: "HL7Pharmacy Order Type",
  length: 1
});

/**
 * RXD.33 - Dispense Type
 */
export const RXD_33 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXD.33",
  version: "2.7",
  description: "Dispense Type",
  type: "Field",
  item: 1691,
  table: "HL70484",
  longName: "HL7Dispense Type"
});

/**
 * RXD.34 - Pharmacy Phone Number
 */
export const RXD_34 = datatypes.XTN.register(hl7v2Metadata, {
  title: "RXD.34",
  version: "2.7",
  description: "Pharmacy Phone Number",
  type: "Field",
  item: 2311,
  table: "",
  longName: "HL7Pharmacy Phone Number"
});
