import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { CNN } from './cnn';

/**
 * HL7 v2.9 NDL Composite Data Type
 * 
 * HL7 v2.9 NDL composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NDL.1 - Name
 */
export const NDL_1 = CNN.optional().register(hl7v2Metadata, {
  "title": "NDL.1",
  "version": "2.9",
  "description": "Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.2 - Start Date/Time
 */
export const NDL_2 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "NDL.2",
  "version": "2.9",
  "description": "Start Date/Time",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.3 - End Date/Time
 */
export const NDL_3 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  "title": "NDL.3",
  "version": "2.9",
  "description": "End Date/Time",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.4 - Point of Care
 */
export const NDL_4 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.4",
  "version": "2.9",
  "description": "Point of Care",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.5 - Room
 */
export const NDL_5 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.5",
  "version": "2.9",
  "description": "Room",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.6 - Bed
 */
export const NDL_6 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.6",
  "version": "2.9",
  "description": "Bed",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.7 - Facility
 */
export const NDL_7 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "NDL.7",
  "version": "2.9",
  "description": "Facility",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.8 - Location Status
 */
export const NDL_8 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.8",
  "version": "2.9",
  "description": "Location Status",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.9 - Patient Location Type
 */
export const NDL_9 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.9",
  "version": "2.9",
  "description": "Patient Location Type",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.10 - Building
 */
export const NDL_10 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.10",
  "version": "2.9",
  "description": "Building",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL.11 - Floor
 */
export const NDL_11 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "NDL.11",
  "version": "2.9",
  "description": "Floor",
  "type": "DataType",
  "optionality": "O"
});

/**
 * NDL - HL7 v2.9 NDL composite data type
 * 
 * Components:
 * - NDL.1: Name (CNN)
 * - NDL.2: Start Date/Time (DTM)
 * - NDL.3: End Date/Time (DTM)
 * - NDL.4: Point of Care (IS)
 * - NDL.5: Room (IS)
 * - NDL.6: Bed (IS)
 * - NDL.7: Facility (HD)
 * - NDL.8: Location Status (IS)
 * - NDL.9: Patient Location Type (IS)
 * - NDL.10: Building (IS)
 * - NDL.11: Floor (IS)
 */
export const NDL = z.object({
  [`1`]: NDL_1,
  [`2`]: NDL_2,
  [`3`]: NDL_3,
  [`4`]: NDL_4,
  [`5`]: NDL_5,
  [`6`]: NDL_6,
  [`7`]: NDL_7,
  [`8`]: NDL_8,
  [`9`]: NDL_9,
  [`10`]: NDL_10,
  [`11`]: NDL_11
}).register(hl7v2Metadata, {
  title: 'NDL',
  version: '2.9',
  description: 'HL7 v2.9 NDL composite data type'
});

/**
 * Type definition for NDL
 */
export type NDL = z.infer<typeof NDL>;
