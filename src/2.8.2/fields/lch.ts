import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 LCH Fields
 * 
 * HL7 v2.8 LCH field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LCH.1 - Primary Key Value - LCH
 */
export const LCH_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LCH.1",
  "version": "2.8",
  "description": "Primary Key Value - LCH",
  "type": "Field",
  "item": 1305,
  "table": "",
  "longName": "HL7Primary Key Value - LCH"
});

/**
 * LCH.2 - Segment Action Code
 */
export const LCH_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "LCH.2",
  "version": "2.8",
  "description": "Segment Action Code",
  "type": "Field",
  "item": 763,
  "table": "HL70206",
  "longName": "HL7Segment Action Code"
});

/**
 * LCH.3 - Segment Unique Key
 */
export const LCH_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LCH.3",
  "version": "2.8",
  "description": "Segment Unique Key",
  "type": "Field",
  "item": 764,
  "table": "",
  "longName": "HL7Segment Unique Key"
});

/**
 * LCH.4 - Location Characteristic ID
 */
export const LCH_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LCH.4",
  "version": "2.8",
  "description": "Location Characteristic ID",
  "type": "Field",
  "item": 1295,
  "table": "HL70324",
  "longName": "HL7Location Characteristic ID"
});

/**
 * LCH.5 - Location Characteristic Value - LCH
 */
export const LCH_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LCH.5",
  "version": "2.8",
  "description": "Location Characteristic Value - LCH",
  "type": "Field",
  "item": 1294,
  "table": "HL70136",
  "longName": "HL7Location Characteristic Value - LCH"
});
