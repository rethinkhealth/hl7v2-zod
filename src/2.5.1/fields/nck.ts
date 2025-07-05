
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 NCK Fields
 * 
 * HL7 v2.5 NCK field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NCK.1 - System Date/Time
 */
export const NCK_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NCK.1",
  "version": "2.5",
  "description": "System Date/Time",
  "type": "Field",
  "item": 1172,
  "table": "",
  "longName": "HL7System Date/Time",
  "length": 26
});
