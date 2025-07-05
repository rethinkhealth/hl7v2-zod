import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/db1";

/**
 * HL7 v2.5 DB1 Segment
 *
 * HL7 v2.5 DB1 segment definition
 * Contains field definitions and constraints for the DB1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DB1 segment schema
 * Defines the structure and validation rules for the DB1 segment
 */
export const db1Schema = z
  .object({
    "1": fields.DB1_1,
    "2": fields.DB1_2.optional(),
    "3": z.array(fields.DB1_3).optional(),
    "4": fields.DB1_4.optional(),
    "5": fields.DB1_5.optional(),
    "6": fields.DB1_6.optional(),
    "7": fields.DB1_7.optional(),
    "8": fields.DB1_8.optional()
  })
  .register(hl7v2Metadata, {
    title: "DB1",
    version: "2.5",
    description: "HL7 v2.5 DB1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the DB1 schema
 */
export type DB1 = z.infer<typeof db1Schema>;

/**
 * Default export for convenience
 */
export default db1Schema;
