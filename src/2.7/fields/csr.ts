import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 CSR Fields
 *
 * HL7 v2.7 CSR field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSR.1 - Sponsor Study ID
 */
export const CSR_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "CSR.1",
  version: "2.7",
  description: "Sponsor Study ID",
  type: "Field",
  item: 1011,
  table: "",
  longName: "HL7Sponsor Study ID"
});

/**
 * CSR.2 - Alternate Study ID
 */
export const CSR_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "CSR.2",
  version: "2.7",
  description: "Alternate Study ID",
  type: "Field",
  item: 1036,
  table: "",
  longName: "HL7Alternate Study ID"
});

/**
 * CSR.3 - Institution Registering the Patient
 */
export const CSR_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CSR.3",
  version: "2.7",
  description: "Institution Registering the Patient",
  type: "Field",
  item: 1037,
  table: "HL79999",
  longName: "HL7Institution Registering the Patient"
});

/**
 * CSR.4 - Sponsor Patient ID
 */
export const CSR_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "CSR.4",
  version: "2.7",
  description: "Sponsor Patient ID",
  type: "Field",
  item: 1038,
  table: "",
  longName: "HL7Sponsor Patient ID"
});

/**
 * CSR.5 - Alternate Patient ID - CSR
 */
export const CSR_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "CSR.5",
  version: "2.7",
  description: "Alternate Patient ID - CSR",
  type: "Field",
  item: 1039,
  table: "",
  longName: "HL7Alternate Patient ID - CSR"
});

/**
 * CSR.6 - Date/Time of Patient Study Registration
 */
export const CSR_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CSR.6",
  version: "2.7",
  description: "Date/Time of Patient Study Registration",
  type: "Field",
  item: 1040,
  table: "",
  longName: "HL7Date/Time of Patient Study Registration"
});

/**
 * CSR.7 - Person Performing Study Registration
 */
export const CSR_7 = datatypes.XCN.register(hl7v2Metadata, {
  title: "CSR.7",
  version: "2.7",
  description: "Person Performing Study Registration",
  type: "Field",
  item: 1041,
  table: "",
  longName: "HL7Person Performing Study Registration"
});

/**
 * CSR.8 - Study Authorizing Provider
 */
export const CSR_8 = datatypes.XCN.register(hl7v2Metadata, {
  title: "CSR.8",
  version: "2.7",
  description: "Study Authorizing Provider",
  type: "Field",
  item: 1042,
  table: "",
  longName: "HL7Study Authorizing Provider"
});

/**
 * CSR.9 - Date/Time Patient Study Consent Signed
 */
export const CSR_9 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CSR.9",
  version: "2.7",
  description: "Date/Time Patient Study Consent Signed",
  type: "Field",
  item: 1043,
  table: "",
  longName: "HL7Date/Time Patient Study Consent Signed"
});

/**
 * CSR.10 - Patient Study Eligibility Status
 */
export const CSR_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CSR.10",
  version: "2.7",
  description: "Patient Study Eligibility Status",
  type: "Field",
  item: 1044,
  table: "HL79999",
  longName: "HL7Patient Study Eligibility Status"
});

/**
 * CSR.11 - Study Randomization Date/time
 */
export const CSR_11 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CSR.11",
  version: "2.7",
  description: "Study Randomization Date/time",
  type: "Field",
  item: 1045,
  table: "",
  longName: "HL7Study Randomization Date/time"
});

/**
 * CSR.12 - Randomized Study Arm
 */
export const CSR_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CSR.12",
  version: "2.7",
  description: "Randomized Study Arm",
  type: "Field",
  item: 1046,
  table: "HL79999",
  longName: "HL7Randomized Study Arm"
});

/**
 * CSR.13 - Stratum for Study Randomization
 */
export const CSR_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CSR.13",
  version: "2.7",
  description: "Stratum for Study Randomization",
  type: "Field",
  item: 1047,
  table: "HL79999",
  longName: "HL7Stratum for Study Randomization"
});

/**
 * CSR.14 - Patient Evaluability Status
 */
export const CSR_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CSR.14",
  version: "2.7",
  description: "Patient Evaluability Status",
  type: "Field",
  item: 1048,
  table: "HL79999",
  longName: "HL7Patient Evaluability Status"
});

/**
 * CSR.15 - Date/Time Ended Study
 */
export const CSR_15 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CSR.15",
  version: "2.7",
  description: "Date/Time Ended Study",
  type: "Field",
  item: 1049,
  table: "",
  longName: "HL7Date/Time Ended Study"
});

/**
 * CSR.16 - Reason Ended Study
 */
export const CSR_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CSR.16",
  version: "2.7",
  description: "Reason Ended Study",
  type: "Field",
  item: 1050,
  table: "HL79999",
  longName: "HL7Reason Ended Study"
});
