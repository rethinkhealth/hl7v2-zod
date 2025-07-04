import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/qrd';

/**
 * HL7 v2.5 QRD Segment
 * 
 * HL7 v2.5 QRD segment definition
 * Contains field definitions and constraints for the QRD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRD segment schema
 * Defines the structure and validation rules for the QRD segment
 */
export const qrdSchema = z.object({
  "1": fields.QRD_1,
  "2": fields.QRD_2,
  "3": fields.QRD_3,
  "4": fields.QRD_4,
  "5": fields.QRD_5.optional(),
  "6": fields.QRD_6.optional(),
  "7": fields.QRD_7,
  "8": z.array(fields.QRD_8),
  "9": z.array(fields.QRD_9),
  "10": z.array(fields.QRD_10),
  "11": z.array(fields.QRD_11).optional(),
  "12": fields.QRD_12.optional()
}).register(hl7v2Metadata, {
  title: "QRD",
  version: "2.5",
  description: "HL7 v2.5 QRD segment",
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