import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 IN1 Fields
 * 
 * HL7 v2.8 IN1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IN1.1 - Set ID - IN1
 */
export const IN1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "IN1.1",
  "version": "2.8",
  "description": "Set ID - IN1",
  "type": "Field",
  "item": 426,
  "table": "",
  "longName": "HL7Set ID - IN1",
  "length": 4
});

/**
 * IN1.2 - Health Plan ID
 */
export const IN1_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.2",
  "version": "2.8",
  "description": "Health Plan ID",
  "type": "Field",
  "item": 368,
  "table": "HL70072",
  "longName": "HL7Health Plan ID"
});

/**
 * IN1.3 - Insurance Company ID
 */
export const IN1_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.3",
  "version": "2.8",
  "description": "Insurance Company ID",
  "type": "Field",
  "item": 428,
  "table": "",
  "longName": "HL7Insurance Company ID"
});

/**
 * IN1.4 - Insurance Company Name
 */
export const IN1_4 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IN1.4",
  "version": "2.8",
  "description": "Insurance Company Name",
  "type": "Field",
  "item": 429,
  "table": "",
  "longName": "HL7Insurance Company Name"
});

/**
 * IN1.5 - Insurance Company Address
 */
export const IN1_5 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "IN1.5",
  "version": "2.8",
  "description": "Insurance Company Address",
  "type": "Field",
  "item": 430,
  "table": "",
  "longName": "HL7Insurance Company Address"
});

/**
 * IN1.6 - Insurance Co Contact Person
 */
export const IN1_6 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "IN1.6",
  "version": "2.8",
  "description": "Insurance Co Contact Person",
  "type": "Field",
  "item": 431,
  "table": "",
  "longName": "HL7Insurance Co Contact Person"
});

/**
 * IN1.7 - Insurance Co Phone Number
 */
export const IN1_7 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "IN1.7",
  "version": "2.8",
  "description": "Insurance Co Phone Number",
  "type": "Field",
  "item": 432,
  "table": "",
  "longName": "HL7Insurance Co Phone Number"
});

/**
 * IN1.8 - Group Number
 */
export const IN1_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.8",
  "version": "2.8",
  "description": "Group Number",
  "type": "Field",
  "item": 433,
  "table": "",
  "longName": "HL7Group Number"
});

/**
 * IN1.9 - Group Name
 */
export const IN1_9 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IN1.9",
  "version": "2.8",
  "description": "Group Name",
  "type": "Field",
  "item": 434,
  "table": "",
  "longName": "HL7Group Name"
});

/**
 * IN1.10 - Insured's Group Emp ID
 */
export const IN1_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.10",
  "version": "2.8",
  "description": "Insured's Group Emp ID",
  "type": "Field",
  "item": 435,
  "table": "",
  "longName": "HL7Insured's Group Emp ID"
});

/**
 * IN1.11 - Insured's Group Emp Name
 */
export const IN1_11 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IN1.11",
  "version": "2.8",
  "description": "Insured's Group Emp Name",
  "type": "Field",
  "item": 436,
  "table": "",
  "longName": "HL7Insured's Group Emp Name"
});

/**
 * IN1.12 - Plan Effective Date
 */
export const IN1_12 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN1.12",
  "version": "2.8",
  "description": "Plan Effective Date",
  "type": "Field",
  "item": 437,
  "table": "",
  "longName": "HL7Plan Effective Date"
});

/**
 * IN1.13 - Plan Expiration Date
 */
export const IN1_13 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN1.13",
  "version": "2.8",
  "description": "Plan Expiration Date",
  "type": "Field",
  "item": 438,
  "table": "",
  "longName": "HL7Plan Expiration Date"
});

/**
 * IN1.14 - Authorization Information
 */
export const IN1_14 = datatypes.AUI.register(hl7v2Metadata, {
  "title": "IN1.14",
  "version": "2.8",
  "description": "Authorization Information",
  "type": "Field",
  "item": 439,
  "table": "",
  "longName": "HL7Authorization Information"
});

/**
 * IN1.15 - Plan Type
 */
export const IN1_15 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.15",
  "version": "2.8",
  "description": "Plan Type",
  "type": "Field",
  "item": 440,
  "table": "HL70086",
  "longName": "HL7Plan Type"
});

/**
 * IN1.16 - Name Of Insured
 */
export const IN1_16 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "IN1.16",
  "version": "2.8",
  "description": "Name Of Insured",
  "type": "Field",
  "item": 441,
  "table": "",
  "longName": "HL7Name Of Insured"
});

/**
 * IN1.17 - Insured's Relationship To Patient
 */
export const IN1_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.17",
  "version": "2.8",
  "description": "Insured's Relationship To Patient",
  "type": "Field",
  "item": 442,
  "table": "HL70063",
  "longName": "HL7Insured's Relationship To Patient"
});

/**
 * IN1.18 - Insured's Date Of Birth
 */
export const IN1_18 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IN1.18",
  "version": "2.8",
  "description": "Insured's Date Of Birth",
  "type": "Field",
  "item": 443,
  "table": "",
  "longName": "HL7Insured's Date Of Birth"
});

/**
 * IN1.19 - Insured's Address
 */
export const IN1_19 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "IN1.19",
  "version": "2.8",
  "description": "Insured's Address",
  "type": "Field",
  "item": 444,
  "table": "",
  "longName": "HL7Insured's Address"
});

/**
 * IN1.20 - Assignment Of Benefits
 */
export const IN1_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.20",
  "version": "2.8",
  "description": "Assignment Of Benefits",
  "type": "Field",
  "item": 445,
  "table": "HL70135",
  "longName": "HL7Assignment Of Benefits"
});

/**
 * IN1.21 - Coordination Of Benefits
 */
export const IN1_21 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.21",
  "version": "2.8",
  "description": "Coordination Of Benefits",
  "type": "Field",
  "item": 446,
  "table": "HL70173",
  "longName": "HL7Coordination Of Benefits"
});

/**
 * IN1.22 - Coord Of Ben. Priority
 */
export const IN1_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.22",
  "version": "2.8",
  "description": "Coord Of Ben. Priority",
  "type": "Field",
  "item": 447,
  "table": "",
  "longName": "HL7Coord Of Ben. Priority"
});

/**
 * IN1.23 - Notice Of Admission Flag
 */
export const IN1_23 = datatypes.ID.register(hl7v2Metadata, {
  "title": "IN1.23",
  "version": "2.8",
  "description": "Notice Of Admission Flag",
  "type": "Field",
  "item": 448,
  "table": "HL70136",
  "longName": "HL7Notice Of Admission Flag",
  "length": 1
});

/**
 * IN1.24 - Notice Of Admission Date
 */
export const IN1_24 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN1.24",
  "version": "2.8",
  "description": "Notice Of Admission Date",
  "type": "Field",
  "item": 449,
  "table": "",
  "longName": "HL7Notice Of Admission Date"
});

/**
 * IN1.25 - Report Of Eligibility Flag
 */
export const IN1_25 = datatypes.ID.register(hl7v2Metadata, {
  "title": "IN1.25",
  "version": "2.8",
  "description": "Report Of Eligibility Flag",
  "type": "Field",
  "item": 450,
  "table": "HL70136",
  "longName": "HL7Report Of Eligibility Flag",
  "length": 1
});

/**
 * IN1.26 - Report Of Eligibility Date
 */
export const IN1_26 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN1.26",
  "version": "2.8",
  "description": "Report Of Eligibility Date",
  "type": "Field",
  "item": 451,
  "table": "",
  "longName": "HL7Report Of Eligibility Date"
});

/**
 * IN1.27 - Release Information Code
 */
export const IN1_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.27",
  "version": "2.8",
  "description": "Release Information Code",
  "type": "Field",
  "item": 452,
  "table": "HL70093",
  "longName": "HL7Release Information Code"
});

/**
 * IN1.28 - Pre-Admit Cert (PAC)
 */
export const IN1_28 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.28",
  "version": "2.8",
  "description": "Pre-Admit Cert (PAC)",
  "type": "Field",
  "item": 453,
  "table": "",
  "longName": "HL7Pre-Admit Cert (PAC)"
});

/**
 * IN1.29 - Verification Date/Time
 */
export const IN1_29 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IN1.29",
  "version": "2.8",
  "description": "Verification Date/Time",
  "type": "Field",
  "item": 454,
  "table": "",
  "longName": "HL7Verification Date/Time"
});

/**
 * IN1.30 - Verification By
 */
export const IN1_30 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IN1.30",
  "version": "2.8",
  "description": "Verification By",
  "type": "Field",
  "item": 455,
  "table": "",
  "longName": "HL7Verification By"
});

/**
 * IN1.31 - Type Of Agreement Code
 */
export const IN1_31 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.31",
  "version": "2.8",
  "description": "Type Of Agreement Code",
  "type": "Field",
  "item": 456,
  "table": "HL70098",
  "longName": "HL7Type Of Agreement Code"
});

/**
 * IN1.32 - Billing Status
 */
export const IN1_32 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.32",
  "version": "2.8",
  "description": "Billing Status",
  "type": "Field",
  "item": 457,
  "table": "HL70022",
  "longName": "HL7Billing Status"
});

/**
 * IN1.33 - Lifetime Reserve Days
 */
export const IN1_33 = datatypes.NM.register(hl7v2Metadata, {
  "title": "IN1.33",
  "version": "2.8",
  "description": "Lifetime Reserve Days",
  "type": "Field",
  "item": 458,
  "table": "",
  "longName": "HL7Lifetime Reserve Days"
});

/**
 * IN1.34 - Delay Before L.R. Day
 */
export const IN1_34 = datatypes.NM.register(hl7v2Metadata, {
  "title": "IN1.34",
  "version": "2.8",
  "description": "Delay Before L.R. Day",
  "type": "Field",
  "item": 459,
  "table": "",
  "longName": "HL7Delay Before L.R. Day"
});

/**
 * IN1.35 - Company Plan Code
 */
export const IN1_35 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.35",
  "version": "2.8",
  "description": "Company Plan Code",
  "type": "Field",
  "item": 460,
  "table": "HL70042",
  "longName": "HL7Company Plan Code"
});

/**
 * IN1.36 - Policy Number
 */
export const IN1_36 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.36",
  "version": "2.8",
  "description": "Policy Number",
  "type": "Field",
  "item": 461,
  "table": "",
  "longName": "HL7Policy Number"
});

/**
 * IN1.37 - Policy Deductible
 */
export const IN1_37 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.37",
  "version": "2.8",
  "description": "Policy Deductible",
  "type": "Field",
  "item": 462,
  "table": "",
  "longName": "HL7Policy Deductible"
});

/**
 * IN1.39 - Policy Limit - Days
 */
export const IN1_39 = datatypes.NM.register(hl7v2Metadata, {
  "title": "IN1.39",
  "version": "2.8",
  "description": "Policy Limit - Days",
  "type": "Field",
  "item": 464,
  "table": "",
  "longName": "HL7Policy Limit - Days"
});

/**
 * IN1.42 - Insured's Employment Status
 */
export const IN1_42 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.42",
  "version": "2.8",
  "description": "Insured's Employment Status",
  "type": "Field",
  "item": 467,
  "table": "HL70066",
  "longName": "HL7Insured's Employment Status"
});

/**
 * IN1.43 - Insured's Administrative Sex
 */
export const IN1_43 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.43",
  "version": "2.8",
  "description": "Insured's Administrative Sex",
  "type": "Field",
  "item": 468,
  "table": "HL70001",
  "longName": "HL7Insured's Administrative Sex"
});

/**
 * IN1.44 - Insured's Employer's Address
 */
export const IN1_44 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "IN1.44",
  "version": "2.8",
  "description": "Insured's Employer's Address",
  "type": "Field",
  "item": 469,
  "table": "",
  "longName": "HL7Insured's Employer's Address"
});

/**
 * IN1.45 - Verification Status
 */
export const IN1_45 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.45",
  "version": "2.8",
  "description": "Verification Status",
  "type": "Field",
  "item": 470,
  "table": "",
  "longName": "HL7Verification Status"
});

/**
 * IN1.46 - Prior Insurance Plan ID
 */
export const IN1_46 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.46",
  "version": "2.8",
  "description": "Prior Insurance Plan ID",
  "type": "Field",
  "item": 471,
  "table": "HL70072",
  "longName": "HL7Prior Insurance Plan ID"
});

/**
 * IN1.47 - Coverage Type
 */
export const IN1_47 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.47",
  "version": "2.8",
  "description": "Coverage Type",
  "type": "Field",
  "item": 1227,
  "table": "HL70309",
  "longName": "HL7Coverage Type"
});

/**
 * IN1.48 - Handicap
 */
export const IN1_48 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.48",
  "version": "2.8",
  "description": "Handicap",
  "type": "Field",
  "item": 753,
  "table": "HL70295",
  "longName": "HL7Handicap"
});

/**
 * IN1.49 - Insured's ID Number
 */
export const IN1_49 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.49",
  "version": "2.8",
  "description": "Insured's ID Number",
  "type": "Field",
  "item": 1230,
  "table": "",
  "longName": "HL7Insured's ID Number"
});

/**
 * IN1.50 - Signature Code
 */
export const IN1_50 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.50",
  "version": "2.8",
  "description": "Signature Code",
  "type": "Field",
  "item": 1854,
  "table": "HL70535",
  "longName": "HL7Signature Code"
});

/**
 * IN1.51 - Signature Code Date
 */
export const IN1_51 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN1.51",
  "version": "2.8",
  "description": "Signature Code Date",
  "type": "Field",
  "item": 1855,
  "table": "",
  "longName": "HL7Signature Code Date"
});

/**
 * IN1.52 - Insured's Birth Place
 */
export const IN1_52 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.52",
  "version": "2.8",
  "description": "Insured's Birth Place",
  "type": "Field",
  "item": 1899,
  "table": "",
  "longName": "HL7Insured's Birth Place"
});

/**
 * IN1.53 - VIP Indicator
 */
export const IN1_53 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN1.53",
  "version": "2.8",
  "description": "VIP Indicator",
  "type": "Field",
  "item": 1852,
  "table": "HL70099",
  "longName": "HL7VIP Indicator"
});

/**
 * IN1.54 - External Health Plan Identifiers
 */
export const IN1_54 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN1.54",
  "version": "2.8",
  "description": "External Health Plan Identifiers",
  "type": "Field",
  "item": 3292,
  "table": "",
  "longName": "HL7External Health Plan Identifiers"
});

/**
 * IN1.55 - Insurance Action Code
 */
export const IN1_55 = datatypes.ID.register(hl7v2Metadata, {
  "title": "IN1.55",
  "version": "2.8",
  "description": "Insurance Action Code",
  "type": "Field",
  "item": 3335,
  "table": "HL70206",
  "longName": "HL7Insurance Action Code"
});
