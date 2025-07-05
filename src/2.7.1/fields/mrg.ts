import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 MRG Fields
 *
 * HL7 v2.7 MRG field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MRG.1 - Prior Patient Identifier List
 */
export const MRG_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "MRG.1",
  version: "2.7",
  description: "Prior Patient Identifier List",
  type: "Field",
  item: 211,
  table: "HL70061",
  longName: "HL7Prior Patient Identifier List"
});

/**
 * MRG.3 - Prior Patient Account Number
 */
export const MRG_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "MRG.3",
  version: "2.7",
  description: "Prior Patient Account Number",
  type: "Field",
  item: 213,
  table: "HL70061",
  longName: "HL7Prior Patient Account Number"
});

/**
 * MRG.5 - Prior Visit Number
 */
export const MRG_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "MRG.5",
  version: "2.7",
  description: "Prior Visit Number",
  type: "Field",
  item: 1279,
  table: "HL70061",
  longName: "HL7Prior Visit Number"
});

/**
 * MRG.6 - Prior Alternate Visit ID
 */
export const MRG_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "MRG.6",
  version: "2.7",
  description: "Prior Alternate Visit ID",
  type: "Field",
  item: 1280,
  table: "HL70061",
  longName: "HL7Prior Alternate Visit ID"
});

/**
 * MRG.7 - Prior Patient Name
 */
export const MRG_7 = datatypes.XPN.register(hl7v2Metadata, {
  title: "MRG.7",
  version: "2.7",
  description: "Prior Patient Name",
  type: "Field",
  item: 1281,
  table: "HL70200",
  longName: "HL7Prior Patient Name"
});
