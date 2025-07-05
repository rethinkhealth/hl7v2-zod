
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 TCD Fields
 * 
 * HL7 v2.6 TCD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TCD.1 - Universal Service Identifier
 */
export const TCD_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "TCD.1",
  "version": "2.6",
  "description": "Universal Service Identifier",
  "type": "Field",
  "item": 238,
  "table": "",
  "longName": "HL7Universal Service Identifier",
  "length": 705
});

/**
 * TCD.2 - Auto-Dilution Factor
 */
export const TCD_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TCD.2",
  "version": "2.6",
  "description": "Auto-Dilution Factor",
  "type": "Field",
  "item": 1420,
  "table": "",
  "longName": "HL7Auto-Dilution Factor",
  "length": 36
});

/**
 * TCD.3 - Rerun Dilution Factor
 */
export const TCD_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TCD.3",
  "version": "2.6",
  "description": "Rerun Dilution Factor",
  "type": "Field",
  "item": 1421,
  "table": "",
  "longName": "HL7Rerun Dilution Factor",
  "length": 36
});

/**
 * TCD.4 - Pre-Dilution Factor
 */
export const TCD_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TCD.4",
  "version": "2.6",
  "description": "Pre-Dilution Factor",
  "type": "Field",
  "item": 1422,
  "table": "",
  "longName": "HL7Pre-Dilution Factor",
  "length": 36
});

/**
 * TCD.5 - Endogenous Content of Pre-Dilution Diluent
 */
export const TCD_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TCD.5",
  "version": "2.6",
  "description": "Endogenous Content of Pre-Dilution Diluent",
  "type": "Field",
  "item": 1413,
  "table": "",
  "longName": "HL7Endogenous Content of Pre-Dilution Diluent",
  "length": 36
});

/**
 * TCD.6 - Automatic Repeat Allowed
 */
export const TCD_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TCD.6",
  "version": "2.6",
  "description": "Automatic Repeat Allowed",
  "type": "Field",
  "item": 1416,
  "table": "HL70136",
  "longName": "HL7Automatic Repeat Allowed",
  "length": 1
});

/**
 * TCD.7 - Reflex Allowed
 */
export const TCD_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TCD.7",
  "version": "2.6",
  "description": "Reflex Allowed",
  "type": "Field",
  "item": 1424,
  "table": "HL70136",
  "longName": "HL7Reflex Allowed",
  "length": 1
});

/**
 * TCD.8 - Analyte Repeat Status
 */
export const TCD_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "TCD.8",
  "version": "2.6",
  "description": "Analyte Repeat Status",
  "type": "Field",
  "item": 1425,
  "table": "HL70389",
  "longName": "HL7Analyte Repeat Status",
  "length": 705
});
