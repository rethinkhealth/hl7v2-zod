import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 PRA Fields
 *
 * HL7 v2.8 PRA field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRA.1 - Primary Key Value - PRA
 */
export const PRA_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PRA.1",
  version: "2.8",
  description: "Primary Key Value - PRA",
  type: "Field",
  item: 685,
  table: "HL79999",
  longName: "HL7Primary Key Value - PRA"
});

/**
 * PRA.2 - Practitioner Group
 */
export const PRA_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PRA.2",
  version: "2.8",
  description: "Practitioner Group",
  type: "Field",
  item: 686,
  table: "HL70358",
  longName: "HL7Practitioner Group"
});

/**
 * PRA.3 - Practitioner Category
 */
export const PRA_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PRA.3",
  version: "2.8",
  description: "Practitioner Category",
  type: "Field",
  item: 687,
  table: "HL70186",
  longName: "HL7Practitioner Category"
});

/**
 * PRA.4 - Provider Billing
 */
export const PRA_4 = datatypes.ID.register(hl7v2Metadata, {
  title: "PRA.4",
  version: "2.8",
  description: "Provider Billing",
  type: "Field",
  item: 688,
  table: "HL70187",
  longName: "HL7Provider Billing",
  length: 1
});

/**
 * PRA.5 - Specialty
 */
export const PRA_5 = datatypes.SPD.register(hl7v2Metadata, {
  title: "PRA.5",
  version: "2.8",
  description: "Specialty",
  type: "Field",
  item: 689,
  table: "HL70337",
  longName: "HL7Specialty"
});

/**
 * PRA.6 - Practitioner ID Numbers
 */
export const PRA_6 = datatypes.PLN.register(hl7v2Metadata, {
  title: "PRA.6",
  version: "2.8",
  description: "Practitioner ID Numbers",
  type: "Field",
  item: 690,
  table: "HL70338",
  longName: "HL7Practitioner ID Numbers"
});

/**
 * PRA.7 - Privileges
 */
export const PRA_7 = datatypes.PIP.register(hl7v2Metadata, {
  title: "PRA.7",
  version: "2.8",
  description: "Privileges",
  type: "Field",
  item: 691,
  table: "",
  longName: "HL7Privileges"
});

/**
 * PRA.8 - Date Entered Practice
 */
export const PRA_8 = datatypes.DT.register(hl7v2Metadata, {
  title: "PRA.8",
  version: "2.8",
  description: "Date Entered Practice",
  type: "Field",
  item: 1296,
  table: "",
  longName: "HL7Date Entered Practice"
});

/**
 * PRA.9 - Institution
 */
export const PRA_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PRA.9",
  version: "2.8",
  description: "Institution",
  type: "Field",
  item: 1613,
  table: "HL70537",
  longName: "HL7Institution"
});

/**
 * PRA.10 - Date Left Practice
 */
export const PRA_10 = datatypes.DT.register(hl7v2Metadata, {
  title: "PRA.10",
  version: "2.8",
  description: "Date Left Practice",
  type: "Field",
  item: 1348,
  table: "",
  longName: "HL7Date Left Practice"
});

/**
 * PRA.11 - Government Reimbursement Billing Eligibility
 */
export const PRA_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PRA.11",
  version: "2.8",
  description: "Government Reimbursement Billing Eligibility",
  type: "Field",
  item: 1388,
  table: "HL70401",
  longName: "HL7Government Reimbursement Billing Eligibility"
});

/**
 * PRA.12 - Set ID - PRA
 */
export const PRA_12 = datatypes.SI.register(hl7v2Metadata, {
  title: "PRA.12",
  version: "2.8",
  description: "Set ID - PRA",
  type: "Field",
  item: 1616,
  table: "",
  longName: "HL7Set ID - PRA",
  length: 4
});
