import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 QRF Fields
 *
 * HL7 v2.5 QRF field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRF.1 - Where Subject Filter
 */
export const QRF_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "QRF.1",
  version: "2.5",
  description: "Where Subject Filter",
  type: "Field",
  item: 37,
  table: "",
  longName: "HL7Where Subject Filter",
  length: 20
});

/**
 * QRF.2 - When Data Start Date/Time
 */
export const QRF_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "QRF.2",
  version: "2.5",
  description: "When Data Start Date/Time",
  type: "Field",
  item: 38,
  table: "",
  longName: "HL7When Data Start Date/Time",
  length: 26
});

/**
 * QRF.3 - When Data End Date/Time
 */
export const QRF_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "QRF.3",
  version: "2.5",
  description: "When Data End Date/Time",
  type: "Field",
  item: 39,
  table: "",
  longName: "HL7When Data End Date/Time",
  length: 26
});

/**
 * QRF.4 - What User Qualifier
 */
export const QRF_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "QRF.4",
  version: "2.5",
  description: "What User Qualifier",
  type: "Field",
  item: 40,
  table: "",
  longName: "HL7What User Qualifier",
  length: 60
});

/**
 * QRF.5 - Other QRY Subject Filter
 */
export const QRF_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "QRF.5",
  version: "2.5",
  description: "Other QRY Subject Filter",
  type: "Field",
  item: 41,
  table: "",
  longName: "HL7Other QRY Subject Filter",
  length: 60
});

/**
 * QRF.6 - Which Date/Time Qualifier
 */
export const QRF_6 = datatypes.ID.register(hl7v2Metadata, {
  title: "QRF.6",
  version: "2.5",
  description: "Which Date/Time Qualifier",
  type: "Field",
  item: 42,
  table: "HL70156",
  longName: "HL7Which Date/Time Qualifier",
  length: 12
});

/**
 * QRF.7 - Which Date/Time Status Qualifier
 */
export const QRF_7 = datatypes.ID.register(hl7v2Metadata, {
  title: "QRF.7",
  version: "2.5",
  description: "Which Date/Time Status Qualifier",
  type: "Field",
  item: 43,
  table: "HL70157",
  longName: "HL7Which Date/Time Status Qualifier",
  length: 12
});

/**
 * QRF.8 - Date/Time Selection Qualifier
 */
export const QRF_8 = datatypes.ID.register(hl7v2Metadata, {
  title: "QRF.8",
  version: "2.5",
  description: "Date/Time Selection Qualifier",
  type: "Field",
  item: 44,
  table: "HL70158",
  longName: "HL7Date/Time Selection Qualifier",
  length: 12
});

/**
 * QRF.9 - When Quantity/Timing Qualifier
 */
export const QRF_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "QRF.9",
  version: "2.5",
  description: "When Quantity/Timing Qualifier",
  type: "Field",
  item: 694,
  table: "",
  longName: "HL7When Quantity/Timing Qualifier",
  length: 60
});

/**
 * QRF.10 - Search Confidence Threshold
 */
export const QRF_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "QRF.10",
  version: "2.5",
  description: "Search Confidence Threshold",
  type: "Field",
  item: 1442,
  table: "",
  longName: "HL7Search Confidence Threshold",
  length: 10
});
