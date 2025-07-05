import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 RMI Fields
 *
 * HL7 v2.8 RMI field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RMI.1 - Risk Management Incident Code
 */
export const RMI_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RMI.1",
  version: "2.8",
  description: "Risk Management Incident Code",
  type: "Field",
  item: 1530,
  table: "HL70427",
  longName: "HL7Risk Management Incident Code"
});

/**
 * RMI.2 - Date/Time Incident
 */
export const RMI_2 = datatypes.DTM.register(hl7v2Metadata, {
  title: "RMI.2",
  version: "2.8",
  description: "Date/Time Incident",
  type: "Field",
  item: 1531,
  table: "",
  longName: "HL7Date/Time Incident"
});

/**
 * RMI.3 - Incident Type Code
 */
export const RMI_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RMI.3",
  version: "2.8",
  description: "Incident Type Code",
  type: "Field",
  item: 1533,
  table: "HL70428",
  longName: "HL7Incident Type Code"
});
