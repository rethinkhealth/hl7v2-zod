import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';

/**
 * HL7 v2.8 QRD Segment
 * 
 * HL7 v2.8 QRD segment definition
 * Contains field definitions and constraints for the QRD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRD segment schema
 * Defines the structure and validation rules for the QRD segment
 * This segment contains undefined elements and is represented as any
 */
export const qrdSchema = z.any().register(hl7v2Metadata, {
  title: "QRD",
  version: "2.8",
  description: "HL7 v2.8 QRD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the QRD schema
 */
export type QRD = z.infer<typeof qrdSchema>;

/**
 * Default export for convenience
 */
export default qrdSchema;