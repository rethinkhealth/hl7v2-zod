import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/tq2";

/**
 * HL7 v2.5 TQ2 Segment
 *
 * HL7 v2.5 TQ2 segment definition
 * Contains field definitions and constraints for the TQ2 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TQ2 segment schema
 * Defines the structure and validation rules for the TQ2 segment
 */
export const tq2Schema = z
  .object({
    "1": fields.TQ2_1.optional(),
    "2": fields.TQ2_2.optional(),
    "3": z.array(fields.TQ2_3).optional(),
    "4": z.array(fields.TQ2_4).optional(),
    "5": z.array(fields.TQ2_5).optional(),
    "6": fields.TQ2_6.optional(),
    "7": fields.TQ2_7.optional(),
    "8": fields.TQ2_8.optional(),
    "9": fields.TQ2_9.optional(),
    "10": fields.TQ2_10.optional()
  })
  .register(hl7v2Metadata, {
    title: "TQ2",
    version: "2.5",
    description: "HL7 v2.5 TQ2 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the TQ2 schema
 */
export type TQ2 = z.infer<typeof tq2Schema>;

/**
 * Default export for convenience
 */
export default tq2Schema;
