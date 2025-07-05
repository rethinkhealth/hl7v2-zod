import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ovr";

/**
 * HL7 v2.5 OVR Segment
 *
 * HL7 v2.5 OVR segment definition
 * Contains field definitions and constraints for the OVR segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OVR segment schema
 * Defines the structure and validation rules for the OVR segment
 */
export const ovrSchema = z
  .object({
    "1": fields.OVR_1.optional(),
    "2": fields.OVR_2.optional(),
    "3": fields.OVR_3.optional(),
    "4": fields.OVR_4.optional(),
    "5": fields.OVR_5.optional()
  })
  .register(hl7v2Metadata, {
    title: "OVR",
    version: "2.5",
    description: "HL7 v2.5 OVR segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the OVR schema
 */
export type OVR = z.infer<typeof ovrSchema>;

/**
 * Default export for convenience
 */
export default ovrSchema;
