import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.5 CE Composite Data Type
 *
 * HL7 v2.5 CE composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CE.1 - Identifier
 */
export const CE_1 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "CE.1",
  version: "2.5",
  description: "Identifier",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CE.2 - Text
 */
export const CE_2 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CE.2",
  version: "2.5",
  description: "Text",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CE.3 - Name of Coding System
 */
export const CE_3 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  title: "CE.3",
  version: "2.5",
  description: "Name of Coding System",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CE.4 - Alternate Identifier
 */
export const CE_4 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "CE.4",
  version: "2.5",
  description: "Alternate Identifier",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CE.5 - Alternate Text
 */
export const CE_5 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "CE.5",
  version: "2.5",
  description: "Alternate Text",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * CE.6 - Name of Alternate Coding System
 */
export const CE_6 = SimpleTypes.ID.max(20).optional().register(hl7v2Metadata, {
  title: "CE.6",
  version: "2.5",
  description: "Name of Alternate Coding System",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * CE - HL7 v2.5 CE composite data type
 *
 * Components:
 * - CE.1: Identifier (ST)
 * - CE.2: Text (ST)
 * - CE.3: Name of Coding System (ID)
 * - CE.4: Alternate Identifier (ST)
 * - CE.5: Alternate Text (ST)
 * - CE.6: Name of Alternate Coding System (ID)
 */
export const CE = z
  .object({
    "1": CE_1,
    "2": CE_2,
    "3": CE_3,
    "4": CE_4,
    "5": CE_5,
    "6": CE_6
  })
  .register(hl7v2Metadata, {
    title: "CE",
    version: "2.5",
    description: "HL7 v2.5 CE composite data type"
  });

/**
 * Type definition for CE
 */
export type CE = z.infer<typeof CE>;
