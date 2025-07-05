import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.5 WVS Composite Data Type
 *
 * HL7 v2.5 WVS composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * WVS.1 - Source One Name
 */
export const WVS_1 = SimpleTypes.ST.max(8).register(hl7v2Metadata, {
  title: "WVS.1",
  version: "2.5",
  description: "Source One Name",
  type: "DataType",
  length: 8,
  optionality: "R"
});

/**
 * WVS.2 - Source Two Name
 */
export const WVS_2 = SimpleTypes.ST.max(8).optional().register(hl7v2Metadata, {
  title: "WVS.2",
  version: "2.5",
  description: "Source Two Name",
  type: "DataType",
  length: 8,
  optionality: "O"
});

/**
 * WVS - HL7 v2.5 WVS composite data type
 *
 * Components:
 * - WVS.1: Source One Name (ST)
 * - WVS.2: Source Two Name (ST)
 */
export const WVS = z
  .object({
    "1": WVS_1,
    "2": WVS_2
  })
  .register(hl7v2Metadata, {
    title: "WVS",
    version: "2.5",
    description: "HL7 v2.5 WVS composite data type"
  });

/**
 * Type definition for WVS
 */
export type WVS = z.infer<typeof WVS>;
