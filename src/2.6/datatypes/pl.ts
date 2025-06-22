import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 PL Composite Data Type
 * 
 * HL7 v2.6 PL composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PL.1 - Point of Care
 */
export const PL_1 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.1",
  "version": "2.6",
  "description": "Point of Care",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.2 - Room
 */
export const PL_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.2",
  "version": "2.6",
  "description": "Room",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.3 - Bed
 */
export const PL_3 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.3",
  "version": "2.6",
  "description": "Bed",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.4 - Facility
 */
export const PL_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PL.4",
  "version": "2.6",
  "description": "Facility",
  "type": "DataType",
  "length": 227,
  "optionality": "O"
});

/**
 * PL.5 - Location Status
 */
export const PL_5 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.5",
  "version": "2.6",
  "description": "Location Status",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.6 - Person Location Type
 */
export const PL_6 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.6",
  "version": "2.6",
  "description": "Person Location Type",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.7 - Building
 */
export const PL_7 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.7",
  "version": "2.6",
  "description": "Building",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.8 - Floor
 */
export const PL_8 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "PL.8",
  "version": "2.6",
  "description": "Floor",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * PL.9 - Location Description
 */
export const PL_9 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "PL.9",
  "version": "2.6",
  "description": "Location Description",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * PL.10 - Comprehensive Location Identifier
 */
export const PL_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PL.10",
  "version": "2.6",
  "description": "Comprehensive Location Identifier",
  "type": "DataType",
  "length": 427,
  "optionality": "O"
});

/**
 * PL.11 - Assigning Authority for Location
 */
export const PL_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "PL.11",
  "version": "2.6",
  "description": "Assigning Authority for Location",
  "type": "DataType",
  "length": 227,
  "optionality": "O"
});

/**
 * PL - HL7 v2.6 PL composite data type
 * 
 * Components:
 * - PL.1: Point of Care (IS)
 * - PL.2: Room (IS)
 * - PL.3: Bed (IS)
 * - PL.4: Facility (HD)
 * - PL.5: Location Status (IS)
 * - PL.6: Person Location Type (IS)
 * - PL.7: Building (IS)
 * - PL.8: Floor (IS)
 * - PL.9: Location Description (ST)
 * - PL.10: Comprehensive Location Identifier (EI)
 * - PL.11: Assigning Authority for Location (HD)
 */
export const PL = z.object({
  [`1`]: PL_1,
  [`2`]: PL_2,
  [`3`]: PL_3,
  [`4`]: PL_4,
  [`5`]: PL_5,
  [`6`]: PL_6,
  [`7`]: PL_7,
  [`8`]: PL_8,
  [`9`]: PL_9,
  [`10`]: PL_10,
  [`11`]: PL_11
}).register(hl7v2Metadata, {
  title: 'PL',
  version: '2.6',
  description: 'HL7 v2.6 PL composite data type'
});

/**
 * Type definition for PL
 */
export type PL = z.infer<typeof PL>;
