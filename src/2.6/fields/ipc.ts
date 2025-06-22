import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 IPC Fields
 * 
 * HL7 v2.6 IPC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IPC.1 - Accession Identifier
 */
export const IPC_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPC.1",
  "version": "2.6",
  "description": "Accession Identifier",
  "type": "Field",
  "item": 1330,
  "table": "",
  "longName": "HL7Accession Identifier",
  "length": 427
});

/**
 * IPC.2 - Requested Procedure ID
 */
export const IPC_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPC.2",
  "version": "2.6",
  "description": "Requested Procedure ID",
  "type": "Field",
  "item": 1658,
  "table": "",
  "longName": "HL7Requested Procedure ID",
  "length": 22
});

/**
 * IPC.3 - Study Instance UID
 */
export const IPC_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPC.3",
  "version": "2.6",
  "description": "Study Instance UID",
  "type": "Field",
  "item": 1659,
  "table": "",
  "longName": "HL7Study Instance UID",
  "length": 70
});

/**
 * IPC.4 - Scheduled Procedure Step ID
 */
export const IPC_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPC.4",
  "version": "2.6",
  "description": "Scheduled Procedure Step ID",
  "type": "Field",
  "item": 1660,
  "table": "",
  "longName": "HL7Scheduled Procedure Step ID",
  "length": 22
});

/**
 * IPC.5 - Modality
 */
export const IPC_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IPC.5",
  "version": "2.6",
  "description": "Modality",
  "type": "Field",
  "item": 1661,
  "table": "HL79999",
  "longName": "HL7Modality",
  "length": 16
});

/**
 * IPC.6 - Protocol Code
 */
export const IPC_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IPC.6",
  "version": "2.6",
  "description": "Protocol Code",
  "type": "Field",
  "item": 1662,
  "table": "HL79999",
  "longName": "HL7Protocol Code",
  "length": 250
});

/**
 * IPC.7 - Scheduled Station Name
 */
export const IPC_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPC.7",
  "version": "2.6",
  "description": "Scheduled Station Name",
  "type": "Field",
  "item": 1663,
  "table": "",
  "longName": "HL7Scheduled Station Name",
  "length": 22
});

/**
 * IPC.8 - Scheduled Procedure Step Location
 */
export const IPC_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IPC.8",
  "version": "2.6",
  "description": "Scheduled Procedure Step Location",
  "type": "Field",
  "item": 1664,
  "table": "HL79999",
  "longName": "HL7Scheduled Procedure Step Location",
  "length": 250
});

/**
 * IPC.9 - Scheduled Station AE Title
 */
export const IPC_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPC.9",
  "version": "2.6",
  "description": "Scheduled Station AE Title",
  "type": "Field",
  "item": 1665,
  "table": "",
  "longName": "HL7Scheduled Station AE Title",
  "length": 16
});
