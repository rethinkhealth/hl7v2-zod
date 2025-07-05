import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.7 MOC Composite Data Type
 *
 * HL7 v2.7 MOC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MOC.1 - Monetary Amount
 */
export const MOC_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "MOC.1",
  version: "2.7",
  description: "Monetary Amount",
  type: "DataType",
  optionality: "O"
});

/**
 * MOC.2 - Charge Code
 */
export const MOC_2 = CWE.optional().register(hl7v2Metadata, {
  title: "MOC.2",
  version: "2.7",
  description: "Charge Code",
  type: "DataType",
  optionality: "O"
});

/**
 * MOC - HL7 v2.7 MOC composite data type
 *
 * Components:
 * - MOC.1: Monetary Amount (MO)
 * - MOC.2: Charge Code (CWE)
 */
export const MOC = z
  .object({
    "1": MOC_1,
    "2": MOC_2
  })
  .register(hl7v2Metadata, {
    title: "MOC",
    version: "2.7",
    description: "HL7 v2.7 MOC composite data type"
  });

/**
 * Type definition for MOC
 */
export type MOC = z.infer<typeof MOC>;
