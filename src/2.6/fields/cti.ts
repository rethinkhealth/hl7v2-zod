import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 CTI Fields
 *
 * HL7 v2.6 CTI field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTI.1 - Sponsor Study ID
 */
export const CTI_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "CTI.1",
  version: "2.6",
  description: "Sponsor Study ID",
  type: "Field",
  item: 1011,
  table: "",
  longName: "HL7Sponsor Study ID",
  length: 427
});

/**
 * CTI.2 - Study Phase Identifier
 */
export const CTI_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CTI.2",
  version: "2.6",
  description: "Study Phase Identifier",
  type: "Field",
  item: 1022,
  table: "",
  longName: "HL7Study Phase Identifier",
  length: 705
});

/**
 * CTI.3 - Study Scheduled Time Point
 */
export const CTI_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "CTI.3",
  version: "2.6",
  description: "Study Scheduled Time Point",
  type: "Field",
  item: 1055,
  table: "HL79999",
  longName: "HL7Study Scheduled Time Point",
  length: 705
});
