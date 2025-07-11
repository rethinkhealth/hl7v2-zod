import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/rmi";

/**
 * HL7 v2.6 RMI Segment
 *
 * HL7 v2.6 RMI segment definition
 * Contains field definitions and constraints for the RMI segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RMI segment schema
 * Defines the structure and validation rules for the RMI segment
 */
export const rmiSchema = z
  .object({
    "1": fields.RMI_1.optional(),
    "2": fields.RMI_2.optional(),
    "3": fields.RMI_3.optional()
  })
  .register(hl7v2Metadata, {
    title: "RMI",
    version: "2.6",
    description: "HL7 v2.6 RMI segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the RMI schema
 */
export type RMI = z.infer<typeof rmiSchema>;

/**
 * Default export for convenience
 */
export default rmiSchema;
