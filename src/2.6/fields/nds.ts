import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 NDS Fields
 *
 * HL7 v2.6 NDS field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NDS.1 - Notification Reference Number
 */
export const NDS_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "NDS.1",
  version: "2.6",
  description: "Notification Reference Number",
  type: "Field",
  item: 1398,
  table: "",
  longName: "HL7Notification Reference Number",
  length: 20
});

/**
 * NDS.2 - Notification Date/Time
 */
export const NDS_2 = datatypes.DTM.register(hl7v2Metadata, {
  title: "NDS.2",
  version: "2.6",
  description: "Notification Date/Time",
  type: "Field",
  item: 1399,
  table: "",
  longName: "HL7Notification Date/Time",
  length: 24
});

/**
 * NDS.3 - Notification Alert Severity
 */
export const NDS_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "NDS.3",
  version: "2.6",
  description: "Notification Alert Severity",
  type: "Field",
  item: 1400,
  table: "HL70367",
  longName: "HL7Notification Alert Severity",
  length: 705
});

/**
 * NDS.4 - Notification Code
 */
export const NDS_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "NDS.4",
  version: "2.6",
  description: "Notification Code",
  type: "Field",
  item: 1401,
  table: "HL79999",
  longName: "HL7Notification Code",
  length: 705
});
