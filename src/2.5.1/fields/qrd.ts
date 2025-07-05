
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 QRD Fields
 * 
 * HL7 v2.5 QRD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRD.1 - Query Date/Time
 */
export const QRD_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.1",
  "version": "2.5",
  "description": "Query Date/Time",
  "type": "Field",
  "item": 25,
  "table": "",
  "longName": "HL7Query Date/Time",
  "length": 26
});

/**
 * QRD.2 - Query Format Code
 */
export const QRD_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "QRD.2",
  "version": "2.5",
  "description": "Query Format Code",
  "type": "Field",
  "item": 26,
  "table": "HL70106",
  "longName": "HL7Query Format Code",
  "length": 1
});

/**
 * QRD.3 - Query Priority
 */
export const QRD_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "QRD.3",
  "version": "2.5",
  "description": "Query Priority",
  "type": "Field",
  "item": 27,
  "table": "HL70091",
  "longName": "HL7Query Priority",
  "length": 1
});

/**
 * QRD.4 - Query ID
 */
export const QRD_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.4",
  "version": "2.5",
  "description": "Query ID",
  "type": "Field",
  "item": 28,
  "table": "",
  "longName": "HL7Query ID",
  "length": 10
});

/**
 * QRD.5 - Deferred Response Type
 */
export const QRD_5 = datatypes.ID.register(hl7v2Metadata, {
  "title": "QRD.5",
  "version": "2.5",
  "description": "Deferred Response Type",
  "type": "Field",
  "item": 29,
  "table": "HL70107",
  "longName": "HL7Deferred Response Type",
  "length": 1
});

/**
 * QRD.6 - Deferred Response Date/Time
 */
export const QRD_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.6",
  "version": "2.5",
  "description": "Deferred Response Date/Time",
  "type": "Field",
  "item": 30,
  "table": "",
  "longName": "HL7Deferred Response Date/Time",
  "length": 26
});

/**
 * QRD.7 - Quantity Limited Request
 */
export const QRD_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.7",
  "version": "2.5",
  "description": "Quantity Limited Request",
  "type": "Field",
  "item": 31,
  "table": "HL70126",
  "longName": "HL7Quantity Limited Request",
  "length": 10
});

/**
 * QRD.8 - Who Subject Filter
 */
export const QRD_8 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "QRD.8",
  "version": "2.5",
  "description": "Who Subject Filter",
  "type": "Field",
  "item": 32,
  "table": "",
  "longName": "HL7Who Subject Filter",
  "length": 250
});

/**
 * QRD.9 - What Subject Filter
 */
export const QRD_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.9",
  "version": "2.5",
  "description": "What Subject Filter",
  "type": "Field",
  "item": 33,
  "table": "HL70048",
  "longName": "HL7What Subject Filter",
  "length": 250
});

/**
 * QRD.10 - What Department Data Code
 */
export const QRD_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.10",
  "version": "2.5",
  "description": "What Department Data Code",
  "type": "Field",
  "item": 34,
  "table": "",
  "longName": "HL7What Department Data Code",
  "length": 250
});

/**
 * QRD.11 - What Data Code Value Qual.
 */
export const QRD_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QRD.11",
  "version": "2.5",
  "description": "What Data Code Value Qual.",
  "type": "Field",
  "item": 35,
  "table": "",
  "longName": "HL7What Data Code Value Qual.",
  "length": 20
});

/**
 * QRD.12 - Query Results Level
 */
export const QRD_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "QRD.12",
  "version": "2.5",
  "description": "Query Results Level",
  "type": "Field",
  "item": 36,
  "table": "HL70108",
  "longName": "HL7Query Results Level",
  "length": 1
});
