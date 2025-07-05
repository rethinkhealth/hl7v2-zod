
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 QAK Fields
 * 
 * HL7 v2.6 QAK field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QAK.1 - Query Tag
 */
export const QAK_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QAK.1",
  "version": "2.6",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag",
  "length": 32
});

/**
 * QAK.2 - Query Response Status
 */
export const QAK_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "QAK.2",
  "version": "2.6",
  "description": "Query Response Status",
  "type": "Field",
  "item": 708,
  "table": "HL70208",
  "longName": "HL7Query Response Status",
  "length": 2
});

/**
 * QAK.3 - Message Query Name
 */
export const QAK_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "QAK.3",
  "version": "2.6",
  "description": "Message Query Name",
  "type": "Field",
  "item": 1375,
  "table": "HL70471",
  "longName": "HL7Message Query Name",
  "length": 250
});

/**
 * QAK.4 - Hit Count Total
 */
export const QAK_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "QAK.4",
  "version": "2.6",
  "description": "Hit Count Total",
  "type": "Field",
  "item": 1434,
  "table": "",
  "longName": "HL7Hit Count Total",
  "length": 10
});

/**
 * QAK.5 - This payload
 */
export const QAK_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "QAK.5",
  "version": "2.6",
  "description": "This payload",
  "type": "Field",
  "item": 1622,
  "table": "",
  "longName": "HL7This payload",
  "length": 10
});

/**
 * QAK.6 - Hits remaining
 */
export const QAK_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "QAK.6",
  "version": "2.6",
  "description": "Hits remaining",
  "type": "Field",
  "item": 1623,
  "table": "",
  "longName": "HL7Hits remaining",
  "length": 10
});
