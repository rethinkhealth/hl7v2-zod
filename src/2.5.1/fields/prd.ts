import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 PRD Fields
 * 
 * HL7 v2.5 PRD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRD.1 - Provider Role
 */
export const PRD_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRD.1",
  "version": "2.5",
  "description": "Provider Role",
  "type": "Field",
  "item": 1155,
  "table": "HL70286",
  "longName": "HL7Provider Role",
  "length": 250
});

/**
 * PRD.2 - Provider Name
 */
export const PRD_2 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "PRD.2",
  "version": "2.5",
  "description": "Provider Name",
  "type": "Field",
  "item": 1156,
  "table": "",
  "longName": "HL7Provider Name",
  "length": 250
});

/**
 * PRD.3 - Provider Address
 */
export const PRD_3 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PRD.3",
  "version": "2.5",
  "description": "Provider Address",
  "type": "Field",
  "item": 1157,
  "table": "",
  "longName": "HL7Provider Address",
  "length": 250
});

/**
 * PRD.4 - Provider Location
 */
export const PRD_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRD.4",
  "version": "2.5",
  "description": "Provider Location",
  "type": "Field",
  "item": 1158,
  "table": "",
  "longName": "HL7Provider Location",
  "length": 60
});

/**
 * PRD.5 - Provider Communication Information
 */
export const PRD_5 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PRD.5",
  "version": "2.5",
  "description": "Provider Communication Information",
  "type": "Field",
  "item": 1159,
  "table": "",
  "longName": "HL7Provider Communication Information",
  "length": 250
});

/**
 * PRD.6 - Preferred Method of Contact
 */
export const PRD_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRD.6",
  "version": "2.5",
  "description": "Preferred Method of Contact",
  "type": "Field",
  "item": 684,
  "table": "HL70185",
  "longName": "HL7Preferred Method of Contact",
  "length": 250
});

/**
 * PRD.7 - Provider Identifiers
 */
export const PRD_7 = datatypes.PLN.register(hl7v2Metadata, {
  "title": "PRD.7",
  "version": "2.5",
  "description": "Provider Identifiers",
  "type": "Field",
  "item": 1162,
  "table": "",
  "longName": "HL7Provider Identifiers",
  "length": 100
});

/**
 * PRD.8 - Effective Start Date of Provider Role
 */
export const PRD_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRD.8",
  "version": "2.5",
  "description": "Effective Start Date of Provider Role",
  "type": "Field",
  "item": 1163,
  "table": "",
  "longName": "HL7Effective Start Date of Provider Role",
  "length": 26
});

/**
 * PRD.9 - Effective End Date of Provider Role
 */
export const PRD_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PRD.9",
  "version": "2.5",
  "description": "Effective End Date of Provider Role",
  "type": "Field",
  "item": 1164,
  "table": "",
  "longName": "HL7Effective End Date of Provider Role",
  "length": 26
});
