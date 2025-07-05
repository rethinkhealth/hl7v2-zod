import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/dsp";

/**
 * HL7 v2.7 DSP Segment
 *
 * HL7 v2.7 DSP segment definition
 * Contains field definitions and constraints for the DSP segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DSP segment schema
 * Defines the structure and validation rules for the DSP segment
 */
export const dspSchema = z
  .object({
    "1": fields.DSP_1.optional(),
    "2": fields.DSP_2.optional(),
    "3": fields.DSP_3,
    "4": fields.DSP_4.optional(),
    "5": fields.DSP_5.optional()
  })
  .register(hl7v2Metadata, {
    title: "DSP",
    version: "2.7",
    description: "HL7 v2.7 DSP segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the DSP schema
 */
export type DSP = z.infer<typeof dspSchema>;

/**
 * Default export for convenience
 */
export default dspSchema;
