import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.8 AUI Composite Data Type
 *
 * HL7 v2.8 AUI composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AUI.1 - Authorization Number
 */
export const AUI_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "AUI.1",
  version: "2.8",
  description: "Authorization Number",
  type: "DataType",
  optionality: "O"
});

/**
 * AUI.2 - Date
 */
export const AUI_2 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  title: "AUI.2",
  version: "2.8",
  description: "Date",
  type: "DataType",
  optionality: "O"
});

/**
 * AUI.3 - Source
 */
export const AUI_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "AUI.3",
  version: "2.8",
  description: "Source",
  type: "DataType",
  optionality: "O"
});

/**
 * AUI - HL7 v2.8 AUI composite data type
 *
 * Components:
 * - AUI.1: Authorization Number (ST)
 * - AUI.2: Date (DT)
 * - AUI.3: Source (ST)
 */
export const AUI = z
  .object({
    "1": AUI_1,
    "2": AUI_2,
    "3": AUI_3
  })
  .register(hl7v2Metadata, {
    title: "AUI",
    version: "2.8",
    description: "HL7 v2.8 AUI composite data type"
  });

/**
 * Type definition for AUI
 */
export type AUI = z.infer<typeof AUI>;
