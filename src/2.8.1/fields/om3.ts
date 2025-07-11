import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 OM3 Fields
 *
 * HL7 v2.8 OM3 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM3.1 - Sequence Number - Test/Observation Master File
 */
export const OM3_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM3.1",
  version: "2.8",
  description: "Sequence Number - Test/Observation Master File",
  type: "Field",
  item: 586,
  table: "",
  longName: "HL7Sequence Number - Test/Observation Master File"
});

/**
 * OM3.2 - Preferred Coding System
 */
export const OM3_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM3.2",
  version: "2.8",
  description: "Preferred Coding System",
  type: "Field",
  item: 636,
  table: "HL79999",
  longName: "HL7Preferred Coding System"
});

/**
 * OM3.3 - Valid Coded "Answers"
 */
export const OM3_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM3.3",
  version: "2.8",
  description: 'Valid Coded "Answers"',
  type: "Field",
  item: 637,
  table: "HL79999",
  longName: 'HL7Valid Coded "Answers"'
});

/**
 * OM3.4 - Normal Text/Codes for Categorical Observations
 */
export const OM3_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM3.4",
  version: "2.8",
  description: "Normal Text/Codes for Categorical Observations",
  type: "Field",
  item: 638,
  table: "HL79999",
  longName: "HL7Normal Text/Codes for Categorical Observations"
});

/**
 * OM3.5 - Abnormal Text/Codes for Categorical Observations
 */
export const OM3_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM3.5",
  version: "2.8",
  description: "Abnormal Text/Codes for Categorical Observations",
  type: "Field",
  item: 639,
  table: "HL79999",
  longName: "HL7Abnormal Text/Codes for Categorical Observations"
});

/**
 * OM3.6 - Critical Text/Codes for Categorical Observations
 */
export const OM3_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM3.6",
  version: "2.8",
  description: "Critical Text/Codes for Categorical Observations",
  type: "Field",
  item: 640,
  table: "HL79999",
  longName: "HL7Critical Text/Codes for Categorical Observations"
});

/**
 * OM3.7 - Value Type
 */
export const OM3_7 = datatypes.ID.register(hl7v2Metadata, {
  title: "OM3.7",
  version: "2.8",
  description: "Value Type",
  type: "Field",
  item: 570,
  table: "HL70125",
  longName: "HL7Value Type",
  length: 3
});
