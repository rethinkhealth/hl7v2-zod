import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 AUT Fields
 *
 * HL7 v2.8 AUT field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AUT.1 - Authorizing Payor, Plan ID
 */
export const AUT_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.1",
  version: "2.8",
  description: "Authorizing Payor, Plan ID",
  type: "Field",
  item: 1146,
  table: "HL70072",
  longName: "HL7Authorizing Payor, Plan ID"
});

/**
 * AUT.2 - Authorizing Payor, Company ID
 */
export const AUT_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.2",
  version: "2.8",
  description: "Authorizing Payor, Company ID",
  type: "Field",
  item: 1147,
  table: "HL70285",
  longName: "HL7Authorizing Payor, Company ID"
});

/**
 * AUT.3 - Authorizing Payor, Company Name
 */
export const AUT_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.3",
  version: "2.8",
  description: "Authorizing Payor, Company Name",
  type: "Field",
  item: 1148,
  table: "",
  longName: "HL7Authorizing Payor, Company Name"
});

/**
 * AUT.4 - Authorization Effective Date
 */
export const AUT_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AUT.4",
  version: "2.8",
  description: "Authorization Effective Date",
  type: "Field",
  item: 1149,
  table: "",
  longName: "HL7Authorization Effective Date"
});

/**
 * AUT.5 - Authorization Expiration Date
 */
export const AUT_5 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AUT.5",
  version: "2.8",
  description: "Authorization Expiration Date",
  type: "Field",
  item: 1150,
  table: "",
  longName: "HL7Authorization Expiration Date"
});

/**
 * AUT.6 - Authorization Identifier
 */
export const AUT_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.6",
  version: "2.8",
  description: "Authorization Identifier",
  type: "Field",
  item: 1151,
  table: "",
  longName: "HL7Authorization Identifier"
});

/**
 * AUT.7 - Reimbursement Limit
 */
export const AUT_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.7",
  version: "2.8",
  description: "Reimbursement Limit",
  type: "Field",
  item: 1152,
  table: "",
  longName: "HL7Reimbursement Limit"
});

/**
 * AUT.8 - Requested Number of Treatments
 */
export const AUT_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.8",
  version: "2.8",
  description: "Requested Number of Treatments",
  type: "Field",
  item: 1153,
  table: "",
  longName: "HL7Requested Number of Treatments"
});

/**
 * AUT.9 - Authorized Number of Treatments
 */
export const AUT_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.9",
  version: "2.8",
  description: "Authorized Number of Treatments",
  type: "Field",
  item: 1154,
  table: "",
  longName: "HL7Authorized Number of Treatments"
});

/**
 * AUT.10 - Process Date
 */
export const AUT_10 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AUT.10",
  version: "2.8",
  description: "Process Date",
  type: "Field",
  item: 1145,
  table: "",
  longName: "HL7Process Date"
});

/**
 * AUT.11 - Requested Discipline(s)
 */
export const AUT_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.11",
  version: "2.8",
  description: "Requested Discipline(s)",
  type: "Field",
  item: 2375,
  table: "",
  longName: "HL7Requested Discipline(s)"
});

/**
 * AUT.12 - Authorized Discipline(s)
 */
export const AUT_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.12",
  version: "2.8",
  description: "Authorized Discipline(s)",
  type: "Field",
  item: 2376,
  table: "",
  longName: "HL7Authorized Discipline(s)"
});

/**
 * AUT.13 - Authorization Referral Type
 */
export const AUT_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.13",
  version: "2.8",
  description: "Authorization Referral Type",
  type: "Field",
  item: 3413,
  table: "",
  longName: "HL7Authorization Referral Type",
  length: 250
});

/**
 * AUT.14 - Approval Status
 */
export const AUT_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.14",
  version: "2.8",
  description: "Approval Status",
  type: "Field",
  item: 3414,
  table: "",
  longName: "HL7Approval Status",
  length: 250
});

/**
 * AUT.15 - Planned Treatment Stop Date
 */
export const AUT_15 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AUT.15",
  version: "2.8",
  description: "Planned Treatment Stop Date",
  type: "Field",
  item: 3415,
  table: "",
  longName: "HL7Planned Treatment Stop Date"
});

/**
 * AUT.16 - Clinical Service
 */
export const AUT_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.16",
  version: "2.8",
  description: "Clinical Service",
  type: "Field",
  item: 3416,
  table: "",
  longName: "HL7Clinical Service",
  length: 250
});

/**
 * AUT.17 - Reason Text
 */
export const AUT_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.17",
  version: "2.8",
  description: "Reason Text",
  type: "Field",
  item: 3417,
  table: "",
  longName: "HL7Reason Text",
  length: 60
});

/**
 * AUT.18 - Number of Authorized Treatments/Units
 */
export const AUT_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.18",
  version: "2.8",
  description: "Number of Authorized Treatments/Units",
  type: "Field",
  item: 3418,
  table: "",
  longName: "HL7Number of Authorized Treatments/Units"
});

/**
 * AUT.19 - Number of Used Treatments/Units
 */
export const AUT_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.19",
  version: "2.8",
  description: "Number of Used Treatments/Units",
  type: "Field",
  item: 3419,
  table: "",
  longName: "HL7Number of Used Treatments/Units"
});

/**
 * AUT.20 - Number of Schedule Treatments/Units
 */
export const AUT_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.20",
  version: "2.8",
  description: "Number of Schedule Treatments/Units",
  type: "Field",
  item: 3420,
  table: "",
  longName: "HL7Number of Schedule Treatments/Units"
});

/**
 * AUT.21 - Encounter Type
 */
export const AUT_21 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AUT.21",
  version: "2.8",
  description: "Encounter Type",
  type: "Field",
  item: 3421,
  table: "",
  longName: "HL7Encounter Type",
  length: 250
});

/**
 * AUT.22 - Remaining Benefit Amount
 */
export const AUT_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.22",
  version: "2.8",
  description: "Remaining Benefit Amount",
  type: "Field",
  item: 3422,
  table: "",
  longName: "HL7Remaining Benefit Amount"
});

/**
 * AUT.23 - Authorized Provider
 */
export const AUT_23 = datatypes.XON.register(hl7v2Metadata, {
  title: "AUT.23",
  version: "2.8",
  description: "Authorized Provider",
  type: "Field",
  item: 3423,
  table: "",
  longName: "HL7Authorized Provider",
  length: 250
});

/**
 * AUT.24 - Authorized Health Professional
 */
export const AUT_24 = datatypes.XCN.register(hl7v2Metadata, {
  title: "AUT.24",
  version: "2.8",
  description: "Authorized Health Professional",
  type: "Field",
  item: 3424,
  table: "",
  longName: "HL7Authorized Health Professional",
  length: 250
});

/**
 * AUT.25 - Source Text
 */
export const AUT_25 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.25",
  version: "2.8",
  description: "Source Text",
  type: "Field",
  item: 3425,
  table: "",
  longName: "HL7Source Text",
  length: 60
});

/**
 * AUT.26 - Source Date
 */
export const AUT_26 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AUT.26",
  version: "2.8",
  description: "Source Date",
  type: "Field",
  item: 3426,
  table: "",
  longName: "HL7Source Date"
});

/**
 * AUT.27 - Source Phone
 */
export const AUT_27 = datatypes.XTN.register(hl7v2Metadata, {
  title: "AUT.27",
  version: "2.8",
  description: "Source Phone",
  type: "Field",
  item: 3427,
  table: "",
  longName: "HL7Source Phone",
  length: 250
});

/**
 * AUT.28 - Comment
 */
export const AUT_28 = datatypes.ST.register(hl7v2Metadata, {
  title: "AUT.28",
  version: "2.8",
  description: "Comment",
  type: "Field",
  item: 3428,
  table: "",
  longName: "HL7Comment"
});

/**
 * AUT.29 - Action Code
 */
export const AUT_29 = datatypes.ID.register(hl7v2Metadata, {
  title: "AUT.29",
  version: "2.8",
  description: "Action Code",
  type: "Field",
  item: 3429,
  table: "HL70206",
  longName: "HL7Action Code"
});
