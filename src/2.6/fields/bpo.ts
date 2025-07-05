import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 BPO Fields
 *
 * HL7 v2.6 BPO field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BPO.1 - Set ID - BPO
 */
export const BPO_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "BPO.1",
  version: "2.6",
  description: "Set ID - BPO",
  type: "Field",
  item: 1700,
  table: "",
  longName: "HL7Set ID - BPO",
  length: 4
});

/**
 * BPO.2 - BP Universal Service Identifier
 */
export const BPO_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "BPO.2",
  version: "2.6",
  description: "BP Universal Service Identifier",
  type: "Field",
  item: 1701,
  table: "HL79999",
  longName: "HL7BP Universal Service Identifier",
  length: 250
});

/**
 * BPO.3 - BP  Processing Requirements
 */
export const BPO_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "BPO.3",
  version: "2.6",
  description: "BP  Processing Requirements",
  type: "Field",
  item: 1702,
  table: "HL70508",
  longName: "HL7BP  Processing Requirements",
  length: 250
});

/**
 * BPO.4 - BP Quantity
 */
export const BPO_4 = datatypes.NM.register(hl7v2Metadata, {
  title: "BPO.4",
  version: "2.6",
  description: "BP Quantity",
  type: "Field",
  item: 1703,
  table: "",
  longName: "HL7BP Quantity",
  length: 5
});

/**
 * BPO.5 - BP Amount
 */
export const BPO_5 = datatypes.NM.register(hl7v2Metadata, {
  title: "BPO.5",
  version: "2.6",
  description: "BP Amount",
  type: "Field",
  item: 1704,
  table: "",
  longName: "HL7BP Amount",
  length: 5
});

/**
 * BPO.6 - BP Units
 */
export const BPO_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "BPO.6",
  version: "2.6",
  description: "BP Units",
  type: "Field",
  item: 1705,
  table: "HL79999",
  longName: "HL7BP Units",
  length: 250
});

/**
 * BPO.7 - BP Intended Use Date/Time
 */
export const BPO_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "BPO.7",
  version: "2.6",
  description: "BP Intended Use Date/Time",
  type: "Field",
  item: 1706,
  table: "",
  longName: "HL7BP Intended Use Date/Time",
  length: 24
});

/**
 * BPO.8 - BP Intended Dispense From Location
 */
export const BPO_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "BPO.8",
  version: "2.6",
  description: "BP Intended Dispense From Location",
  type: "Field",
  item: 1707,
  table: "",
  longName: "HL7BP Intended Dispense From Location",
  length: 80
});

/**
 * BPO.9 - BP Intended Dispense From Address
 */
export const BPO_9 = datatypes.XAD.register(hl7v2Metadata, {
  title: "BPO.9",
  version: "2.6",
  description: "BP Intended Dispense From Address",
  type: "Field",
  item: 1708,
  table: "",
  longName: "HL7BP Intended Dispense From Address",
  length: 250
});

/**
 * BPO.10 - BP Requested Dispense Date/Time
 */
export const BPO_10 = datatypes.DTM.register(hl7v2Metadata, {
  title: "BPO.10",
  version: "2.6",
  description: "BP Requested Dispense Date/Time",
  type: "Field",
  item: 1709,
  table: "",
  longName: "HL7BP Requested Dispense Date/Time",
  length: 24
});

/**
 * BPO.11 - BP Requested Dispense To Location
 */
export const BPO_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "BPO.11",
  version: "2.6",
  description: "BP Requested Dispense To Location",
  type: "Field",
  item: 1710,
  table: "",
  longName: "HL7BP Requested Dispense To Location",
  length: 80
});

/**
 * BPO.12 - BP Requested Dispense To Address
 */
export const BPO_12 = datatypes.XAD.register(hl7v2Metadata, {
  title: "BPO.12",
  version: "2.6",
  description: "BP Requested Dispense To Address",
  type: "Field",
  item: 1711,
  table: "",
  longName: "HL7BP Requested Dispense To Address",
  length: 250
});

/**
 * BPO.13 - BP Indication for Use
 */
export const BPO_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "BPO.13",
  version: "2.6",
  description: "BP Indication for Use",
  type: "Field",
  item: 1712,
  table: "HL70509",
  longName: "HL7BP Indication for Use",
  length: 250
});

/**
 * BPO.14 - BP Informed Consent Indicator
 */
export const BPO_14 = datatypes.ID.register(hl7v2Metadata, {
  title: "BPO.14",
  version: "2.6",
  description: "BP Informed Consent Indicator",
  type: "Field",
  item: 1713,
  table: "HL70136",
  longName: "HL7BP Informed Consent Indicator",
  length: 1
});
