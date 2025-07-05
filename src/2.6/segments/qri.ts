import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/qri";

/**
 * HL7 v2.6 QRI Segment
 *
 * HL7 v2.6 QRI segment definition
 * Contains field definitions and constraints for the QRI segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRI segment schema
 * Defines the structure and validation rules for the QRI segment
 */
export const qriSchema = z
  .object({
    "1": fields.QRI_1.optional(),
    "2": z.array(fields.QRI_2).optional(),
    "3": fields.QRI_3.optional()
  })
  .register(hl7v2Metadata, {
    title: "QRI",
    version: "2.6",
    description: "HL7 v2.6 QRI segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the QRI schema
 */
export type QRI = z.infer<typeof qriSchema>;

/**
 * Default export for convenience
 */
export default qriSchema;
