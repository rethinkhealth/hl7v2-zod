import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 DRG Fields
 *
 * HL7 v2.6 DRG field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DRG.1 - Diagnostic Related Group
 */
export const DRG_1 = datatypes.CNE.register(hl7v2Metadata, {
  title: "DRG.1",
  version: "2.6",
  description: "Diagnostic Related Group",
  type: "Field",
  item: 382,
  table: "HL70055",
  longName: "HL7Diagnostic Related Group",
  length: 250
});

/**
 * DRG.2 - DRG Assigned Date/Time
 */
export const DRG_2 = datatypes.DTM.register(hl7v2Metadata, {
  title: "DRG.2",
  version: "2.6",
  description: "DRG Assigned Date/Time",
  type: "Field",
  item: 769,
  table: "",
  longName: "HL7DRG Assigned Date/Time",
  length: 24
});

/**
 * DRG.3 - DRG Approval Indicator
 */
export const DRG_3 = datatypes.ID.register(hl7v2Metadata, {
  title: "DRG.3",
  version: "2.6",
  description: "DRG Approval Indicator",
  type: "Field",
  item: 383,
  table: "HL70136",
  longName: "HL7DRG Approval Indicator",
  length: 1
});

/**
 * DRG.4 - DRG Grouper Review Code
 */
export const DRG_4 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.4",
  version: "2.6",
  description: "DRG Grouper Review Code",
  type: "Field",
  item: 384,
  table: "HL70056",
  longName: "HL7DRG Grouper Review Code",
  length: 2
});

/**
 * DRG.5 - Outlier Type
 */
export const DRG_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "DRG.5",
  version: "2.6",
  description: "Outlier Type",
  type: "Field",
  item: 385,
  table: "HL70083",
  longName: "HL7Outlier Type",
  length: 250
});

/**
 * DRG.6 - Outlier Days
 */
export const DRG_6 = datatypes.NM.register(hl7v2Metadata, {
  title: "DRG.6",
  version: "2.6",
  description: "Outlier Days",
  type: "Field",
  item: 386,
  table: "",
  longName: "HL7Outlier Days",
  length: 3
});

/**
 * DRG.7 - Outlier Cost
 */
export const DRG_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.7",
  version: "2.6",
  description: "Outlier Cost",
  type: "Field",
  item: 387,
  table: "",
  longName: "HL7Outlier Cost",
  length: 12
});

/**
 * DRG.8 - DRG Payor
 */
export const DRG_8 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.8",
  version: "2.6",
  description: "DRG Payor",
  type: "Field",
  item: 770,
  table: "HL70229",
  longName: "HL7DRG Payor",
  length: 1
});

/**
 * DRG.9 - Outlier Reimbursement
 */
export const DRG_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.9",
  version: "2.6",
  description: "Outlier Reimbursement",
  type: "Field",
  item: 771,
  table: "",
  longName: "HL7Outlier Reimbursement",
  length: 9
});

/**
 * DRG.10 - Confidential Indicator
 */
export const DRG_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "DRG.10",
  version: "2.6",
  description: "Confidential Indicator",
  type: "Field",
  item: 767,
  table: "HL70136",
  longName: "HL7Confidential Indicator",
  length: 1
});

/**
 * DRG.11 - DRG Transfer Type
 */
export const DRG_11 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.11",
  version: "2.6",
  description: "DRG Transfer Type",
  type: "Field",
  item: 1500,
  table: "HL70415",
  longName: "HL7DRG Transfer Type",
  length: 21
});

/**
 * DRG.12 - Name of Coder
 */
export const DRG_12 = datatypes.XPN.register(hl7v2Metadata, {
  title: "DRG.12",
  version: "2.6",
  description: "Name of Coder",
  type: "Field",
  item: 2156,
  table: "",
  longName: "HL7Name of Coder",
  length: 1103
});

/**
 * DRG.13 - Grouper Status
 */
export const DRG_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "DRG.13",
  version: "2.6",
  description: "Grouper Status",
  type: "Field",
  item: 2157,
  table: "HL70734",
  longName: "HL7Grouper Status",
  length: 705
});

/**
 * DRG.14 - PCCL Value Code
 */
export const DRG_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "DRG.14",
  version: "2.6",
  description: "PCCL Value Code",
  type: "Field",
  item: 2158,
  table: "HL70728",
  longName: "HL7PCCL Value Code",
  length: 20
});

/**
 * DRG.15 - Effective Weight
 */
export const DRG_15 = datatypes.NM.register(hl7v2Metadata, {
  title: "DRG.15",
  version: "2.6",
  description: "Effective Weight",
  type: "Field",
  item: 2159,
  table: "",
  longName: "HL7Effective Weight",
  length: 5
});

/**
 * DRG.16 - Monetary Amount
 */
export const DRG_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.16",
  version: "2.6",
  description: "Monetary Amount",
  type: "Field",
  item: 2160,
  table: "",
  longName: "HL7Monetary Amount",
  length: 20
});

/**
 * DRG.17 - Status Patient
 */
export const DRG_17 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.17",
  version: "2.6",
  description: "Status Patient",
  type: "Field",
  item: 2161,
  table: "HL70739",
  longName: "HL7Status Patient",
  length: 20
});

/**
 * DRG.18 - Grouper Software Name
 */
export const DRG_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.18",
  version: "2.6",
  description: "Grouper Software Name",
  type: "Field",
  item: 2162,
  table: "",
  longName: "HL7Grouper Software Name",
  length: 100
});

/**
 * DRG.19 - Grouper Software Version
 */
export const DRG_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.19",
  version: "2.6",
  description: "Grouper Software Version",
  type: "Field",
  item: 2282,
  table: "",
  longName: "HL7Grouper Software Version",
  length: 100
});

/**
 * DRG.20 - Status Financial Calculation
 */
export const DRG_20 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.20",
  version: "2.6",
  description: "Status Financial Calculation",
  type: "Field",
  item: 2163,
  table: "HL70742",
  longName: "HL7Status Financial Calculation",
  length: 20
});

/**
 * DRG.21 - Relative Discount/Surcharge
 */
export const DRG_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.21",
  version: "2.6",
  description: "Relative Discount/Surcharge",
  type: "Field",
  item: 2164,
  table: "",
  longName: "HL7Relative Discount/Surcharge",
  length: 20
});

/**
 * DRG.22 - Basic Charge
 */
export const DRG_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.22",
  version: "2.6",
  description: "Basic Charge",
  type: "Field",
  item: 2165,
  table: "",
  longName: "HL7Basic Charge",
  length: 20
});

/**
 * DRG.23 - Total Charge
 */
export const DRG_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.23",
  version: "2.6",
  description: "Total Charge",
  type: "Field",
  item: 2166,
  table: "",
  longName: "HL7Total Charge",
  length: 20
});

/**
 * DRG.24 - Discount/Surcharge
 */
export const DRG_24 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.24",
  version: "2.6",
  description: "Discount/Surcharge",
  type: "Field",
  item: 2167,
  table: "",
  longName: "HL7Discount/Surcharge",
  length: 20
});

/**
 * DRG.25 - Calculated Days
 */
export const DRG_25 = datatypes.NM.register(hl7v2Metadata, {
  title: "DRG.25",
  version: "2.6",
  description: "Calculated Days",
  type: "Field",
  item: 2168,
  table: "",
  longName: "HL7Calculated Days",
  length: 5
});

/**
 * DRG.26 - Status Gender
 */
export const DRG_26 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.26",
  version: "2.6",
  description: "Status Gender",
  type: "Field",
  item: 2169,
  table: "HL70749",
  longName: "HL7Status Gender",
  length: 20
});

/**
 * DRG.27 - Status Age
 */
export const DRG_27 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.27",
  version: "2.6",
  description: "Status Age",
  type: "Field",
  item: 2170,
  table: "HL70749",
  longName: "HL7Status Age",
  length: 20
});

/**
 * DRG.28 - Status Length of Stay
 */
export const DRG_28 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.28",
  version: "2.6",
  description: "Status Length of Stay",
  type: "Field",
  item: 2171,
  table: "HL70749",
  longName: "HL7Status Length of Stay",
  length: 20
});

/**
 * DRG.29 - Status Same Day Flag
 */
export const DRG_29 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.29",
  version: "2.6",
  description: "Status Same Day Flag",
  type: "Field",
  item: 2172,
  table: "HL70749",
  longName: "HL7Status Same Day Flag",
  length: 20
});

/**
 * DRG.30 - Status Separation Mode
 */
export const DRG_30 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.30",
  version: "2.6",
  description: "Status Separation Mode",
  type: "Field",
  item: 2173,
  table: "HL70749",
  longName: "HL7Status Separation Mode",
  length: 20
});

/**
 * DRG.31 - Status Weight at Birth
 */
export const DRG_31 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.31",
  version: "2.6",
  description: "Status Weight at Birth",
  type: "Field",
  item: 2174,
  table: "HL70755",
  longName: "HL7Status Weight at Birth",
  length: 20
});

/**
 * DRG.32 - Status Respiration Minutes
 */
export const DRG_32 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.32",
  version: "2.6",
  description: "Status Respiration Minutes",
  type: "Field",
  item: 2175,
  table: "HL70757",
  longName: "HL7Status Respiration Minutes",
  length: 20
});

/**
 * DRG.33 - Status Admission
 */
export const DRG_33 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.33",
  version: "2.6",
  description: "Status Admission",
  type: "Field",
  item: 2176,
  table: "HL70759",
  longName: "HL7Status Admission",
  length: 20
});
