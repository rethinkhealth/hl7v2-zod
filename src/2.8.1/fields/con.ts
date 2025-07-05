import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 CON Fields
 *
 * HL7 v2.8 CON field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CON.1 - Set ID - CON
 */
export const CON_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "CON.1",
  version: "2.8",
  description: "Set ID - CON",
  type: "Field",
  item: 1776,
  table: "",
  longName: "HL7Set ID - CON",
  length: 4
});

/**
 * CON.2 - Consent Type
 */
export const CON_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CON.2",
  version: "2.8",
  description: "Consent Type",
  type: "Field",
  item: 1777,
  table: "HL70496",
  longName: "HL7Consent Type"
});

/**
 * CON.3 - Consent Form ID and Version
 */
export const CON_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "CON.3",
  version: "2.8",
  description: "Consent Form ID and Version",
  type: "Field",
  item: 1778,
  table: "",
  longName: "HL7Consent Form ID and Version"
});

/**
 * CON.4 - Consent Form Number
 */
export const CON_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "CON.4",
  version: "2.8",
  description: "Consent Form Number",
  type: "Field",
  item: 1779,
  table: "",
  longName: "HL7Consent Form Number"
});

/**
 * CON.5 - Consent Text
 */
export const CON_5 = datatypes.FT.register(hl7v2Metadata, {
  title: "CON.5",
  version: "2.8",
  description: "Consent Text",
  type: "Field",
  item: 1780,
  table: "",
  longName: "HL7Consent Text"
});

/**
 * CON.6 - Subject-specific Consent Text
 */
export const CON_6 = datatypes.FT.register(hl7v2Metadata, {
  title: "CON.6",
  version: "2.8",
  description: "Subject-specific Consent Text",
  type: "Field",
  item: 1781,
  table: "",
  longName: "HL7Subject-specific Consent Text"
});

/**
 * CON.7 - Consent Background Information
 */
export const CON_7 = datatypes.FT.register(hl7v2Metadata, {
  title: "CON.7",
  version: "2.8",
  description: "Consent Background Information",
  type: "Field",
  item: 1782,
  table: "",
  longName: "HL7Consent Background Information"
});

/**
 * CON.8 - Subject-specific Consent Background Text
 */
export const CON_8 = datatypes.FT.register(hl7v2Metadata, {
  title: "CON.8",
  version: "2.8",
  description: "Subject-specific Consent Background Text",
  type: "Field",
  item: 1783,
  table: "",
  longName: "HL7Subject-specific Consent Background Text"
});

/**
 * CON.9 - Consenter-imposed limitations
 */
export const CON_9 = datatypes.FT.register(hl7v2Metadata, {
  title: "CON.9",
  version: "2.8",
  description: "Consenter-imposed limitations",
  type: "Field",
  item: 1784,
  table: "",
  longName: "HL7Consenter-imposed limitations"
});

/**
 * CON.10 - Consent Mode
 */
export const CON_10 = datatypes.CNE.register(hl7v2Metadata, {
  title: "CON.10",
  version: "2.8",
  description: "Consent Mode",
  type: "Field",
  item: 1785,
  table: "HL70497",
  longName: "HL7Consent Mode"
});

/**
 * CON.11 - Consent Status
 */
export const CON_11 = datatypes.CNE.register(hl7v2Metadata, {
  title: "CON.11",
  version: "2.8",
  description: "Consent Status",
  type: "Field",
  item: 1786,
  table: "HL70498",
  longName: "HL7Consent Status"
});

/**
 * CON.12 - Consent Discussion Date/Time
 */
export const CON_12 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CON.12",
  version: "2.8",
  description: "Consent Discussion Date/Time",
  type: "Field",
  item: 1787,
  table: "",
  longName: "HL7Consent Discussion Date/Time"
});

/**
 * CON.13 - Consent Decision Date/Time
 */
export const CON_13 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CON.13",
  version: "2.8",
  description: "Consent Decision Date/Time",
  type: "Field",
  item: 1788,
  table: "",
  longName: "HL7Consent Decision Date/Time"
});

/**
 * CON.14 - Consent Effective Date/Time
 */
export const CON_14 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CON.14",
  version: "2.8",
  description: "Consent Effective Date/Time",
  type: "Field",
  item: 1789,
  table: "",
  longName: "HL7Consent Effective Date/Time"
});

/**
 * CON.15 - Consent End Date/Time
 */
export const CON_15 = datatypes.DTM.register(hl7v2Metadata, {
  title: "CON.15",
  version: "2.8",
  description: "Consent End Date/Time",
  type: "Field",
  item: 1790,
  table: "",
  longName: "HL7Consent End Date/Time"
});

/**
 * CON.16 - Subject Competence Indicator
 */
export const CON_16 = datatypes.ID.register(hl7v2Metadata, {
  title: "CON.16",
  version: "2.8",
  description: "Subject Competence Indicator",
  type: "Field",
  item: 1791,
  table: "HL70136",
  longName: "HL7Subject Competence Indicator",
  length: 1
});

/**
 * CON.17 - Translator Assistance Indicator
 */
export const CON_17 = datatypes.ID.register(hl7v2Metadata, {
  title: "CON.17",
  version: "2.8",
  description: "Translator Assistance Indicator",
  type: "Field",
  item: 1792,
  table: "HL70136",
  longName: "HL7Translator Assistance Indicator",
  length: 1
});

/**
 * CON.18 - Language Translated To
 */
export const CON_18 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CON.18",
  version: "2.8",
  description: "Language Translated To",
  type: "Field",
  item: 1793,
  table: "HL70296",
  longName: "HL7Language Translated To"
});

/**
 * CON.19 - Informational Material Supplied Indicator
 */
export const CON_19 = datatypes.ID.register(hl7v2Metadata, {
  title: "CON.19",
  version: "2.8",
  description: "Informational Material Supplied Indicator",
  type: "Field",
  item: 1794,
  table: "HL70136",
  longName: "HL7Informational Material Supplied Indicator",
  length: 1
});

/**
 * CON.20 - Consent Bypass Reason
 */
export const CON_20 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CON.20",
  version: "2.8",
  description: "Consent Bypass Reason",
  type: "Field",
  item: 1795,
  table: "HL70499",
  longName: "HL7Consent Bypass Reason"
});

/**
 * CON.21 - Consent Disclosure Level
 */
export const CON_21 = datatypes.ID.register(hl7v2Metadata, {
  title: "CON.21",
  version: "2.8",
  description: "Consent Disclosure Level",
  type: "Field",
  item: 1796,
  table: "HL70500",
  longName: "HL7Consent Disclosure Level",
  length: 1
});

/**
 * CON.22 - Consent Non-disclosure Reason
 */
export const CON_22 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CON.22",
  version: "2.8",
  description: "Consent Non-disclosure Reason",
  type: "Field",
  item: 1797,
  table: "HL70501",
  longName: "HL7Consent Non-disclosure Reason"
});

/**
 * CON.23 - Non-subject Consenter Reason
 */
export const CON_23 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CON.23",
  version: "2.8",
  description: "Non-subject Consenter Reason",
  type: "Field",
  item: 1798,
  table: "HL70502",
  longName: "HL7Non-subject Consenter Reason"
});

/**
 * CON.24 - Consenter ID
 */
export const CON_24 = datatypes.XPN.register(hl7v2Metadata, {
  title: "CON.24",
  version: "2.8",
  description: "Consenter ID",
  type: "Field",
  item: 1909,
  table: "",
  longName: "HL7Consenter ID"
});

/**
 * CON.25 - Relationship to Subject
 */
export const CON_25 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CON.25",
  version: "2.8",
  description: "Relationship to Subject",
  type: "Field",
  item: 1898,
  table: "HL70548",
  longName: "HL7Relationship to Subject"
});
