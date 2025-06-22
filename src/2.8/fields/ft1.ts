import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 FT1 Fields
 * 
 * HL7 v2.8 FT1 field definitions
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
  "title": "FT1.1",
  "version": "2.8",
  "description": "Set ID - FT1",
  "type": "Field",
  "item": 355,
  "table": "",
  "longName": "HL7Set ID - FT1",
  "length": 4
});

/**
 * FT1.2 - Transaction ID
 */
export const FT1_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.2",
  "version": "2.8",
  "description": "Transaction ID",
  "type": "Field",
  "item": 356,
  "table": "",
  "longName": "HL7Transaction ID",
  "length": 12
});

/**
 * FT1.3 - Transaction Batch ID
 */
export const FT1_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.3",
  "version": "2.8",
  "description": "Transaction Batch ID",
  "type": "Field",
  "item": 357,
  "table": "",
  "longName": "HL7Transaction Batch ID",
  "length": 10
});

/**
 * FT1.4 - Transaction Date
 */
export const FT1_4 = datatypes.DR.register(hl7v2Metadata, {
  "title": "FT1.4",
  "version": "2.8",
  "description": "Transaction Date",
  "type": "Field",
  "item": 358,
  "table": "",
  "longName": "HL7Transaction Date"
});

/**
 * FT1.5 - Transaction Posting Date
 */
export const FT1_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "FT1.5",
  "version": "2.8",
  "description": "Transaction Posting Date",
  "type": "Field",
  "item": 359,
  "table": "",
  "longName": "HL7Transaction Posting Date"
});

/**
 * FT1.6 - Transaction Type
 */
export const FT1_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.6",
  "version": "2.8",
  "description": "Transaction Type",
  "type": "Field",
  "item": 360,
  "table": "HL70017",
  "longName": "HL7Transaction Type"
});

/**
 * FT1.7 - Transaction Code
 */
export const FT1_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.7",
  "version": "2.8",
  "description": "Transaction Code",
  "type": "Field",
  "item": 361,
  "table": "HL70132",
  "longName": "HL7Transaction Code"
});

/**
 * FT1.10 - Transaction Quantity
 */
export const FT1_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "FT1.10",
  "version": "2.8",
  "description": "Transaction Quantity",
  "type": "Field",
  "item": 364,
  "table": "",
  "longName": "HL7Transaction Quantity"
});

/**
 * FT1.11 - Transaction Amount - Extended
 */
export const FT1_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.11",
  "version": "2.8",
  "description": "Transaction Amount - Extended",
  "type": "Field",
  "item": 365,
  "table": "",
  "longName": "HL7Transaction Amount - Extended"
});

/**
 * FT1.12 - Transaction amount - unit
 */
export const FT1_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.12",
  "version": "2.8",
  "description": "Transaction amount - unit",
  "type": "Field",
  "item": 366,
  "table": "",
  "longName": "HL7Transaction amount - unit"
});

/**
 * FT1.13 - Department Code
 */
export const FT1_13 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.13",
  "version": "2.8",
  "description": "Department Code",
  "type": "Field",
  "item": 367,
  "table": "HL70049",
  "longName": "HL7Department Code"
});

/**
 * FT1.14 - Health Plan ID
 */
export const FT1_14 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.14",
  "version": "2.8",
  "description": "Health Plan ID",
  "type": "Field",
  "item": 368,
  "table": "HL70072",
  "longName": "HL7Health Plan ID"
});

/**
 * FT1.15 - Insurance Amount
 */
export const FT1_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.15",
  "version": "2.8",
  "description": "Insurance Amount",
  "type": "Field",
  "item": 369,
  "table": "",
  "longName": "HL7Insurance Amount"
});

/**
 * FT1.16 - Assigned Patient Location
 */
export const FT1_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.16",
  "version": "2.8",
  "description": "Assigned Patient Location",
  "type": "Field",
  "item": 133,
  "table": "",
  "longName": "HL7Assigned Patient Location"
});

/**
 * FT1.17 - Fee Schedule
 */
export const FT1_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.17",
  "version": "2.8",
  "description": "Fee Schedule",
  "type": "Field",
  "item": 370,
  "table": "HL70024",
  "longName": "HL7Fee Schedule"
});

/**
 * FT1.18 - Patient Type
 */
export const FT1_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.18",
  "version": "2.8",
  "description": "Patient Type",
  "type": "Field",
  "item": 148,
  "table": "HL70018",
  "longName": "HL7Patient Type"
});

/**
 * FT1.19 - Diagnosis Code - FT1
 */
export const FT1_19 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.19",
  "version": "2.8",
  "description": "Diagnosis Code - FT1",
  "type": "Field",
  "item": 371,
  "table": "HL70051",
  "longName": "HL7Diagnosis Code - FT1"
});

/**
 * FT1.20 - Performed By Code
 */
export const FT1_20 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "FT1.20",
  "version": "2.8",
  "description": "Performed By Code",
  "type": "Field",
  "item": 372,
  "table": "HL70084",
  "longName": "HL7Performed By Code"
});

/**
 * FT1.21 - Ordered By Code
 */
export const FT1_21 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "FT1.21",
  "version": "2.8",
  "description": "Ordered By Code",
  "type": "Field",
  "item": 373,
  "table": "",
  "longName": "HL7Ordered By Code"
});

/**
 * FT1.22 - Unit Cost
 */
export const FT1_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.22",
  "version": "2.8",
  "description": "Unit Cost",
  "type": "Field",
  "item": 374,
  "table": "",
  "longName": "HL7Unit Cost"
});

/**
 * FT1.23 - Filler Order Number
 */
export const FT1_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.23",
  "version": "2.8",
  "description": "Filler Order Number",
  "type": "Field",
  "item": 217,
  "table": "",
  "longName": "HL7Filler Order Number"
});

/**
 * FT1.24 - Entered By Code
 */
export const FT1_24 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "FT1.24",
  "version": "2.8",
  "description": "Entered By Code",
  "type": "Field",
  "item": 765,
  "table": "",
  "longName": "HL7Entered By Code"
});

/**
 * FT1.25 - Procedure Code
 */
export const FT1_25 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "FT1.25",
  "version": "2.8",
  "description": "Procedure Code",
  "type": "Field",
  "item": 393,
  "table": "HL70088",
  "longName": "HL7Procedure Code"
});

/**
 * FT1.26 - Procedure Code Modifier
 */
export const FT1_26 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "FT1.26",
  "version": "2.8",
  "description": "Procedure Code Modifier",
  "type": "Field",
  "item": 1316,
  "table": "HL70340",
  "longName": "HL7Procedure Code Modifier"
});

/**
 * FT1.27 - Advanced Beneficiary Notice Code
 */
export const FT1_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.27",
  "version": "2.8",
  "description": "Advanced Beneficiary Notice Code",
  "type": "Field",
  "item": 1310,
  "table": "HL70339",
  "longName": "HL7Advanced Beneficiary Notice Code"
});

/**
 * FT1.28 - Medically Necessary Duplicate Procedure Reason
 */
export const FT1_28 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.28",
  "version": "2.8",
  "description": "Medically Necessary Duplicate Procedure Reason",
  "type": "Field",
  "item": 1646,
  "table": "HL70476",
  "longName": "HL7Medically Necessary Duplicate Procedure Reason"
});

/**
 * FT1.29 - NDC Code
 */
export const FT1_29 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.29",
  "version": "2.8",
  "description": "NDC Code",
  "type": "Field",
  "item": 1845,
  "table": "HL70549",
  "longName": "HL7NDC Code"
});

/**
 * FT1.30 - Payment Reference ID
 */
export const FT1_30 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.30",
  "version": "2.8",
  "description": "Payment Reference ID",
  "type": "Field",
  "item": 1846,
  "table": "",
  "longName": "HL7Payment Reference ID"
});

/**
 * FT1.31 - Transaction Reference Key
 */
export const FT1_31 = datatypes.SI.register(hl7v2Metadata, {
  "title": "FT1.31",
  "version": "2.8",
  "description": "Transaction Reference Key",
  "type": "Field",
  "item": 1847,
  "table": "",
  "longName": "HL7Transaction Reference Key",
  "length": 4
});

/**
 * FT1.32 - Performing Facility
 */
export const FT1_32 = datatypes.XON.register(hl7v2Metadata, {
  "title": "FT1.32",
  "version": "2.8",
  "description": "Performing Facility",
  "type": "Field",
  "item": 2361,
  "table": "",
  "longName": "HL7Performing Facility"
});

/**
 * FT1.33 - Ordering Facility
 */
export const FT1_33 = datatypes.XON.register(hl7v2Metadata, {
  "title": "FT1.33",
  "version": "2.8",
  "description": "Ordering Facility",
  "type": "Field",
  "item": 2362,
  "table": "",
  "longName": "HL7Ordering Facility"
});

/**
 * FT1.34 - Item Number
 */
export const FT1_34 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.34",
  "version": "2.8",
  "description": "Item Number",
  "type": "Field",
  "item": 2363,
  "table": "",
  "longName": "HL7Item Number"
});

/**
 * FT1.35 - Model Number
 */
export const FT1_35 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.35",
  "version": "2.8",
  "description": "Model Number",
  "type": "Field",
  "item": 2364,
  "table": "",
  "longName": "HL7Model Number"
});

/**
 * FT1.36 - Special Processing Code
 */
export const FT1_36 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.36",
  "version": "2.8",
  "description": "Special Processing Code",
  "type": "Field",
  "item": 2365,
  "table": "",
  "longName": "HL7Special Processing Code"
});

/**
 * FT1.37 - Clinic Code
 */
export const FT1_37 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.37",
  "version": "2.8",
  "description": "Clinic Code",
  "type": "Field",
  "item": 2366,
  "table": "",
  "longName": "HL7Clinic Code"
});

/**
 * FT1.38 - Referral Number
 */
export const FT1_38 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.38",
  "version": "2.8",
  "description": "Referral Number",
  "type": "Field",
  "item": 2367,
  "table": "",
  "longName": "HL7Referral Number"
});

/**
 * FT1.39 - Authorization Number
 */
export const FT1_39 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.39",
  "version": "2.8",
  "description": "Authorization Number",
  "type": "Field",
  "item": 2368,
  "table": "",
  "longName": "HL7Authorization Number"
});

/**
 * FT1.40 - Service Provider Taxonomy Code
 */
export const FT1_40 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.40",
  "version": "2.8",
  "description": "Service Provider Taxonomy Code",
  "type": "Field",
  "item": 2369,
  "table": "",
  "longName": "HL7Service Provider Taxonomy Code"
});

/**
 * FT1.41 - Revenue Code
 */
export const FT1_41 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "FT1.41",
  "version": "2.8",
  "description": "Revenue Code",
  "type": "Field",
  "item": 1600,
  "table": "HL70456",
  "longName": "HL7Revenue Code"
});

/**
 * FT1.42 - Prescription Number
 */
export const FT1_42 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.42",
  "version": "2.8",
  "description": "Prescription Number",
  "type": "Field",
  "item": 325,
  "table": "",
  "longName": "HL7Prescription Number"
});

/**
 * FT1.43 - NDC Qty and UOM
 */
export const FT1_43 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FT1.43",
  "version": "2.8",
  "description": "NDC Qty and UOM",
  "type": "Field",
  "item": 2370,
  "table": "",
  "longName": "HL7NDC Qty and UOM"
});
