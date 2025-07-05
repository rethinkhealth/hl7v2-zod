
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 EQL Fields
 * 
 * HL7 v2.5 EQL field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EQL.1 - Query Tag
 */
export const EQL_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "EQL.1",
  "version": "2.5",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag",
  "length": 32
});

/**
 * EQL.2 - Query/Response Format Code
 */
export const EQL_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "EQL.2",
  "version": "2.5",
  "description": "Query/Response Format Code",
  "type": "Field",
  "item": 697,
  "table": "HL70106",
  "longName": "HL7Query/Response Format Code",
  "length": 1
});

/**
 * EQL.3 - EQL Query Name
 */
export const EQL_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "EQL.3",
  "version": "2.5",
  "description": "EQL Query Name",
  "type": "Field",
  "item": 709,
  "table": "",
  "longName": "HL7EQL Query Name",
  "length": 250
});

/**
 * EQL.4 - EQL Query Statement
 */
export const EQL_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "EQL.4",
  "version": "2.5",
  "description": "EQL Query Statement",
  "type": "Field",
  "item": 710,
  "table": "",
  "longName": "HL7EQL Query Statement",
  "length": 4096
});
