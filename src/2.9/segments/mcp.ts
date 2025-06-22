import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/mcp';

/**
 * HL7 v2.9 MCP Segment
 * 
 * HL7 v2.9 MCP segment definition
 * Contains field definitions and constraints for the MCP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MCP segment schema
 * Defines the structure and validation rules for the MCP segment
 */
export const mcpSchema = z.object({
  "1": fields.MCP_1,
  "2": fields.MCP_2,
  "3": fields.MCP_3.optional(),
  "4": fields.MCP_4.optional(),
  "5": fields.MCP_5.optional()
}).register(hl7v2Metadata, {
  title: "MCP",
  version: "2.9",
  description: "HL7 v2.9 MCP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the MCP schema
 */
export type MCP = z.infer<typeof mcpSchema>;

/**
 * Default export for convenience
 */
export default mcpSchema;