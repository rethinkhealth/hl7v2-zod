import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 OM6 Fields
 *
 * HL7 v2.8 OM6 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM6.1 - Sequence Number - Test/Observation Master File
 */
export const OM6_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM6.1",
  version: "2.8",
  description: "Sequence Number - Test/Observation Master File",
  type: "Field",
  item: 586,
  table: "",
  longName: "HL7Sequence Number - Test/Observation Master File"
});

/**
 * OM6.2 - Derivation Rule
 */
export const OM6_2 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM6.2",
  version: "2.8",
  description: "Derivation Rule",
  type: "Field",
  item: 657,
  table: "",
  longName: "HL7Derivation Rule"
});
