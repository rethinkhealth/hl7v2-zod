import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 PLN Composite Data Type
 *
 * HL7 v2.6 PLN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PLN.1 - ID Number
 */
export const PLN_1 = SimpleTypes.ST.max(20).register(hl7v2Metadata, {
  title: "PLN.1",
  version: "2.6",
  description: "ID Number",
  type: "DataType",
  length: 20,
  optionality: "R"
});

/**
 * PLN.2 - Type of ID Number
 */
export const PLN_2 = SimpleTypes.IS.max(8).register(hl7v2Metadata, {
  title: "PLN.2",
  version: "2.6",
  description: "Type of ID Number",
  type: "DataType",
  length: 8,
  optionality: "R"
});

/**
 * PLN.3 - State/other Qualifying Information
 */
export const PLN_3 = SimpleTypes.ST.max(62).optional().register(hl7v2Metadata, {
  title: "PLN.3",
  version: "2.6",
  description: "State/other Qualifying Information",
  type: "DataType",
  length: 62,
  optionality: "O"
});

/**
 * PLN.4 - Expiration Date
 */
export const PLN_4 = SimpleTypes.DT.max(8).optional().register(hl7v2Metadata, {
  title: "PLN.4",
  version: "2.6",
  description: "Expiration Date",
  type: "DataType",
  length: 8,
  optionality: "O"
});

/**
 * PLN - HL7 v2.6 PLN composite data type
 *
 * Components:
 * - PLN.1: ID Number (ST)
 * - PLN.2: Type of ID Number (IS)
 * - PLN.3: State/other Qualifying Information (ST)
 * - PLN.4: Expiration Date (DT)
 */
export const PLN = z
  .object({
    "1": PLN_1,
    "2": PLN_2,
    "3": PLN_3,
    "4": PLN_4
  })
  .register(hl7v2Metadata, {
    title: "PLN",
    version: "2.6",
    description: "HL7 v2.6 PLN composite data type"
  });

/**
 * Type definition for PLN
 */
export type PLN = z.infer<typeof PLN>;
