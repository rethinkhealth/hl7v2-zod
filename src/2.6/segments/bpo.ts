import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/bpo";

/**
 * HL7 v2.6 BPO Segment
 *
 * HL7 v2.6 BPO segment definition
 * Contains field definitions and constraints for the BPO segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BPO segment schema
 * Defines the structure and validation rules for the BPO segment
 */
export const bpoSchema = z
  .object({
    "1": fields.BPO_1,
    "2": fields.BPO_2,
    "3": z.array(fields.BPO_3).optional(),
    "4": fields.BPO_4,
    "5": fields.BPO_5.optional(),
    "6": fields.BPO_6.optional(),
    "7": fields.BPO_7.optional(),
    "8": fields.BPO_8.optional(),
    "9": fields.BPO_9.optional(),
    "10": fields.BPO_10.optional(),
    "11": fields.BPO_11.optional(),
    "12": fields.BPO_12.optional(),
    "13": z.array(fields.BPO_13).optional(),
    "14": fields.BPO_14.optional()
  })
  .register(hl7v2Metadata, {
    title: "BPO",
    version: "2.6",
    description: "HL7 v2.6 BPO segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the BPO schema
 */
export type BPO = z.infer<typeof bpoSchema>;

/**
 * Default export for convenience
 */
export default bpoSchema;
