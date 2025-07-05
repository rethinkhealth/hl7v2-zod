import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.5 CSU Composite Data Type
 *
 * HL7 v2.5 CSU composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSU.1 - Channel Sensitivity
 */
export const CSU_1 = SimpleTypes.NM.max(60).register(hl7v2Metadata, {
  title: "CSU.1",
  version: "2.5",
  description: "Channel Sensitivity",
  type: "DataType",
  length: 60,
  optionality: "R"
});

/**
 * CSU.2 - Unit of Measure Identifier
 */
export const CSU_2 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "CSU.2",
  version: "2.5",
  description: "Unit of Measure Identifier",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CSU.3 - Unit of Measure Description
 */
export const CSU_3 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CSU.3",
  version: "2.5",
  description: "Unit of Measure Description",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CSU.4 - Unit of Measure Coding System
 */
export const CSU_4 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  title: "CSU.4",
  version: "2.5",
  description: "Unit of Measure Coding System",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CSU.5 - Alternate Unit of Measure Identifier
 */
export const CSU_5 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "CSU.5",
  version: "2.5",
  description: "Alternate Unit of Measure Identifier",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CSU.6 - Alternate Unit of Measure Description
 */
export const CSU_6 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CSU.6",
  version: "2.5",
  description: "Alternate Unit of Measure Description",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CSU.7 - Alternate Unit of Measure Coding System
 */
export const CSU_7 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  title: "CSU.7",
  version: "2.5",
  description: "Alternate Unit of Measure Coding System",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CSU - HL7 v2.5 CSU composite data type
 *
 * Components:
 * - CSU.1: Channel Sensitivity (NM)
 * - CSU.2: Unit of Measure Identifier (ST)
 * - CSU.3: Unit of Measure Description (ST)
 * - CSU.4: Unit of Measure Coding System (ID)
 * - CSU.5: Alternate Unit of Measure Identifier (ST)
 * - CSU.6: Alternate Unit of Measure Description (ST)
 * - CSU.7: Alternate Unit of Measure Coding System (ID)
 */
export const CSU = z
  .object({
    "1": CSU_1,
    "2": CSU_2,
    "3": CSU_3,
    "4": CSU_4,
    "5": CSU_5,
    "6": CSU_6,
    "7": CSU_7
  })
  .register(hl7v2Metadata, {
    title: "CSU",
    version: "2.5",
    description: "HL7 v2.5 CSU composite data type"
  });

/**
 * Type definition for CSU
 */
export type CSU = z.infer<typeof CSU>;
