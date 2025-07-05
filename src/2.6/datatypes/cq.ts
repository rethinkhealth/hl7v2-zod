import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { CWE } from './cwe';

/**
 * HL7 v2.6 CQ Composite Data Type
 * 
 * HL7 v2.6 CQ composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CQ.1 - Quantity
 */
export const CQ_1 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "CQ.1",
  "version": "2.6",
  "description": "Quantity",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * CQ.2 - Units
 */
export const CQ_2 = CWE.optional().register(hl7v2Metadata, {
  "title": "CQ.2",
  "version": "2.6",
  "description": "Units",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * CQ - HL7 v2.6 CQ composite data type
 * 
 * Components:
 * - CQ.1: Quantity (NM)
 * - CQ.2: Units (CWE)
 */
export const CQ = z.object({
  "1": CQ_1,
  "2": CQ_2
}).register(hl7v2Metadata, {
  title: 'CQ',
  version: '2.6',
  description: 'HL7 v2.6 CQ composite data type'
});

/**
 * Type definition for CQ
 */
export type CQ = z.infer<typeof CQ>;
