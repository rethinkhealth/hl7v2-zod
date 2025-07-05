import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/edu";

/**
 * HL7 v2.5 EDU Segment
 *
 * HL7 v2.5 EDU segment definition
 * Contains field definitions and constraints for the EDU segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EDU segment schema
 * Defines the structure and validation rules for the EDU segment
 */
export const eduSchema = z
  .object({
    "1": fields.EDU_1,
    "2": fields.EDU_2.optional(),
    "3": fields.EDU_3.optional(),
    "4": fields.EDU_4.optional(),
    "5": fields.EDU_5.optional(),
    "6": fields.EDU_6.optional(),
    "7": fields.EDU_7.optional(),
    "8": fields.EDU_8.optional(),
    "9": z.array(fields.EDU_9).optional()
  })
  .register(hl7v2Metadata, {
    title: "EDU",
    version: "2.5",
    description: "HL7 v2.5 EDU segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the EDU schema
 */
export type EDU = z.infer<typeof eduSchema>;

/**
 * Default export for convenience
 */
export default eduSchema;
