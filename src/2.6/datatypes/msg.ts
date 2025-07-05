import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 MSG Composite Data Type
 *
 * HL7 v2.6 MSG composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MSG.1 - Message Code
 */
export const MSG_1 = SimpleTypes.ID.max(3).register(hl7v2Metadata, {
  title: "MSG.1",
  version: "2.6",
  description: "Message Code",
  type: "DataType",
  length: 3,
  optionality: "R"
});

/**
 * MSG.2 - Trigger Event
 */
export const MSG_2 = SimpleTypes.ID.max(3).register(hl7v2Metadata, {
  title: "MSG.2",
  version: "2.6",
  description: "Trigger Event",
  type: "DataType",
  length: 3,
  optionality: "R"
});

/**
 * MSG.3 - Message Structure
 */
export const MSG_3 = SimpleTypes.ID.max(7).register(hl7v2Metadata, {
  title: "MSG.3",
  version: "2.6",
  description: "Message Structure",
  type: "DataType",
  length: 7,
  optionality: "R"
});

/**
 * MSG - HL7 v2.6 MSG composite data type
 *
 * Components:
 * - MSG.1: Message Code (ID)
 * - MSG.2: Trigger Event (ID)
 * - MSG.3: Message Structure (ID)
 */
export const MSG = z
  .object({
    "1": MSG_1,
    "2": MSG_2,
    "3": MSG_3
  })
  .register(hl7v2Metadata, {
    title: "MSG",
    version: "2.6",
    description: "HL7 v2.6 MSG composite data type"
  });

/**
 * Type definition for MSG
 */
export type MSG = z.infer<typeof MSG>;
