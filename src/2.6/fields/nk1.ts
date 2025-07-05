
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 NK1 Fields
 * 
 * HL7 v2.6 NK1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NK1.1 - Set ID - NK1
 */
export const NK1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "NK1.1",
  "version": "2.6",
  "description": "Set ID - NK1",
  "type": "Field",
  "item": 190,
  "table": "",
  "longName": "HL7Set ID - NK1",
  "length": 4
});

/**
 * NK1.2 - Name
 */
export const NK1_2 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "NK1.2",
  "version": "2.6",
  "description": "Name",
  "type": "Field",
  "item": 191,
  "table": "HL70200",
  "longName": "HL7Name",
  "length": 250
});

/**
 * NK1.3 - Relationship
 */
export const NK1_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.3",
  "version": "2.6",
  "description": "Relationship",
  "type": "Field",
  "item": 192,
  "table": "HL70063",
  "longName": "HL7Relationship",
  "length": 705
});

/**
 * NK1.4 - Address
 */
export const NK1_4 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "NK1.4",
  "version": "2.6",
  "description": "Address",
  "type": "Field",
  "item": 193,
  "table": "",
  "longName": "HL7Address",
  "length": 250
});

/**
 * NK1.5 - Phone Number
 */
export const NK1_5 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "NK1.5",
  "version": "2.6",
  "description": "Phone Number",
  "type": "Field",
  "item": 194,
  "table": "",
  "longName": "HL7Phone Number",
  "length": 250
});

/**
 * NK1.6 - Business Phone Number
 */
export const NK1_6 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "NK1.6",
  "version": "2.6",
  "description": "Business Phone Number",
  "type": "Field",
  "item": 195,
  "table": "",
  "longName": "HL7Business Phone Number",
  "length": 250
});

/**
 * NK1.7 - Contact Role
 */
export const NK1_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.7",
  "version": "2.6",
  "description": "Contact Role",
  "type": "Field",
  "item": 196,
  "table": "HL70131",
  "longName": "HL7Contact Role",
  "length": 705
});

/**
 * NK1.8 - Start Date
 */
export const NK1_8 = datatypes.DT.register(hl7v2Metadata, {
  "title": "NK1.8",
  "version": "2.6",
  "description": "Start Date",
  "type": "Field",
  "item": 197,
  "table": "",
  "longName": "HL7Start Date",
  "length": 8
});

/**
 * NK1.9 - End Date
 */
export const NK1_9 = datatypes.DT.register(hl7v2Metadata, {
  "title": "NK1.9",
  "version": "2.6",
  "description": "End Date",
  "type": "Field",
  "item": 198,
  "table": "",
  "longName": "HL7End Date",
  "length": 8
});

/**
 * NK1.10 - Next of Kin / Associated Parties Job Title
 */
export const NK1_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NK1.10",
  "version": "2.6",
  "description": "Next of Kin / Associated Parties Job Title",
  "type": "Field",
  "item": 199,
  "table": "",
  "longName": "HL7Next of Kin / Associated Parties Job Title",
  "length": 60
});

/**
 * NK1.11 - Next of Kin / Associated Parties Job Code/Class
 */
export const NK1_11 = datatypes.JCC.register(hl7v2Metadata, {
  "title": "NK1.11",
  "version": "2.6",
  "description": "Next of Kin / Associated Parties Job Code/Class",
  "type": "Field",
  "item": 200,
  "table": "",
  "longName": "HL7Next of Kin / Associated Parties Job Code/Class",
  "length": 20
});

/**
 * NK1.12 - Next of Kin / Associated Parties Employee Number
 */
export const NK1_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NK1.12",
  "version": "2.6",
  "description": "Next of Kin / Associated Parties Employee Number",
  "type": "Field",
  "item": 201,
  "table": "",
  "longName": "HL7Next of Kin / Associated Parties Employee Number",
  "length": 250
});

/**
 * NK1.13 - Organization Name - NK1
 */
export const NK1_13 = datatypes.XON.register(hl7v2Metadata, {
  "title": "NK1.13",
  "version": "2.6",
  "description": "Organization Name - NK1",
  "type": "Field",
  "item": 202,
  "table": "",
  "longName": "HL7Organization Name - NK1",
  "length": 250
});

/**
 * NK1.14 - Marital Status
 */
export const NK1_14 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.14",
  "version": "2.6",
  "description": "Marital Status",
  "type": "Field",
  "item": 119,
  "table": "HL70002",
  "longName": "HL7Marital Status",
  "length": 705
});

/**
 * NK1.15 - Administrative Sex
 */
export const NK1_15 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.15",
  "version": "2.6",
  "description": "Administrative Sex",
  "type": "Field",
  "item": 111,
  "table": "HL70001",
  "longName": "HL7Administrative Sex",
  "length": 1
});

/**
 * NK1.16 - Date/Time of Birth
 */
export const NK1_16 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "NK1.16",
  "version": "2.6",
  "description": "Date/Time of Birth",
  "type": "Field",
  "item": 110,
  "table": "",
  "longName": "HL7Date/Time of Birth",
  "length": 24
});

/**
 * NK1.17 - Living Dependency
 */
export const NK1_17 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.17",
  "version": "2.6",
  "description": "Living Dependency",
  "type": "Field",
  "item": 755,
  "table": "HL70223",
  "longName": "HL7Living Dependency",
  "length": 2
});

/**
 * NK1.18 - Ambulatory Status
 */
export const NK1_18 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.18",
  "version": "2.6",
  "description": "Ambulatory Status",
  "type": "Field",
  "item": 145,
  "table": "HL70009",
  "longName": "HL7Ambulatory Status",
  "length": 2
});

/**
 * NK1.19 - Citizenship
 */
export const NK1_19 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.19",
  "version": "2.6",
  "description": "Citizenship",
  "type": "Field",
  "item": 129,
  "table": "HL70171",
  "longName": "HL7Citizenship",
  "length": 705
});

/**
 * NK1.20 - Primary Language
 */
export const NK1_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.20",
  "version": "2.6",
  "description": "Primary Language",
  "type": "Field",
  "item": 118,
  "table": "HL70296",
  "longName": "HL7Primary Language",
  "length": 705
});

/**
 * NK1.21 - Living Arrangement
 */
export const NK1_21 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.21",
  "version": "2.6",
  "description": "Living Arrangement",
  "type": "Field",
  "item": 742,
  "table": "HL70220",
  "longName": "HL7Living Arrangement",
  "length": 2
});

/**
 * NK1.22 - Publicity Code
 */
export const NK1_22 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.22",
  "version": "2.6",
  "description": "Publicity Code",
  "type": "Field",
  "item": 743,
  "table": "HL70215",
  "longName": "HL7Publicity Code",
  "length": 705
});

/**
 * NK1.23 - Protection Indicator
 */
export const NK1_23 = datatypes.ID.register(hl7v2Metadata, {
  "title": "NK1.23",
  "version": "2.6",
  "description": "Protection Indicator",
  "type": "Field",
  "item": 744,
  "table": "HL70136",
  "longName": "HL7Protection Indicator"
});

/**
 * NK1.24 - Student Indicator
 */
export const NK1_24 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.24",
  "version": "2.6",
  "description": "Student Indicator",
  "type": "Field",
  "item": 745,
  "table": "HL70231",
  "longName": "HL7Student Indicator",
  "length": 2
});

/**
 * NK1.25 - Religion
 */
export const NK1_25 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.25",
  "version": "2.6",
  "description": "Religion",
  "type": "Field",
  "item": 120,
  "table": "HL70006",
  "longName": "HL7Religion",
  "length": 705
});

/**
 * NK1.26 - Mother's Maiden Name
 */
export const NK1_26 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "NK1.26",
  "version": "2.6",
  "description": "Mother's Maiden Name",
  "type": "Field",
  "item": 109,
  "table": "",
  "longName": "HL7Mother's Maiden Name",
  "length": 250
});

/**
 * NK1.27 - Nationality
 */
export const NK1_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.27",
  "version": "2.6",
  "description": "Nationality",
  "type": "Field",
  "item": 739,
  "table": "HL70212",
  "longName": "HL7Nationality"
});

/**
 * NK1.28 - Ethnic Group
 */
export const NK1_28 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.28",
  "version": "2.6",
  "description": "Ethnic Group",
  "type": "Field",
  "item": 125,
  "table": "HL70189",
  "longName": "HL7Ethnic Group",
  "length": 705
});

/**
 * NK1.29 - Contact Reason
 */
export const NK1_29 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.29",
  "version": "2.6",
  "description": "Contact Reason",
  "type": "Field",
  "item": 747,
  "table": "HL70222",
  "longName": "HL7Contact Reason",
  "length": 705
});

/**
 * NK1.30 - Contact Person's Name
 */
export const NK1_30 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "NK1.30",
  "version": "2.6",
  "description": "Contact Person's Name",
  "type": "Field",
  "item": 748,
  "table": "HL70200",
  "longName": "HL7Contact Person's Name",
  "length": 250
});

/**
 * NK1.31 - Contact Person's Telephone Number
 */
export const NK1_31 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "NK1.31",
  "version": "2.6",
  "description": "Contact Person's Telephone Number",
  "type": "Field",
  "item": 749,
  "table": "",
  "longName": "HL7Contact Person's Telephone Number",
  "length": 250
});

/**
 * NK1.32 - Contact Person's Address
 */
export const NK1_32 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "NK1.32",
  "version": "2.6",
  "description": "Contact Person's Address",
  "type": "Field",
  "item": 750,
  "table": "",
  "longName": "HL7Contact Person's Address",
  "length": 250
});

/**
 * NK1.33 - Next of Kin/Associated Party's Identifiers
 */
export const NK1_33 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NK1.33",
  "version": "2.6",
  "description": "Next of Kin/Associated Party's Identifiers",
  "type": "Field",
  "item": 751,
  "table": "",
  "longName": "HL7Next of Kin/Associated Party's Identifiers",
  "length": 250
});

/**
 * NK1.34 - Job Status
 */
export const NK1_34 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.34",
  "version": "2.6",
  "description": "Job Status",
  "type": "Field",
  "item": 752,
  "table": "HL70311",
  "longName": "HL7Job Status",
  "length": 2
});

/**
 * NK1.35 - Race
 */
export const NK1_35 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NK1.35",
  "version": "2.6",
  "description": "Race",
  "type": "Field",
  "item": 113,
  "table": "HL70005",
  "longName": "HL7Race",
  "length": 705
});

/**
 * NK1.36 - Handicap
 */
export const NK1_36 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.36",
  "version": "2.6",
  "description": "Handicap",
  "type": "Field",
  "item": 753,
  "table": "HL70295",
  "longName": "HL7Handicap",
  "length": 2
});

/**
 * NK1.37 - Contact Person Social Security Number
 */
export const NK1_37 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NK1.37",
  "version": "2.6",
  "description": "Contact Person Social Security Number",
  "type": "Field",
  "item": 754,
  "table": "",
  "longName": "HL7Contact Person Social Security Number",
  "length": 16
});

/**
 * NK1.38 - Next of Kin Birth Place
 */
export const NK1_38 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NK1.38",
  "version": "2.6",
  "description": "Next of Kin Birth Place",
  "type": "Field",
  "item": 1905,
  "table": "",
  "longName": "HL7Next of Kin Birth Place",
  "length": 250
});

/**
 * NK1.39 - VIP Indicator
 */
export const NK1_39 = datatypes.IS.register(hl7v2Metadata, {
  "title": "NK1.39",
  "version": "2.6",
  "description": "VIP Indicator",
  "type": "Field",
  "item": 146,
  "table": "HL70099",
  "longName": "HL7VIP Indicator",
  "length": 2
});
