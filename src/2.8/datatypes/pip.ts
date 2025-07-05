import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.8 PIP Composite Data Type
 *
 * HL7 v2.8 PIP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PIP.1 - Privilege
 */
export const PIP_1 = CWE.register(hl7v2Metadata, {
  title: "PIP.1",
  version: "2.8",
  description: "Privilege",
  type: "DataType",
  optionality: "R"
});

/**
 * PIP.2 - Privilege Class
 */
export const PIP_2 = CWE.optional().register(hl7v2Metadata, {
  title: "PIP.2",
  version: "2.8",
  description: "Privilege Class",
  type: "DataType",
  optionality: "O"
});

/**
 * PIP.3 - Expiration Date
 */
export const PIP_3 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  title: "PIP.3",
  version: "2.8",
  description: "Expiration Date",
  type: "DataType",
  optionality: "O"
});

/**
 * PIP.4 - Activation Date
 */
export const PIP_4 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  title: "PIP.4",
  version: "2.8",
  description: "Activation Date",
  type: "DataType",
  optionality: "O"
});

/**
 * PIP.5 - Facility
 */
export const PIP_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "PIP.5",
  version: "2.8",
  description: "Facility",
  type: "DataType",
  optionality: "O"
});

/**
 * PIP - HL7 v2.8 PIP composite data type
 *
 * Components:
 * - PIP.1: Privilege (CWE)
 * - PIP.2: Privilege Class (CWE)
 * - PIP.3: Expiration Date (DT)
 * - PIP.4: Activation Date (DT)
 * - PIP.5: Facility (EI)
 */
export const PIP = z
  .object({
    "1": PIP_1,
    "2": PIP_2,
    "3": PIP_3,
    "4": PIP_4,
    "5": PIP_5
  })
  .register(hl7v2Metadata, {
    title: "PIP",
    version: "2.8",
    description: "HL7 v2.8 PIP composite data type"
  });

/**
 * Type definition for PIP
 */
export type PIP = z.infer<typeof PIP>;
