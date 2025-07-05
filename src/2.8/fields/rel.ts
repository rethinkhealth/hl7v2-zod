import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 REL Fields
 *
 * HL7 v2.8 REL field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * REL.1 - Set ID -REL
 */
export const REL_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "REL.1",
  version: "2.8",
  description: "Set ID -REL",
  type: "Field",
  item: 2240,
  table: "",
  longName: "HL7Set ID -REL",
  length: 4
});

/**
 * REL.2 - Relationship Type
 */
export const REL_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "REL.2",
  version: "2.8",
  description: "Relationship Type",
  type: "Field",
  item: 2241,
  table: "",
  longName: "HL7Relationship Type"
});

/**
 * REL.3 - This Relationship Instance Identifier
 */
export const REL_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "REL.3",
  version: "2.8",
  description: "This Relationship Instance Identifier",
  type: "Field",
  item: 2242,
  table: "",
  longName: "HL7This Relationship Instance Identifier"
});

/**
 * REL.4 - Source Information Instance Identifier
 */
export const REL_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "REL.4",
  version: "2.8",
  description: "Source Information Instance Identifier",
  type: "Field",
  item: 2243,
  table: "",
  longName: "HL7Source Information Instance Identifier"
});

/**
 * REL.5 - Target Information Instance Identifier
 */
export const REL_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "REL.5",
  version: "2.8",
  description: "Target Information Instance Identifier",
  type: "Field",
  item: 2244,
  table: "",
  longName: "HL7Target Information Instance Identifier"
});

/**
 * REL.6 - Asserting Entity Instance ID
 */
export const REL_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "REL.6",
  version: "2.8",
  description: "Asserting Entity Instance ID",
  type: "Field",
  item: 2245,
  table: "",
  longName: "HL7Asserting Entity Instance ID"
});

/**
 * REL.7 - Asserting Person
 */
export const REL_7 = datatypes.XCN.register(hl7v2Metadata, {
  title: "REL.7",
  version: "2.8",
  description: "Asserting Person",
  type: "Field",
  item: 2246,
  table: "",
  longName: "HL7Asserting Person"
});

/**
 * REL.8 - Asserting Organization
 */
export const REL_8 = datatypes.XON.register(hl7v2Metadata, {
  title: "REL.8",
  version: "2.8",
  description: "Asserting Organization",
  type: "Field",
  item: 2247,
  table: "",
  longName: "HL7Asserting Organization"
});

/**
 * REL.9 - Assertor Address
 */
export const REL_9 = datatypes.XAD.register(hl7v2Metadata, {
  title: "REL.9",
  version: "2.8",
  description: "Assertor Address",
  type: "Field",
  item: 2248,
  table: "",
  longName: "HL7Assertor Address"
});

/**
 * REL.10 - Assertor Contact
 */
export const REL_10 = datatypes.XTN.register(hl7v2Metadata, {
  title: "REL.10",
  version: "2.8",
  description: "Assertor Contact",
  type: "Field",
  item: 2249,
  table: "",
  longName: "HL7Assertor Contact"
});

/**
 * REL.11 - Assertion Date Range
 */
export const REL_11 = datatypes.DR.register(hl7v2Metadata, {
  title: "REL.11",
  version: "2.8",
  description: "Assertion Date Range",
  type: "Field",
  item: 2250,
  table: "",
  longName: "HL7Assertion Date Range"
});

/**
 * REL.12 - Negation Indicator
 */
export const REL_12 = datatypes.ID.register(hl7v2Metadata, {
  title: "REL.12",
  version: "2.8",
  description: "Negation Indicator",
  type: "Field",
  item: 2251,
  table: "HL70136",
  longName: "HL7Negation Indicator",
  length: 1
});

/**
 * REL.13 - Certainty of Relationship
 */
export const REL_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "REL.13",
  version: "2.8",
  description: "Certainty of Relationship",
  type: "Field",
  item: 2252,
  table: "",
  longName: "HL7Certainty of Relationship"
});

/**
 * REL.14 - Priority No
 */
export const REL_14 = datatypes.NM.register(hl7v2Metadata, {
  title: "REL.14",
  version: "2.8",
  description: "Priority No",
  type: "Field",
  item: 2253,
  table: "",
  longName: "HL7Priority No"
});

/**
 * REL.15 - Priority  Sequence No (rel preference for consideration)
 */
export const REL_15 = datatypes.NM.register(hl7v2Metadata, {
  title: "REL.15",
  version: "2.8",
  description: "Priority  Sequence No (rel preference for consideration)",
  type: "Field",
  item: 2254,
  table: "",
  longName: "HL7Priority  Sequence No (rel preference for consideration)"
});

/**
 * REL.16 - Separability Indicator
 */
export const REL_16 = datatypes.ID.register(hl7v2Metadata, {
  title: "REL.16",
  version: "2.8",
  description: "Separability Indicator",
  type: "Field",
  item: 2255,
  table: "HL70136",
  longName: "HL7Separability Indicator",
  length: 1
});
