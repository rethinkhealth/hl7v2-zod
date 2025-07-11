import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.8 WVI Composite Data Type
 *
 * HL7 v2.8 WVI composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * WVI.1 - Channel Number
 */
export const WVI_1 = SimpleTypes.NM.register(hl7v2Metadata, {
  title: "WVI.1",
  version: "2.8",
  description: "Channel Number",
  type: "DataType",
  optionality: "R"
});

/**
 * WVI.2 - Channel Name
 */
export const WVI_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "WVI.2",
  version: "2.8",
  description: "Channel Name",
  type: "DataType",
  optionality: "O"
});

/**
 * WVI - HL7 v2.8 WVI composite data type
 *
 * Components:
 * - WVI.1: Channel Number (NM)
 * - WVI.2: Channel Name (ST)
 */
export const WVI = z
  .object({
    "1": WVI_1,
    "2": WVI_2
  })
  .register(hl7v2Metadata, {
    title: "WVI",
    version: "2.8",
    description: "HL7 v2.8 WVI composite data type"
  });

/**
 * Type definition for WVI
 */
export type WVI = z.infer<typeof WVI>;
