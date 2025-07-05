import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 PR1 Fields
 *
 * HL7 v2.6 PR1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PR1.1 - Set ID - PR1
 */
export const PR1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "PR1.1",
  version: "2.6",
  description: "Set ID - PR1",
  type: "Field",
  item: 391,
  table: "",
  longName: "HL7Set ID - PR1",
  length: 4
});

/**
 * PR1.3 - Procedure Code
 */
export const PR1_3 = datatypes.CNE.register(hl7v2Metadata, {
  title: "PR1.3",
  version: "2.6",
  description: "Procedure Code",
  type: "Field",
  item: 393,
  table: "HL70088",
  longName: "HL7Procedure Code",
  length: 705
});

/**
 * PR1.5 - Procedure Date/Time
 */
export const PR1_5 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PR1.5",
  version: "2.6",
  description: "Procedure Date/Time",
  type: "Field",
  item: 395,
  table: "",
  longName: "HL7Procedure Date/Time",
  length: 24
});

/**
 * PR1.6 - Procedure Functional Type
 */
export const PR1_6 = datatypes.IS.register(hl7v2Metadata, {
  title: "PR1.6",
  version: "2.6",
  description: "Procedure Functional Type",
  type: "Field",
  item: 396,
  table: "HL70230",
  longName: "HL7Procedure Functional Type",
  length: 2
});

/**
 * PR1.7 - Procedure Minutes
 */
export const PR1_7 = datatypes.NM.register(hl7v2Metadata, {
  title: "PR1.7",
  version: "2.6",
  description: "Procedure Minutes",
  type: "Field",
  item: 397,
  table: "",
  longName: "HL7Procedure Minutes",
  length: 4
});

/**
 * PR1.9 - Anesthesia Code
 */
export const PR1_9 = datatypes.IS.register(hl7v2Metadata, {
  title: "PR1.9",
  version: "2.6",
  description: "Anesthesia Code",
  type: "Field",
  item: 399,
  table: "HL70019",
  longName: "HL7Anesthesia Code",
  length: 2
});

/**
 * PR1.10 - Anesthesia Minutes
 */
export const PR1_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "PR1.10",
  version: "2.6",
  description: "Anesthesia Minutes",
  type: "Field",
  item: 400,
  table: "",
  longName: "HL7Anesthesia Minutes",
  length: 4
});

/**
 * PR1.13 - Consent Code
 */
export const PR1_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PR1.13",
  version: "2.6",
  description: "Consent Code",
  type: "Field",
  item: 403,
  table: "HL70059",
  longName: "HL7Consent Code",
  length: 250
});

/**
 * PR1.14 - Procedure Priority
 */
export const PR1_14 = datatypes.ID.register(hl7v2Metadata, {
  title: "PR1.14",
  version: "2.6",
  description: "Procedure Priority",
  type: "Field",
  item: 404,
  table: "HL70418",
  longName: "HL7Procedure Priority",
  length: 2
});

/**
 * PR1.15 - Associated Diagnosis Code
 */
export const PR1_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PR1.15",
  version: "2.6",
  description: "Associated Diagnosis Code",
  type: "Field",
  item: 772,
  table: "HL70051",
  longName: "HL7Associated Diagnosis Code",
  length: 250
});

/**
 * PR1.16 - Procedure Code Modifier
 */
export const PR1_16 = datatypes.CNE.register(hl7v2Metadata, {
  title: "PR1.16",
  version: "2.6",
  description: "Procedure Code Modifier",
  type: "Field",
  item: 1316,
  table: "HL70340",
  longName: "HL7Procedure Code Modifier",
  length: 705
});

/**
 * PR1.17 - Procedure DRG Type
 */
export const PR1_17 = datatypes.IS.register(hl7v2Metadata, {
  title: "PR1.17",
  version: "2.6",
  description: "Procedure DRG Type",
  type: "Field",
  item: 1501,
  table: "HL70416",
  longName: "HL7Procedure DRG Type",
  length: 20
});

/**
 * PR1.18 - Tissue Type Code
 */
export const PR1_18 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PR1.18",
  version: "2.6",
  description: "Tissue Type Code",
  type: "Field",
  item: 1502,
  table: "HL70417",
  longName: "HL7Tissue Type Code",
  length: 250
});

/**
 * PR1.19 - Procedure Identifier
 */
export const PR1_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "PR1.19",
  version: "2.6",
  description: "Procedure Identifier",
  type: "Field",
  item: 1848,
  table: "",
  longName: "HL7Procedure Identifier",
  length: 427
});

/**
 * PR1.20 - Procedure Action Code
 */
export const PR1_20 = datatypes.ID.register(hl7v2Metadata, {
  title: "PR1.20",
  version: "2.6",
  description: "Procedure Action Code",
  type: "Field",
  item: 1849,
  table: "HL70206",
  longName: "HL7Procedure Action Code",
  length: 1
});

/**
 * PR1.21 - DRG Procedure Determination Status
 */
export const PR1_21 = datatypes.IS.register(hl7v2Metadata, {
  title: "PR1.21",
  version: "2.6",
  description: "DRG Procedure Determination Status",
  type: "Field",
  item: 2177,
  table: "HL70761",
  longName: "HL7DRG Procedure Determination Status",
  length: 20
});

/**
 * PR1.22 - DRG Procedure Relevance
 */
export const PR1_22 = datatypes.IS.register(hl7v2Metadata, {
  title: "PR1.22",
  version: "2.6",
  description: "DRG Procedure Relevance",
  type: "Field",
  item: 2178,
  table: "HL70763",
  longName: "HL7DRG Procedure Relevance",
  length: 20
});
