import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 QRI Fields
 *
 * HL7 v2.6 QRI field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRI.1 - Candidate Confidence
 */
export const QRI_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "QRI.1",
  version: "2.6",
  description: "Candidate Confidence",
  type: "Field",
  item: 1436,
  table: "",
  longName: "HL7Candidate Confidence",
  length: 10
});

/**
 * QRI.2 - Match Reason Code
 */
export const QRI_2 = datatypes.IS.register(hl7v2Metadata, {
  title: "QRI.2",
  version: "2.6",
  description: "Match Reason Code",
  type: "Field",
  item: 1437,
  table: "HL70392",
  longName: "HL7Match Reason Code",
  length: 2
});

/**
 * QRI.3 - Algorithm Descriptor
 */
export const QRI_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "QRI.3",
  version: "2.6",
  description: "Algorithm Descriptor",
  type: "Field",
  item: 1438,
  table: "HL70393",
  longName: "HL7Algorithm Descriptor",
  length: 250
});
