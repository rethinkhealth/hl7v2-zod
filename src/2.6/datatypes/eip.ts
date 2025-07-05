import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 EIP Composite Data Type
 *
 * HL7 v2.6 EIP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EIP.1 - Placer Assigned Identifier
 */
export const EIP_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "EIP.1",
  version: "2.6",
  description: "Placer Assigned Identifier",
  type: "DataType",
  length: 427,
  optionality: "O"
});

/**
 * EIP.2 - Filler Assigned Identifier
 */
export const EIP_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "EIP.2",
  version: "2.6",
  description: "Filler Assigned Identifier",
  type: "DataType",
  length: 427,
  optionality: "O"
});

/**
 * EIP - HL7 v2.6 EIP composite data type
 *
 * Components:
 * - EIP.1: Placer Assigned Identifier (EI)
 * - EIP.2: Filler Assigned Identifier (EI)
 */
export const EIP = z
  .object({
    "1": EIP_1,
    "2": EIP_2
  })
  .register(hl7v2Metadata, {
    title: "EIP",
    version: "2.6",
    description: "HL7 v2.6 EIP composite data type"
  });

/**
 * Type definition for EIP
 */
export type EIP = z.infer<typeof EIP>;
