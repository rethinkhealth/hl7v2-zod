import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 DRG Fields
 *
 * HL7 v2.5 DRG field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DRG.1 - Diagnostic Related Group
 */
export const DRG_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.1",
  version: "2.5",
  description: "Diagnostic Related Group",
  type: "Field",
  item: 382,
  table: "HL70055",
  longName: "HL7Diagnostic Related Group",
  length: 250
});

/**
 * DRG.2 - DRG Assigned Date/Time
 */
export const DRG_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.2",
  version: "2.5",
  description: "DRG Assigned Date/Time",
  type: "Field",
  item: 769,
  table: "",
  longName: "HL7DRG Assigned Date/Time",
  length: 26
});

/**
 * DRG.3 - DRG Approval Indicator
 */
export const DRG_3 = datatypes.ID.register(hl7v2Metadata, {
  title: "DRG.3",
  version: "2.5",
  description: "DRG Approval Indicator",
  type: "Field",
  item: 383,
  table: "HL70136",
  longName: "HL7DRG Approval Indicator",
  length: 1
});

/**
 * DRG.4 - DRG Grouper Review Code
 */
export const DRG_4 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.4",
  version: "2.5",
  description: "DRG Grouper Review Code",
  type: "Field",
  item: 384,
  table: "HL70056",
  longName: "HL7DRG Grouper Review Code",
  length: 2
});

/**
 * DRG.5 - Outlier Type
 */
export const DRG_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.5",
  version: "2.5",
  description: "Outlier Type",
  type: "Field",
  item: 385,
  table: "HL70083",
  longName: "HL7Outlier Type",
  length: 250
});

/**
 * DRG.6 - Outlier Days
 */
export const DRG_6 = datatypes.NM.register(hl7v2Metadata, {
  title: "DRG.6",
  version: "2.5",
  description: "Outlier Days",
  type: "Field",
  item: 386,
  table: "",
  longName: "HL7Outlier Days",
  length: 3
});

/**
 * DRG.7 - Outlier Cost
 */
export const DRG_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.7",
  version: "2.5",
  description: "Outlier Cost",
  type: "Field",
  item: 387,
  table: "",
  longName: "HL7Outlier Cost",
  length: 12
});

/**
 * DRG.8 - DRG Payor
 */
export const DRG_8 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.8",
  version: "2.5",
  description: "DRG Payor",
  type: "Field",
  item: 770,
  table: "HL70229",
  longName: "HL7DRG Payor",
  length: 1
});

/**
 * DRG.9 - Outlier Reimbursement
 */
export const DRG_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "DRG.9",
  version: "2.5",
  description: "Outlier Reimbursement",
  type: "Field",
  item: 771,
  table: "",
  longName: "HL7Outlier Reimbursement",
  length: 9
});

/**
 * DRG.10 - Confidential Indicator
 */
export const DRG_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "DRG.10",
  version: "2.5",
  description: "Confidential Indicator",
  type: "Field",
  item: 767,
  table: "HL70136",
  longName: "HL7Confidential Indicator",
  length: 1
});

/**
 * DRG.11 - DRG Transfer Type
 */
export const DRG_11 = datatypes.IS.register(hl7v2Metadata, {
  title: "DRG.11",
  version: "2.5",
  description: "DRG Transfer Type",
  type: "Field",
  item: 1500,
  table: "HL70415",
  longName: "HL7DRG Transfer Type",
  length: 21
});
