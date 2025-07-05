import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 PV1 Fields
 *
 * HL7 v2.8 PV1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PV1.1 - Set ID - PV1
 */
export const PV1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "PV1.1",
  version: "2.8",
  description: "Set ID - PV1",
  type: "Field",
  item: 131,
  table: "",
  longName: "HL7Set ID - PV1",
  length: 4
});

/**
 * PV1.2 - Patient Class
 */
export const PV1_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.2",
  version: "2.8",
  description: "Patient Class",
  type: "Field",
  item: 132,
  table: "HL70004",
  longName: "HL7Patient Class"
});

/**
 * PV1.3 - Assigned Patient Location
 */
export const PV1_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.3",
  version: "2.8",
  description: "Assigned Patient Location",
  type: "Field",
  item: 133,
  table: "",
  longName: "HL7Assigned Patient Location"
});

/**
 * PV1.4 - Admission Type
 */
export const PV1_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.4",
  version: "2.8",
  description: "Admission Type",
  type: "Field",
  item: 134,
  table: "HL70007",
  longName: "HL7Admission Type"
});

/**
 * PV1.5 - Preadmit Number
 */
export const PV1_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.5",
  version: "2.8",
  description: "Preadmit Number",
  type: "Field",
  item: 135,
  table: "",
  longName: "HL7Preadmit Number"
});

/**
 * PV1.6 - Prior Patient Location
 */
export const PV1_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.6",
  version: "2.8",
  description: "Prior Patient Location",
  type: "Field",
  item: 136,
  table: "",
  longName: "HL7Prior Patient Location"
});

/**
 * PV1.7 - Attending Doctor
 */
export const PV1_7 = datatypes.XCN.register(hl7v2Metadata, {
  title: "PV1.7",
  version: "2.8",
  description: "Attending Doctor",
  type: "Field",
  item: 137,
  table: "HL70010",
  longName: "HL7Attending Doctor"
});

/**
 * PV1.8 - Referring Doctor
 */
export const PV1_8 = datatypes.XCN.register(hl7v2Metadata, {
  title: "PV1.8",
  version: "2.8",
  description: "Referring Doctor",
  type: "Field",
  item: 138,
  table: "HL70010",
  longName: "HL7Referring Doctor"
});

/**
 * PV1.9 - Consulting Doctor
 */
export const PV1_9 = datatypes.XCN.register(hl7v2Metadata, {
  title: "PV1.9",
  version: "2.8",
  description: "Consulting Doctor",
  type: "Field",
  item: 139,
  table: "",
  longName: "HL7Consulting Doctor"
});

/**
 * PV1.10 - Hospital Service
 */
export const PV1_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.10",
  version: "2.8",
  description: "Hospital Service",
  type: "Field",
  item: 140,
  table: "HL70069",
  longName: "HL7Hospital Service"
});

/**
 * PV1.11 - Temporary Location
 */
export const PV1_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.11",
  version: "2.8",
  description: "Temporary Location",
  type: "Field",
  item: 141,
  table: "",
  longName: "HL7Temporary Location"
});

/**
 * PV1.12 - Preadmit Test Indicator
 */
export const PV1_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.12",
  version: "2.8",
  description: "Preadmit Test Indicator",
  type: "Field",
  item: 142,
  table: "HL70087",
  longName: "HL7Preadmit Test Indicator"
});

/**
 * PV1.13 - Re-admission Indicator
 */
export const PV1_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.13",
  version: "2.8",
  description: "Re-admission Indicator",
  type: "Field",
  item: 143,
  table: "HL70092",
  longName: "HL7Re-admission Indicator"
});

/**
 * PV1.14 - Admit Source
 */
export const PV1_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.14",
  version: "2.8",
  description: "Admit Source",
  type: "Field",
  item: 144,
  table: "HL70023",
  longName: "HL7Admit Source"
});

/**
 * PV1.15 - Ambulatory Status
 */
export const PV1_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.15",
  version: "2.8",
  description: "Ambulatory Status",
  type: "Field",
  item: 145,
  table: "HL70009",
  longName: "HL7Ambulatory Status"
});

/**
 * PV1.16 - VIP Indicator
 */
export const PV1_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.16",
  version: "2.8",
  description: "VIP Indicator",
  type: "Field",
  item: 146,
  table: "HL70099",
  longName: "HL7VIP Indicator"
});

/**
 * PV1.17 - Admitting Doctor
 */
export const PV1_17 = datatypes.XCN.register(hl7v2Metadata, {
  title: "PV1.17",
  version: "2.8",
  description: "Admitting Doctor",
  type: "Field",
  item: 147,
  table: "HL70010",
  longName: "HL7Admitting Doctor"
});

/**
 * PV1.18 - Patient Type
 */
export const PV1_18 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.18",
  version: "2.8",
  description: "Patient Type",
  type: "Field",
  item: 148,
  table: "HL70018",
  longName: "HL7Patient Type"
});

/**
 * PV1.19 - Visit Number
 */
export const PV1_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.19",
  version: "2.8",
  description: "Visit Number",
  type: "Field",
  item: 149,
  table: "",
  longName: "HL7Visit Number"
});

/**
 * PV1.20 - Financial Class
 */
export const PV1_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.20",
  version: "2.8",
  description: "Financial Class",
  type: "Field",
  item: 150,
  table: "HL70064",
  longName: "HL7Financial Class"
});

/**
 * PV1.21 - Charge Price Indicator
 */
export const PV1_21 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.21",
  version: "2.8",
  description: "Charge Price Indicator",
  type: "Field",
  item: 151,
  table: "HL70032",
  longName: "HL7Charge Price Indicator"
});

/**
 * PV1.22 - Courtesy Code
 */
export const PV1_22 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.22",
  version: "2.8",
  description: "Courtesy Code",
  type: "Field",
  item: 152,
  table: "HL70045",
  longName: "HL7Courtesy Code"
});

/**
 * PV1.23 - Credit Rating
 */
export const PV1_23 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.23",
  version: "2.8",
  description: "Credit Rating",
  type: "Field",
  item: 153,
  table: "HL70046",
  longName: "HL7Credit Rating"
});

/**
 * PV1.24 - Contract Code
 */
export const PV1_24 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.24",
  version: "2.8",
  description: "Contract Code",
  type: "Field",
  item: 154,
  table: "HL70044",
  longName: "HL7Contract Code"
});

/**
 * PV1.25 - Contract Effective Date
 */
export const PV1_25 = datatypes.DT.register(hl7v2Metadata, {
  title: "PV1.25",
  version: "2.8",
  description: "Contract Effective Date",
  type: "Field",
  item: 155,
  table: "",
  longName: "HL7Contract Effective Date"
});

/**
 * PV1.26 - Contract Amount
 */
export const PV1_26 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.26",
  version: "2.8",
  description: "Contract Amount",
  type: "Field",
  item: 156,
  table: "",
  longName: "HL7Contract Amount"
});

/**
 * PV1.27 - Contract Period
 */
export const PV1_27 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.27",
  version: "2.8",
  description: "Contract Period",
  type: "Field",
  item: 157,
  table: "",
  longName: "HL7Contract Period"
});

/**
 * PV1.28 - Interest Code
 */
export const PV1_28 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.28",
  version: "2.8",
  description: "Interest Code",
  type: "Field",
  item: 158,
  table: "HL70073",
  longName: "HL7Interest Code"
});

/**
 * PV1.29 - Transfer to Bad Debt Code
 */
export const PV1_29 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.29",
  version: "2.8",
  description: "Transfer to Bad Debt Code",
  type: "Field",
  item: 159,
  table: "HL70110",
  longName: "HL7Transfer to Bad Debt Code"
});

/**
 * PV1.30 - Transfer to Bad Debt Date
 */
export const PV1_30 = datatypes.DT.register(hl7v2Metadata, {
  title: "PV1.30",
  version: "2.8",
  description: "Transfer to Bad Debt Date",
  type: "Field",
  item: 160,
  table: "",
  longName: "HL7Transfer to Bad Debt Date"
});

/**
 * PV1.31 - Bad Debt Agency Code
 */
export const PV1_31 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.31",
  version: "2.8",
  description: "Bad Debt Agency Code",
  type: "Field",
  item: 161,
  table: "HL70021",
  longName: "HL7Bad Debt Agency Code"
});

/**
 * PV1.32 - Bad Debt Transfer Amount
 */
export const PV1_32 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.32",
  version: "2.8",
  description: "Bad Debt Transfer Amount",
  type: "Field",
  item: 162,
  table: "",
  longName: "HL7Bad Debt Transfer Amount"
});

/**
 * PV1.33 - Bad Debt Recovery Amount
 */
export const PV1_33 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.33",
  version: "2.8",
  description: "Bad Debt Recovery Amount",
  type: "Field",
  item: 163,
  table: "",
  longName: "HL7Bad Debt Recovery Amount"
});

/**
 * PV1.34 - Delete Account Indicator
 */
export const PV1_34 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.34",
  version: "2.8",
  description: "Delete Account Indicator",
  type: "Field",
  item: 164,
  table: "HL70111",
  longName: "HL7Delete Account Indicator"
});

/**
 * PV1.35 - Delete Account Date
 */
export const PV1_35 = datatypes.DT.register(hl7v2Metadata, {
  title: "PV1.35",
  version: "2.8",
  description: "Delete Account Date",
  type: "Field",
  item: 165,
  table: "",
  longName: "HL7Delete Account Date"
});

/**
 * PV1.36 - Discharge Disposition
 */
export const PV1_36 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.36",
  version: "2.8",
  description: "Discharge Disposition",
  type: "Field",
  item: 166,
  table: "HL70112",
  longName: "HL7Discharge Disposition"
});

/**
 * PV1.37 - Discharged to Location
 */
export const PV1_37 = datatypes.DLD.register(hl7v2Metadata, {
  title: "PV1.37",
  version: "2.8",
  description: "Discharged to Location",
  type: "Field",
  item: 167,
  table: "HL70113",
  longName: "HL7Discharged to Location"
});

/**
 * PV1.38 - Diet Type
 */
export const PV1_38 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.38",
  version: "2.8",
  description: "Diet Type",
  type: "Field",
  item: 168,
  table: "HL70114",
  longName: "HL7Diet Type"
});

/**
 * PV1.39 - Servicing Facility
 */
export const PV1_39 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.39",
  version: "2.8",
  description: "Servicing Facility",
  type: "Field",
  item: 169,
  table: "HL70115",
  longName: "HL7Servicing Facility"
});

/**
 * PV1.41 - Account Status
 */
export const PV1_41 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.41",
  version: "2.8",
  description: "Account Status",
  type: "Field",
  item: 171,
  table: "HL70117",
  longName: "HL7Account Status"
});

/**
 * PV1.42 - Pending Location
 */
export const PV1_42 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.42",
  version: "2.8",
  description: "Pending Location",
  type: "Field",
  item: 172,
  table: "",
  longName: "HL7Pending Location"
});

/**
 * PV1.43 - Prior Temporary Location
 */
export const PV1_43 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.43",
  version: "2.8",
  description: "Prior Temporary Location",
  type: "Field",
  item: 173,
  table: "",
  longName: "HL7Prior Temporary Location"
});

/**
 * PV1.44 - Admit Date/Time
 */
export const PV1_44 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PV1.44",
  version: "2.8",
  description: "Admit Date/Time",
  type: "Field",
  item: 174,
  table: "",
  longName: "HL7Admit Date/Time"
});

/**
 * PV1.45 - Discharge Date/Time
 */
export const PV1_45 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PV1.45",
  version: "2.8",
  description: "Discharge Date/Time",
  type: "Field",
  item: 175,
  table: "",
  longName: "HL7Discharge Date/Time"
});

/**
 * PV1.46 - Current Patient Balance
 */
export const PV1_46 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.46",
  version: "2.8",
  description: "Current Patient Balance",
  type: "Field",
  item: 176,
  table: "",
  longName: "HL7Current Patient Balance"
});

/**
 * PV1.47 - Total Charges
 */
export const PV1_47 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.47",
  version: "2.8",
  description: "Total Charges",
  type: "Field",
  item: 177,
  table: "",
  longName: "HL7Total Charges"
});

/**
 * PV1.48 - Total Adjustments
 */
export const PV1_48 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.48",
  version: "2.8",
  description: "Total Adjustments",
  type: "Field",
  item: 178,
  table: "",
  longName: "HL7Total Adjustments"
});

/**
 * PV1.49 - Total Payments
 */
export const PV1_49 = datatypes.NM.register(hl7v2Metadata, {
  title: "PV1.49",
  version: "2.8",
  description: "Total Payments",
  type: "Field",
  item: 179,
  table: "",
  longName: "HL7Total Payments"
});

/**
 * PV1.50 - Alternate Visit ID
 */
export const PV1_50 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.50",
  version: "2.8",
  description: "Alternate Visit ID",
  type: "Field",
  item: 180,
  table: "HL70203",
  longName: "HL7Alternate Visit ID"
});

/**
 * PV1.51 - Visit Indicator
 */
export const PV1_51 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PV1.51",
  version: "2.8",
  description: "Visit Indicator",
  type: "Field",
  item: 1226,
  table: "HL70326",
  longName: "HL7Visit Indicator"
});

/**
 * PV1.53 - Service Episode Description
 */
export const PV1_53 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.53",
  version: "2.8",
  description: "Service Episode Description",
  type: "Field",
  item: 2290,
  table: "",
  longName: "HL7Service Episode Description"
});

/**
 * PV1.54 - Service Episode Identifier
 */
export const PV1_54 = datatypes.ST.register(hl7v2Metadata, {
  title: "PV1.54",
  version: "2.8",
  description: "Service Episode Identifier",
  type: "Field",
  item: 2291,
  table: "",
  longName: "HL7Service Episode Identifier"
});
