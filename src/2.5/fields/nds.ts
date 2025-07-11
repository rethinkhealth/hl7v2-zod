import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 NDS Fields
 *
 * HL7 v2.5 NDS field definitions
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
  version: "2.5",
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
export const NDS_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "NDS.2",
  version: "2.5",
  description: "Notification Date/Time",
  type: "Field",
  item: 1399,
  table: "",
  longName: "HL7Notification Date/Time",
  length: 26
});

/**
 * NDS.3 - Notification Alert Severity
 */
export const NDS_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "NDS.3",
  version: "2.5",
  description: "Notification Alert Severity",
  type: "Field",
  item: 1400,
  table: "HL70367",
  longName: "HL7Notification Alert Severity",
  length: 250
});

/**
 * NDS.4 - Notification Code
 */
export const NDS_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "NDS.4",
  version: "2.5",
  description: "Notification Code",
  type: "Field",
  item: 1401,
  table: "",
  longName: "HL7Notification Code",
  length: 250
});
