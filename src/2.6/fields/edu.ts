import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 EDU Fields
 *
 * HL7 v2.6 EDU field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EDU.1 - Set ID - EDU
 */
export const EDU_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "EDU.1",
  version: "2.6",
  description: "Set ID - EDU",
  type: "Field",
  item: 1448,
  table: "",
  longName: "HL7Set ID - EDU",
  length: 60
});

/**
 * EDU.2 - Academic Degree
 */
export const EDU_2 = datatypes.IS.register(hl7v2Metadata, {
  title: "EDU.2",
  version: "2.6",
  description: "Academic Degree",
  type: "Field",
  item: 1449,
  table: "HL70360",
  longName: "HL7Academic Degree",
  length: 10
});

/**
 * EDU.3 - Academic Degree Program Date Range
 */
export const EDU_3 = datatypes.DR.register(hl7v2Metadata, {
  title: "EDU.3",
  version: "2.6",
  description: "Academic Degree Program Date Range",
  type: "Field",
  item: 1597,
  table: "",
  longName: "HL7Academic Degree Program Date Range",
  length: 52
});

/**
 * EDU.4 - Academic Degree Program Participation Date Range
 */
export const EDU_4 = datatypes.DR.register(hl7v2Metadata, {
  title: "EDU.4",
  version: "2.6",
  description: "Academic Degree Program Participation Date Range",
  type: "Field",
  item: 1450,
  table: "",
  longName: "HL7Academic Degree Program Participation Date Range",
  length: 52
});

/**
 * EDU.5 - Academic Degree Granted Date
 */
export const EDU_5 = datatypes.DT.register(hl7v2Metadata, {
  title: "EDU.5",
  version: "2.6",
  description: "Academic Degree Granted Date",
  type: "Field",
  item: 1451,
  table: "",
  longName: "HL7Academic Degree Granted Date",
  length: 8
});

/**
 * EDU.6 - School
 */
export const EDU_6 = datatypes.XON.register(hl7v2Metadata, {
  title: "EDU.6",
  version: "2.6",
  description: "School",
  type: "Field",
  item: 1452,
  table: "",
  longName: "HL7School",
  length: 250
});

/**
 * EDU.7 - School Type Code
 */
export const EDU_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "EDU.7",
  version: "2.6",
  description: "School Type Code",
  type: "Field",
  item: 1453,
  table: "HL70402",
  longName: "HL7School Type Code",
  length: 250
});

/**
 * EDU.8 - School Address
 */
export const EDU_8 = datatypes.XAD.register(hl7v2Metadata, {
  title: "EDU.8",
  version: "2.6",
  description: "School Address",
  type: "Field",
  item: 1454,
  table: "",
  longName: "HL7School Address",
  length: 250
});

/**
 * EDU.9 - Major Field of Study
 */
export const EDU_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "EDU.9",
  version: "2.6",
  description: "Major Field of Study",
  type: "Field",
  item: 1885,
  table: "",
  longName: "HL7Major Field of Study",
  length: 250
});
