import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/qid";

/**
 * HL7 v2.7 QID Segment
 *
 * HL7 v2.7 QID segment definition
 * Contains field definitions and constraints for the QID segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QID segment schema
 * Defines the structure and validation rules for the QID segment
 */
export const qidSchema = z
  .object({
    "1": fields.QID_1,
    "2": fields.QID_2
  })
  .register(hl7v2Metadata, {
    title: "QID",
    version: "2.7",
    description: "HL7 v2.7 QID segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the QID schema
 */
export type QID = z.infer<typeof qidSchema>;

/**
 * Default export for convenience
 */
export default qidSchema;
