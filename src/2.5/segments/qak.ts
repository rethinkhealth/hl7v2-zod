import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/qak";

/**
 * HL7 v2.5 QAK Segment
 *
 * HL7 v2.5 QAK segment definition
 * Contains field definitions and constraints for the QAK segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QAK segment schema
 * Defines the structure and validation rules for the QAK segment
 */
export const qakSchema = z
  .object({
    "1": fields.QAK_1.optional(),
    "2": fields.QAK_2.optional(),
    "3": fields.QAK_3.optional(),
    "4": fields.QAK_4.optional(),
    "5": fields.QAK_5.optional(),
    "6": fields.QAK_6.optional()
  })
  .register(hl7v2Metadata, {
    title: "QAK",
    version: "2.5",
    description: "HL7 v2.5 QAK segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the QAK schema
 */
export type QAK = z.infer<typeof qakSchema>;

/**
 * Default export for convenience
 */
export default qakSchema;
