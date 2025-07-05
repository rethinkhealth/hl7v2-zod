import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 PAC Fields
 *
 * HL7 v2.7 PAC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PAC.1 - Set Id - PAC
 */
export const PAC_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "PAC.1",
  version: "2.7",
  description: "Set Id - PAC",
  type: "Field",
  item: 2350,
  table: "",
  longName: "HL7Set Id - PAC",
  length: 4
});

/**
 * PAC.2 - Package ID
 */
export const PAC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "PAC.2",
  version: "2.7",
  description: "Package ID",
  type: "Field",
  item: 2351,
  table: "",
  longName: "HL7Package ID"
});

/**
 * PAC.3 - Parent Package ID
 */
export const PAC_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "PAC.3",
  version: "2.7",
  description: "Parent Package ID",
  type: "Field",
  item: 2352,
  table: "",
  longName: "HL7Parent Package ID"
});

/**
 * PAC.4 - Position in Parent Package
 */
export const PAC_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "PAC.4",
  version: "2.7",
  description: "Position in Parent Package",
  type: "Field",
  item: 2353,
  table: "",
  longName: "HL7Position in Parent Package"
});

/**
 * PAC.5 - Package Type
 */
export const PAC_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PAC.5",
  version: "2.7",
  description: "Package Type",
  type: "Field",
  item: 2354,
  table: "HL70908",
  longName: "HL7Package Type"
});

/**
 * PAC.6 - Package Condition
 */
export const PAC_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PAC.6",
  version: "2.7",
  description: "Package Condition",
  type: "Field",
  item: 2355,
  table: "HL70544",
  longName: "HL7Package Condition"
});

/**
 * PAC.7 - Package Handling Code
 */
export const PAC_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PAC.7",
  version: "2.7",
  description: "Package Handling Code",
  type: "Field",
  item: 2356,
  table: "HL70376",
  longName: "HL7Package Handling Code"
});

/**
 * PAC.8 - Package Risk Code
 */
export const PAC_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PAC.8",
  version: "2.7",
  description: "Package Risk Code",
  type: "Field",
  item: 2357,
  table: "HL70489",
  longName: "HL7Package Risk Code"
});
