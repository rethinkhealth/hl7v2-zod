import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 BLG Fields
 * 
 * HL7 v2.8 BLG field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BLG.1 - When to Charge
 */
export const BLG_1 = datatypes.CCD.register(hl7v2Metadata, {
  "title": "BLG.1",
  "version": "2.8",
  "description": "When to Charge",
  "type": "Field",
  "item": 234,
  "table": "HL70100",
  "longName": "HL7When to Charge"
});

/**
 * BLG.2 - Charge Type
 */
export const BLG_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "BLG.2",
  "version": "2.8",
  "description": "Charge Type",
  "type": "Field",
  "item": 235,
  "table": "HL70122",
  "longName": "HL7Charge Type",
  "length": 2
});

/**
 * BLG.3 - Account ID
 */
export const BLG_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "BLG.3",
  "version": "2.8",
  "description": "Account ID",
  "type": "Field",
  "item": 236,
  "table": "",
  "longName": "HL7Account ID"
});

/**
 * BLG.4 - Charge Type Reason
 */
export const BLG_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "BLG.4",
  "version": "2.8",
  "description": "Charge Type Reason",
  "type": "Field",
  "item": 1645,
  "table": "HL70475",
  "longName": "HL7Charge Type Reason"
});
