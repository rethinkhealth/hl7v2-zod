
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 SPR Fields
 * 
 * HL7 v2.5 SPR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SPR.1 - Query Tag
 */
export const SPR_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SPR.1",
  "version": "2.5",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag",
  "length": 32
});

/**
 * SPR.2 - Query/Response Format Code
 */
export const SPR_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "SPR.2",
  "version": "2.5",
  "description": "Query/Response Format Code",
  "type": "Field",
  "item": 697,
  "table": "HL70106",
  "longName": "HL7Query/Response Format Code",
  "length": 1
});

/**
 * SPR.3 - Stored Procedure Name
 */
export const SPR_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SPR.3",
  "version": "2.5",
  "description": "Stored Procedure Name",
  "type": "Field",
  "item": 704,
  "table": "",
  "longName": "HL7Stored Procedure Name",
  "length": 250
});

/**
 * SPR.4 - Input Parameter List
 */
export const SPR_4 = datatypes.QIP.register(hl7v2Metadata, {
  "title": "SPR.4",
  "version": "2.5",
  "description": "Input Parameter List",
  "type": "Field",
  "item": 705,
  "table": "",
  "longName": "HL7Input Parameter List",
  "length": 256
});
