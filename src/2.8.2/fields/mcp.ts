import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 MCP Fields
 * 
 * HL7 v2.8 MCP field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MCP.1 - Set ID - MCP
 */
export const MCP_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "MCP.1",
  "version": "2.8",
  "description": "Set ID - MCP",
  "type": "Field",
  "item": 3468,
  "table": "",
  "longName": "HL7Set ID - MCP",
  "length": 4
});

/**
 * MCP.2 - Producer's Service/Test/Observation ID
 */
export const MCP_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "MCP.2",
  "version": "2.8",
  "description": "Producer's Service/Test/Observation ID",
  "type": "Field",
  "item": 587,
  "table": "",
  "longName": "HL7Producer's Service/Test/Observation ID"
});

/**
 * MCP.3 - Universal Service Price Range - Low Value
 */
export const MCP_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MCP.3",
  "version": "2.8",
  "description": "Universal Service Price Range - Low Value",
  "type": "Field",
  "item": 3469,
  "table": "",
  "longName": "HL7Universal Service Price Range - Low Value"
});

/**
 * MCP.4 - Universal Service Price Range - High Value
 */
export const MCP_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MCP.4",
  "version": "2.8",
  "description": "Universal Service Price Range - High Value",
  "type": "Field",
  "item": 3470,
  "table": "",
  "longName": "HL7Universal Service Price Range - High Value"
});

/**
 * MCP.5 - Reason for Universal Service Cost Range
 */
export const MCP_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MCP.5",
  "version": "2.8",
  "description": "Reason for Universal Service Cost Range",
  "type": "Field",
  "item": 3471,
  "table": "",
  "longName": "HL7Reason for Universal Service Cost Range"
});
