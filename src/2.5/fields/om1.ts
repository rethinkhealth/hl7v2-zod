import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 OM1 Fields
 *
 * HL7 v2.5 OM1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM1.1 - Sequence Number - Test/Observation Master File
 */
export const OM1_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM1.1",
  version: "2.5",
  description: "Sequence Number - Test/Observation Master File",
  type: "Field",
  item: 586,
  table: "",
  longName: "HL7Sequence Number - Test/Observation Master File",
  length: 4
});

/**
 * OM1.2 - Producer's Service/Test/Observation ID
 */
export const OM1_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.2",
  version: "2.5",
  description: "Producer's Service/Test/Observation ID",
  type: "Field",
  item: 587,
  table: "HL79999",
  longName: "HL7Producer's Service/Test/Observation ID",
  length: 250
});

/**
 * OM1.3 - Permitted Data Types
 */
export const OM1_3 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM1.3",
  version: "2.5",
  description: "Permitted Data Types",
  type: "Field",
  item: 588,
  table: "HL70125",
  longName: "HL7Permitted Data Types",
  length: 12
});

/**
 * OM1.4 - Specimen Required
 */
export const OM1_4 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM1.4",
  version: "2.5",
  description: "Specimen Required",
  type: "Field",
  item: 589,
  table: "HL70136",
  longName: "HL7Specimen Required",
  length: 1
});

/**
 * OM1.5 - Producer ID
 */
export const OM1_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.5",
  version: "2.5",
  description: "Producer ID",
  type: "Field",
  item: 590,
  table: "HL79999",
  longName: "HL7Producer ID",
  length: 250
});

/**
 * OM1.6 - Observation Description
 */
export const OM1_6 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.6",
  version: "2.5",
  description: "Observation Description",
  type: "Field",
  item: 591,
  table: "",
  longName: "HL7Observation Description",
  length: 200
});

/**
 * OM1.7 - Other Service/Test/Observation IDs for the Observation
 */
export const OM1_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.7",
  version: "2.5",
  description: "Other Service/Test/Observation IDs for the Observation",
  type: "Field",
  item: 592,
  table: "HL79999",
  longName: "HL7Other Service/Test/Observation IDs for the Observation",
  length: 250
});

/**
 * OM1.8 - Other Names
 */
export const OM1_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.8",
  version: "2.5",
  description: "Other Names",
  type: "Field",
  item: 593,
  table: "",
  longName: "HL7Other Names",
  length: 200
});

/**
 * OM1.9 - Preferred Report Name for the Observation
 */
export const OM1_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.9",
  version: "2.5",
  description: "Preferred Report Name for the Observation",
  type: "Field",
  item: 594,
  table: "",
  longName: "HL7Preferred Report Name for the Observation",
  length: 30
});

/**
 * OM1.10 - Preferred Short Name or Mnemonic for Observation
 */
export const OM1_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.10",
  version: "2.5",
  description: "Preferred Short Name or Mnemonic for Observation",
  type: "Field",
  item: 595,
  table: "",
  longName: "HL7Preferred Short Name or Mnemonic for Observation",
  length: 8
});

/**
 * OM1.11 - Preferred Long Name for the Observation
 */
export const OM1_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.11",
  version: "2.5",
  description: "Preferred Long Name for the Observation",
  type: "Field",
  item: 596,
  table: "",
  longName: "HL7Preferred Long Name for the Observation",
  length: 200
});

/**
 * OM1.12 - Orderability
 */
export const OM1_12 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM1.12",
  version: "2.5",
  description: "Orderability",
  type: "Field",
  item: 597,
  table: "HL70136",
  longName: "HL7Orderability",
  length: 1
});

/**
 * OM1.13 - Identity of Instrument Used to Perform this Study
 */
export const OM1_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.13",
  version: "2.5",
  description: "Identity of Instrument Used to Perform this Study",
  type: "Field",
  item: 598,
  table: "HL79999",
  longName: "HL7Identity of Instrument Used to Perform this Study",
  length: 250
});

/**
 * OM1.14 - Coded Representation of Method
 */
export const OM1_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.14",
  version: "2.5",
  description: "Coded Representation of Method",
  type: "Field",
  item: 599,
  table: "HL79999",
  longName: "HL7Coded Representation of Method",
  length: 250
});

/**
 * OM1.15 - Portable Device Indicator
 */
export const OM1_15 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM1.15",
  version: "2.5",
  description: "Portable Device Indicator",
  type: "Field",
  item: 600,
  table: "HL70136",
  longName: "HL7Portable Device Indicator",
  length: 1
});

/**
 * OM1.16 - Observation Producing Department/Section
 */
export const OM1_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.16",
  version: "2.5",
  description: "Observation Producing Department/Section",
  type: "Field",
  item: 601,
  table: "HL79999",
  longName: "HL7Observation Producing Department/Section",
  length: 250
});

/**
 * OM1.17 - Telephone Number of Section
 */
export const OM1_17 = datatypes.XTN.register(hl7v2Metadata, {
  title: "OM1.17",
  version: "2.5",
  description: "Telephone Number of Section",
  type: "Field",
  item: 602,
  table: "",
  longName: "HL7Telephone Number of Section",
  length: 250
});

/**
 * OM1.18 - Nature of Service/Test/Observation
 */
export const OM1_18 = datatypes.IS.register(hl7v2Metadata, {
  title: "OM1.18",
  version: "2.5",
  description: "Nature of Service/Test/Observation",
  type: "Field",
  item: 603,
  table: "HL70174",
  longName: "HL7Nature of Service/Test/Observation",
  length: 1
});

/**
 * OM1.19 - Report Subheader
 */
export const OM1_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.19",
  version: "2.5",
  description: "Report Subheader",
  type: "Field",
  item: 604,
  table: "HL79999",
  longName: "HL7Report Subheader",
  length: 250
});

/**
 * OM1.20 - Report Display Order
 */
export const OM1_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.20",
  version: "2.5",
  description: "Report Display Order",
  type: "Field",
  item: 605,
  table: "",
  longName: "HL7Report Display Order",
  length: 20
});

/**
 * OM1.21 - Date/Time Stamp for any change in Definition for the Observation
 */
export const OM1_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.21",
  version: "2.5",
  description: "Date/Time Stamp for any change in Definition for the Observation",
  type: "Field",
  item: 606,
  table: "",
  longName: "HL7Date/Time Stamp for any change in Definition for the Observation",
  length: 26
});

/**
 * OM1.22 - Effective Date/Time of Change
 */
export const OM1_22 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.22",
  version: "2.5",
  description: "Effective Date/Time of Change",
  type: "Field",
  item: 607,
  table: "",
  longName: "HL7Effective Date/Time of Change",
  length: 26
});

/**
 * OM1.23 - Typical Turn-Around Time
 */
export const OM1_23 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM1.23",
  version: "2.5",
  description: "Typical Turn-Around Time",
  type: "Field",
  item: 608,
  table: "",
  longName: "HL7Typical Turn-Around Time",
  length: 20
});

/**
 * OM1.24 - Processing Time
 */
export const OM1_24 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM1.24",
  version: "2.5",
  description: "Processing Time",
  type: "Field",
  item: 609,
  table: "",
  longName: "HL7Processing Time",
  length: 20
});

/**
 * OM1.25 - Processing Priority
 */
export const OM1_25 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM1.25",
  version: "2.5",
  description: "Processing Priority",
  type: "Field",
  item: 610,
  table: "HL70168",
  longName: "HL7Processing Priority",
  length: 40
});

/**
 * OM1.26 - Reporting Priority
 */
export const OM1_26 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM1.26",
  version: "2.5",
  description: "Reporting Priority",
  type: "Field",
  item: 611,
  table: "HL70169",
  longName: "HL7Reporting Priority",
  length: 5
});

/**
 * OM1.27 - Outside Site(s) Where Observation may be Performed
 */
export const OM1_27 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.27",
  version: "2.5",
  description: "Outside Site(s) Where Observation may be Performed",
  type: "Field",
  item: 612,
  table: "HL79999",
  longName: "HL7Outside Site(s) Where Observation may be Performed",
  length: 250
});

/**
 * OM1.28 - Address of Outside Site(s)
 */
export const OM1_28 = datatypes.XAD.register(hl7v2Metadata, {
  title: "OM1.28",
  version: "2.5",
  description: "Address of Outside Site(s)",
  type: "Field",
  item: 613,
  table: "",
  longName: "HL7Address of Outside Site(s)",
  length: 250
});

/**
 * OM1.29 - Phone Number of Outside Site
 */
export const OM1_29 = datatypes.XTN.register(hl7v2Metadata, {
  title: "OM1.29",
  version: "2.5",
  description: "Phone Number of Outside Site",
  type: "Field",
  item: 614,
  table: "",
  longName: "HL7Phone Number of Outside Site",
  length: 250
});

/**
 * OM1.30 - Confidentiality Code
 */
export const OM1_30 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM1.30",
  version: "2.5",
  description: "Confidentiality Code",
  type: "Field",
  item: 615,
  table: "HL70177",
  longName: "HL7Confidentiality Code",
  length: 250
});

/**
 * OM1.31 - Observations Required to Interpret the Observation
 */
export const OM1_31 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.31",
  version: "2.5",
  description: "Observations Required to Interpret the Observation",
  type: "Field",
  item: 616,
  table: "HL79999",
  longName: "HL7Observations Required to Interpret the Observation",
  length: 250
});

/**
 * OM1.32 - Interpretation of Observations
 */
export const OM1_32 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.32",
  version: "2.5",
  description: "Interpretation of Observations",
  type: "Field",
  item: 617,
  table: "",
  longName: "HL7Interpretation of Observations",
  length: 65536
});

/**
 * OM1.33 - Contraindications to Observations
 */
export const OM1_33 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.33",
  version: "2.5",
  description: "Contraindications to Observations",
  type: "Field",
  item: 618,
  table: "HL79999",
  longName: "HL7Contraindications to Observations",
  length: 250
});

/**
 * OM1.34 - Reflex Tests/Observations
 */
export const OM1_34 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.34",
  version: "2.5",
  description: "Reflex Tests/Observations",
  type: "Field",
  item: 619,
  table: "HL79999",
  longName: "HL7Reflex Tests/Observations",
  length: 250
});

/**
 * OM1.35 - Rules that Trigger Reflex Testing
 */
export const OM1_35 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.35",
  version: "2.5",
  description: "Rules that Trigger Reflex Testing",
  type: "Field",
  item: 620,
  table: "",
  longName: "HL7Rules that Trigger Reflex Testing",
  length: 80
});

/**
 * OM1.36 - Fixed Canned Message
 */
export const OM1_36 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.36",
  version: "2.5",
  description: "Fixed Canned Message",
  type: "Field",
  item: 621,
  table: "HL79999",
  longName: "HL7Fixed Canned Message",
  length: 250
});

/**
 * OM1.37 - Patient Preparation
 */
export const OM1_37 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.37",
  version: "2.5",
  description: "Patient Preparation",
  type: "Field",
  item: 622,
  table: "",
  longName: "HL7Patient Preparation",
  length: 200
});

/**
 * OM1.38 - Procedure Medication
 */
export const OM1_38 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.38",
  version: "2.5",
  description: "Procedure Medication",
  type: "Field",
  item: 623,
  table: "HL79999",
  longName: "HL7Procedure Medication",
  length: 250
});

/**
 * OM1.39 - Factors that may Affect the Observation
 */
export const OM1_39 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.39",
  version: "2.5",
  description: "Factors that may Affect the Observation",
  type: "Field",
  item: 624,
  table: "",
  longName: "HL7Factors that may Affect the Observation",
  length: 200
});

/**
 * OM1.40 - Service/Test/Observation Performance Schedule
 */
export const OM1_40 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.40",
  version: "2.5",
  description: "Service/Test/Observation Performance Schedule",
  type: "Field",
  item: 625,
  table: "",
  longName: "HL7Service/Test/Observation Performance Schedule",
  length: 60
});

/**
 * OM1.41 - Description of Test Methods
 */
export const OM1_41 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.41",
  version: "2.5",
  description: "Description of Test Methods",
  type: "Field",
  item: 626,
  table: "",
  longName: "HL7Description of Test Methods",
  length: 65536
});

/**
 * OM1.42 - Kind of Quantity Observed
 */
export const OM1_42 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.42",
  version: "2.5",
  description: "Kind of Quantity Observed",
  type: "Field",
  item: 937,
  table: "HL70254",
  longName: "HL7Kind of Quantity Observed",
  length: 250
});

/**
 * OM1.43 - Point Versus Interval
 */
export const OM1_43 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.43",
  version: "2.5",
  description: "Point Versus Interval",
  type: "Field",
  item: 938,
  table: "HL70255",
  longName: "HL7Point Versus Interval",
  length: 250
});

/**
 * OM1.44 - Challenge Information
 */
export const OM1_44 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM1.44",
  version: "2.5",
  description: "Challenge Information",
  type: "Field",
  item: 939,
  table: "",
  longName: "HL7Challenge Information",
  length: 200
});

/**
 * OM1.45 - Relationship Modifier
 */
export const OM1_45 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.45",
  version: "2.5",
  description: "Relationship Modifier",
  type: "Field",
  item: 940,
  table: "HL70258",
  longName: "HL7Relationship Modifier",
  length: 250
});

/**
 * OM1.46 - Target Anatomic Site Of Test
 */
export const OM1_46 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.46",
  version: "2.5",
  description: "Target Anatomic Site Of Test",
  type: "Field",
  item: 941,
  table: "HL79999",
  longName: "HL7Target Anatomic Site Of Test",
  length: 250
});

/**
 * OM1.47 - Modality Of Imaging Measurement
 */
export const OM1_47 = datatypes.ST.register(hl7v2Metadata, {
  title: "OM1.47",
  version: "2.5",
  description: "Modality Of Imaging Measurement",
  type: "Field",
  item: 942,
  table: "HL70259",
  longName: "HL7Modality Of Imaging Measurement",
  length: 250
});
