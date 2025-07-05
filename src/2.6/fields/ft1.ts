import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 FT1 Fields
 *
 * HL7 v2.6 FT1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FT1.1 - Set ID - FT1
 */
export const FT1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "FT1.1",
  version: "2.6",
  description: "Set ID - FT1",
  type: "Field",
  item: 355,
  table: "",
  longName: "HL7Set ID - FT1",
  length: 4
});

/**
 * FT1.2 - Transaction ID
 */
export const FT1_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.2",
  version: "2.6",
  description: "Transaction ID",
  type: "Field",
  item: 356,
  table: "",
  longName: "HL7Transaction ID",
  length: 12
});

/**
 * FT1.3 - Transaction Batch ID
 */
export const FT1_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.3",
  version: "2.6",
  description: "Transaction Batch ID",
  type: "Field",
  item: 357,
  table: "",
  longName: "HL7Transaction Batch ID",
  length: 10
});

/**
 * FT1.4 - Transaction Date
 */
export const FT1_4 = datatypes.DR.register(hl7v2Metadata, {
  title: "FT1.4",
  version: "2.6",
  description: "Transaction Date",
  type: "Field",
  item: 358,
  table: "",
  longName: "HL7Transaction Date",
  length: 53
});

/**
 * FT1.5 - Transaction Posting Date
 */
export const FT1_5 = datatypes.DTM.register(hl7v2Metadata, {
  title: "FT1.5",
  version: "2.6",
  description: "Transaction Posting Date",
  type: "Field",
  item: 359,
  table: "",
  longName: "HL7Transaction Posting Date",
  length: 24
});

/**
 * FT1.6 - Transaction Type
 */
export const FT1_6 = datatypes.IS.register(hl7v2Metadata, {
  title: "FT1.6",
  version: "2.6",
  description: "Transaction Type",
  type: "Field",
  item: 360,
  table: "HL70017",
  longName: "HL7Transaction Type",
  length: 8
});

/**
 * FT1.7 - Transaction Code
 */
export const FT1_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.7",
  version: "2.6",
  description: "Transaction Code",
  type: "Field",
  item: 361,
  table: "HL70132",
  longName: "HL7Transaction Code",
  length: 250
});

/**
 * FT1.10 - Transaction Quantity
 */
export const FT1_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "FT1.10",
  version: "2.6",
  description: "Transaction Quantity",
  type: "Field",
  item: 364,
  table: "",
  longName: "HL7Transaction Quantity",
  length: 6
});

/**
 * FT1.11 - Transaction Amount - Extended
 */
export const FT1_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.11",
  version: "2.6",
  description: "Transaction Amount - Extended",
  type: "Field",
  item: 365,
  table: "",
  longName: "HL7Transaction Amount - Extended",
  length: 12
});

/**
 * FT1.12 - Transaction amount - unit
 */
export const FT1_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.12",
  version: "2.6",
  description: "Transaction amount - unit",
  type: "Field",
  item: 366,
  table: "",
  longName: "HL7Transaction amount - unit",
  length: 12
});

/**
 * FT1.13 - Department Code
 */
export const FT1_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.13",
  version: "2.6",
  description: "Department Code",
  type: "Field",
  item: 367,
  table: "HL70049",
  longName: "HL7Department Code",
  length: 250
});

/**
 * FT1.14 - Insurance Plan ID
 */
export const FT1_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.14",
  version: "2.6",
  description: "Insurance Plan ID",
  type: "Field",
  item: 368,
  table: "HL70072",
  longName: "HL7Insurance Plan ID",
  length: 250
});

/**
 * FT1.15 - Insurance Amount
 */
export const FT1_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.15",
  version: "2.6",
  description: "Insurance Amount",
  type: "Field",
  item: 369,
  table: "",
  longName: "HL7Insurance Amount",
  length: 12
});

/**
 * FT1.16 - Assigned Patient Location
 */
export const FT1_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.16",
  version: "2.6",
  description: "Assigned Patient Location",
  type: "Field",
  item: 133,
  table: "",
  longName: "HL7Assigned Patient Location",
  length: 80
});

/**
 * FT1.17 - Fee Schedule
 */
export const FT1_17 = datatypes.IS.register(hl7v2Metadata, {
  title: "FT1.17",
  version: "2.6",
  description: "Fee Schedule",
  type: "Field",
  item: 370,
  table: "HL70024",
  longName: "HL7Fee Schedule",
  length: 1
});

/**
 * FT1.18 - Patient Type
 */
export const FT1_18 = datatypes.IS.register(hl7v2Metadata, {
  title: "FT1.18",
  version: "2.6",
  description: "Patient Type",
  type: "Field",
  item: 148,
  table: "HL70018",
  longName: "HL7Patient Type",
  length: 2
});

/**
 * FT1.19 - Diagnosis Code - FT1
 */
export const FT1_19 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.19",
  version: "2.6",
  description: "Diagnosis Code - FT1",
  type: "Field",
  item: 371,
  table: "HL70051",
  longName: "HL7Diagnosis Code - FT1",
  length: 250
});

/**
 * FT1.20 - Performed By Code
 */
export const FT1_20 = datatypes.XCN.register(hl7v2Metadata, {
  title: "FT1.20",
  version: "2.6",
  description: "Performed By Code",
  type: "Field",
  item: 372,
  table: "HL70084",
  longName: "HL7Performed By Code",
  length: 250
});

/**
 * FT1.21 - Ordered By Code
 */
export const FT1_21 = datatypes.XCN.register(hl7v2Metadata, {
  title: "FT1.21",
  version: "2.6",
  description: "Ordered By Code",
  type: "Field",
  item: 373,
  table: "",
  longName: "HL7Ordered By Code",
  length: 250
});

/**
 * FT1.22 - Unit Cost
 */
export const FT1_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.22",
  version: "2.6",
  description: "Unit Cost",
  type: "Field",
  item: 374,
  table: "",
  longName: "HL7Unit Cost",
  length: 12
});

/**
 * FT1.23 - Filler Order Number
 */
export const FT1_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.23",
  version: "2.6",
  description: "Filler Order Number",
  type: "Field",
  item: 217,
  table: "",
  longName: "HL7Filler Order Number",
  length: 427
});

/**
 * FT1.24 - Entered By Code
 */
export const FT1_24 = datatypes.XCN.register(hl7v2Metadata, {
  title: "FT1.24",
  version: "2.6",
  description: "Entered By Code",
  type: "Field",
  item: 765,
  table: "",
  longName: "HL7Entered By Code",
  length: 250
});

/**
 * FT1.25 - Procedure Code
 */
export const FT1_25 = datatypes.CNE.register(hl7v2Metadata, {
  title: "FT1.25",
  version: "2.6",
  description: "Procedure Code",
  type: "Field",
  item: 393,
  table: "HL70088",
  longName: "HL7Procedure Code",
  length: 705
});

/**
 * FT1.26 - Procedure Code Modifier
 */
export const FT1_26 = datatypes.CNE.register(hl7v2Metadata, {
  title: "FT1.26",
  version: "2.6",
  description: "Procedure Code Modifier",
  type: "Field",
  item: 1316,
  table: "HL70340",
  longName: "HL7Procedure Code Modifier",
  length: 705
});

/**
 * FT1.27 - Advanced Beneficiary Notice Code
 */
export const FT1_27 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.27",
  version: "2.6",
  description: "Advanced Beneficiary Notice Code",
  type: "Field",
  item: 1310,
  table: "HL70339",
  longName: "HL7Advanced Beneficiary Notice Code",
  length: 250
});

/**
 * FT1.28 - Medically Necessary Duplicate Procedure Reason
 */
export const FT1_28 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.28",
  version: "2.6",
  description: "Medically Necessary Duplicate Procedure Reason",
  type: "Field",
  item: 1646,
  table: "HL70476",
  longName: "HL7Medically Necessary Duplicate Procedure Reason",
  length: 705
});

/**
 * FT1.29 - NDC Code
 */
export const FT1_29 = datatypes.CWE.register(hl7v2Metadata, {
  title: "FT1.29",
  version: "2.6",
  description: "NDC Code",
  type: "Field",
  item: 1845,
  table: "HL70549",
  longName: "HL7NDC Code",
  length: 250
});

/**
 * FT1.30 - Payment Reference ID
 */
export const FT1_30 = datatypes.ST.register(hl7v2Metadata, {
  title: "FT1.30",
  version: "2.6",
  description: "Payment Reference ID",
  type: "Field",
  item: 1846,
  table: "",
  longName: "HL7Payment Reference ID",
  length: 250
});

/**
 * FT1.31 - Transaction Reference Key
 */
export const FT1_31 = datatypes.SI.register(hl7v2Metadata, {
  title: "FT1.31",
  version: "2.6",
  description: "Transaction Reference Key",
  type: "Field",
  item: 1847,
  table: "",
  longName: "HL7Transaction Reference Key",
  length: 4
});
