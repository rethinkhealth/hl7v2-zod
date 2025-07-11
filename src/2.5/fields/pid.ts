import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 PID Fields
 *
 * HL7 v2.5 PID field definitions
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
  title: "PID.1",
  version: "2.5",
  description: "Set ID - PID",
  type: "Field",
  item: 104,
  table: "",
  longName: "HL7Set ID - PID",
  length: 4
});

/**
 * PID.2 - Patient ID
 */
export const PID_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.2",
  version: "2.5",
  description: "Patient ID",
  type: "Field",
  item: 105,
  table: "",
  longName: "HL7Patient ID",
  length: 20
});

/**
 * PID.3 - Patient Identifier List
 */
export const PID_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.3",
  version: "2.5",
  description: "Patient Identifier List",
  type: "Field",
  item: 106,
  table: "",
  longName: "HL7Patient Identifier List",
  length: 250
});

/**
 * PID.4 - Alternate Patient ID - PID
 */
export const PID_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.4",
  version: "2.5",
  description: "Alternate Patient ID - PID",
  type: "Field",
  item: 107,
  table: "",
  longName: "HL7Alternate Patient ID - PID",
  length: 20
});

/**
 * PID.5 - Patient Name
 */
export const PID_5 = datatypes.XPN.register(hl7v2Metadata, {
  title: "PID.5",
  version: "2.5",
  description: "Patient Name",
  type: "Field",
  item: 108,
  table: "",
  longName: "HL7Patient Name",
  length: 250
});

/**
 * PID.6 - Mother's Maiden Name
 */
export const PID_6 = datatypes.XPN.register(hl7v2Metadata, {
  title: "PID.6",
  version: "2.5",
  description: "Mother's Maiden Name",
  type: "Field",
  item: 109,
  table: "",
  longName: "HL7Mother's Maiden Name",
  length: 250
});

/**
 * PID.7 - Date/Time of Birth
 */
export const PID_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.7",
  version: "2.5",
  description: "Date/Time of Birth",
  type: "Field",
  item: 110,
  table: "",
  longName: "HL7Date/Time of Birth",
  length: 26
});

/**
 * PID.8 - Administrative Sex
 */
export const PID_8 = datatypes.IS.register(hl7v2Metadata, {
  title: "PID.8",
  version: "2.5",
  description: "Administrative Sex",
  type: "Field",
  item: 111,
  table: "HL70001",
  longName: "HL7Administrative Sex",
  length: 1
});

/**
 * PID.9 - Patient Alias
 */
export const PID_9 = datatypes.XPN.register(hl7v2Metadata, {
  title: "PID.9",
  version: "2.5",
  description: "Patient Alias",
  type: "Field",
  item: 112,
  table: "",
  longName: "HL7Patient Alias",
  length: 250
});

/**
 * PID.10 - Race
 */
export const PID_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.10",
  version: "2.5",
  description: "Race",
  type: "Field",
  item: 113,
  table: "HL70005",
  longName: "HL7Race",
  length: 250
});

/**
 * PID.11 - Patient Address
 */
export const PID_11 = datatypes.XAD.register(hl7v2Metadata, {
  title: "PID.11",
  version: "2.5",
  description: "Patient Address",
  type: "Field",
  item: 114,
  table: "",
  longName: "HL7Patient Address",
  length: 250
});

/**
 * PID.12 - County Code
 */
export const PID_12 = datatypes.IS.register(hl7v2Metadata, {
  title: "PID.12",
  version: "2.5",
  description: "County Code",
  type: "Field",
  item: 115,
  table: "HL70289",
  longName: "HL7County Code",
  length: 4
});

/**
 * PID.13 - Phone Number - Home
 */
export const PID_13 = datatypes.XTN.register(hl7v2Metadata, {
  title: "PID.13",
  version: "2.5",
  description: "Phone Number - Home",
  type: "Field",
  item: 116,
  table: "",
  longName: "HL7Phone Number - Home",
  length: 250
});

/**
 * PID.14 - Phone Number - Business
 */
export const PID_14 = datatypes.XTN.register(hl7v2Metadata, {
  title: "PID.14",
  version: "2.5",
  description: "Phone Number - Business",
  type: "Field",
  item: 117,
  table: "",
  longName: "HL7Phone Number - Business",
  length: 250
});

/**
 * PID.15 - Primary Language
 */
export const PID_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.15",
  version: "2.5",
  description: "Primary Language",
  type: "Field",
  item: 118,
  table: "HL70296",
  longName: "HL7Primary Language",
  length: 250
});

/**
 * PID.16 - Marital Status
 */
export const PID_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.16",
  version: "2.5",
  description: "Marital Status",
  type: "Field",
  item: 119,
  table: "HL70002",
  longName: "HL7Marital Status",
  length: 250
});

/**
 * PID.17 - Religion
 */
export const PID_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.17",
  version: "2.5",
  description: "Religion",
  type: "Field",
  item: 120,
  table: "HL70006",
  longName: "HL7Religion",
  length: 250
});

/**
 * PID.18 - Patient Account Number
 */
export const PID_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.18",
  version: "2.5",
  description: "Patient Account Number",
  type: "Field",
  item: 121,
  table: "",
  longName: "HL7Patient Account Number",
  length: 250
});

/**
 * PID.19 - SSN Number - Patient
 */
export const PID_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.19",
  version: "2.5",
  description: "SSN Number - Patient",
  type: "Field",
  item: 122,
  table: "",
  longName: "HL7SSN Number - Patient",
  length: 16
});

/**
 * PID.20 - Driver's License Number - Patient
 */
export const PID_20 = datatypes.DLN.register(hl7v2Metadata, {
  title: "PID.20",
  version: "2.5",
  description: "Driver's License Number - Patient",
  type: "Field",
  item: 123,
  table: "",
  longName: "HL7Driver's License Number - Patient",
  length: 25
});

/**
 * PID.21 - Mother's Identifier
 */
export const PID_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.21",
  version: "2.5",
  description: "Mother's Identifier",
  type: "Field",
  item: 124,
  table: "",
  longName: "HL7Mother's Identifier",
  length: 250
});

/**
 * PID.22 - Ethnic Group
 */
export const PID_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.22",
  version: "2.5",
  description: "Ethnic Group",
  type: "Field",
  item: 125,
  table: "HL70189",
  longName: "HL7Ethnic Group",
  length: 250
});

/**
 * PID.23 - Birth Place
 */
export const PID_23 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.23",
  version: "2.5",
  description: "Birth Place",
  type: "Field",
  item: 126,
  table: "",
  longName: "HL7Birth Place",
  length: 250
});

/**
 * PID.24 - Multiple Birth Indicator
 */
export const PID_24 = datatypes.ID.register(hl7v2Metadata, {
  title: "PID.24",
  version: "2.5",
  description: "Multiple Birth Indicator",
  type: "Field",
  item: 127,
  table: "HL70136",
  longName: "HL7Multiple Birth Indicator",
  length: 1
});

/**
 * PID.25 - Birth Order
 */
export const PID_25 = datatypes.NM.register(hl7v2Metadata, {
  title: "PID.25",
  version: "2.5",
  description: "Birth Order",
  type: "Field",
  item: 128,
  table: "",
  longName: "HL7Birth Order",
  length: 2
});

/**
 * PID.26 - Citizenship
 */
export const PID_26 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.26",
  version: "2.5",
  description: "Citizenship",
  type: "Field",
  item: 129,
  table: "HL70171",
  longName: "HL7Citizenship",
  length: 250
});

/**
 * PID.27 - Veterans Military Status
 */
export const PID_27 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.27",
  version: "2.5",
  description: "Veterans Military Status",
  type: "Field",
  item: 130,
  table: "HL70172",
  longName: "HL7Veterans Military Status",
  length: 250
});

/**
 * PID.28 - Nationality
 */
export const PID_28 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.28",
  version: "2.5",
  description: "Nationality",
  type: "Field",
  item: 739,
  table: "HL70212",
  longName: "HL7Nationality",
  length: 250
});

/**
 * PID.29 - Patient Death Date and Time
 */
export const PID_29 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.29",
  version: "2.5",
  description: "Patient Death Date and Time",
  type: "Field",
  item: 740,
  table: "",
  longName: "HL7Patient Death Date and Time",
  length: 26
});

/**
 * PID.30 - Patient Death Indicator
 */
export const PID_30 = datatypes.ID.register(hl7v2Metadata, {
  title: "PID.30",
  version: "2.5",
  description: "Patient Death Indicator",
  type: "Field",
  item: 741,
  table: "HL70136",
  longName: "HL7Patient Death Indicator",
  length: 1
});

/**
 * PID.31 - Identity Unknown Indicator
 */
export const PID_31 = datatypes.ID.register(hl7v2Metadata, {
  title: "PID.31",
  version: "2.5",
  description: "Identity Unknown Indicator",
  type: "Field",
  item: 1535,
  table: "HL70136",
  longName: "HL7Identity Unknown Indicator",
  length: 1
});

/**
 * PID.32 - Identity Reliability Code
 */
export const PID_32 = datatypes.IS.register(hl7v2Metadata, {
  title: "PID.32",
  version: "2.5",
  description: "Identity Reliability Code",
  type: "Field",
  item: 1536,
  table: "HL70445",
  longName: "HL7Identity Reliability Code",
  length: 20
});

/**
 * PID.33 - Last Update Date/Time
 */
export const PID_33 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.33",
  version: "2.5",
  description: "Last Update Date/Time",
  type: "Field",
  item: 1537,
  table: "",
  longName: "HL7Last Update Date/Time",
  length: 26
});

/**
 * PID.34 - Last Update Facility
 */
export const PID_34 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.34",
  version: "2.5",
  description: "Last Update Facility",
  type: "Field",
  item: 1538,
  table: "",
  longName: "HL7Last Update Facility",
  length: 241
});

/**
 * PID.35 - Species Code
 */
export const PID_35 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.35",
  version: "2.5",
  description: "Species Code",
  type: "Field",
  item: 1539,
  table: "HL70446",
  longName: "HL7Species Code",
  length: 250
});

/**
 * PID.36 - Breed Code
 */
export const PID_36 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.36",
  version: "2.5",
  description: "Breed Code",
  type: "Field",
  item: 1540,
  table: "HL70447",
  longName: "HL7Breed Code",
  length: 250
});

/**
 * PID.37 - Strain
 */
export const PID_37 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.37",
  version: "2.5",
  description: "Strain",
  type: "Field",
  item: 1541,
  table: "",
  longName: "HL7Strain",
  length: 80
});

/**
 * PID.38 - Production Class Code
 */
export const PID_38 = datatypes.ST.register(hl7v2Metadata, {
  title: "PID.38",
  version: "2.5",
  description: "Production Class Code",
  type: "Field",
  item: 1542,
  table: "HL70429",
  longName: "HL7Production Class Code",
  length: 250
});

/**
 * PID.39 - Tribal Citizenship
 */
export const PID_39 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PID.39",
  version: "2.5",
  description: "Tribal Citizenship",
  type: "Field",
  item: 1840,
  table: "HL70171",
  longName: "HL7Tribal Citizenship",
  length: 250
});
