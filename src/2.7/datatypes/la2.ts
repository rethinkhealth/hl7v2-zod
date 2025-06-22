import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.7 LA2 Composite Data Type
 * 
 * HL7 v2.7 LA2 composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LA2.1 - Point of Care
 */
export const LA2_1 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.1",
  "version": "2.7",
  "description": "Point of Care",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.2 - Room
 */
export const LA2_2 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.2",
  "version": "2.7",
  "description": "Room",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.3 - Bed
 */
export const LA2_3 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.3",
  "version": "2.7",
  "description": "Bed",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.4 - Facility
 */
export const LA2_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.4",
  "version": "2.7",
  "description": "Facility",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.5 - Location Status
 */
export const LA2_5 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.5",
  "version": "2.7",
  "description": "Location Status",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.6 - Patient Location Type
 */
export const LA2_6 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.6",
  "version": "2.7",
  "description": "Patient Location Type",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.7 - Building
 */
export const LA2_7 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.7",
  "version": "2.7",
  "description": "Building",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.8 - Floor
 */
export const LA2_8 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "LA2.8",
  "version": "2.7",
  "description": "Floor",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.9 - Street Address
 */
export const LA2_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.9",
  "version": "2.7",
  "description": "Street Address",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.10 - Other Designation
 */
export const LA2_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.10",
  "version": "2.7",
  "description": "Other Designation",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.11 - City
 */
export const LA2_11 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.11",
  "version": "2.7",
  "description": "City",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.12 - State or Province
 */
export const LA2_12 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.12",
  "version": "2.7",
  "description": "State or Province",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.13 - Zip or Postal Code
 */
export const LA2_13 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.13",
  "version": "2.7",
  "description": "Zip or Postal Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2.14 - Country
 */
export const LA2_14 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "LA2.14",
  "version": "2.7",
  "description": "Country",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * LA2.15 - Address Type
 */
export const LA2_15 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "LA2.15",
  "version": "2.7",
  "description": "Address Type",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * LA2.16 - Other Geographic Designation
 */
export const LA2_16 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "LA2.16",
  "version": "2.7",
  "description": "Other Geographic Designation",
  "type": "DataType",
  "optionality": "O"
});

/**
 * LA2 - HL7 v2.7 LA2 composite data type
 * 
 * Components:
 * - LA2.1: Point of Care (IS)
 * - LA2.2: Room (IS)
 * - LA2.3: Bed (IS)
 * - LA2.4: Facility (HD)
 * - LA2.5: Location Status (IS)
 * - LA2.6: Patient Location Type (IS)
 * - LA2.7: Building (IS)
 * - LA2.8: Floor (IS)
 * - LA2.9: Street Address (ST)
 * - LA2.10: Other Designation (ST)
 * - LA2.11: City (ST)
 * - LA2.12: State or Province (ST)
 * - LA2.13: Zip or Postal Code (ST)
 * - LA2.14: Country (ID)
 * - LA2.15: Address Type (ID)
 * - LA2.16: Other Geographic Designation (ST)
 */
export const LA2 = z.object({
  [`1`]: LA2_1,
  [`2`]: LA2_2,
  [`3`]: LA2_3,
  [`4`]: LA2_4,
  [`5`]: LA2_5,
  [`6`]: LA2_6,
  [`7`]: LA2_7,
  [`8`]: LA2_8,
  [`9`]: LA2_9,
  [`10`]: LA2_10,
  [`11`]: LA2_11,
  [`12`]: LA2_12,
  [`13`]: LA2_13,
  [`14`]: LA2_14,
  [`15`]: LA2_15,
  [`16`]: LA2_16
}).register(hl7v2Metadata, {
  title: 'LA2',
  version: '2.7',
  description: 'HL7 v2.7 LA2 composite data type'
});

/**
 * Type definition for LA2
 */
export type LA2 = z.infer<typeof LA2>;
