import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.7 QRF Segment
 *
 * HL7 v2.7 QRF segment definition
 * Contains field definitions and constraints for the QRF segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRF segment schema
 * Defines the structure and validation rules for the QRF segment
 * This segment contains undefined elements and is represented as any
 */
export const qrfSchema = z.any().register(hl7v2Metadata, {
  title: "QRF",
  version: "2.7",
  description: "HL7 v2.7 QRF segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the QRF schema
 */
export type QRF = z.infer<typeof qrfSchema>;

/**
 * Default export for convenience
 */
export default qrfSchema;
