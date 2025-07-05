import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.6 AUI Composite Data Type
 * 
 * HL7 v2.6 AUI composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AUI.1 - Authorization Number
 */
export const AUI_1 = SimpleTypes.ST.max(30).optional().register(hl7v2Metadata, {
  "title": "AUI.1",
  "version": "2.6",
  "description": "Authorization Number",
  "type": "DataType",
  "length": 30,
  "optionality": "O"
});

/**
 * AUI.2 - Date
 */
export const AUI_2 = SimpleTypes.DT.max(8).optional().register(hl7v2Metadata, {
  "title": "AUI.2",
  "version": "2.6",
  "description": "Date",
  "type": "DataType",
  "length": 8,
  "optionality": "O"
});

/**
 * AUI.3 - Source
 */
export const AUI_3 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "AUI.3",
  "version": "2.6",
  "description": "Source",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * AUI - HL7 v2.6 AUI composite data type
 * 
 * Components:
 * - AUI.1: Authorization Number (ST)
 * - AUI.2: Date (DT)
 * - AUI.3: Source (ST)
 */
export const AUI = z.object({
  "1": AUI_1,
  "2": AUI_2,
  "3": AUI_3
}).register(hl7v2Metadata, {
  title: 'AUI',
  version: '2.6',
  description: 'HL7 v2.6 AUI composite data type'
});

/**
 * Type definition for AUI
 */
export type AUI = z.infer<typeof AUI>;
