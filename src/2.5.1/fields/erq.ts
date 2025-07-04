import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 ERQ Fields
 * 
 * HL7 v2.5 ERQ field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ERQ.1 - Query Tag
 */
export const ERQ_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ERQ.1",
  "version": "2.5",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag",
  "length": 32
});

/**
 * ERQ.2 - Event Identifier
 */
export const ERQ_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ERQ.2",
  "version": "2.5",
  "description": "Event Identifier",
  "type": "Field",
  "item": 706,
  "table": "",
  "longName": "HL7Event Identifier",
  "length": 250
});

/**
 * ERQ.3 - Input Parameter List
 */
export const ERQ_3 = datatypes.QIP.register(hl7v2Metadata, {
  "title": "ERQ.3",
  "version": "2.5",
  "description": "Input Parameter List",
  "type": "Field",
  "item": 705,
  "table": "",
  "longName": "HL7Input Parameter List",
  "length": 256
});
