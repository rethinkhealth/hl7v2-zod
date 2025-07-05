
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 VTQ Fields
 * 
 * HL7 v2.5 VTQ field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VTQ.1 - Query Tag
 */
export const VTQ_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VTQ.1",
  "version": "2.5",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag",
  "length": 32
});

/**
 * VTQ.2 - Query/Response Format Code
 */
export const VTQ_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "VTQ.2",
  "version": "2.5",
  "description": "Query/Response Format Code",
  "type": "Field",
  "item": 697,
  "table": "HL70106",
  "longName": "HL7Query/Response Format Code",
  "length": 1
});

/**
 * VTQ.3 - VT Query Name
 */
export const VTQ_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VTQ.3",
  "version": "2.5",
  "description": "VT Query Name",
  "type": "Field",
  "item": 698,
  "table": "",
  "longName": "HL7VT Query Name",
  "length": 250
});

/**
 * VTQ.4 - Virtual Table Name
 */
export const VTQ_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VTQ.4",
  "version": "2.5",
  "description": "Virtual Table Name",
  "type": "Field",
  "item": 699,
  "table": "",
  "longName": "HL7Virtual Table Name",
  "length": 250
});

/**
 * VTQ.5 - Selection Criteria
 */
export const VTQ_5 = datatypes.QSC.register(hl7v2Metadata, {
  "title": "VTQ.5",
  "version": "2.5",
  "description": "Selection Criteria",
  "type": "Field",
  "item": 700,
  "table": "",
  "longName": "HL7Selection Criteria",
  "length": 256
});
