import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 CWE Composite Data Type
 *
 * HL7 v2.6 CWE composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CWE.1 - Identifier
 */
export const CWE_1 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "CWE.1",
  version: "2.6",
  description: "Identifier",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CWE.2 - Text
 */
export const CWE_2 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CWE.2",
  version: "2.6",
  description: "Text",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CWE.3 - Name of Coding System
 */
export const CWE_3 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  title: "CWE.3",
  version: "2.6",
  description: "Name of Coding System",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CWE.4 - Alternate Identifier
 */
export const CWE_4 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "CWE.4",
  version: "2.6",
  description: "Alternate Identifier",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CWE.5 - Alternate Text
 */
export const CWE_5 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CWE.5",
  version: "2.6",
  description: "Alternate Text",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CWE.6 - Name of Alternate Coding System
 */
export const CWE_6 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  title: "CWE.6",
  version: "2.6",
  description: "Name of Alternate Coding System",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CWE.7 - Coding System Version ID
 */
export const CWE_7 = SimpleTypes.ST.max(10).optional().register(hl7v2Metadata, {
  title: "CWE.7",
  version: "2.6",
  description: "Coding System Version ID",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * CWE.8 - Alternate Coding System Version ID
 */
export const CWE_8 = SimpleTypes.ST.max(10).optional().register(hl7v2Metadata, {
  title: "CWE.8",
  version: "2.6",
  description: "Alternate Coding System Version ID",
  type: "DataType",
  length: 10,
  optionality: "O"
});

/**
 * CWE.9 - Original Text
 */
export const CWE_9 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CWE.9",
  version: "2.6",
  description: "Original Text",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CWE - HL7 v2.6 CWE composite data type
 *
 * Components:
 * - CWE.1: Identifier (ST)
 * - CWE.2: Text (ST)
 * - CWE.3: Name of Coding System (ID)
 * - CWE.4: Alternate Identifier (ST)
 * - CWE.5: Alternate Text (ST)
 * - CWE.6: Name of Alternate Coding System (ID)
 * - CWE.7: Coding System Version ID (ST)
 * - CWE.8: Alternate Coding System Version ID (ST)
 * - CWE.9: Original Text (ST)
 */
export const CWE = z
  .object({
    "1": CWE_1,
    "2": CWE_2,
    "3": CWE_3,
    "4": CWE_4,
    "5": CWE_5,
    "6": CWE_6,
    "7": CWE_7,
    "8": CWE_8,
    "9": CWE_9
  })
  .register(hl7v2Metadata, {
    title: "CWE",
    version: "2.6",
    description: "HL7 v2.6 CWE composite data type"
  });

/**
 * Type definition for CWE
 */
export type CWE = z.infer<typeof CWE>;
