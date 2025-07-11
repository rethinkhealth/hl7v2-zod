import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 FAC Fields
 *
 * HL7 v2.8 FAC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FAC.1 - Facility ID-FAC
 */
export const FAC_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "FAC.1",
  version: "2.8",
  description: "Facility ID-FAC",
  type: "Field",
  item: 1262,
  table: "",
  longName: "HL7Facility ID-FAC"
});

/**
 * FAC.2 - Facility Type
 */
export const FAC_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "FAC.2",
  version: "2.8",
  description: "Facility Type",
  type: "Field",
  item: 1263,
  table: "HL70331",
  longName: "HL7Facility Type",
  length: 1
});

/**
 * FAC.3 - Facility Address
 */
export const FAC_3 = datatypes.XAD.register(hl7v2Metadata, {
  title: "FAC.3",
  version: "2.8",
  description: "Facility Address",
  type: "Field",
  item: 1264,
  table: "",
  longName: "HL7Facility Address"
});

/**
 * FAC.4 - Facility Telecommunication
 */
export const FAC_4 = datatypes.XTN.register(hl7v2Metadata, {
  title: "FAC.4",
  version: "2.8",
  description: "Facility Telecommunication",
  type: "Field",
  item: 1265,
  table: "",
  longName: "HL7Facility Telecommunication"
});

/**
 * FAC.5 - Contact Person
 */
export const FAC_5 = datatypes.XCN.register(hl7v2Metadata, {
  title: "FAC.5",
  version: "2.8",
  description: "Contact Person",
  type: "Field",
  item: 1266,
  table: "",
  longName: "HL7Contact Person"
});

/**
 * FAC.6 - Contact Title
 */
export const FAC_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "FAC.6",
  version: "2.8",
  description: "Contact Title",
  type: "Field",
  item: 1267,
  table: "",
  longName: "HL7Contact Title"
});

/**
 * FAC.7 - Contact Address
 */
export const FAC_7 = datatypes.XAD.register(hl7v2Metadata, {
  title: "FAC.7",
  version: "2.8",
  description: "Contact Address",
  type: "Field",
  item: 1166,
  table: "",
  longName: "HL7Contact Address"
});

/**
 * FAC.8 - Contact Telecommunication
 */
export const FAC_8 = datatypes.XTN.register(hl7v2Metadata, {
  title: "FAC.8",
  version: "2.8",
  description: "Contact Telecommunication",
  type: "Field",
  item: 1269,
  table: "",
  longName: "HL7Contact Telecommunication"
});

/**
 * FAC.9 - Signature Authority
 */
export const FAC_9 = datatypes.XCN.register(hl7v2Metadata, {
  title: "FAC.9",
  version: "2.8",
  description: "Signature Authority",
  type: "Field",
  item: 1270,
  table: "",
  longName: "HL7Signature Authority"
});

/**
 * FAC.10 - Signature Authority Title
 */
export const FAC_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "FAC.10",
  version: "2.8",
  description: "Signature Authority Title",
  type: "Field",
  item: 1271,
  table: "",
  longName: "HL7Signature Authority Title"
});

/**
 * FAC.11 - Signature Authority Address
 */
export const FAC_11 = datatypes.XAD.register(hl7v2Metadata, {
  title: "FAC.11",
  version: "2.8",
  description: "Signature Authority Address",
  type: "Field",
  item: 1272,
  table: "",
  longName: "HL7Signature Authority Address"
});

/**
 * FAC.12 - Signature Authority Telecommunication
 */
export const FAC_12 = datatypes.XTN.register(hl7v2Metadata, {
  title: "FAC.12",
  version: "2.8",
  description: "Signature Authority Telecommunication",
  type: "Field",
  item: 1273,
  table: "",
  longName: "HL7Signature Authority Telecommunication"
});
