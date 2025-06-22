import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 NST Fields
 * 
 * HL7 v2.6 NST field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NST.1 - Statistics Available
 */
export const NST_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "NST.1",
  "version": "2.6",
  "description": "Statistics Available",
  "type": "Field",
  "item": 1173,
  "table": "HL70136",
  "longName": "HL7Statistics Available",
  "length": 1
});

/**
 * NST.2 - Source Identifier
 */
export const NST_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NST.2",
  "version": "2.6",
  "description": "Source Identifier",
  "type": "Field",
  "item": 1174,
  "table": "",
  "longName": "HL7Source Identifier",
  "length": 30
});

/**
 * NST.3 - Source Type
 */
export const NST_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "NST.3",
  "version": "2.6",
  "description": "Source Type",
  "type": "Field",
  "item": 1175,
  "table": "HL70332",
  "longName": "HL7Source Type",
  "length": 3
});

/**
 * NST.4 - Statistics Start
 */
export const NST_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "NST.4",
  "version": "2.6",
  "description": "Statistics Start",
  "type": "Field",
  "item": 1176,
  "table": "",
  "longName": "HL7Statistics Start",
  "length": 24
});

/**
 * NST.5 - Statistics End
 */
export const NST_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "NST.5",
  "version": "2.6",
  "description": "Statistics End",
  "type": "Field",
  "item": 1177,
  "table": "",
  "longName": "HL7Statistics End",
  "length": 24
});

/**
 * NST.6 - Receive Character Count
 */
export const NST_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.6",
  "version": "2.6",
  "description": "Receive Character Count",
  "type": "Field",
  "item": 1178,
  "table": "",
  "longName": "HL7Receive Character Count",
  "length": 10
});

/**
 * NST.7 - Send Character Count
 */
export const NST_7 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.7",
  "version": "2.6",
  "description": "Send Character Count",
  "type": "Field",
  "item": 1179,
  "table": "",
  "longName": "HL7Send Character Count",
  "length": 10
});

/**
 * NST.8 - Messages Received
 */
export const NST_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.8",
  "version": "2.6",
  "description": "Messages Received",
  "type": "Field",
  "item": 1180,
  "table": "",
  "longName": "HL7Messages Received",
  "length": 10
});

/**
 * NST.9 - Messages Sent
 */
export const NST_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.9",
  "version": "2.6",
  "description": "Messages Sent",
  "type": "Field",
  "item": 1181,
  "table": "",
  "longName": "HL7Messages Sent",
  "length": 10
});

/**
 * NST.10 - Checksum Errors Received
 */
export const NST_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.10",
  "version": "2.6",
  "description": "Checksum Errors Received",
  "type": "Field",
  "item": 1182,
  "table": "",
  "longName": "HL7Checksum Errors Received",
  "length": 10
});

/**
 * NST.11 - Length Errors Received
 */
export const NST_11 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.11",
  "version": "2.6",
  "description": "Length Errors Received",
  "type": "Field",
  "item": 1183,
  "table": "",
  "longName": "HL7Length Errors Received",
  "length": 10
});

/**
 * NST.12 - Other Errors Received
 */
export const NST_12 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.12",
  "version": "2.6",
  "description": "Other Errors Received",
  "type": "Field",
  "item": 1184,
  "table": "",
  "longName": "HL7Other Errors Received",
  "length": 10
});

/**
 * NST.13 - Connect Timeouts
 */
export const NST_13 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.13",
  "version": "2.6",
  "description": "Connect Timeouts",
  "type": "Field",
  "item": 1185,
  "table": "",
  "longName": "HL7Connect Timeouts",
  "length": 10
});

/**
 * NST.14 - Receive Timeouts
 */
export const NST_14 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.14",
  "version": "2.6",
  "description": "Receive Timeouts",
  "type": "Field",
  "item": 1186,
  "table": "",
  "longName": "HL7Receive Timeouts",
  "length": 10
});

/**
 * NST.15 - Application control-level Errors
 */
export const NST_15 = datatypes.NM.register(hl7v2Metadata, {
  "title": "NST.15",
  "version": "2.6",
  "description": "Application control-level Errors",
  "type": "Field",
  "item": 1187,
  "table": "",
  "longName": "HL7Application control-level Errors",
  "length": 10
});
