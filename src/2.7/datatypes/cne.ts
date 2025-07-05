import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.7 CNE Composite Data Type
 *
 * HL7 v2.7 CNE composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CNE.1 - Identifier
 */
export const CNE_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  title: "CNE.1",
  version: "2.7",
  description: "Identifier",
  type: "DataType",
  optionality: "R"
});

/**
 * CNE.2 - Text
 */
export const CNE_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.2",
  version: "2.7",
  description: "Text",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.3 - Name of Coding System
 */
export const CNE_3 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  title: "CNE.3",
  version: "2.7",
  description: "Name of Coding System",
  type: "DataType",
  length: 12,
  optionality: "O"
});

/**
 * CNE.4 - Alternate Identifier
 */
export const CNE_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.4",
  version: "2.7",
  description: "Alternate Identifier",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.5 - Alternate Text
 */
export const CNE_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.5",
  version: "2.7",
  description: "Alternate Text",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.6 - Name of Alternate Coding System
 */
export const CNE_6 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  title: "CNE.6",
  version: "2.7",
  description: "Name of Alternate Coding System",
  type: "DataType",
  length: 12,
  optionality: "O"
});

/**
 * CNE.7 - Coding System Version ID
 */
export const CNE_7 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.7",
  version: "2.7",
  description: "Coding System Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.8 - Alternate Coding System Version ID
 */
export const CNE_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.8",
  version: "2.7",
  description: "Alternate Coding System Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.9 - Original Text
 */
export const CNE_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.9",
  version: "2.7",
  description: "Original Text",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.10 - Second Alternate Identifier
 */
export const CNE_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.10",
  version: "2.7",
  description: "Second Alternate Identifier",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.11 - Second Alternate Text
 */
export const CNE_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.11",
  version: "2.7",
  description: "Second Alternate Text",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.12 - Name of Second Alternate Coding System
 */
export const CNE_12 = SimpleTypes.ID.max(12).optional().register(hl7v2Metadata, {
  title: "CNE.12",
  version: "2.7",
  description: "Name of Second Alternate Coding System",
  type: "DataType",
  length: 12,
  optionality: "O"
});

/**
 * CNE.13 - Second Alternate Coding System Version ID
 */
export const CNE_13 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.13",
  version: "2.7",
  description: "Second Alternate Coding System Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.14 - Coding System OID
 */
export const CNE_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.14",
  version: "2.7",
  description: "Coding System OID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.15 - Value Set OID
 */
export const CNE_15 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.15",
  version: "2.7",
  description: "Value Set OID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.16 - Value Set Version ID
 */
export const CNE_16 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  title: "CNE.16",
  version: "2.7",
  description: "Value Set Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.17 - Alternate Coding System OID
 */
export const CNE_17 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.17",
  version: "2.7",
  description: "Alternate Coding System OID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.18 - Alternate Value Set OID
 */
export const CNE_18 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.18",
  version: "2.7",
  description: "Alternate Value Set OID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.19 - Alternate Value Set Version ID
 */
export const CNE_19 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  title: "CNE.19",
  version: "2.7",
  description: "Alternate Value Set Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.20 - Second Alternate Coding System OID
 */
export const CNE_20 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.20",
  version: "2.7",
  description: "Second Alternate Coding System OID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.21 - Second Alternate Value Set OID
 */
export const CNE_21 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CNE.21",
  version: "2.7",
  description: "Second Alternate Value Set OID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE.22 - Second Alternate Value Set Version ID
 */
export const CNE_22 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  title: "CNE.22",
  version: "2.7",
  description: "Second Alternate Value Set Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * CNE - HL7 v2.7 CNE composite data type
 *
 * Components:
 * - CNE.1: Identifier (ST)
 * - CNE.2: Text (ST)
 * - CNE.3: Name of Coding System (ID)
 * - CNE.4: Alternate Identifier (ST)
 * - CNE.5: Alternate Text (ST)
 * - CNE.6: Name of Alternate Coding System (ID)
 * - CNE.7: Coding System Version ID (ST)
 * - CNE.8: Alternate Coding System Version ID (ST)
 * - CNE.9: Original Text (ST)
 * - CNE.10: Second Alternate Identifier (ST)
 * - CNE.11: Second Alternate Text (ST)
 * - CNE.12: Name of Second Alternate Coding System (ID)
 * - CNE.13: Second Alternate Coding System Version ID (ST)
 * - CNE.14: Coding System OID (ST)
 * - CNE.15: Value Set OID (ST)
 * - CNE.16: Value Set Version ID (DTM)
 * - CNE.17: Alternate Coding System OID (ST)
 * - CNE.18: Alternate Value Set OID (ST)
 * - CNE.19: Alternate Value Set Version ID (DTM)
 * - CNE.20: Second Alternate Coding System OID (ST)
 * - CNE.21: Second Alternate Value Set OID (ST)
 * - CNE.22: Second Alternate Value Set Version ID (DTM)
 */
export const CNE = z
  .object({
    "1": CNE_1,
    "2": CNE_2,
    "3": CNE_3,
    "4": CNE_4,
    "5": CNE_5,
    "6": CNE_6,
    "7": CNE_7,
    "8": CNE_8,
    "9": CNE_9,
    "10": CNE_10,
    "11": CNE_11,
    "12": CNE_12,
    "13": CNE_13,
    "14": CNE_14,
    "15": CNE_15,
    "16": CNE_16,
    "17": CNE_17,
    "18": CNE_18,
    "19": CNE_19,
    "20": CNE_20,
    "21": CNE_21,
    "22": CNE_22
  })
  .register(hl7v2Metadata, {
    title: "CNE",
    version: "2.7",
    description: "HL7 v2.7 CNE composite data type"
  });

/**
 * Type definition for CNE
 */
export type CNE = z.infer<typeof CNE>;
