import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/tq1";

/**
 * HL7 v2.6 TQ1 Segment
 *
 * HL7 v2.6 TQ1 segment definition
 * Contains field definitions and constraints for the TQ1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TQ1 segment schema
 * Defines the structure and validation rules for the TQ1 segment
 */
export const tq1Schema = z
  .object({
    "1": fields.TQ1_1.optional(),
    "2": fields.TQ1_2.optional(),
    "3": z.array(fields.TQ1_3).optional(),
    "4": z.array(fields.TQ1_4).optional(),
    "5": z.array(fields.TQ1_5).optional(),
    "6": fields.TQ1_6.optional(),
    "7": fields.TQ1_7.optional(),
    "8": fields.TQ1_8.optional(),
    "9": z.array(fields.TQ1_9).optional(),
    "10": fields.TQ1_10.optional(),
    "11": fields.TQ1_11.optional(),
    "12": fields.TQ1_12.optional(),
    "13": fields.TQ1_13.optional(),
    "14": fields.TQ1_14.optional()
  })
  .register(hl7v2Metadata, {
    title: "TQ1",
    version: "2.6",
    description: "HL7 v2.6 TQ1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the TQ1 schema
 */
export type TQ1 = z.infer<typeof tq1Schema>;

/**
 * Default export for convenience
 */
export default tq1Schema;
