import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 QIP Composite Data Type
 *
 * HL7 v2.6 QIP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QIP.1 - Segment Field Name
 */
export const QIP_1 = SimpleTypes.ST.max(12).register(hl7v2Metadata, {
  title: "QIP.1",
  version: "2.6",
  description: "Segment Field Name",
  type: "DataType",
  length: 12,
  optionality: "R"
});

/**
 * QIP.2 - Values
 */
export const QIP_2 = SimpleTypes.ST.max(199).register(hl7v2Metadata, {
  title: "QIP.2",
  version: "2.6",
  description: "Values",
  type: "DataType",
  length: 199,
  optionality: "R"
});

/**
 * QIP - HL7 v2.6 QIP composite data type
 *
 * Components:
 * - QIP.1: Segment Field Name (ST)
 * - QIP.2: Values (ST)
 */
export const QIP = z
  .object({
    "1": QIP_1,
    "2": QIP_2
  })
  .register(hl7v2Metadata, {
    title: "QIP",
    version: "2.6",
    description: "HL7 v2.6 QIP composite data type"
  });

/**
 * Type definition for QIP
 */
export type QIP = z.infer<typeof QIP>;
