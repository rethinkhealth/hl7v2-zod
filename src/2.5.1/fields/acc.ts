import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 ACC Fields
 *
 * HL7 v2.5 ACC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ACC.1 - Accident Date/Time
 */
export const ACC_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "ACC.1",
  version: "2.5",
  description: "Accident Date/Time",
  type: "Field",
  item: 527,
  table: "",
  longName: "HL7Accident Date/Time",
  length: 26
});

/**
 * ACC.2 - Accident Code
 */
export const ACC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "ACC.2",
  version: "2.5",
  description: "Accident Code",
  type: "Field",
  item: 528,
  table: "HL70050",
  longName: "HL7Accident Code",
  length: 250
});

/**
 * ACC.3 - Accident Location
 */
export const ACC_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "ACC.3",
  version: "2.5",
  description: "Accident Location",
  type: "Field",
  item: 529,
  table: "",
  longName: "HL7Accident Location",
  length: 25
});

/**
 * ACC.4 - Auto Accident State
 */
export const ACC_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "ACC.4",
  version: "2.5",
  description: "Auto Accident State",
  type: "Field",
  item: 812,
  table: "HL70347",
  longName: "HL7Auto Accident State",
  length: 250
});

/**
 * ACC.5 - Accident Job Related Indicator
 */
export const ACC_5 = datatypes.ID.register(hl7v2Metadata, {
  title: "ACC.5",
  version: "2.5",
  description: "Accident Job Related Indicator",
  type: "Field",
  item: 813,
  table: "HL70136",
  longName: "HL7Accident Job Related Indicator",
  length: 1
});

/**
 * ACC.6 - Accident Death Indicator
 */
export const ACC_6 = datatypes.ID.register(hl7v2Metadata, {
  title: "ACC.6",
  version: "2.5",
  description: "Accident Death Indicator",
  type: "Field",
  item: 814,
  table: "HL70136",
  longName: "HL7Accident Death Indicator",
  length: 12
});

/**
 * ACC.7 - Entered By
 */
export const ACC_7 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ACC.7",
  version: "2.5",
  description: "Entered By",
  type: "Field",
  item: 224,
  table: "",
  longName: "HL7Entered By",
  length: 250
});

/**
 * ACC.8 - Accident Description
 */
export const ACC_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "ACC.8",
  version: "2.5",
  description: "Accident Description",
  type: "Field",
  item: 1503,
  table: "",
  longName: "HL7Accident Description",
  length: 25
});

/**
 * ACC.9 - Brought In By
 */
export const ACC_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "ACC.9",
  version: "2.5",
  description: "Brought In By",
  type: "Field",
  item: 1504,
  table: "",
  longName: "HL7Brought In By",
  length: 80
});

/**
 * ACC.10 - Police Notified Indicator
 */
export const ACC_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "ACC.10",
  version: "2.5",
  description: "Police Notified Indicator",
  type: "Field",
  item: 1505,
  table: "HL70136",
  longName: "HL7Police Notified Indicator",
  length: 1
});

/**
 * ACC.11 - Accident Address
 */
export const ACC_11 = datatypes.XAD.register(hl7v2Metadata, {
  title: "ACC.11",
  version: "2.5",
  description: "Accident Address",
  type: "Field",
  item: 1853,
  table: "",
  longName: "HL7Accident Address",
  length: 250
});
