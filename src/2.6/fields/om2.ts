import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 OM2 Fields
 *
 * HL7 v2.6 OM2 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM2.1 - Sequence Number - Test/Observation Master File
 */
export const OM2_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM2.1",
  version: "2.6",
  description: "Sequence Number - Test/Observation Master File",
  type: "Field",
  item: 586,
  table: "",
  longName: "HL7Sequence Number - Test/Observation Master File",
  length: 4
});

/**
 * OM2.2 - Units of Measure
 */
export const OM2_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM2.2",
  version: "2.6",
  description: "Units of Measure",
  type: "Field",
  item: 627,
  table: "HL79999",
  longName: "HL7Units of Measure",
  length: 250
});

/**
 * OM2.3 - Range of Decimal Precision
 */
export const OM2_3 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM2.3",
  version: "2.6",
  description: "Range of Decimal Precision",
  type: "Field",
  item: 628,
  table: "",
  longName: "HL7Range of Decimal Precision",
  length: 10
});

/**
 * OM2.4 - Corresponding SI Units of Measure
 */
export const OM2_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "OM2.4",
  version: "2.6",
  description: "Corresponding SI Units of Measure",
  type: "Field",
  item: 629,
  table: "HL79999",
  longName: "HL7Corresponding SI Units of Measure",
  length: 250
});

/**
 * OM2.5 - SI Conversion Factor
 */
export const OM2_5 = datatypes.TX.register(hl7v2Metadata, {
  title: "OM2.5",
  version: "2.6",
  description: "SI Conversion Factor",
  type: "Field",
  item: 630,
  table: "",
  longName: "HL7SI Conversion Factor",
  length: 60
});

/**
 * OM2.6 - Reference (Normal) Range for Ordinal and Continuous Observations
 */
export const OM2_6 = datatypes.RFR.register(hl7v2Metadata, {
  title: "OM2.6",
  version: "2.6",
  description: "Reference (Normal) Range for Ordinal and Continuous Observations",
  type: "Field",
  item: 631,
  table: "",
  longName: "HL7Reference (Normal) Range for Ordinal and Continuous Observations",
  length: 250
});

/**
 * OM2.7 - Critical Range for Ordinal and Continuous Observations
 */
export const OM2_7 = datatypes.RFR.register(hl7v2Metadata, {
  title: "OM2.7",
  version: "2.6",
  description: "Critical Range for Ordinal and Continuous Observations",
  type: "Field",
  item: 632,
  table: "",
  longName: "HL7Critical Range for Ordinal and Continuous Observations",
  length: 205
});

/**
 * OM2.8 - Absolute Range for Ordinal and Continuous Observations
 */
export const OM2_8 = datatypes.RFR.register(hl7v2Metadata, {
  title: "OM2.8",
  version: "2.6",
  description: "Absolute Range for Ordinal and Continuous Observations",
  type: "Field",
  item: 633,
  table: "",
  longName: "HL7Absolute Range for Ordinal and Continuous Observations",
  length: 250
});

/**
 * OM2.9 - Delta Check Criteria
 */
export const OM2_9 = datatypes.DLT.register(hl7v2Metadata, {
  title: "OM2.9",
  version: "2.6",
  description: "Delta Check Criteria",
  type: "Field",
  item: 634,
  table: "",
  longName: "HL7Delta Check Criteria",
  length: 250
});

/**
 * OM2.10 - Minimum Meaningful Increments
 */
export const OM2_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "OM2.10",
  version: "2.6",
  description: "Minimum Meaningful Increments",
  type: "Field",
  item: 635,
  table: "",
  longName: "HL7Minimum Meaningful Increments",
  length: 20
});
