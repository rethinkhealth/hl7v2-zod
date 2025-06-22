import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 DST Fields
 * 
 * HL7 v2.9 DST field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DST.1 - Destination
 */
export const DST_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "DST.1",
  "version": "2.9",
  "description": "Destination",
  "type": "Field",
  "item": 3491,
  "table": "HL70943",
  "longName": "HL7Destination"
});

/**
 * DST.2 - Route
 */
export const DST_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "DST.2",
  "version": "2.9",
  "description": "Route",
  "type": "Field",
  "item": 3492,
  "table": "HL70944",
  "longName": "HL7Route"
});
