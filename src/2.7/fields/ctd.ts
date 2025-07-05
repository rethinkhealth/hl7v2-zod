import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 CTD Fields
 *
 * HL7 v2.7 CTD field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTD.1 - Contact Role
 */
export const CTD_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CTD.1",
  version: "2.7",
  description: "Contact Role",
  type: "Field",
  item: 196,
  table: "HL70131",
  longName: "HL7Contact Role"
});

/**
 * CTD.2 - Contact Name
 */
export const CTD_2 = datatypes.XPN.register(hl7v2Metadata, {
  title: "CTD.2",
  version: "2.7",
  description: "Contact Name",
  type: "Field",
  item: 1165,
  table: "",
  longName: "HL7Contact Name"
});

/**
 * CTD.3 - Contact Address
 */
export const CTD_3 = datatypes.XAD.register(hl7v2Metadata, {
  title: "CTD.3",
  version: "2.7",
  description: "Contact Address",
  type: "Field",
  item: 1166,
  table: "",
  longName: "HL7Contact Address"
});

/**
 * CTD.4 - Contact Location
 */
export const CTD_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "CTD.4",
  version: "2.7",
  description: "Contact Location",
  type: "Field",
  item: 1167,
  table: "",
  longName: "HL7Contact Location"
});

/**
 * CTD.5 - Contact Communication Information
 */
export const CTD_5 = datatypes.XTN.register(hl7v2Metadata, {
  title: "CTD.5",
  version: "2.7",
  description: "Contact Communication Information",
  type: "Field",
  item: 1168,
  table: "",
  longName: "HL7Contact Communication Information"
});

/**
 * CTD.6 - Preferred Method of Contact
 */
export const CTD_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CTD.6",
  version: "2.7",
  description: "Preferred Method of Contact",
  type: "Field",
  item: 684,
  table: "HL70185",
  longName: "HL7Preferred Method of Contact"
});

/**
 * CTD.7 - Contact Identifiers
 */
export const CTD_7 = datatypes.PLN.register(hl7v2Metadata, {
  title: "CTD.7",
  version: "2.7",
  description: "Contact Identifiers",
  type: "Field",
  item: 1171,
  table: "HL70338",
  longName: "HL7Contact Identifiers"
});
