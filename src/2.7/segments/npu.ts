import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/npu';

/**
 * HL7 v2.7 NPU Segment
 * 
 * HL7 v2.7 NPU segment definition
 * Contains field definitions and constraints for the NPU segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NPU segment schema
 * Defines the structure and validation rules for the NPU segment
 */
export const npuSchema = z.object({
  "1": fields.NPU_1,
  "2": fields.NPU_2.optional()
}).register(hl7v2Metadata, {
  title: "NPU",
  version: "2.7",
  description: "HL7 v2.7 NPU segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the NPU schema
 */
export type NPU = z.infer<typeof npuSchema>;

/**
 * Default export for convenience
 */
export default npuSchema;