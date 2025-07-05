import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 DG1 Fields
 *
 * HL7 v2.5 DG1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DG1.1 - Set ID - DG1
 */
export const DG1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "DG1.1",
  version: "2.5",
  description: "Set ID - DG1",
  type: "Field",
  item: 375,
  table: "",
  longName: "HL7Set ID - DG1",
  length: 4
});

/**
 * DG1.2 - Diagnosis Coding Method
 */
export const DG1_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "DG1.2",
  version: "2.5",
  description: "Diagnosis Coding Method",
  type: "Field",
  item: 376,
  table: "HL70053",
  longName: "HL7Diagnosis Coding Method",
  length: 2
});

/**
 * DG1.3 - Diagnosis Code - DG1
 */
export const DG1_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.3",
  version: "2.5",
  description: "Diagnosis Code - DG1",
  type: "Field",
  item: 377,
  table: "HL70051",
  longName: "HL7Diagnosis Code - DG1",
  length: 250
});

/**
 * DG1.4 - Diagnosis Description
 */
export const DG1_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.4",
  version: "2.5",
  description: "Diagnosis Description",
  type: "Field",
  item: 378,
  table: "",
  longName: "HL7Diagnosis Description",
  length: 40
});

/**
 * DG1.5 - Diagnosis Date/Time
 */
export const DG1_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.5",
  version: "2.5",
  description: "Diagnosis Date/Time",
  type: "Field",
  item: 379,
  table: "",
  longName: "HL7Diagnosis Date/Time",
  length: 26
});

/**
 * DG1.6 - Diagnosis Type
 */
export const DG1_6 = datatypes.IS.register(hl7v2Metadata, {
  title: "DG1.6",
  version: "2.5",
  description: "Diagnosis Type",
  type: "Field",
  item: 380,
  table: "HL70052",
  longName: "HL7Diagnosis Type",
  length: 2
});

/**
 * DG1.7 - Major Diagnostic Category
 */
export const DG1_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.7",
  version: "2.5",
  description: "Major Diagnostic Category",
  type: "Field",
  item: 381,
  table: "HL70118",
  longName: "HL7Major Diagnostic Category",
  length: 250
});

/**
 * DG1.8 - Diagnostic Related Group
 */
export const DG1_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.8",
  version: "2.5",
  description: "Diagnostic Related Group",
  type: "Field",
  item: 382,
  table: "HL70055",
  longName: "HL7Diagnostic Related Group",
  length: 250
});

/**
 * DG1.9 - DRG Approval Indicator
 */
export const DG1_9 = datatypes.ID.register(hl7v2Metadata, {
  title: "DG1.9",
  version: "2.5",
  description: "DRG Approval Indicator",
  type: "Field",
  item: 383,
  table: "HL70136",
  longName: "HL7DRG Approval Indicator",
  length: 1
});

/**
 * DG1.10 - DRG Grouper Review Code
 */
export const DG1_10 = datatypes.IS.register(hl7v2Metadata, {
  title: "DG1.10",
  version: "2.5",
  description: "DRG Grouper Review Code",
  type: "Field",
  item: 384,
  table: "HL70056",
  longName: "HL7DRG Grouper Review Code",
  length: 2
});

/**
 * DG1.11 - Outlier Type
 */
export const DG1_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.11",
  version: "2.5",
  description: "Outlier Type",
  type: "Field",
  item: 385,
  table: "HL70083",
  longName: "HL7Outlier Type",
  length: 250
});

/**
 * DG1.12 - Outlier Days
 */
export const DG1_12 = datatypes.NM.register(hl7v2Metadata, {
  title: "DG1.12",
  version: "2.5",
  description: "Outlier Days",
  type: "Field",
  item: 386,
  table: "",
  longName: "HL7Outlier Days",
  length: 3
});

/**
 * DG1.13 - Outlier Cost
 */
export const DG1_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.13",
  version: "2.5",
  description: "Outlier Cost",
  type: "Field",
  item: 387,
  table: "",
  longName: "HL7Outlier Cost",
  length: 12
});

/**
 * DG1.14 - Grouper Version And Type
 */
export const DG1_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.14",
  version: "2.5",
  description: "Grouper Version And Type",
  type: "Field",
  item: 388,
  table: "",
  longName: "HL7Grouper Version And Type",
  length: 4
});

/**
 * DG1.15 - Diagnosis Priority
 */
export const DG1_15 = datatypes.ID.register(hl7v2Metadata, {
  title: "DG1.15",
  version: "2.5",
  description: "Diagnosis Priority",
  type: "Field",
  item: 389,
  table: "HL70359",
  longName: "HL7Diagnosis Priority",
  length: 2
});

/**
 * DG1.16 - Diagnosing Clinician
 */
export const DG1_16 = datatypes.XCN.register(hl7v2Metadata, {
  title: "DG1.16",
  version: "2.5",
  description: "Diagnosing Clinician",
  type: "Field",
  item: 390,
  table: "",
  longName: "HL7Diagnosing Clinician",
  length: 250
});

/**
 * DG1.17 - Diagnosis Classification
 */
export const DG1_17 = datatypes.IS.register(hl7v2Metadata, {
  title: "DG1.17",
  version: "2.5",
  description: "Diagnosis Classification",
  type: "Field",
  item: 766,
  table: "HL70228",
  longName: "HL7Diagnosis Classification",
  length: 3
});

/**
 * DG1.18 - Confidential Indicator
 */
export const DG1_18 = datatypes.ID.register(hl7v2Metadata, {
  title: "DG1.18",
  version: "2.5",
  description: "Confidential Indicator",
  type: "Field",
  item: 767,
  table: "HL70136",
  longName: "HL7Confidential Indicator",
  length: 1
});

/**
 * DG1.19 - Attestation Date/Time
 */
export const DG1_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.19",
  version: "2.5",
  description: "Attestation Date/Time",
  type: "Field",
  item: 768,
  table: "",
  longName: "HL7Attestation Date/Time",
  length: 26
});

/**
 * DG1.20 - Diagnosis Identifier
 */
export const DG1_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "DG1.20",
  version: "2.5",
  description: "Diagnosis Identifier",
  type: "Field",
  item: 1850,
  table: "",
  longName: "HL7Diagnosis Identifier",
  length: 427
});

/**
 * DG1.21 - Diagnosis Action Code
 */
export const DG1_21 = datatypes.ID.register(hl7v2Metadata, {
  title: "DG1.21",
  version: "2.5",
  description: "Diagnosis Action Code",
  type: "Field",
  item: 1894,
  table: "HL70206",
  longName: "HL7Diagnosis Action Code",
  length: 1
});
