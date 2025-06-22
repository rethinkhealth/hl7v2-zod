import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 NSC Fields
 * 
 * HL7 v2.7 NSC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NSC.1 - Application Change Type
 */
export const NSC_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "NSC.1",
  "version": "2.7",
  "description": "Application Change Type",
  "type": "Field",
  "item": 1188,
  "table": "HL70409",
  "longName": "HL7Application Change Type"
});

/**
 * NSC.2 - Current CPU
 */
export const NSC_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.2",
  "version": "2.7",
  "description": "Current CPU",
  "type": "Field",
  "item": 1189,
  "table": "",
  "longName": "HL7Current CPU"
});

/**
 * NSC.3 - Current Fileserver
 */
export const NSC_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.3",
  "version": "2.7",
  "description": "Current Fileserver",
  "type": "Field",
  "item": 1190,
  "table": "",
  "longName": "HL7Current Fileserver"
});

/**
 * NSC.4 - Current Application
 */
export const NSC_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.4",
  "version": "2.7",
  "description": "Current Application",
  "type": "Field",
  "item": 1191,
  "table": "HL70361",
  "longName": "HL7Current Application"
});

/**
 * NSC.5 - Current Facility
 */
export const NSC_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.5",
  "version": "2.7",
  "description": "Current Facility",
  "type": "Field",
  "item": 1192,
  "table": "HL70362",
  "longName": "HL7Current Facility"
});

/**
 * NSC.6 - New CPU
 */
export const NSC_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.6",
  "version": "2.7",
  "description": "New CPU",
  "type": "Field",
  "item": 1193,
  "table": "",
  "longName": "HL7New CPU"
});

/**
 * NSC.7 - New Fileserver
 */
export const NSC_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.7",
  "version": "2.7",
  "description": "New Fileserver",
  "type": "Field",
  "item": 1194,
  "table": "",
  "longName": "HL7New Fileserver"
});

/**
 * NSC.8 - New Application
 */
export const NSC_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.8",
  "version": "2.7",
  "description": "New Application",
  "type": "Field",
  "item": 1195,
  "table": "HL70361",
  "longName": "HL7New Application"
});

/**
 * NSC.9 - New Facility
 */
export const NSC_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "NSC.9",
  "version": "2.7",
  "description": "New Facility",
  "type": "Field",
  "item": 1196,
  "table": "HL70362",
  "longName": "HL7New Facility"
});
