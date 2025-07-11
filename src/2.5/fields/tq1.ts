import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 TQ1 Fields
 *
 * HL7 v2.5 TQ1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TQ1.1 - Set ID - TQ1
 */
export const TQ1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "TQ1.1",
  version: "2.5",
  description: "Set ID - TQ1",
  type: "Field",
  item: 1627,
  table: "",
  longName: "HL7Set ID - TQ1",
  length: 4
});

/**
 * TQ1.2 - Quantity
 */
export const TQ1_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "TQ1.2",
  version: "2.5",
  description: "Quantity",
  type: "Field",
  item: 1628,
  table: "",
  longName: "HL7Quantity",
  length: 20
});

/**
 * TQ1.3 - Repeat Pattern
 */
export const TQ1_3 = datatypes.RPT.register(hl7v2Metadata, {
  title: "TQ1.3",
  version: "2.5",
  description: "Repeat Pattern",
  type: "Field",
  item: 1629,
  table: "HL70335",
  longName: "HL7Repeat Pattern",
  length: 540
});

/**
 * TQ1.4 - Explicit Time
 */
export const TQ1_4 = datatypes.TM.register(hl7v2Metadata, {
  title: "TQ1.4",
  version: "2.5",
  description: "Explicit Time",
  type: "Field",
  item: 1630,
  table: "",
  longName: "HL7Explicit Time",
  length: 20
});

/**
 * TQ1.5 - Relative Time and Units
 */
export const TQ1_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "TQ1.5",
  version: "2.5",
  description: "Relative Time and Units",
  type: "Field",
  item: 1631,
  table: "",
  longName: "HL7Relative Time and Units",
  length: 20
});

/**
 * TQ1.6 - Service Duration
 */
export const TQ1_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "TQ1.6",
  version: "2.5",
  description: "Service Duration",
  type: "Field",
  item: 1632,
  table: "",
  longName: "HL7Service Duration",
  length: 20
});

/**
 * TQ1.7 - Start date/time
 */
export const TQ1_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "TQ1.7",
  version: "2.5",
  description: "Start date/time",
  type: "Field",
  item: 1633,
  table: "",
  longName: "HL7Start date/time",
  length: 26
});

/**
 * TQ1.8 - End date/time
 */
export const TQ1_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "TQ1.8",
  version: "2.5",
  description: "End date/time",
  type: "Field",
  item: 1634,
  table: "",
  longName: "HL7End date/time",
  length: 26
});

/**
 * TQ1.9 - Priority
 */
export const TQ1_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "TQ1.9",
  version: "2.5",
  description: "Priority",
  type: "Field",
  item: 1635,
  table: "HL70485",
  longName: "HL7Priority",
  length: 250
});

/**
 * TQ1.10 - Condition text
 */
export const TQ1_10 = datatypes.TX.register(hl7v2Metadata, {
  title: "TQ1.10",
  version: "2.5",
  description: "Condition text",
  type: "Field",
  item: 1636,
  table: "",
  longName: "HL7Condition text",
  length: 250
});

/**
 * TQ1.11 - Text instruction
 */
export const TQ1_11 = datatypes.TX.register(hl7v2Metadata, {
  title: "TQ1.11",
  version: "2.5",
  description: "Text instruction",
  type: "Field",
  item: 1637,
  table: "",
  longName: "HL7Text instruction",
  length: 250
});

/**
 * TQ1.12 - Conjunction
 */
export const TQ1_12 = datatypes.ID.register(hl7v2Metadata, {
  title: "TQ1.12",
  version: "2.5",
  description: "Conjunction",
  type: "Field",
  item: 1638,
  table: "HL70427",
  longName: "HL7Conjunction",
  length: 10
});

/**
 * TQ1.13 - Occurrence duration
 */
export const TQ1_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "TQ1.13",
  version: "2.5",
  description: "Occurrence duration",
  type: "Field",
  item: 1639,
  table: "",
  longName: "HL7Occurrence duration",
  length: 20
});

/**
 * TQ1.14 - Total occurrence's
 */
export const TQ1_14 = datatypes.NM.register(hl7v2Metadata, {
  title: "TQ1.14",
  version: "2.5",
  description: "Total occurrence's",
  type: "Field",
  item: 1640,
  table: "",
  longName: "HL7Total occurrence's",
  length: 10
});
