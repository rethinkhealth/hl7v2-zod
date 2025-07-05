import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 APR Fields
 *
 * HL7 v2.6 APR field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * APR.1 - Time Selection Criteria
 */
export const APR_1 = datatypes.SCV.register(hl7v2Metadata, {
  title: "APR.1",
  version: "2.6",
  description: "Time Selection Criteria",
  type: "Field",
  item: 908,
  table: "HL70294",
  longName: "HL7Time Selection Criteria",
  length: 80
});

/**
 * APR.2 - Resource Selection Criteria
 */
export const APR_2 = datatypes.SCV.register(hl7v2Metadata, {
  title: "APR.2",
  version: "2.6",
  description: "Resource Selection Criteria",
  type: "Field",
  item: 909,
  table: "HL70294",
  longName: "HL7Resource Selection Criteria",
  length: 80
});

/**
 * APR.3 - Location Selection Criteria
 */
export const APR_3 = datatypes.SCV.register(hl7v2Metadata, {
  title: "APR.3",
  version: "2.6",
  description: "Location Selection Criteria",
  type: "Field",
  item: 910,
  table: "HL70294",
  longName: "HL7Location Selection Criteria",
  length: 80
});

/**
 * APR.4 - Slot Spacing Criteria
 */
export const APR_4 = datatypes.NM.register(hl7v2Metadata, {
  title: "APR.4",
  version: "2.6",
  description: "Slot Spacing Criteria",
  type: "Field",
  item: 911,
  table: "",
  longName: "HL7Slot Spacing Criteria",
  length: 5
});

/**
 * APR.5 - Filler Override Criteria
 */
export const APR_5 = datatypes.SCV.register(hl7v2Metadata, {
  title: "APR.5",
  version: "2.6",
  description: "Filler Override Criteria",
  type: "Field",
  item: 912,
  table: "",
  longName: "HL7Filler Override Criteria",
  length: 80
});
