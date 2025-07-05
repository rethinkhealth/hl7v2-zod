import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 ABS Fields
 *
 * HL7 v2.7 ABS field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ABS.1 - Discharge Care Provider
 */
export const ABS_1 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ABS.1",
  version: "2.7",
  description: "Discharge Care Provider",
  type: "Field",
  item: 1514,
  table: "HL70010",
  longName: "HL7Discharge Care Provider"
});

/**
 * ABS.2 - Transfer Medical Service Code
 */
export const ABS_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ABS.2",
  version: "2.7",
  description: "Transfer Medical Service Code",
  type: "Field",
  item: 1515,
  table: "HL70069",
  longName: "HL7Transfer Medical Service Code"
});

/**
 * ABS.3 - Severity of Illness Code
 */
export const ABS_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ABS.3",
  version: "2.7",
  description: "Severity of Illness Code",
  type: "Field",
  item: 1516,
  table: "HL70421",
  longName: "HL7Severity of Illness Code"
});

/**
 * ABS.4 - Date/Time of Attestation
 */
export const ABS_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ABS.4",
  version: "2.7",
  description: "Date/Time of Attestation",
  type: "Field",
  item: 1517,
  table: "",
  longName: "HL7Date/Time of Attestation"
});

/**
 * ABS.5 - Attested By
 */
export const ABS_5 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ABS.5",
  version: "2.7",
  description: "Attested By",
  type: "Field",
  item: 1518,
  table: "",
  longName: "HL7Attested By"
});

/**
 * ABS.6 - Triage Code
 */
export const ABS_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ABS.6",
  version: "2.7",
  description: "Triage Code",
  type: "Field",
  item: 1519,
  table: "HL70422",
  longName: "HL7Triage Code"
});

/**
 * ABS.7 - Abstract Completion Date/Time
 */
export const ABS_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ABS.7",
  version: "2.7",
  description: "Abstract Completion Date/Time",
  type: "Field",
  item: 1520,
  table: "",
  longName: "HL7Abstract Completion Date/Time"
});

/**
 * ABS.8 - Abstracted By
 */
export const ABS_8 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ABS.8",
  version: "2.7",
  description: "Abstracted By",
  type: "Field",
  item: 1521,
  table: "",
  longName: "HL7Abstracted By"
});

/**
 * ABS.9 - Case Category Code
 */
export const ABS_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ABS.9",
  version: "2.7",
  description: "Case Category Code",
  type: "Field",
  item: 1522,
  table: "HL70423",
  longName: "HL7Case Category Code"
});

/**
 * ABS.10 - Caesarian Section Indicator
 */
export const ABS_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "ABS.10",
  version: "2.7",
  description: "Caesarian Section Indicator",
  type: "Field",
  item: 1523,
  table: "HL70136",
  longName: "HL7Caesarian Section Indicator",
  length: 1
});

/**
 * ABS.11 - Gestation Category Code
 */
export const ABS_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ABS.11",
  version: "2.7",
  description: "Gestation Category Code",
  type: "Field",
  item: 1524,
  table: "HL70424",
  longName: "HL7Gestation Category Code"
});

/**
 * ABS.12 - Gestation Period - Weeks
 */
export const ABS_12 = datatypes.NM.register(hl7v2Metadata, {
  title: "ABS.12",
  version: "2.7",
  description: "Gestation Period - Weeks",
  type: "Field",
  item: 1525,
  table: "",
  longName: "HL7Gestation Period - Weeks"
});

/**
 * ABS.13 - Newborn Code
 */
export const ABS_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ABS.13",
  version: "2.7",
  description: "Newborn Code",
  type: "Field",
  item: 1526,
  table: "HL70425",
  longName: "HL7Newborn Code"
});

/**
 * ABS.14 - Stillborn Indicator
 */
export const ABS_14 = datatypes.ID.register(hl7v2Metadata, {
  title: "ABS.14",
  version: "2.7",
  description: "Stillborn Indicator",
  type: "Field",
  item: 1527,
  table: "HL70136",
  longName: "HL7Stillborn Indicator",
  length: 1
});
