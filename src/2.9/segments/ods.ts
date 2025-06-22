import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ods';

/**
 * HL7 v2.9 ODS Segment
 * 
 * HL7 v2.9 ODS segment definition
 * Contains field definitions and constraints for the ODS segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ODS segment schema
 * Defines the structure and validation rules for the ODS segment
 */
export const odsSchema = z.object({
  "1": fields.ODS_1,
  "2": z.array(fields.ODS_2).optional(),
  "3": z.array(fields.ODS_3),
  "4": z.array(fields.ODS_4).optional()
}).register(hl7v2Metadata, {
  title: "ODS",
  version: "2.9",
  description: "HL7 v2.9 ODS segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ODS schema
 */
export type ODS = z.infer<typeof odsSchema>;

/**
 * Default export for convenience
 */
export default odsSchema;