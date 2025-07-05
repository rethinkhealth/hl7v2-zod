/**
 * HL7 v2.6 Metadata Registry
 *
 * This registry provides metadata for HL7 v2.6 schemas including:
 * - Data type information
 * - Field constraints and descriptions
 * - Optionality rules
 * - Length constraints
 * - Table references
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 */

import * as z from "zod/v4";
import type { JSONSchemaMeta } from "zod/v4/core";

type HL7v2Metadata = JSONSchemaMeta & {
  // Data Types
  longName?: string | undefined;
  optionality?: "R" | "RE" | "C" | "C(a/b)" | "O" | "X" | "B" | undefined;
  length?: number | undefined;
  dataType?: string | undefined;
  table?: string | undefined;
};

const hl7v2Metadata = z.registry<HL7v2Metadata>();

export default hl7v2Metadata;
