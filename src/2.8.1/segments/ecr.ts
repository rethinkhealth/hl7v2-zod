import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ecr";

/**
 * HL7 v2.8 ECR Segment
 *
 * HL7 v2.8 ECR segment definition
 * Contains field definitions and constraints for the ECR segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ECR segment schema
 * Defines the structure and validation rules for the ECR segment
 */
export const ecrSchema = z
  .object({
    "1": fields.ECR_1,
    "2": fields.ECR_2,
    "3": z.array(fields.ECR_3).optional()
  })
  .register(hl7v2Metadata, {
    title: "ECR",
    version: "2.8",
    description: "HL7 v2.8 ECR segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ECR schema
 */
export type ECR = z.infer<typeof ecrSchema>;

/**
 * Default export for convenience
 */
export default ecrSchema;
