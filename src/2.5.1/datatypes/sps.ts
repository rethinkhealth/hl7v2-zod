import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { MixedTypes } from './mixedtypes';
import { CWE } from './cwe';

/**
 * HL7 v2.5 SPS Composite Data Type
 * 
 * HL7 v2.5 SPS composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SPS.1 - Specimen Source Name or Code
 */
export const SPS_1 = CWE.optional().register(hl7v2Metadata, {
  "title": "SPS.1",
  "version": "2.5",
  "description": "Specimen Source Name or Code",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * SPS.2 - Additives
 */
export const SPS_2 = CWE.optional().register(hl7v2Metadata, {
  "title": "SPS.2",
  "version": "2.5",
  "description": "Additives",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * SPS.3 - Specimen Collection Method
 */
export const SPS_3 = MixedTypes.TX.optional().register(hl7v2Metadata, {
  "title": "SPS.3",
  "version": "2.5",
  "description": "Specimen Collection Method",
  "type": "DataType",
  "length": 200,
  "optionality": "O"
});

/**
 * SPS.4 - Body Site
 */
export const SPS_4 = CWE.optional().register(hl7v2Metadata, {
  "title": "SPS.4",
  "version": "2.5",
  "description": "Body Site",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * SPS.5 - Site Modifier
 */
export const SPS_5 = CWE.optional().register(hl7v2Metadata, {
  "title": "SPS.5",
  "version": "2.5",
  "description": "Site Modifier",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * SPS.6 - Collection Method Modifier Code
 */
export const SPS_6 = CWE.optional().register(hl7v2Metadata, {
  "title": "SPS.6",
  "version": "2.5",
  "description": "Collection Method Modifier Code",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * SPS.7 - Specimen Role
 */
export const SPS_7 = CWE.optional().register(hl7v2Metadata, {
  "title": "SPS.7",
  "version": "2.5",
  "description": "Specimen Role",
  "type": "DataType",
  "length": 705,
  "optionality": "O"
});

/**
 * SPS - HL7 v2.5 SPS composite data type
 * 
 * Components:
 * - SPS.1: Specimen Source Name or Code (CWE)
 * - SPS.2: Additives (CWE)
 * - SPS.3: Specimen Collection Method (TX)
 * - SPS.4: Body Site (CWE)
 * - SPS.5: Site Modifier (CWE)
 * - SPS.6: Collection Method Modifier Code (CWE)
 * - SPS.7: Specimen Role (CWE)
 */
export const SPS = z.object({
  "1": SPS_1,
  "2": SPS_2,
  "3": SPS_3,
  "4": SPS_4,
  "5": SPS_5,
  "6": SPS_6,
  "7": SPS_7
}).register(hl7v2Metadata, {
  title: 'SPS',
  version: '2.5',
  description: 'HL7 v2.5 SPS composite data type'
});

/**
 * Type definition for SPS
 */
export type SPS = z.infer<typeof SPS>;
