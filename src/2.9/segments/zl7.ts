import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/zl7';

/**
 * HL7 v2.9 ZL7 Segment
 * 
 * HL7 v2.9 ZL7 segment definition
 * Contains field definitions and constraints for the ZL7 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ZL7 segment schema
 * Defines the structure and validation rules for the ZL7 segment
 */
export const zl7Schema = z.object({
  "1": fields.ZL7_1,
  "2": fields.ZL7_2
}).register(hl7v2Metadata, {
  title: "ZL7",
  version: "2.9",
  description: "HL7 v2.9 ZL7 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ZL7 schema
 */
export type ZL7 = z.infer<typeof zl7Schema>;

/**
 * Default export for convenience
 */
export default zl7Schema;