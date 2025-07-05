
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 RXE Fields
 * 
 * HL7 v2.6 RXE field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXE.1 - Quantity/Timing
 */
export const RXE_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXE.1",
  "version": "2.6",
  "description": "Quantity/Timing",
  "type": "Field",
  "item": 221,
  "table": "",
  "longName": "HL7Quantity/Timing"
});

/**
 * RXE.2 - Give Code
 */
export const RXE_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.2",
  "version": "2.6",
  "description": "Give Code",
  "type": "Field",
  "item": 317,
  "table": "HL70292",
  "longName": "HL7Give Code",
  "length": 250
});

/**
 * RXE.3 - Give Amount - Minimum
 */
export const RXE_3 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.3",
  "version": "2.6",
  "description": "Give Amount - Minimum",
  "type": "Field",
  "item": 318,
  "table": "",
  "longName": "HL7Give Amount - Minimum",
  "length": 20
});

/**
 * RXE.4 - Give Amount - Maximum
 */
export const RXE_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.4",
  "version": "2.6",
  "description": "Give Amount - Maximum",
  "type": "Field",
  "item": 319,
  "table": "",
  "longName": "HL7Give Amount - Maximum",
  "length": 20
});

/**
 * RXE.5 - Give Units
 */
export const RXE_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.5",
  "version": "2.6",
  "description": "Give Units",
  "type": "Field",
  "item": 320,
  "table": "HL79999",
  "longName": "HL7Give Units",
  "length": 250
});

/**
 * RXE.6 - Give Dosage Form
 */
export const RXE_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.6",
  "version": "2.6",
  "description": "Give Dosage Form",
  "type": "Field",
  "item": 321,
  "table": "HL79999",
  "longName": "HL7Give Dosage Form",
  "length": 250
});

/**
 * RXE.7 - Provider's Administration Instructions
 */
export const RXE_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.7",
  "version": "2.6",
  "description": "Provider's Administration Instructions",
  "type": "Field",
  "item": 298,
  "table": "HL79999",
  "longName": "HL7Provider's Administration Instructions",
  "length": 250
});

/**
 * RXE.8 - Deliver-To Location
 */
export const RXE_8 = datatypes.LA1.register(hl7v2Metadata, {
  "title": "RXE.8",
  "version": "2.6",
  "description": "Deliver-To Location",
  "type": "Field",
  "item": 299,
  "table": "",
  "longName": "HL7Deliver-To Location"
});

/**
 * RXE.9 - Substitution Status
 */
export const RXE_9 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXE.9",
  "version": "2.6",
  "description": "Substitution Status",
  "type": "Field",
  "item": 322,
  "table": "HL70167",
  "longName": "HL7Substitution Status",
  "length": 1
});

/**
 * RXE.10 - Dispense Amount
 */
export const RXE_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.10",
  "version": "2.6",
  "description": "Dispense Amount",
  "type": "Field",
  "item": 323,
  "table": "",
  "longName": "HL7Dispense Amount",
  "length": 20
});

/**
 * RXE.11 - Dispense Units
 */
export const RXE_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.11",
  "version": "2.6",
  "description": "Dispense Units",
  "type": "Field",
  "item": 324,
  "table": "HL79999",
  "longName": "HL7Dispense Units",
  "length": 250
});

/**
 * RXE.12 - Number Of Refills
 */
export const RXE_12 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.12",
  "version": "2.6",
  "description": "Number Of Refills",
  "type": "Field",
  "item": 304,
  "table": "",
  "longName": "HL7Number Of Refills",
  "length": 3
});

/**
 * RXE.13 - Ordering Provider's DEA Number
 */
export const RXE_13 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "RXE.13",
  "version": "2.6",
  "description": "Ordering Provider's DEA Number",
  "type": "Field",
  "item": 305,
  "table": "",
  "longName": "HL7Ordering Provider's DEA Number",
  "length": 250
});

/**
 * RXE.14 - Pharmacist/Treatment Supplier's Verifier ID
 */
export const RXE_14 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "RXE.14",
  "version": "2.6",
  "description": "Pharmacist/Treatment Supplier's Verifier ID",
  "type": "Field",
  "item": 306,
  "table": "",
  "longName": "HL7Pharmacist/Treatment Supplier's Verifier ID",
  "length": 250
});

/**
 * RXE.15 - Prescription Number
 */
export const RXE_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXE.15",
  "version": "2.6",
  "description": "Prescription Number",
  "type": "Field",
  "item": 325,
  "table": "",
  "longName": "HL7Prescription Number",
  "length": 20
});

/**
 * RXE.16 - Number of Refills Remaining
 */
export const RXE_16 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.16",
  "version": "2.6",
  "description": "Number of Refills Remaining",
  "type": "Field",
  "item": 326,
  "table": "",
  "longName": "HL7Number of Refills Remaining",
  "length": 20
});

/**
 * RXE.17 - Number of Refills/Doses Dispensed
 */
export const RXE_17 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.17",
  "version": "2.6",
  "description": "Number of Refills/Doses Dispensed",
  "type": "Field",
  "item": 327,
  "table": "",
  "longName": "HL7Number of Refills/Doses Dispensed",
  "length": 20
});

/**
 * RXE.18 - D/T of Most Recent Refill or Dose Dispensed
 */
export const RXE_18 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXE.18",
  "version": "2.6",
  "description": "D/T of Most Recent Refill or Dose Dispensed",
  "type": "Field",
  "item": 328,
  "table": "",
  "longName": "HL7D/T of Most Recent Refill or Dose Dispensed",
  "length": 24
});

/**
 * RXE.19 - Total Daily Dose
 */
export const RXE_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXE.19",
  "version": "2.6",
  "description": "Total Daily Dose",
  "type": "Field",
  "item": 329,
  "table": "",
  "longName": "HL7Total Daily Dose",
  "length": 10
});

/**
 * RXE.20 - Needs Human Review
 */
export const RXE_20 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXE.20",
  "version": "2.6",
  "description": "Needs Human Review",
  "type": "Field",
  "item": 307,
  "table": "HL70136",
  "longName": "HL7Needs Human Review",
  "length": 1
});

/**
 * RXE.21 - Pharmacy/Treatment Supplier's Special Dispensing Instructions
 */
export const RXE_21 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.21",
  "version": "2.6",
  "description": "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
  "type": "Field",
  "item": 330,
  "table": "HL79999",
  "longName": "HL7Pharmacy/Treatment Supplier's Special Dispensing Instructions",
  "length": 250
});

/**
 * RXE.22 - Give Per (Time Unit)
 */
export const RXE_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXE.22",
  "version": "2.6",
  "description": "Give Per (Time Unit)",
  "type": "Field",
  "item": 331,
  "table": "",
  "longName": "HL7Give Per (Time Unit)",
  "length": 20
});

/**
 * RXE.23 - Give Rate Amount
 */
export const RXE_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXE.23",
  "version": "2.6",
  "description": "Give Rate Amount",
  "type": "Field",
  "item": 332,
  "table": "",
  "longName": "HL7Give Rate Amount",
  "length": 6
});

/**
 * RXE.24 - Give Rate Units
 */
export const RXE_24 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.24",
  "version": "2.6",
  "description": "Give Rate Units",
  "type": "Field",
  "item": 333,
  "table": "HL79999",
  "longName": "HL7Give Rate Units",
  "length": 250
});

/**
 * RXE.25 - Give Strength
 */
export const RXE_25 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.25",
  "version": "2.6",
  "description": "Give Strength",
  "type": "Field",
  "item": 1126,
  "table": "",
  "longName": "HL7Give Strength",
  "length": 20
});

/**
 * RXE.26 - Give Strength Units
 */
export const RXE_26 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.26",
  "version": "2.6",
  "description": "Give Strength Units",
  "type": "Field",
  "item": 1127,
  "table": "HL79999",
  "longName": "HL7Give Strength Units",
  "length": 250
});

/**
 * RXE.27 - Give Indication
 */
export const RXE_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.27",
  "version": "2.6",
  "description": "Give Indication",
  "type": "Field",
  "item": 1128,
  "table": "HL79999",
  "longName": "HL7Give Indication",
  "length": 250
});

/**
 * RXE.28 - Dispense Package Size
 */
export const RXE_28 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.28",
  "version": "2.6",
  "description": "Dispense Package Size",
  "type": "Field",
  "item": 1220,
  "table": "",
  "longName": "HL7Dispense Package Size",
  "length": 20
});

/**
 * RXE.29 - Dispense Package Size Unit
 */
export const RXE_29 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.29",
  "version": "2.6",
  "description": "Dispense Package Size Unit",
  "type": "Field",
  "item": 1221,
  "table": "HL79999",
  "longName": "HL7Dispense Package Size Unit",
  "length": 250
});

/**
 * RXE.30 - Dispense Package Method
 */
export const RXE_30 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXE.30",
  "version": "2.6",
  "description": "Dispense Package Method",
  "type": "Field",
  "item": 1222,
  "table": "HL70321",
  "longName": "HL7Dispense Package Method",
  "length": 2
});

/**
 * RXE.31 - Supplementary Code
 */
export const RXE_31 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.31",
  "version": "2.6",
  "description": "Supplementary Code",
  "type": "Field",
  "item": 1476,
  "table": "HL79999",
  "longName": "HL7Supplementary Code",
  "length": 250
});

/**
 * RXE.32 - Original Order Date/Time
 */
export const RXE_32 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXE.32",
  "version": "2.6",
  "description": "Original Order Date/Time",
  "type": "Field",
  "item": 1673,
  "table": "",
  "longName": "HL7Original Order Date/Time",
  "length": 24
});

/**
 * RXE.33 - Give Drug Strength Volume
 */
export const RXE_33 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.33",
  "version": "2.6",
  "description": "Give Drug Strength Volume",
  "type": "Field",
  "item": 1674,
  "table": "",
  "longName": "HL7Give Drug Strength Volume",
  "length": 5
});

/**
 * RXE.34 - Give Drug Strength Volume Units
 */
export const RXE_34 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.34",
  "version": "2.6",
  "description": "Give Drug Strength Volume Units",
  "type": "Field",
  "item": 1675,
  "table": "HL79999",
  "longName": "HL7Give Drug Strength Volume Units",
  "length": 250
});

/**
 * RXE.35 - Controlled Substance Schedule
 */
export const RXE_35 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.35",
  "version": "2.6",
  "description": "Controlled Substance Schedule",
  "type": "Field",
  "item": 1676,
  "table": "HL70477",
  "longName": "HL7Controlled Substance Schedule",
  "length": 60
});

/**
 * RXE.36 - Formulary Status
 */
export const RXE_36 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXE.36",
  "version": "2.6",
  "description": "Formulary Status",
  "type": "Field",
  "item": 1677,
  "table": "HL70478",
  "longName": "HL7Formulary Status",
  "length": 1
});

/**
 * RXE.37 - Pharmaceutical Substance Alternative
 */
export const RXE_37 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.37",
  "version": "2.6",
  "description": "Pharmaceutical Substance Alternative",
  "type": "Field",
  "item": 1678,
  "table": "HL79999",
  "longName": "HL7Pharmaceutical Substance Alternative",
  "length": 60
});

/**
 * RXE.38 - Pharmacy of Most Recent Fill
 */
export const RXE_38 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.38",
  "version": "2.6",
  "description": "Pharmacy of Most Recent Fill",
  "type": "Field",
  "item": 1679,
  "table": "HL79999",
  "longName": "HL7Pharmacy of Most Recent Fill",
  "length": 250
});

/**
 * RXE.39 - Initial Dispense Amount
 */
export const RXE_39 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXE.39",
  "version": "2.6",
  "description": "Initial Dispense Amount",
  "type": "Field",
  "item": 1680,
  "table": "",
  "longName": "HL7Initial Dispense Amount",
  "length": 250
});

/**
 * RXE.40 - Dispensing Pharmacy
 */
export const RXE_40 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXE.40",
  "version": "2.6",
  "description": "Dispensing Pharmacy",
  "type": "Field",
  "item": 1681,
  "table": "HL79999",
  "longName": "HL7Dispensing Pharmacy",
  "length": 250
});

/**
 * RXE.41 - Dispensing Pharmacy Address
 */
export const RXE_41 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "RXE.41",
  "version": "2.6",
  "description": "Dispensing Pharmacy Address",
  "type": "Field",
  "item": 1682,
  "table": "",
  "longName": "HL7Dispensing Pharmacy Address",
  "length": 250
});

/**
 * RXE.42 - Deliver-to Patient Location
 */
export const RXE_42 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXE.42",
  "version": "2.6",
  "description": "Deliver-to Patient Location",
  "type": "Field",
  "item": 1683,
  "table": "",
  "longName": "HL7Deliver-to Patient Location",
  "length": 80
});

/**
 * RXE.43 - Deliver-to Address
 */
export const RXE_43 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "RXE.43",
  "version": "2.6",
  "description": "Deliver-to Address",
  "type": "Field",
  "item": 1684,
  "table": "",
  "longName": "HL7Deliver-to Address",
  "length": 250
});

/**
 * RXE.44 - Pharmacy Order Type
 */
export const RXE_44 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXE.44",
  "version": "2.6",
  "description": "Pharmacy Order Type",
  "type": "Field",
  "item": 1685,
  "table": "HL70480",
  "longName": "HL7Pharmacy Order Type",
  "length": 1
});
