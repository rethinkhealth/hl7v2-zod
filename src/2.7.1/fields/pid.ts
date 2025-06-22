import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 PID Fields
 * 
 * HL7 v2.7 PID field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PID.1 - Set ID - PID
 */
export const PID_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PID.1",
  "version": "2.7",
  "description": "Set ID - PID",
  "type": "Field",
  "item": 104,
  "table": "",
  "longName": "HL7Set ID - PID",
  "length": 4
});

/**
 * PID.3 - Patient Identifier List
 */
export const PID_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PID.3",
  "version": "2.7",
  "description": "Patient Identifier List",
  "type": "Field",
  "item": 106,
  "table": "",
  "longName": "HL7Patient Identifier List"
});

/**
 * PID.5 - Patient Name
 */
export const PID_5 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "PID.5",
  "version": "2.7",
  "description": "Patient Name",
  "type": "Field",
  "item": 108,
  "table": "HL70200",
  "longName": "HL7Patient Name"
});

/**
 * PID.6 - Mother's Maiden Name
 */
export const PID_6 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "PID.6",
  "version": "2.7",
  "description": "Mother's Maiden Name",
  "type": "Field",
  "item": 109,
  "table": "",
  "longName": "HL7Mother's Maiden Name"
});

/**
 * PID.7 - Date/Time of Birth
 */
export const PID_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PID.7",
  "version": "2.7",
  "description": "Date/Time of Birth",
  "type": "Field",
  "item": 110,
  "table": "",
  "longName": "HL7Date/Time of Birth"
});

/**
 * PID.8 - Administrative Sex
 */
export const PID_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.8",
  "version": "2.7",
  "description": "Administrative Sex",
  "type": "Field",
  "item": 111,
  "table": "HL70001",
  "longName": "HL7Administrative Sex"
});

/**
 * PID.10 - Race
 */
export const PID_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.10",
  "version": "2.7",
  "description": "Race",
  "type": "Field",
  "item": 113,
  "table": "HL70005",
  "longName": "HL7Race"
});

/**
 * PID.11 - Patient Address
 */
export const PID_11 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PID.11",
  "version": "2.7",
  "description": "Patient Address",
  "type": "Field",
  "item": 114,
  "table": "",
  "longName": "HL7Patient Address"
});

/**
 * PID.13 - Phone Number - Home
 */
export const PID_13 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PID.13",
  "version": "2.7",
  "description": "Phone Number - Home",
  "type": "Field",
  "item": 116,
  "table": "",
  "longName": "HL7Phone Number - Home"
});

/**
 * PID.14 - Phone Number - Business
 */
export const PID_14 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PID.14",
  "version": "2.7",
  "description": "Phone Number - Business",
  "type": "Field",
  "item": 117,
  "table": "",
  "longName": "HL7Phone Number - Business"
});

/**
 * PID.15 - Primary Language
 */
export const PID_15 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.15",
  "version": "2.7",
  "description": "Primary Language",
  "type": "Field",
  "item": 118,
  "table": "HL70296",
  "longName": "HL7Primary Language"
});

/**
 * PID.16 - Marital Status
 */
export const PID_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.16",
  "version": "2.7",
  "description": "Marital Status",
  "type": "Field",
  "item": 119,
  "table": "HL70002",
  "longName": "HL7Marital Status"
});

/**
 * PID.17 - Religion
 */
export const PID_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.17",
  "version": "2.7",
  "description": "Religion",
  "type": "Field",
  "item": 120,
  "table": "HL70006",
  "longName": "HL7Religion"
});

/**
 * PID.18 - Patient Account Number
 */
export const PID_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PID.18",
  "version": "2.7",
  "description": "Patient Account Number",
  "type": "Field",
  "item": 121,
  "table": "",
  "longName": "HL7Patient Account Number"
});

/**
 * PID.21 - Mother's Identifier
 */
export const PID_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PID.21",
  "version": "2.7",
  "description": "Mother's Identifier",
  "type": "Field",
  "item": 124,
  "table": "",
  "longName": "HL7Mother's Identifier"
});

/**
 * PID.22 - Ethnic Group
 */
export const PID_22 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.22",
  "version": "2.7",
  "description": "Ethnic Group",
  "type": "Field",
  "item": 125,
  "table": "HL70189",
  "longName": "HL7Ethnic Group"
});

/**
 * PID.23 - Birth Place
 */
export const PID_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PID.23",
  "version": "2.7",
  "description": "Birth Place",
  "type": "Field",
  "item": 126,
  "table": "",
  "longName": "HL7Birth Place"
});

/**
 * PID.24 - Multiple Birth Indicator
 */
export const PID_24 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PID.24",
  "version": "2.7",
  "description": "Multiple Birth Indicator",
  "type": "Field",
  "item": 127,
  "table": "HL70136",
  "longName": "HL7Multiple Birth Indicator",
  "length": 1
});

/**
 * PID.25 - Birth Order
 */
export const PID_25 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PID.25",
  "version": "2.7",
  "description": "Birth Order",
  "type": "Field",
  "item": 128,
  "table": "",
  "longName": "HL7Birth Order"
});

/**
 * PID.26 - Citizenship
 */
export const PID_26 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.26",
  "version": "2.7",
  "description": "Citizenship",
  "type": "Field",
  "item": 129,
  "table": "HL70171",
  "longName": "HL7Citizenship"
});

/**
 * PID.27 - Veterans Military Status
 */
export const PID_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.27",
  "version": "2.7",
  "description": "Veterans Military Status",
  "type": "Field",
  "item": 130,
  "table": "HL70172",
  "longName": "HL7Veterans Military Status"
});

/**
 * PID.29 - Patient Death Date and Time
 */
export const PID_29 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PID.29",
  "version": "2.7",
  "description": "Patient Death Date and Time",
  "type": "Field",
  "item": 740,
  "table": "",
  "longName": "HL7Patient Death Date and Time"
});

/**
 * PID.30 - Patient Death Indicator
 */
export const PID_30 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PID.30",
  "version": "2.7",
  "description": "Patient Death Indicator",
  "type": "Field",
  "item": 741,
  "table": "HL70136",
  "longName": "HL7Patient Death Indicator",
  "length": 1
});

/**
 * PID.31 - Identity Unknown Indicator
 */
export const PID_31 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PID.31",
  "version": "2.7",
  "description": "Identity Unknown Indicator",
  "type": "Field",
  "item": 1535,
  "table": "HL70136",
  "longName": "HL7Identity Unknown Indicator",
  "length": 1
});

/**
 * PID.32 - Identity Reliability Code
 */
export const PID_32 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.32",
  "version": "2.7",
  "description": "Identity Reliability Code",
  "type": "Field",
  "item": 1536,
  "table": "HL70445",
  "longName": "HL7Identity Reliability Code"
});

/**
 * PID.33 - Last Update Date/Time
 */
export const PID_33 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PID.33",
  "version": "2.7",
  "description": "Last Update Date/Time",
  "type": "Field",
  "item": 1537,
  "table": "",
  "longName": "HL7Last Update Date/Time"
});

/**
 * PID.34 - Last Update Facility
 */
export const PID_34 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PID.34",
  "version": "2.7",
  "description": "Last Update Facility",
  "type": "Field",
  "item": 1538,
  "table": "",
  "longName": "HL7Last Update Facility"
});

/**
 * PID.35 - Species Code
 */
export const PID_35 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.35",
  "version": "2.7",
  "description": "Species Code",
  "type": "Field",
  "item": 1539,
  "table": "HL70446",
  "longName": "HL7Species Code"
});

/**
 * PID.36 - Breed Code
 */
export const PID_36 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.36",
  "version": "2.7",
  "description": "Breed Code",
  "type": "Field",
  "item": 1540,
  "table": "HL70447",
  "longName": "HL7Breed Code"
});

/**
 * PID.37 - Strain
 */
export const PID_37 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PID.37",
  "version": "2.7",
  "description": "Strain",
  "type": "Field",
  "item": 1541,
  "table": "",
  "longName": "HL7Strain"
});

/**
 * PID.38 - Production Class Code
 */
export const PID_38 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.38",
  "version": "2.7",
  "description": "Production Class Code",
  "type": "Field",
  "item": 1542,
  "table": "HL70429",
  "longName": "HL7Production Class Code"
});

/**
 * PID.39 - Tribal Citizenship
 */
export const PID_39 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PID.39",
  "version": "2.7",
  "description": "Tribal Citizenship",
  "type": "Field",
  "item": 1840,
  "table": "HL70171",
  "longName": "HL7Tribal Citizenship"
});

/**
 * PID.40 - Patient Telecommunication Information
 */
export const PID_40 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PID.40",
  "version": "2.7",
  "description": "Patient Telecommunication Information",
  "type": "Field",
  "item": 2289,
  "table": "",
  "longName": "HL7Patient Telecommunication Information"
});
