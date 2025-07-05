import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 IN2 Fields
 *
 * HL7 v2.8 IN2 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IN2.1 - Insured's Employee ID
 */
export const IN2_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.1",
  version: "2.8",
  description: "Insured's Employee ID",
  type: "Field",
  item: 472,
  table: "",
  longName: "HL7Insured's Employee ID"
});

/**
 * IN2.2 - Insured's Social Security Number
 */
export const IN2_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.2",
  version: "2.8",
  description: "Insured's Social Security Number",
  type: "Field",
  item: 473,
  table: "",
  longName: "HL7Insured's Social Security Number"
});

/**
 * IN2.3 - Insured's Employer's Name and ID
 */
export const IN2_3 = datatypes.XCN.register(hl7v2Metadata, {
  title: "IN2.3",
  version: "2.8",
  description: "Insured's Employer's Name and ID",
  type: "Field",
  item: 474,
  table: "",
  longName: "HL7Insured's Employer's Name and ID"
});

/**
 * IN2.4 - Employer Information Data
 */
export const IN2_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.4",
  version: "2.8",
  description: "Employer Information Data",
  type: "Field",
  item: 475,
  table: "HL70139",
  longName: "HL7Employer Information Data"
});

/**
 * IN2.5 - Mail Claim Party
 */
export const IN2_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.5",
  version: "2.8",
  description: "Mail Claim Party",
  type: "Field",
  item: 476,
  table: "HL70137",
  longName: "HL7Mail Claim Party"
});

/**
 * IN2.6 - Medicare Health Ins Card Number
 */
export const IN2_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.6",
  version: "2.8",
  description: "Medicare Health Ins Card Number",
  type: "Field",
  item: 477,
  table: "",
  longName: "HL7Medicare Health Ins Card Number"
});

/**
 * IN2.7 - Medicaid Case Name
 */
export const IN2_7 = datatypes.XPN.register(hl7v2Metadata, {
  title: "IN2.7",
  version: "2.8",
  description: "Medicaid Case Name",
  type: "Field",
  item: 478,
  table: "",
  longName: "HL7Medicaid Case Name"
});

/**
 * IN2.8 - Medicaid Case Number
 */
export const IN2_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.8",
  version: "2.8",
  description: "Medicaid Case Number",
  type: "Field",
  item: 479,
  table: "",
  longName: "HL7Medicaid Case Number"
});

/**
 * IN2.9 - Military Sponsor Name
 */
export const IN2_9 = datatypes.XPN.register(hl7v2Metadata, {
  title: "IN2.9",
  version: "2.8",
  description: "Military Sponsor Name",
  type: "Field",
  item: 480,
  table: "",
  longName: "HL7Military Sponsor Name"
});

/**
 * IN2.10 - Military ID Number
 */
export const IN2_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.10",
  version: "2.8",
  description: "Military ID Number",
  type: "Field",
  item: 481,
  table: "",
  longName: "HL7Military ID Number"
});

/**
 * IN2.11 - Dependent Of Military Recipient
 */
export const IN2_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.11",
  version: "2.8",
  description: "Dependent Of Military Recipient",
  type: "Field",
  item: 482,
  table: "HL70342",
  longName: "HL7Dependent Of Military Recipient"
});

/**
 * IN2.12 - Military Organization
 */
export const IN2_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.12",
  version: "2.8",
  description: "Military Organization",
  type: "Field",
  item: 483,
  table: "",
  longName: "HL7Military Organization"
});

/**
 * IN2.13 - Military Station
 */
export const IN2_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.13",
  version: "2.8",
  description: "Military Station",
  type: "Field",
  item: 484,
  table: "",
  longName: "HL7Military Station"
});

/**
 * IN2.14 - Military Service
 */
export const IN2_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.14",
  version: "2.8",
  description: "Military Service",
  type: "Field",
  item: 485,
  table: "HL70140",
  longName: "HL7Military Service"
});

/**
 * IN2.15 - Military Rank/Grade
 */
export const IN2_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.15",
  version: "2.8",
  description: "Military Rank/Grade",
  type: "Field",
  item: 486,
  table: "HL70141",
  longName: "HL7Military Rank/Grade"
});

/**
 * IN2.16 - Military Status
 */
export const IN2_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.16",
  version: "2.8",
  description: "Military Status",
  type: "Field",
  item: 487,
  table: "HL70142",
  longName: "HL7Military Status"
});

/**
 * IN2.17 - Military Retire Date
 */
export const IN2_17 = datatypes.DT.register(hl7v2Metadata, {
  title: "IN2.17",
  version: "2.8",
  description: "Military Retire Date",
  type: "Field",
  item: 488,
  table: "",
  longName: "HL7Military Retire Date"
});

/**
 * IN2.18 - Military Non-Avail Cert On File
 */
export const IN2_18 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.18",
  version: "2.8",
  description: "Military Non-Avail Cert On File",
  type: "Field",
  item: 489,
  table: "HL70136",
  longName: "HL7Military Non-Avail Cert On File",
  length: 1
});

/**
 * IN2.19 - Baby Coverage
 */
export const IN2_19 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.19",
  version: "2.8",
  description: "Baby Coverage",
  type: "Field",
  item: 490,
  table: "HL70136",
  longName: "HL7Baby Coverage",
  length: 1
});

/**
 * IN2.20 - Combine Baby Bill
 */
export const IN2_20 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.20",
  version: "2.8",
  description: "Combine Baby Bill",
  type: "Field",
  item: 491,
  table: "HL70136",
  longName: "HL7Combine Baby Bill",
  length: 1
});

/**
 * IN2.21 - Blood Deductible
 */
export const IN2_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.21",
  version: "2.8",
  description: "Blood Deductible",
  type: "Field",
  item: 492,
  table: "",
  longName: "HL7Blood Deductible"
});

/**
 * IN2.22 - Special Coverage Approval Name
 */
export const IN2_22 = datatypes.XPN.register(hl7v2Metadata, {
  title: "IN2.22",
  version: "2.8",
  description: "Special Coverage Approval Name",
  type: "Field",
  item: 493,
  table: "",
  longName: "HL7Special Coverage Approval Name"
});

/**
 * IN2.23 - Special Coverage Approval Title
 */
export const IN2_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.23",
  version: "2.8",
  description: "Special Coverage Approval Title",
  type: "Field",
  item: 494,
  table: "",
  longName: "HL7Special Coverage Approval Title"
});

/**
 * IN2.24 - Non-Covered Insurance Code
 */
export const IN2_24 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.24",
  version: "2.8",
  description: "Non-Covered Insurance Code",
  type: "Field",
  item: 495,
  table: "HL70143",
  longName: "HL7Non-Covered Insurance Code"
});

/**
 * IN2.25 - Payor ID
 */
export const IN2_25 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.25",
  version: "2.8",
  description: "Payor ID",
  type: "Field",
  item: 496,
  table: "",
  longName: "HL7Payor ID"
});

/**
 * IN2.26 - Payor Subscriber ID
 */
export const IN2_26 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.26",
  version: "2.8",
  description: "Payor Subscriber ID",
  type: "Field",
  item: 497,
  table: "",
  longName: "HL7Payor Subscriber ID"
});

/**
 * IN2.27 - Eligibility Source
 */
export const IN2_27 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.27",
  version: "2.8",
  description: "Eligibility Source",
  type: "Field",
  item: 498,
  table: "HL70144",
  longName: "HL7Eligibility Source"
});

/**
 * IN2.28 - Room Coverage Type/Amount
 */
export const IN2_28 = datatypes.RMC.register(hl7v2Metadata, {
  title: "IN2.28",
  version: "2.8",
  description: "Room Coverage Type/Amount",
  type: "Field",
  item: 499,
  table: "",
  longName: "HL7Room Coverage Type/Amount"
});

/**
 * IN2.29 - Policy Type/Amount
 */
export const IN2_29 = datatypes.PTA.register(hl7v2Metadata, {
  title: "IN2.29",
  version: "2.8",
  description: "Policy Type/Amount",
  type: "Field",
  item: 500,
  table: "",
  longName: "HL7Policy Type/Amount"
});

/**
 * IN2.30 - Daily Deductible
 */
export const IN2_30 = datatypes.DDI.register(hl7v2Metadata, {
  title: "IN2.30",
  version: "2.8",
  description: "Daily Deductible",
  type: "Field",
  item: 501,
  table: "",
  longName: "HL7Daily Deductible"
});

/**
 * IN2.31 - Living Dependency
 */
export const IN2_31 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.31",
  version: "2.8",
  description: "Living Dependency",
  type: "Field",
  item: 755,
  table: "HL70223",
  longName: "HL7Living Dependency"
});

/**
 * IN2.32 - Ambulatory Status
 */
export const IN2_32 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.32",
  version: "2.8",
  description: "Ambulatory Status",
  type: "Field",
  item: 145,
  table: "HL70009",
  longName: "HL7Ambulatory Status"
});

/**
 * IN2.33 - Citizenship
 */
export const IN2_33 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.33",
  version: "2.8",
  description: "Citizenship",
  type: "Field",
  item: 129,
  table: "HL70171",
  longName: "HL7Citizenship"
});

/**
 * IN2.34 - Primary Language
 */
export const IN2_34 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.34",
  version: "2.8",
  description: "Primary Language",
  type: "Field",
  item: 118,
  table: "HL70296",
  longName: "HL7Primary Language"
});

/**
 * IN2.35 - Living Arrangement
 */
export const IN2_35 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.35",
  version: "2.8",
  description: "Living Arrangement",
  type: "Field",
  item: 742,
  table: "HL70220",
  longName: "HL7Living Arrangement"
});

/**
 * IN2.36 - Publicity Code
 */
export const IN2_36 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.36",
  version: "2.8",
  description: "Publicity Code",
  type: "Field",
  item: 743,
  table: "HL70215",
  longName: "HL7Publicity Code"
});

/**
 * IN2.37 - Protection Indicator
 */
export const IN2_37 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.37",
  version: "2.8",
  description: "Protection Indicator",
  type: "Field",
  item: 744,
  table: "HL70136",
  longName: "HL7Protection Indicator",
  length: 1
});

/**
 * IN2.38 - Student Indicator
 */
export const IN2_38 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.38",
  version: "2.8",
  description: "Student Indicator",
  type: "Field",
  item: 745,
  table: "HL70231",
  longName: "HL7Student Indicator"
});

/**
 * IN2.39 - Religion
 */
export const IN2_39 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.39",
  version: "2.8",
  description: "Religion",
  type: "Field",
  item: 120,
  table: "HL70006",
  longName: "HL7Religion"
});

/**
 * IN2.40 - Mother's Maiden Name
 */
export const IN2_40 = datatypes.XPN.register(hl7v2Metadata, {
  title: "IN2.40",
  version: "2.8",
  description: "Mother's Maiden Name",
  type: "Field",
  item: 109,
  table: "",
  longName: "HL7Mother's Maiden Name"
});

/**
 * IN2.41 - Nationality
 */
export const IN2_41 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.41",
  version: "2.8",
  description: "Nationality",
  type: "Field",
  item: 739,
  table: "HL70212",
  longName: "HL7Nationality"
});

/**
 * IN2.42 - Ethnic Group
 */
export const IN2_42 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.42",
  version: "2.8",
  description: "Ethnic Group",
  type: "Field",
  item: 125,
  table: "HL70189",
  longName: "HL7Ethnic Group"
});

/**
 * IN2.43 - Marital Status
 */
export const IN2_43 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.43",
  version: "2.8",
  description: "Marital Status",
  type: "Field",
  item: 119,
  table: "HL70002",
  longName: "HL7Marital Status"
});

/**
 * IN2.44 - Insured's Employment Start Date
 */
export const IN2_44 = datatypes.DT.register(hl7v2Metadata, {
  title: "IN2.44",
  version: "2.8",
  description: "Insured's Employment Start Date",
  type: "Field",
  item: 787,
  table: "",
  longName: "HL7Insured's Employment Start Date"
});

/**
 * IN2.45 - Employment Stop Date
 */
export const IN2_45 = datatypes.DT.register(hl7v2Metadata, {
  title: "IN2.45",
  version: "2.8",
  description: "Employment Stop Date",
  type: "Field",
  item: 783,
  table: "",
  longName: "HL7Employment Stop Date"
});

/**
 * IN2.46 - Job Title
 */
export const IN2_46 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.46",
  version: "2.8",
  description: "Job Title",
  type: "Field",
  item: 785,
  table: "",
  longName: "HL7Job Title"
});

/**
 * IN2.47 - Job Code/Class
 */
export const IN2_47 = datatypes.JCC.register(hl7v2Metadata, {
  title: "IN2.47",
  version: "2.8",
  description: "Job Code/Class",
  type: "Field",
  item: 786,
  table: "",
  longName: "HL7Job Code/Class"
});

/**
 * IN2.48 - Job Status
 */
export const IN2_48 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.48",
  version: "2.8",
  description: "Job Status",
  type: "Field",
  item: 752,
  table: "HL70311",
  longName: "HL7Job Status"
});

/**
 * IN2.49 - Employer Contact Person Name
 */
export const IN2_49 = datatypes.XPN.register(hl7v2Metadata, {
  title: "IN2.49",
  version: "2.8",
  description: "Employer Contact Person Name",
  type: "Field",
  item: 789,
  table: "",
  longName: "HL7Employer Contact Person Name"
});

/**
 * IN2.50 - Employer Contact Person Phone Number
 */
export const IN2_50 = datatypes.XTN.register(hl7v2Metadata, {
  title: "IN2.50",
  version: "2.8",
  description: "Employer Contact Person Phone Number",
  type: "Field",
  item: 790,
  table: "",
  longName: "HL7Employer Contact Person Phone Number"
});

/**
 * IN2.51 - Employer Contact Reason
 */
export const IN2_51 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.51",
  version: "2.8",
  description: "Employer Contact Reason",
  type: "Field",
  item: 791,
  table: "HL70222",
  longName: "HL7Employer Contact Reason"
});

/**
 * IN2.52 - Insured's Contact Person's Name
 */
export const IN2_52 = datatypes.XPN.register(hl7v2Metadata, {
  title: "IN2.52",
  version: "2.8",
  description: "Insured's Contact Person's Name",
  type: "Field",
  item: 792,
  table: "",
  longName: "HL7Insured's Contact Person's Name"
});

/**
 * IN2.53 - Insured's Contact Person Phone Number
 */
export const IN2_53 = datatypes.XTN.register(hl7v2Metadata, {
  title: "IN2.53",
  version: "2.8",
  description: "Insured's Contact Person Phone Number",
  type: "Field",
  item: 793,
  table: "",
  longName: "HL7Insured's Contact Person Phone Number"
});

/**
 * IN2.54 - Insured's Contact Person Reason
 */
export const IN2_54 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.54",
  version: "2.8",
  description: "Insured's Contact Person Reason",
  type: "Field",
  item: 794,
  table: "HL70222",
  longName: "HL7Insured's Contact Person Reason"
});

/**
 * IN2.55 - Relationship to the Patient Start Date
 */
export const IN2_55 = datatypes.DT.register(hl7v2Metadata, {
  title: "IN2.55",
  version: "2.8",
  description: "Relationship to the Patient Start Date",
  type: "Field",
  item: 795,
  table: "",
  longName: "HL7Relationship to the Patient Start Date"
});

/**
 * IN2.56 - Relationship to the Patient Stop Date
 */
export const IN2_56 = datatypes.DT.register(hl7v2Metadata, {
  title: "IN2.56",
  version: "2.8",
  description: "Relationship to the Patient Stop Date",
  type: "Field",
  item: 796,
  table: "",
  longName: "HL7Relationship to the Patient Stop Date"
});

/**
 * IN2.57 - Insurance Co Contact Reason
 */
export const IN2_57 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.57",
  version: "2.8",
  description: "Insurance Co Contact Reason",
  type: "Field",
  item: 797,
  table: "HL70232",
  longName: "HL7Insurance Co Contact Reason"
});

/**
 * IN2.58 - Insurance Co Contact Phone Number
 */
export const IN2_58 = datatypes.XTN.register(hl7v2Metadata, {
  title: "IN2.58",
  version: "2.8",
  description: "Insurance Co Contact Phone Number",
  type: "Field",
  item: 798,
  table: "",
  longName: "HL7Insurance Co Contact Phone Number"
});

/**
 * IN2.59 - Policy Scope
 */
export const IN2_59 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.59",
  version: "2.8",
  description: "Policy Scope",
  type: "Field",
  item: 799,
  table: "HL70312",
  longName: "HL7Policy Scope"
});

/**
 * IN2.60 - Policy Source
 */
export const IN2_60 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.60",
  version: "2.8",
  description: "Policy Source",
  type: "Field",
  item: 800,
  table: "HL70313",
  longName: "HL7Policy Source"
});

/**
 * IN2.61 - Patient Member Number
 */
export const IN2_61 = datatypes.ST.register(hl7v2Metadata, {
  title: "IN2.61",
  version: "2.8",
  description: "Patient Member Number",
  type: "Field",
  item: 801,
  table: "",
  longName: "HL7Patient Member Number"
});

/**
 * IN2.62 - Guarantor's Relationship to Insured
 */
export const IN2_62 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.62",
  version: "2.8",
  description: "Guarantor's Relationship to Insured",
  type: "Field",
  item: 802,
  table: "HL70063",
  longName: "HL7Guarantor's Relationship to Insured"
});

/**
 * IN2.63 - Insured's Phone Number - Home
 */
export const IN2_63 = datatypes.XTN.register(hl7v2Metadata, {
  title: "IN2.63",
  version: "2.8",
  description: "Insured's Phone Number - Home",
  type: "Field",
  item: 803,
  table: "",
  longName: "HL7Insured's Phone Number - Home"
});

/**
 * IN2.64 - Insured's Employer Phone Number
 */
export const IN2_64 = datatypes.XTN.register(hl7v2Metadata, {
  title: "IN2.64",
  version: "2.8",
  description: "Insured's Employer Phone Number",
  type: "Field",
  item: 804,
  table: "",
  longName: "HL7Insured's Employer Phone Number"
});

/**
 * IN2.65 - Military Handicapped Program
 */
export const IN2_65 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.65",
  version: "2.8",
  description: "Military Handicapped Program",
  type: "Field",
  item: 805,
  table: "HL70343",
  longName: "HL7Military Handicapped Program"
});

/**
 * IN2.66 - Suspend Flag
 */
export const IN2_66 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.66",
  version: "2.8",
  description: "Suspend Flag",
  type: "Field",
  item: 806,
  table: "HL70136",
  longName: "HL7Suspend Flag",
  length: 1
});

/**
 * IN2.67 - Copay Limit Flag
 */
export const IN2_67 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.67",
  version: "2.8",
  description: "Copay Limit Flag",
  type: "Field",
  item: 807,
  table: "HL70136",
  longName: "HL7Copay Limit Flag",
  length: 1
});

/**
 * IN2.68 - Stoploss Limit Flag
 */
export const IN2_68 = datatypes.ID.register(hl7v2Metadata, {
  title: "IN2.68",
  version: "2.8",
  description: "Stoploss Limit Flag",
  type: "Field",
  item: 808,
  table: "HL70136",
  longName: "HL7Stoploss Limit Flag",
  length: 1
});

/**
 * IN2.69 - Insured Organization Name and ID
 */
export const IN2_69 = datatypes.XON.register(hl7v2Metadata, {
  title: "IN2.69",
  version: "2.8",
  description: "Insured Organization Name and ID",
  type: "Field",
  item: 809,
  table: "",
  longName: "HL7Insured Organization Name and ID"
});

/**
 * IN2.70 - Insured Employer Organization Name and ID
 */
export const IN2_70 = datatypes.XON.register(hl7v2Metadata, {
  title: "IN2.70",
  version: "2.8",
  description: "Insured Employer Organization Name and ID",
  type: "Field",
  item: 810,
  table: "",
  longName: "HL7Insured Employer Organization Name and ID"
});

/**
 * IN2.71 - Race
 */
export const IN2_71 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.71",
  version: "2.8",
  description: "Race",
  type: "Field",
  item: 113,
  table: "HL70005",
  longName: "HL7Race"
});

/**
 * IN2.72 - Patient's Relationship to Insured
 */
export const IN2_72 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IN2.72",
  version: "2.8",
  description: "Patient's Relationship to Insured",
  type: "Field",
  item: 811,
  table: "HL70344",
  longName: "HL7Patient's Relationship to Insured"
});
