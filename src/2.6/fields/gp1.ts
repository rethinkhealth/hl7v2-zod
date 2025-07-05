import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 GP1 Fields
 *
 * HL7 v2.6 GP1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GP1.1 - Type of Bill Code
 */
export const GP1_1 = datatypes.IS.register(hl7v2Metadata, {
  title: "GP1.1",
  version: "2.6",
  description: "Type of Bill Code",
  type: "Field",
  item: 1599,
  table: "HL70455",
  longName: "HL7Type of Bill Code",
  length: 3
});

/**
 * GP1.2 - Revenue Code
 */
export const GP1_2 = datatypes.IS.register(hl7v2Metadata, {
  title: "GP1.2",
  version: "2.6",
  description: "Revenue Code",
  type: "Field",
  item: 1600,
  table: "HL70456",
  longName: "HL7Revenue Code",
  length: 3
});

/**
 * GP1.3 - Overall Claim Disposition Code
 */
export const GP1_3 = datatypes.IS.register(hl7v2Metadata, {
  title: "GP1.3",
  version: "2.6",
  description: "Overall Claim Disposition Code",
  type: "Field",
  item: 1601,
  table: "HL70457",
  longName: "HL7Overall Claim Disposition Code",
  length: 1
});

/**
 * GP1.4 - OCE Edits per Visit Code
 */
export const GP1_4 = datatypes.IS.register(hl7v2Metadata, {
  title: "GP1.4",
  version: "2.6",
  description: "OCE Edits per Visit Code",
  type: "Field",
  item: 1602,
  table: "HL70458",
  longName: "HL7OCE Edits per Visit Code",
  length: 2
});

/**
 * GP1.5 - Outlier Cost
 */
export const GP1_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "GP1.5",
  version: "2.6",
  description: "Outlier Cost",
  type: "Field",
  item: 387,
  table: "",
  longName: "HL7Outlier Cost",
  length: 12
});
