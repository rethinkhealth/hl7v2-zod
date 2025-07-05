import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.6 RPT Composite Data Type
 *
 * HL7 v2.6 RPT composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RPT.1 - Repeat Pattern Code
 */
export const RPT_1 = CWE.register(hl7v2Metadata, {
  title: "RPT.1",
  version: "2.6",
  description: "Repeat Pattern Code",
  type: "DataType",
  length: 705,
  optionality: "R"
});

/**
 * RPT.2 - Calendar Alignment
 */
export const RPT_2 = SimpleTypes.ID.max(2).optional().register(hl7v2Metadata, {
  title: "RPT.2",
  version: "2.6",
  description: "Calendar Alignment",
  type: "DataType",
  length: 2,
  optionality: "O"
});

/**
 * RPT.3 - Phase Range Begin Value
 */
export const RPT_3 = SimpleTypes.NM.max(10).optional().register(hl7v2Metadata, {
  title: "RPT.3",
  version: "2.6",
  description: "Phase Range Begin Value",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * RPT.4 - Phase Range End Value
 */
export const RPT_4 = SimpleTypes.NM.max(10).optional().register(hl7v2Metadata, {
  title: "RPT.4",
  version: "2.6",
  description: "Phase Range End Value",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * RPT.5 - Period Quantity
 */
export const RPT_5 = SimpleTypes.NM.max(10).optional().register(hl7v2Metadata, {
  title: "RPT.5",
  version: "2.6",
  description: "Period Quantity",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * RPT.6 - Period Units
 */
export const RPT_6 = SimpleTypes.IS.max(10).optional().register(hl7v2Metadata, {
  title: "RPT.6",
  version: "2.6",
  description: "Period Units",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * RPT.7 - Institution Specified Time
 */
export const RPT_7 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  title: "RPT.7",
  version: "2.6",
  description: "Institution Specified Time",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * RPT.8 - Event
 */
export const RPT_8 = SimpleTypes.ID.max(6).optional().register(hl7v2Metadata, {
  title: "RPT.8",
  version: "2.6",
  description: "Event",
  type: "DataType",
  length: 6,
  optionality: "O"
});

/**
 * RPT.9 - Event Offset Quantity
 */
export const RPT_9 = SimpleTypes.NM.max(10).optional().register(hl7v2Metadata, {
  title: "RPT.9",
  version: "2.6",
  description: "Event Offset Quantity",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * RPT.10 - Event Offset Units
 */
export const RPT_10 = SimpleTypes.IS.max(10).optional().register(hl7v2Metadata, {
  title: "RPT.10",
  version: "2.6",
  description: "Event Offset Units",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * RPT.11 - General Timing Specification
 */
export const RPT_11 = SimpleTypes.GTS.max(200).optional().register(hl7v2Metadata, {
  title: "RPT.11",
  version: "2.6",
  description: "General Timing Specification",
  type: "DataType",
  length: 200,
  optionality: "O"
});

/**
 * RPT - HL7 v2.6 RPT composite data type
 *
 * Components:
 * - RPT.1: Repeat Pattern Code (CWE)
 * - RPT.2: Calendar Alignment (ID)
 * - RPT.3: Phase Range Begin Value (NM)
 * - RPT.4: Phase Range End Value (NM)
 * - RPT.5: Period Quantity (NM)
 * - RPT.6: Period Units (IS)
 * - RPT.7: Institution Specified Time (ID)
 * - RPT.8: Event (ID)
 * - RPT.9: Event Offset Quantity (NM)
 * - RPT.10: Event Offset Units (IS)
 * - RPT.11: General Timing Specification (GTS)
 */
export const RPT = z
  .object({
    "1": RPT_1,
    "2": RPT_2,
    "3": RPT_3,
    "4": RPT_4,
    "5": RPT_5,
    "6": RPT_6,
    "7": RPT_7,
    "8": RPT_8,
    "9": RPT_9,
    "10": RPT_10,
    "11": RPT_11
  })
  .register(hl7v2Metadata, {
    title: "RPT",
    version: "2.6",
    description: "HL7 v2.6 RPT composite data type"
  });

/**
 * Type definition for RPT
 */
export type RPT = z.infer<typeof RPT>;
