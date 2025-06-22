import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ipc';

/**
 * HL7 v2.9 IPC Segment
 * 
 * HL7 v2.9 IPC segment definition
 * Contains field definitions and constraints for the IPC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IPC segment schema
 * Defines the structure and validation rules for the IPC segment
 */
export const ipcSchema = z.object({
  "1": fields.IPC_1,
  "2": fields.IPC_2,
  "3": fields.IPC_3,
  "4": fields.IPC_4,
  "5": fields.IPC_5.optional(),
  "6": z.array(fields.IPC_6).optional(),
  "7": fields.IPC_7.optional(),
  "8": z.array(fields.IPC_8).optional(),
  "9": fields.IPC_9.optional(),
  "10": fields.IPC_10.optional()
}).register(hl7v2Metadata, {
  title: "IPC",
  version: "2.9",
  description: "HL7 v2.9 IPC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the IPC schema
 */
export type IPC = z.infer<typeof ipcSchema>;

/**
 * Default export for convenience
 */
export default ipcSchema;