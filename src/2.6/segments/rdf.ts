import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/rdf";

/**
 * HL7 v2.6 RDF Segment
 *
 * HL7 v2.6 RDF segment definition
 * Contains field definitions and constraints for the RDF segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDF segment schema
 * Defines the structure and validation rules for the RDF segment
 */
export const rdfSchema = z
  .object({
    "1": fields.RDF_1,
    "2": z.array(fields.RDF_2)
  })
  .register(hl7v2Metadata, {
    title: "RDF",
    version: "2.6",
    description: "HL7 v2.6 RDF segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the RDF schema
 */
export type RDF = z.infer<typeof rdfSchema>;

/**
 * Default export for convenience
 */
export default rdfSchema;
