import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 AFF Fields
 *
 * HL7 v2.5 AFF field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AFF.1 - Set ID - AFF
 */
export const AFF_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "AFF.1",
  version: "2.5",
  description: "Set ID - AFF",
  type: "Field",
  item: 1427,
  table: "",
  longName: "HL7Set ID - AFF",
  length: 60
});

/**
 * AFF.2 - Professional Organization
 */
export const AFF_2 = datatypes.XON.register(hl7v2Metadata, {
  title: "AFF.2",
  version: "2.5",
  description: "Professional Organization",
  type: "Field",
  item: 1444,
  table: "",
  longName: "HL7Professional Organization",
  length: 250
});

/**
 * AFF.3 - Professional Organization Address
 */
export const AFF_3 = datatypes.XAD.register(hl7v2Metadata, {
  title: "AFF.3",
  version: "2.5",
  description: "Professional Organization Address",
  type: "Field",
  item: 1445,
  table: "",
  longName: "HL7Professional Organization Address",
  length: 250
});

/**
 * AFF.4 - Professional Organization Affiliation Date Range
 */
export const AFF_4 = datatypes.DR.register(hl7v2Metadata, {
  title: "AFF.4",
  version: "2.5",
  description: "Professional Organization Affiliation Date Range",
  type: "Field",
  item: 1446,
  table: "",
  longName: "HL7Professional Organization Affiliation Date Range",
  length: 52
});

/**
 * AFF.5 - Professional Affiliation Additional Information
 */
export const AFF_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "AFF.5",
  version: "2.5",
  description: "Professional Affiliation Additional Information",
  type: "Field",
  item: 1447,
  table: "",
  longName: "HL7Professional Affiliation Additional Information",
  length: 60
});
