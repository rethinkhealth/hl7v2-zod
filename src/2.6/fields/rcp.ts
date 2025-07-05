import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 RCP Fields
 *
 * HL7 v2.6 RCP field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RCP.1 - Query Priority
 */
export const RCP_1 = datatypes.ID.register(hl7v2Metadata, {
  title: "RCP.1",
  version: "2.6",
  description: "Query Priority",
  type: "Field",
  item: 27,
  table: "HL70091",
  longName: "HL7Query Priority",
  length: 1
});

/**
 * RCP.2 - Quantity Limited Request
 */
export const RCP_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "RCP.2",
  version: "2.6",
  description: "Quantity Limited Request",
  type: "Field",
  item: 31,
  table: "HL70126",
  longName: "HL7Quantity Limited Request",
  length: 10
});

/**
 * RCP.3 - Response Modality
 */
export const RCP_3 = datatypes.CNE.register(hl7v2Metadata, {
  title: "RCP.3",
  version: "2.6",
  description: "Response Modality",
  type: "Field",
  item: 1440,
  table: "HL70394",
  longName: "HL7Response Modality",
  length: 250
});

/**
 * RCP.4 - Execution and Delivery Time
 */
export const RCP_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "RCP.4",
  version: "2.6",
  description: "Execution and Delivery Time",
  type: "Field",
  item: 1441,
  table: "",
  longName: "HL7Execution and Delivery Time",
  length: 24
});

/**
 * RCP.5 - Modify Indicator
 */
export const RCP_5 = datatypes.ID.register(hl7v2Metadata, {
  title: "RCP.5",
  version: "2.6",
  description: "Modify Indicator",
  type: "Field",
  item: 1443,
  table: "HL70395",
  longName: "HL7Modify Indicator",
  length: 1
});

/**
 * RCP.6 - Sort-by Field
 */
export const RCP_6 = datatypes.SRT.register(hl7v2Metadata, {
  title: "RCP.6",
  version: "2.6",
  description: "Sort-by Field",
  type: "Field",
  item: 1624,
  table: "",
  longName: "HL7Sort-by Field",
  length: 512
});

/**
 * RCP.7 - Segment group inclusion
 */
export const RCP_7 = datatypes.ID.register(hl7v2Metadata, {
  title: "RCP.7",
  version: "2.6",
  description: "Segment group inclusion",
  type: "Field",
  item: 1594,
  table: "HL70391",
  longName: "HL7Segment group inclusion",
  length: 256
});
