import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MOP } from './mop';

/**
 * HL7 v2.6 RMC Composite Data Type
 * 
 * HL7 v2.6 RMC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RMC.1 - Room Type
 */
export const RMC_1 = SimpleTypes.IS.max(20).register(hl7v2Metadata, {
  "title": "RMC.1",
  "version": "2.6",
  "description": "Room Type",
  "type": "DataType",
  "length": 20,
  "optionality": "R"
});

/**
 * RMC.2 - Amount Type
 */
export const RMC_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "RMC.2",
  "version": "2.6",
  "description": "Amount Type",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * RMC.3 - Coverage Amount
 */
export const RMC_3 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "RMC.3",
  "version": "2.6",
  "description": "Coverage Amount",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * RMC.4 - Money or Percentage
 */
export const RMC_4 = MOP.register(hl7v2Metadata, {
  "title": "RMC.4",
  "version": "2.6",
  "description": "Money or Percentage",
  "type": "DataType",
  "length": 23,
  "optionality": "R"
});

/**
 * RMC - HL7 v2.6 RMC composite data type
 * 
 * Components:
 * - RMC.1: Room Type (IS)
 * - RMC.2: Amount Type (IS)
 * - RMC.3: Coverage Amount (NM)
 * - RMC.4: Money or Percentage (MOP)
 */
export const RMC = z.object({
  "1": RMC_1,
  "2": RMC_2,
  "3": RMC_3,
  "4": RMC_4
}).register(hl7v2Metadata, {
  title: 'RMC',
  version: '2.6',
  description: 'HL7 v2.6 RMC composite data type'
});

/**
 * Type definition for RMC
 */
export type RMC = z.infer<typeof RMC>;
