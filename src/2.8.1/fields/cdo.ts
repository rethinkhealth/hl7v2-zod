import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 CDO Fields
 *
 * HL7 v2.8 CDO field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CDO.1 - Set ID - CDO
 */
export const CDO_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "CDO.1",
  version: "2.8",
  description: "Set ID - CDO",
  type: "Field",
  item: 3430,
  table: "",
  longName: "HL7Set ID - CDO",
  length: 4
});

/**
 * CDO.2 - Action Code
 */
export const CDO_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "CDO.2",
  version: "2.8",
  description: "Action Code",
  type: "Field",
  item: 816,
  table: "HL70206",
  longName: "HL7Action Code"
});

/**
 * CDO.3 - Cumulative Dosage Limit
 */
export const CDO_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "CDO.3",
  version: "2.8",
  description: "Cumulative Dosage Limit",
  type: "Field",
  item: 3397,
  table: "",
  longName: "HL7Cumulative Dosage Limit"
});

/**
 * CDO.4 - Cumulative Dosage Limit Time Interval
 */
export const CDO_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "CDO.4",
  version: "2.8",
  description: "Cumulative Dosage Limit Time Interval",
  type: "Field",
  item: 3398,
  table: "HL70924",
  longName: "HL7Cumulative Dosage Limit Time Interval"
});
