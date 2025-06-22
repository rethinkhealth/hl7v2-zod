import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 SHP Fields
 * 
 * HL7 v2.9 SHP field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SHP.1 - Shipment ID
 */
export const SHP_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SHP.1",
  "version": "2.9",
  "description": "Shipment ID",
  "type": "Field",
  "item": 2317,
  "table": "",
  "longName": "HL7Shipment ID"
});

/**
 * SHP.2 - Internal Shipment ID
 */
export const SHP_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SHP.2",
  "version": "2.9",
  "description": "Internal Shipment ID",
  "type": "Field",
  "item": 2318,
  "table": "",
  "longName": "HL7Internal Shipment ID"
});

/**
 * SHP.3 - Shipment Status
 */
export const SHP_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SHP.3",
  "version": "2.9",
  "description": "Shipment Status",
  "type": "Field",
  "item": 2319,
  "table": "HL70905",
  "longName": "HL7Shipment Status"
});

/**
 * SHP.4 - Shipment Status Date/Time
 */
export const SHP_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "SHP.4",
  "version": "2.9",
  "description": "Shipment Status Date/Time",
  "type": "Field",
  "item": 2320,
  "table": "",
  "longName": "HL7Shipment Status Date/Time"
});

/**
 * SHP.5 - Shipment Status Reason
 */
export const SHP_5 = datatypes.TX.register(hl7v2Metadata, {
  "title": "SHP.5",
  "version": "2.9",
  "description": "Shipment Status Reason",
  "type": "Field",
  "item": 2321,
  "table": "",
  "longName": "HL7Shipment Status Reason"
});

/**
 * SHP.6 - Shipment Priority
 */
export const SHP_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SHP.6",
  "version": "2.9",
  "description": "Shipment Priority",
  "type": "Field",
  "item": 2322,
  "table": "HL70906",
  "longName": "HL7Shipment Priority"
});

/**
 * SHP.7 - Shipment Confidentiality
 */
export const SHP_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SHP.7",
  "version": "2.9",
  "description": "Shipment Confidentiality",
  "type": "Field",
  "item": 2323,
  "table": "HL70907",
  "longName": "HL7Shipment Confidentiality"
});

/**
 * SHP.8 - Number of Packages in Shipment
 */
export const SHP_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "SHP.8",
  "version": "2.9",
  "description": "Number of Packages in Shipment",
  "type": "Field",
  "item": 2324,
  "table": "",
  "longName": "HL7Number of Packages in Shipment"
});

/**
 * SHP.9 - Shipment Condition
 */
export const SHP_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SHP.9",
  "version": "2.9",
  "description": "Shipment Condition",
  "type": "Field",
  "item": 2325,
  "table": "HL70544",
  "longName": "HL7Shipment Condition"
});

/**
 * SHP.10 - Shipment Handling Code
 */
export const SHP_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SHP.10",
  "version": "2.9",
  "description": "Shipment Handling Code",
  "type": "Field",
  "item": 2326,
  "table": "HL70376",
  "longName": "HL7Shipment Handling Code"
});

/**
 * SHP.11 - Shipment Risk Code
 */
export const SHP_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SHP.11",
  "version": "2.9",
  "description": "Shipment Risk Code",
  "type": "Field",
  "item": 2327,
  "table": "HL70489",
  "longName": "HL7Shipment Risk Code"
});

/**
 * SHP.12 - Action Code
 */
export const SHP_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "SHP.12",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});
