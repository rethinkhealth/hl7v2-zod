
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 RQD Fields
 * 
 * HL7 v2.5 RQD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQD.1 - Requisition Line Number
 */
export const RQD_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "RQD.1",
  "version": "2.5",
  "description": "Requisition Line Number",
  "type": "Field",
  "item": 275,
  "table": "",
  "longName": "HL7Requisition Line Number",
  "length": 4
});

/**
 * RQD.2 - Item Code - Internal
 */
export const RQD_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQD.2",
  "version": "2.5",
  "description": "Item Code - Internal",
  "type": "Field",
  "item": 276,
  "table": "",
  "longName": "HL7Item Code - Internal",
  "length": 250
});

/**
 * RQD.3 - Item Code - External
 */
export const RQD_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQD.3",
  "version": "2.5",
  "description": "Item Code - External",
  "type": "Field",
  "item": 277,
  "table": "",
  "longName": "HL7Item Code - External",
  "length": 250
});

/**
 * RQD.4 - Hospital Item Code
 */
export const RQD_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQD.4",
  "version": "2.5",
  "description": "Hospital Item Code",
  "type": "Field",
  "item": 278,
  "table": "",
  "longName": "HL7Hospital Item Code",
  "length": 250
});

/**
 * RQD.5 - Requisition Quantity
 */
export const RQD_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RQD.5",
  "version": "2.5",
  "description": "Requisition Quantity",
  "type": "Field",
  "item": 279,
  "table": "",
  "longName": "HL7Requisition Quantity",
  "length": 6
});

/**
 * RQD.6 - Requisition Unit of Measure
 */
export const RQD_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQD.6",
  "version": "2.5",
  "description": "Requisition Unit of Measure",
  "type": "Field",
  "item": 280,
  "table": "",
  "longName": "HL7Requisition Unit of Measure",
  "length": 250
});

/**
 * RQD.7 - Dept. Cost Center
 */
export const RQD_7 = datatypes.IS.register(hl7v2Metadata, {
  "title": "RQD.7",
  "version": "2.5",
  "description": "Dept. Cost Center",
  "type": "Field",
  "item": 281,
  "table": "HL70319",
  "longName": "HL7Dept. Cost Center",
  "length": 30
});

/**
 * RQD.8 - Item Natural Account Code
 */
export const RQD_8 = datatypes.IS.register(hl7v2Metadata, {
  "title": "RQD.8",
  "version": "2.5",
  "description": "Item Natural Account Code",
  "type": "Field",
  "item": 282,
  "table": "HL70320",
  "longName": "HL7Item Natural Account Code",
  "length": 30
});

/**
 * RQD.9 - Deliver To ID
 */
export const RQD_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RQD.9",
  "version": "2.5",
  "description": "Deliver To ID",
  "type": "Field",
  "item": 283,
  "table": "",
  "longName": "HL7Deliver To ID",
  "length": 250
});

/**
 * RQD.10 - Date Needed
 */
export const RQD_10 = datatypes.DT.register(hl7v2Metadata, {
  "title": "RQD.10",
  "version": "2.5",
  "description": "Date Needed",
  "type": "Field",
  "item": 284,
  "table": "",
  "longName": "HL7Date Needed",
  "length": 8
});
