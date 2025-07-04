import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 PSH Fields
 * 
 * HL7 v2.8 PSH field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSH.1 - Report Type
 */
export const PSH_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSH.1",
  "version": "2.8",
  "description": "Report Type",
  "type": "Field",
  "item": 1233,
  "table": "",
  "longName": "HL7Report Type"
});

/**
 * PSH.2 - Report Form Identifier
 */
export const PSH_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSH.2",
  "version": "2.8",
  "description": "Report Form Identifier",
  "type": "Field",
  "item": 1297,
  "table": "",
  "longName": "HL7Report Form Identifier"
});

/**
 * PSH.3 - Report Date
 */
export const PSH_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PSH.3",
  "version": "2.8",
  "description": "Report Date",
  "type": "Field",
  "item": 1235,
  "table": "",
  "longName": "HL7Report Date"
});

/**
 * PSH.4 - Report Interval Start Date
 */
export const PSH_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PSH.4",
  "version": "2.8",
  "description": "Report Interval Start Date",
  "type": "Field",
  "item": 1236,
  "table": "",
  "longName": "HL7Report Interval Start Date"
});

/**
 * PSH.5 - Report Interval End Date
 */
export const PSH_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PSH.5",
  "version": "2.8",
  "description": "Report Interval End Date",
  "type": "Field",
  "item": 1237,
  "table": "",
  "longName": "HL7Report Interval End Date"
});

/**
 * PSH.6 - Quantity Manufactured
 */
export const PSH_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSH.6",
  "version": "2.8",
  "description": "Quantity Manufactured",
  "type": "Field",
  "item": 1238,
  "table": "",
  "longName": "HL7Quantity Manufactured"
});

/**
 * PSH.7 - Quantity Distributed
 */
export const PSH_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSH.7",
  "version": "2.8",
  "description": "Quantity Distributed",
  "type": "Field",
  "item": 1239,
  "table": "",
  "longName": "HL7Quantity Distributed"
});

/**
 * PSH.8 - Quantity Distributed Method
 */
export const PSH_8 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PSH.8",
  "version": "2.8",
  "description": "Quantity Distributed Method",
  "type": "Field",
  "item": 1240,
  "table": "HL70329",
  "longName": "HL7Quantity Distributed Method",
  "length": 1
});

/**
 * PSH.9 - Quantity Distributed Comment
 */
export const PSH_9 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PSH.9",
  "version": "2.8",
  "description": "Quantity Distributed Comment",
  "type": "Field",
  "item": 1241,
  "table": "",
  "longName": "HL7Quantity Distributed Comment"
});

/**
 * PSH.10 - Quantity in Use
 */
export const PSH_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSH.10",
  "version": "2.8",
  "description": "Quantity in Use",
  "type": "Field",
  "item": 1242,
  "table": "",
  "longName": "HL7Quantity in Use"
});

/**
 * PSH.11 - Quantity in Use Method
 */
export const PSH_11 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PSH.11",
  "version": "2.8",
  "description": "Quantity in Use Method",
  "type": "Field",
  "item": 1243,
  "table": "HL70329",
  "longName": "HL7Quantity in Use Method",
  "length": 1
});

/**
 * PSH.12 - Quantity in Use Comment
 */
export const PSH_12 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PSH.12",
  "version": "2.8",
  "description": "Quantity in Use Comment",
  "type": "Field",
  "item": 1244,
  "table": "",
  "longName": "HL7Quantity in Use Comment"
});

/**
 * PSH.13 - Number of Product Experience Reports Filed by Facility
 */
export const PSH_13 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSH.13",
  "version": "2.8",
  "description": "Number of Product Experience Reports Filed by Facility",
  "type": "Field",
  "item": 1245,
  "table": "",
  "longName": "HL7Number of Product Experience Reports Filed by Facility"
});

/**
 * PSH.14 - Number of Product Experience Reports Filed by Distributor
 */
export const PSH_14 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSH.14",
  "version": "2.8",
  "description": "Number of Product Experience Reports Filed by Distributor",
  "type": "Field",
  "item": 1246,
  "table": "",
  "longName": "HL7Number of Product Experience Reports Filed by Distributor"
});
