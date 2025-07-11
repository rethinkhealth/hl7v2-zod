import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 SPM Fields
 *
 * HL7 v2.7 SPM field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SPM.1 - Set ID - SPM
 */
export const SPM_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "SPM.1",
  version: "2.7",
  description: "Set ID - SPM",
  type: "Field",
  item: 1754,
  table: "",
  longName: "HL7Set ID - SPM",
  length: 4
});

/**
 * SPM.2 - Specimen ID
 */
export const SPM_2 = datatypes.EIP.register(hl7v2Metadata, {
  title: "SPM.2",
  version: "2.7",
  description: "Specimen ID",
  type: "Field",
  item: 1755,
  table: "",
  longName: "HL7Specimen ID"
});

/**
 * SPM.3 - Specimen Parent IDs
 */
export const SPM_3 = datatypes.EIP.register(hl7v2Metadata, {
  title: "SPM.3",
  version: "2.7",
  description: "Specimen Parent IDs",
  type: "Field",
  item: 1756,
  table: "",
  longName: "HL7Specimen Parent IDs"
});

/**
 * SPM.4 - Specimen Type
 */
export const SPM_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.4",
  version: "2.7",
  description: "Specimen Type",
  type: "Field",
  item: 1900,
  table: "HL70487",
  longName: "HL7Specimen Type"
});

/**
 * SPM.5 - Specimen Type Modifier
 */
export const SPM_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.5",
  version: "2.7",
  description: "Specimen Type Modifier",
  type: "Field",
  item: 1757,
  table: "HL70541",
  longName: "HL7Specimen Type Modifier"
});

/**
 * SPM.6 - Specimen Additives
 */
export const SPM_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.6",
  version: "2.7",
  description: "Specimen Additives",
  type: "Field",
  item: 1758,
  table: "HL70371",
  longName: "HL7Specimen Additives"
});

/**
 * SPM.7 - Specimen Collection Method
 */
export const SPM_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.7",
  version: "2.7",
  description: "Specimen Collection Method",
  type: "Field",
  item: 1759,
  table: "HL70488",
  longName: "HL7Specimen Collection Method"
});

/**
 * SPM.8 - Specimen Source Site
 */
export const SPM_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.8",
  version: "2.7",
  description: "Specimen Source Site",
  type: "Field",
  item: 1901,
  table: "HL79999",
  longName: "HL7Specimen Source Site"
});

/**
 * SPM.9 - Specimen Source Site Modifier
 */
export const SPM_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.9",
  version: "2.7",
  description: "Specimen Source Site Modifier",
  type: "Field",
  item: 1760,
  table: "HL70542",
  longName: "HL7Specimen Source Site Modifier"
});

/**
 * SPM.10 - Specimen Collection Site
 */
export const SPM_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.10",
  version: "2.7",
  description: "Specimen Collection Site",
  type: "Field",
  item: 1761,
  table: "HL70543",
  longName: "HL7Specimen Collection Site"
});

/**
 * SPM.11 - Specimen Role
 */
export const SPM_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.11",
  version: "2.7",
  description: "Specimen Role",
  type: "Field",
  item: 1762,
  table: "HL70369",
  longName: "HL7Specimen Role"
});

/**
 * SPM.12 - Specimen Collection Amount
 */
export const SPM_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "SPM.12",
  version: "2.7",
  description: "Specimen Collection Amount",
  type: "Field",
  item: 1902,
  table: "",
  longName: "HL7Specimen Collection Amount"
});

/**
 * SPM.13 - Grouped Specimen Count
 */
export const SPM_13 = datatypes.NM.register(hl7v2Metadata, {
  title: "SPM.13",
  version: "2.7",
  description: "Grouped Specimen Count",
  type: "Field",
  item: 1763,
  table: "",
  longName: "HL7Grouped Specimen Count"
});

/**
 * SPM.14 - Specimen Description
 */
export const SPM_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "SPM.14",
  version: "2.7",
  description: "Specimen Description",
  type: "Field",
  item: 1764,
  table: "",
  longName: "HL7Specimen Description"
});

/**
 * SPM.15 - Specimen Handling Code
 */
export const SPM_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.15",
  version: "2.7",
  description: "Specimen Handling Code",
  type: "Field",
  item: 1908,
  table: "HL70376",
  longName: "HL7Specimen Handling Code"
});

/**
 * SPM.16 - Specimen Risk Code
 */
export const SPM_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.16",
  version: "2.7",
  description: "Specimen Risk Code",
  type: "Field",
  item: 1903,
  table: "HL70489",
  longName: "HL7Specimen Risk Code"
});

/**
 * SPM.17 - Specimen Collection Date/Time
 */
export const SPM_17 = datatypes.DR.register(hl7v2Metadata, {
  title: "SPM.17",
  version: "2.7",
  description: "Specimen Collection Date/Time",
  type: "Field",
  item: 1765,
  table: "",
  longName: "HL7Specimen Collection Date/Time"
});

/**
 * SPM.18 - Specimen Received Date/Time
 */
export const SPM_18 = datatypes.DTM.register(hl7v2Metadata, {
  title: "SPM.18",
  version: "2.7",
  description: "Specimen Received Date/Time",
  type: "Field",
  item: 248,
  table: "",
  longName: "HL7Specimen Received Date/Time"
});

/**
 * SPM.19 - Specimen Expiration Date/Time
 */
export const SPM_19 = datatypes.DTM.register(hl7v2Metadata, {
  title: "SPM.19",
  version: "2.7",
  description: "Specimen Expiration Date/Time",
  type: "Field",
  item: 1904,
  table: "",
  longName: "HL7Specimen Expiration Date/Time"
});

/**
 * SPM.20 - Specimen Availability
 */
export const SPM_20 = datatypes.ID.register(hl7v2Metadata, {
  title: "SPM.20",
  version: "2.7",
  description: "Specimen Availability",
  type: "Field",
  item: 1766,
  table: "HL70136",
  longName: "HL7Specimen Availability",
  length: 1
});

/**
 * SPM.21 - Specimen Reject Reason
 */
export const SPM_21 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.21",
  version: "2.7",
  description: "Specimen Reject Reason",
  type: "Field",
  item: 1767,
  table: "HL70490",
  longName: "HL7Specimen Reject Reason"
});

/**
 * SPM.22 - Specimen Quality
 */
export const SPM_22 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.22",
  version: "2.7",
  description: "Specimen Quality",
  type: "Field",
  item: 1768,
  table: "HL70491",
  longName: "HL7Specimen Quality"
});

/**
 * SPM.23 - Specimen Appropriateness
 */
export const SPM_23 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.23",
  version: "2.7",
  description: "Specimen Appropriateness",
  type: "Field",
  item: 1769,
  table: "HL70492",
  longName: "HL7Specimen Appropriateness"
});

/**
 * SPM.24 - Specimen Condition
 */
export const SPM_24 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.24",
  version: "2.7",
  description: "Specimen Condition",
  type: "Field",
  item: 1770,
  table: "HL70493",
  longName: "HL7Specimen Condition"
});

/**
 * SPM.25 - Specimen Current Quantity
 */
export const SPM_25 = datatypes.ST.register(hl7v2Metadata, {
  title: "SPM.25",
  version: "2.7",
  description: "Specimen Current Quantity",
  type: "Field",
  item: 1771,
  table: "",
  longName: "HL7Specimen Current Quantity"
});

/**
 * SPM.26 - Number of Specimen Containers
 */
export const SPM_26 = datatypes.NM.register(hl7v2Metadata, {
  title: "SPM.26",
  version: "2.7",
  description: "Number of Specimen Containers",
  type: "Field",
  item: 1772,
  table: "",
  longName: "HL7Number of Specimen Containers"
});

/**
 * SPM.27 - Container Type
 */
export const SPM_27 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.27",
  version: "2.7",
  description: "Container Type",
  type: "Field",
  item: 1773,
  table: "HL79999",
  longName: "HL7Container Type"
});

/**
 * SPM.28 - Container Condition
 */
export const SPM_28 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.28",
  version: "2.7",
  description: "Container Condition",
  type: "Field",
  item: 1774,
  table: "HL70544",
  longName: "HL7Container Condition"
});

/**
 * SPM.29 - Specimen Child Role
 */
export const SPM_29 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SPM.29",
  version: "2.7",
  description: "Specimen Child Role",
  type: "Field",
  item: 1775,
  table: "HL70494",
  longName: "HL7Specimen Child Role"
});

/**
 * SPM.30 - Accession ID
 */
export const SPM_30 = datatypes.ST.register(hl7v2Metadata, {
  title: "SPM.30",
  version: "2.7",
  description: "Accession ID",
  type: "Field",
  item: 2314,
  table: "",
  longName: "HL7Accession ID"
});

/**
 * SPM.31 - Other Specimen ID
 */
export const SPM_31 = datatypes.ST.register(hl7v2Metadata, {
  title: "SPM.31",
  version: "2.7",
  description: "Other Specimen ID",
  type: "Field",
  item: 2315,
  table: "",
  longName: "HL7Other Specimen ID"
});

/**
 * SPM.32 - Shipment ID
 */
export const SPM_32 = datatypes.ST.register(hl7v2Metadata, {
  title: "SPM.32",
  version: "2.7",
  description: "Shipment ID",
  type: "Field",
  item: 2316,
  table: "",
  longName: "HL7Shipment ID"
});
