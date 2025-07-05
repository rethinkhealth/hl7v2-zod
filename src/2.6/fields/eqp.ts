import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 EQP Fields
 *
 * HL7 v2.6 EQP field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EQP.1 - Event type
 */
export const EQP_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "EQP.1",
  version: "2.6",
  description: "Event type",
  type: "Field",
  item: 1430,
  table: "HL70450",
  longName: "HL7Event type",
  length: 705
});

/**
 * EQP.2 - File Name
 */
export const EQP_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "EQP.2",
  version: "2.6",
  description: "File Name",
  type: "Field",
  item: 1431,
  table: "",
  longName: "HL7File Name",
  length: 20
});

/**
 * EQP.3 - Start Date/Time
 */
export const EQP_3 = datatypes.DTM.register(hl7v2Metadata, {
  title: "EQP.3",
  version: "2.6",
  description: "Start Date/Time",
  type: "Field",
  item: 1202,
  table: "",
  longName: "HL7Start Date/Time",
  length: 24
});

/**
 * EQP.4 - End Date/Time
 */
export const EQP_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "EQP.4",
  version: "2.6",
  description: "End Date/Time",
  type: "Field",
  item: 1432,
  table: "",
  longName: "HL7End Date/Time",
  length: 24
});

/**
 * EQP.5 - Transaction Data
 */
export const EQP_5 = datatypes.FT.register(hl7v2Metadata, {
  title: "EQP.5",
  version: "2.6",
  description: "Transaction Data",
  type: "Field",
  item: 1433,
  table: "",
  longName: "HL7Transaction Data",
  length: 65536
});
