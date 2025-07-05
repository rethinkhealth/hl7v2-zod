import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 GT1 Fields
 *
 * HL7 v2.6 GT1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GT1.1 - Set ID - GT1
 */
export const GT1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "GT1.1",
  version: "2.6",
  description: "Set ID - GT1",
  type: "Field",
  item: 405,
  table: "",
  longName: "HL7Set ID - GT1",
  length: 4
});

/**
 * GT1.2 - Guarantor Number
 */
export const GT1_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.2",
  version: "2.6",
  description: "Guarantor Number",
  type: "Field",
  item: 406,
  table: "",
  longName: "HL7Guarantor Number",
  length: 250
});

/**
 * GT1.3 - Guarantor Name
 */
export const GT1_3 = datatypes.XPN.register(hl7v2Metadata, {
  title: "GT1.3",
  version: "2.6",
  description: "Guarantor Name",
  type: "Field",
  item: 407,
  table: "",
  longName: "HL7Guarantor Name",
  length: 250
});

/**
 * GT1.4 - Guarantor Spouse Name
 */
export const GT1_4 = datatypes.XPN.register(hl7v2Metadata, {
  title: "GT1.4",
  version: "2.6",
  description: "Guarantor Spouse Name",
  type: "Field",
  item: 408,
  table: "",
  longName: "HL7Guarantor Spouse Name",
  length: 250
});

/**
 * GT1.5 - Guarantor Address
 */
export const GT1_5 = datatypes.XAD.register(hl7v2Metadata, {
  title: "GT1.5",
  version: "2.6",
  description: "Guarantor Address",
  type: "Field",
  item: 409,
  table: "",
  longName: "HL7Guarantor Address",
  length: 250
});

/**
 * GT1.6 - Guarantor Ph Num - Home
 */
export const GT1_6 = datatypes.XTN.register(hl7v2Metadata, {
  title: "GT1.6",
  version: "2.6",
  description: "Guarantor Ph Num - Home",
  type: "Field",
  item: 410,
  table: "",
  longName: "HL7Guarantor Ph Num - Home",
  length: 250
});

/**
 * GT1.7 - Guarantor Ph Num - Business
 */
export const GT1_7 = datatypes.XTN.register(hl7v2Metadata, {
  title: "GT1.7",
  version: "2.6",
  description: "Guarantor Ph Num - Business",
  type: "Field",
  item: 411,
  table: "",
  longName: "HL7Guarantor Ph Num - Business",
  length: 250
});

/**
 * GT1.8 - Guarantor Date/Time Of Birth
 */
export const GT1_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: "GT1.8",
  version: "2.6",
  description: "Guarantor Date/Time Of Birth",
  type: "Field",
  item: 412,
  table: "",
  longName: "HL7Guarantor Date/Time Of Birth",
  length: 24
});

/**
 * GT1.9 - Guarantor Administrative Sex
 */
export const GT1_9 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.9",
  version: "2.6",
  description: "Guarantor Administrative Sex",
  type: "Field",
  item: 413,
  table: "HL70001",
  longName: "HL7Guarantor Administrative Sex",
  length: 1
});

/**
 * GT1.10 - Guarantor Type
 */
export const GT1_10 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.10",
  version: "2.6",
  description: "Guarantor Type",
  type: "Field",
  item: 414,
  table: "HL70068",
  longName: "HL7Guarantor Type",
  length: 2
});

/**
 * GT1.11 - Guarantor Relationship
 */
export const GT1_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.11",
  version: "2.6",
  description: "Guarantor Relationship",
  type: "Field",
  item: 415,
  table: "HL70063",
  longName: "HL7Guarantor Relationship",
  length: 250
});

/**
 * GT1.12 - Guarantor SSN
 */
export const GT1_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.12",
  version: "2.6",
  description: "Guarantor SSN",
  type: "Field",
  item: 416,
  table: "",
  longName: "HL7Guarantor SSN",
  length: 11
});

/**
 * GT1.13 - Guarantor Date - Begin
 */
export const GT1_13 = datatypes.DT.register(hl7v2Metadata, {
  title: "GT1.13",
  version: "2.6",
  description: "Guarantor Date - Begin",
  type: "Field",
  item: 417,
  table: "",
  longName: "HL7Guarantor Date - Begin",
  length: 8
});

/**
 * GT1.14 - Guarantor Date - End
 */
export const GT1_14 = datatypes.DT.register(hl7v2Metadata, {
  title: "GT1.14",
  version: "2.6",
  description: "Guarantor Date - End",
  type: "Field",
  item: 418,
  table: "",
  longName: "HL7Guarantor Date - End",
  length: 8
});

/**
 * GT1.15 - Guarantor Priority
 */
export const GT1_15 = datatypes.NM.register(hl7v2Metadata, {
  title: "GT1.15",
  version: "2.6",
  description: "Guarantor Priority",
  type: "Field",
  item: 419,
  table: "",
  longName: "HL7Guarantor Priority",
  length: 2
});

/**
 * GT1.16 - Guarantor Employer Name
 */
export const GT1_16 = datatypes.XPN.register(hl7v2Metadata, {
  title: "GT1.16",
  version: "2.6",
  description: "Guarantor Employer Name",
  type: "Field",
  item: 420,
  table: "",
  longName: "HL7Guarantor Employer Name",
  length: 250
});

/**
 * GT1.17 - Guarantor Employer Address
 */
export const GT1_17 = datatypes.XAD.register(hl7v2Metadata, {
  title: "GT1.17",
  version: "2.6",
  description: "Guarantor Employer Address",
  type: "Field",
  item: 421,
  table: "",
  longName: "HL7Guarantor Employer Address",
  length: 250
});

/**
 * GT1.18 - Guarantor Employer Phone Number
 */
export const GT1_18 = datatypes.XTN.register(hl7v2Metadata, {
  title: "GT1.18",
  version: "2.6",
  description: "Guarantor Employer Phone Number",
  type: "Field",
  item: 422,
  table: "",
  longName: "HL7Guarantor Employer Phone Number",
  length: 250
});

/**
 * GT1.19 - Guarantor Employee ID Number
 */
export const GT1_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.19",
  version: "2.6",
  description: "Guarantor Employee ID Number",
  type: "Field",
  item: 423,
  table: "",
  longName: "HL7Guarantor Employee ID Number",
  length: 250
});

/**
 * GT1.20 - Guarantor Employment Status
 */
export const GT1_20 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.20",
  version: "2.6",
  description: "Guarantor Employment Status",
  type: "Field",
  item: 424,
  table: "HL70066",
  longName: "HL7Guarantor Employment Status",
  length: 2
});

/**
 * GT1.21 - Guarantor Organization Name
 */
export const GT1_21 = datatypes.XON.register(hl7v2Metadata, {
  title: "GT1.21",
  version: "2.6",
  description: "Guarantor Organization Name",
  type: "Field",
  item: 425,
  table: "",
  longName: "HL7Guarantor Organization Name",
  length: 250
});

/**
 * GT1.22 - Guarantor Billing Hold Flag
 */
export const GT1_22 = datatypes.ID.register(hl7v2Metadata, {
  title: "GT1.22",
  version: "2.6",
  description: "Guarantor Billing Hold Flag",
  type: "Field",
  item: 773,
  table: "HL70136",
  longName: "HL7Guarantor Billing Hold Flag",
  length: 1
});

/**
 * GT1.23 - Guarantor Credit Rating Code
 */
export const GT1_23 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.23",
  version: "2.6",
  description: "Guarantor Credit Rating Code",
  type: "Field",
  item: 774,
  table: "HL70341",
  longName: "HL7Guarantor Credit Rating Code",
  length: 250
});

/**
 * GT1.24 - Guarantor Death Date And Time
 */
export const GT1_24 = datatypes.DTM.register(hl7v2Metadata, {
  title: "GT1.24",
  version: "2.6",
  description: "Guarantor Death Date And Time",
  type: "Field",
  item: 775,
  table: "",
  longName: "HL7Guarantor Death Date And Time",
  length: 24
});

/**
 * GT1.25 - Guarantor Death Flag
 */
export const GT1_25 = datatypes.ID.register(hl7v2Metadata, {
  title: "GT1.25",
  version: "2.6",
  description: "Guarantor Death Flag",
  type: "Field",
  item: 776,
  table: "HL70136",
  longName: "HL7Guarantor Death Flag",
  length: 1
});

/**
 * GT1.26 - Guarantor Charge Adjustment Code
 */
export const GT1_26 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.26",
  version: "2.6",
  description: "Guarantor Charge Adjustment Code",
  type: "Field",
  item: 777,
  table: "HL70218",
  longName: "HL7Guarantor Charge Adjustment Code",
  length: 250
});

/**
 * GT1.27 - Guarantor Household Annual Income
 */
export const GT1_27 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.27",
  version: "2.6",
  description: "Guarantor Household Annual Income",
  type: "Field",
  item: 778,
  table: "",
  longName: "HL7Guarantor Household Annual Income",
  length: 10
});

/**
 * GT1.28 - Guarantor Household Size
 */
export const GT1_28 = datatypes.NM.register(hl7v2Metadata, {
  title: "GT1.28",
  version: "2.6",
  description: "Guarantor Household Size",
  type: "Field",
  item: 779,
  table: "",
  longName: "HL7Guarantor Household Size",
  length: 3
});

/**
 * GT1.29 - Guarantor Employer ID Number
 */
export const GT1_29 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.29",
  version: "2.6",
  description: "Guarantor Employer ID Number",
  type: "Field",
  item: 780,
  table: "",
  longName: "HL7Guarantor Employer ID Number",
  length: 250
});

/**
 * GT1.30 - Guarantor Marital Status Code
 */
export const GT1_30 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.30",
  version: "2.6",
  description: "Guarantor Marital Status Code",
  type: "Field",
  item: 781,
  table: "HL70002",
  longName: "HL7Guarantor Marital Status Code",
  length: 250
});

/**
 * GT1.31 - Guarantor Hire Effective Date
 */
export const GT1_31 = datatypes.DT.register(hl7v2Metadata, {
  title: "GT1.31",
  version: "2.6",
  description: "Guarantor Hire Effective Date",
  type: "Field",
  item: 782,
  table: "",
  longName: "HL7Guarantor Hire Effective Date",
  length: 8
});

/**
 * GT1.32 - Employment Stop Date
 */
export const GT1_32 = datatypes.DT.register(hl7v2Metadata, {
  title: "GT1.32",
  version: "2.6",
  description: "Employment Stop Date",
  type: "Field",
  item: 783,
  table: "",
  longName: "HL7Employment Stop Date",
  length: 8
});

/**
 * GT1.33 - Living Dependency
 */
export const GT1_33 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.33",
  version: "2.6",
  description: "Living Dependency",
  type: "Field",
  item: 755,
  table: "HL70223",
  longName: "HL7Living Dependency",
  length: 2
});

/**
 * GT1.34 - Ambulatory Status
 */
export const GT1_34 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.34",
  version: "2.6",
  description: "Ambulatory Status",
  type: "Field",
  item: 145,
  table: "HL70009",
  longName: "HL7Ambulatory Status",
  length: 2
});

/**
 * GT1.35 - Citizenship
 */
export const GT1_35 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.35",
  version: "2.6",
  description: "Citizenship",
  type: "Field",
  item: 129,
  table: "HL70171",
  longName: "HL7Citizenship",
  length: 705
});

/**
 * GT1.36 - Primary Language
 */
export const GT1_36 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.36",
  version: "2.6",
  description: "Primary Language",
  type: "Field",
  item: 118,
  table: "HL70296",
  longName: "HL7Primary Language",
  length: 705
});

/**
 * GT1.37 - Living Arrangement
 */
export const GT1_37 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.37",
  version: "2.6",
  description: "Living Arrangement",
  type: "Field",
  item: 742,
  table: "HL70220",
  longName: "HL7Living Arrangement",
  length: 2
});

/**
 * GT1.38 - Publicity Code
 */
export const GT1_38 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.38",
  version: "2.6",
  description: "Publicity Code",
  type: "Field",
  item: 743,
  table: "HL70215",
  longName: "HL7Publicity Code",
  length: 705
});

/**
 * GT1.39 - Protection Indicator
 */
export const GT1_39 = datatypes.ID.register(hl7v2Metadata, {
  title: "GT1.39",
  version: "2.6",
  description: "Protection Indicator",
  type: "Field",
  item: 744,
  table: "HL70136",
  longName: "HL7Protection Indicator"
});

/**
 * GT1.40 - Student Indicator
 */
export const GT1_40 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.40",
  version: "2.6",
  description: "Student Indicator",
  type: "Field",
  item: 745,
  table: "HL70231",
  longName: "HL7Student Indicator",
  length: 2
});

/**
 * GT1.41 - Religion
 */
export const GT1_41 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.41",
  version: "2.6",
  description: "Religion",
  type: "Field",
  item: 120,
  table: "HL70006",
  longName: "HL7Religion",
  length: 705
});

/**
 * GT1.42 - Mother's Maiden Name
 */
export const GT1_42 = datatypes.XPN.register(hl7v2Metadata, {
  title: "GT1.42",
  version: "2.6",
  description: "Mother's Maiden Name",
  type: "Field",
  item: 109,
  table: "",
  longName: "HL7Mother's Maiden Name",
  length: 250
});

/**
 * GT1.43 - Nationality
 */
export const GT1_43 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.43",
  version: "2.6",
  description: "Nationality",
  type: "Field",
  item: 739,
  table: "HL70212",
  longName: "HL7Nationality"
});

/**
 * GT1.44 - Ethnic Group
 */
export const GT1_44 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.44",
  version: "2.6",
  description: "Ethnic Group",
  type: "Field",
  item: 125,
  table: "HL70189",
  longName: "HL7Ethnic Group",
  length: 705
});

/**
 * GT1.45 - Contact Person's Name
 */
export const GT1_45 = datatypes.XPN.register(hl7v2Metadata, {
  title: "GT1.45",
  version: "2.6",
  description: "Contact Person's Name",
  type: "Field",
  item: 748,
  table: "HL70200",
  longName: "HL7Contact Person's Name",
  length: 250
});

/**
 * GT1.46 - Contact Person's Telephone Number
 */
export const GT1_46 = datatypes.XTN.register(hl7v2Metadata, {
  title: "GT1.46",
  version: "2.6",
  description: "Contact Person's Telephone Number",
  type: "Field",
  item: 749,
  table: "",
  longName: "HL7Contact Person's Telephone Number",
  length: 250
});

/**
 * GT1.47 - Contact Reason
 */
export const GT1_47 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.47",
  version: "2.6",
  description: "Contact Reason",
  type: "Field",
  item: 747,
  table: "HL70222",
  longName: "HL7Contact Reason",
  length: 705
});

/**
 * GT1.48 - Contact Relationship
 */
export const GT1_48 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.48",
  version: "2.6",
  description: "Contact Relationship",
  type: "Field",
  item: 784,
  table: "HL70063",
  longName: "HL7Contact Relationship",
  length: 3
});

/**
 * GT1.49 - Job Title
 */
export const GT1_49 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.49",
  version: "2.6",
  description: "Job Title",
  type: "Field",
  item: 785,
  table: "",
  longName: "HL7Job Title",
  length: 20
});

/**
 * GT1.50 - Job Code/Class
 */
export const GT1_50 = datatypes.JCC.register(hl7v2Metadata, {
  title: "GT1.50",
  version: "2.6",
  description: "Job Code/Class",
  type: "Field",
  item: 786,
  table: "",
  longName: "HL7Job Code/Class",
  length: 20
});

/**
 * GT1.51 - Guarantor Employer's Organization Name
 */
export const GT1_51 = datatypes.XON.register(hl7v2Metadata, {
  title: "GT1.51",
  version: "2.6",
  description: "Guarantor Employer's Organization Name",
  type: "Field",
  item: 1299,
  table: "",
  longName: "HL7Guarantor Employer's Organization Name",
  length: 250
});

/**
 * GT1.52 - Handicap
 */
export const GT1_52 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.52",
  version: "2.6",
  description: "Handicap",
  type: "Field",
  item: 753,
  table: "HL70295",
  longName: "HL7Handicap",
  length: 2
});

/**
 * GT1.53 - Job Status
 */
export const GT1_53 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.53",
  version: "2.6",
  description: "Job Status",
  type: "Field",
  item: 752,
  table: "HL70311",
  longName: "HL7Job Status",
  length: 2
});

/**
 * GT1.54 - Guarantor Financial Class
 */
export const GT1_54 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.54",
  version: "2.6",
  description: "Guarantor Financial Class",
  type: "Field",
  item: 1231,
  table: "",
  longName: "HL7Guarantor Financial Class",
  length: 50
});

/**
 * GT1.55 - Guarantor Race
 */
export const GT1_55 = datatypes.CWE.register(hl7v2Metadata, {
  title: "GT1.55",
  version: "2.6",
  description: "Guarantor Race",
  type: "Field",
  item: 1291,
  table: "HL70005",
  longName: "HL7Guarantor Race",
  length: 250
});

/**
 * GT1.56 - Guarantor Birth Place
 */
export const GT1_56 = datatypes.ST.register(hl7v2Metadata, {
  title: "GT1.56",
  version: "2.6",
  description: "Guarantor Birth Place",
  type: "Field",
  item: 1851,
  table: "",
  longName: "HL7Guarantor Birth Place",
  length: 250
});

/**
 * GT1.57 - VIP Indicator
 */
export const GT1_57 = datatypes.IS.register(hl7v2Metadata, {
  title: "GT1.57",
  version: "2.6",
  description: "VIP Indicator",
  type: "Field",
  item: 146,
  table: "HL70099",
  longName: "HL7VIP Indicator",
  length: 2
});
