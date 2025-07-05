import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { CWE } from './cwe';

/**
 * HL7 v2.6 SCV Composite Data Type
 * 
 * HL7 v2.6 SCV composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCV.1 - Parameter Class
 */
export const SCV_1 = CWE.optional().register(hl7v2Metadata, {
  "title": "SCV.1",
  "version": "2.6",
  "description": "Parameter Class",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * SCV.2 - Parameter Value
 */
export const SCV_2 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  "title": "SCV.2",
  "version": "2.6",
  "description": "Parameter Value",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * SCV - HL7 v2.6 SCV composite data type
 * 
 * Components:
 * - SCV.1: Parameter Class (CWE)
 * - SCV.2: Parameter Value (ST)
 */
export const SCV = z.object({
  "1": SCV_1,
  "2": SCV_2
}).register(hl7v2Metadata, {
  title: 'SCV',
  version: '2.6',
  description: 'HL7 v2.6 SCV composite data type'
});

/**
 * Type definition for SCV
 */
export type SCV = z.infer<typeof SCV>;
