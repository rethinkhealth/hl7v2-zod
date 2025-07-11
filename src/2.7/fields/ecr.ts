import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 ECR Fields
 *
 * HL7 v2.7 ECR field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ECR.1 - Command Response
 */
export const ECR_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ECR.1",
  version: "2.7",
  description: "Command Response",
  type: "Field",
  item: 1395,
  table: "HL70387",
  longName: "HL7Command Response"
});

/**
 * ECR.2 - Date/Time Completed
 */
export const ECR_2 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ECR.2",
  version: "2.7",
  description: "Date/Time Completed",
  type: "Field",
  item: 1396,
  table: "",
  longName: "HL7Date/Time Completed"
});

/**
 * ECR.3 - Command Response Parameters
 */
export const ECR_3 = datatypes.TX.register(hl7v2Metadata, {
  title: "ECR.3",
  version: "2.7",
  description: "Command Response Parameters",
  type: "Field",
  item: 1397,
  table: "",
  longName: "HL7Command Response Parameters"
});
