import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 ADD Fields
 * 
 * HL7 v2.9 ADD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADD.1 - Addendum Continuation Pointer
 */
export const ADD_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ADD.1",
  "version": "2.9",
  "description": "Addendum Continuation Pointer",
  "type": "Field",
  "item": 66,
  "table": "",
  "longName": "HL7Addendum Continuation Pointer"
});
