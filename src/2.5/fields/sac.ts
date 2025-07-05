import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 SAC Fields
 *
 * HL7 v2.5 SAC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SAC.1 - External Accession Identifier
 */
export const SAC_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.1",
  version: "2.5",
  description: "External Accession Identifier",
  type: "Field",
  item: 1329,
  table: "",
  longName: "HL7External Accession Identifier",
  length: 80
});

/**
 * SAC.2 - Accession Identifier
 */
export const SAC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.2",
  version: "2.5",
  description: "Accession Identifier",
  type: "Field",
  item: 1330,
  table: "",
  longName: "HL7Accession Identifier",
  length: 80
});

/**
 * SAC.3 - Container Identifier
 */
export const SAC_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.3",
  version: "2.5",
  description: "Container Identifier",
  type: "Field",
  item: 1331,
  table: "",
  longName: "HL7Container Identifier",
  length: 80
});

/**
 * SAC.4 - Primary (parent) Container Identifier
 */
export const SAC_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.4",
  version: "2.5",
  description: "Primary (parent) Container Identifier",
  type: "Field",
  item: 1332,
  table: "",
  longName: "HL7Primary (parent) Container Identifier",
  length: 80
});

/**
 * SAC.5 - Equipment Container Identifier
 */
export const SAC_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.5",
  version: "2.5",
  description: "Equipment Container Identifier",
  type: "Field",
  item: 1333,
  table: "",
  longName: "HL7Equipment Container Identifier",
  length: 80
});

/**
 * SAC.6 - Specimen Source
 */
export const SAC_6 = datatypes.SPS.register(hl7v2Metadata, {
  title: "SAC.6",
  version: "2.5",
  description: "Specimen Source",
  type: "Field",
  item: 249,
  table: "",
  longName: "HL7Specimen Source",
  length: 300
});

/**
 * SAC.7 - Registration Date/Time
 */
export const SAC_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.7",
  version: "2.5",
  description: "Registration Date/Time",
  type: "Field",
  item: 1334,
  table: "",
  longName: "HL7Registration Date/Time",
  length: 26
});

/**
 * SAC.8 - Container Status
 */
export const SAC_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.8",
  version: "2.5",
  description: "Container Status",
  type: "Field",
  item: 1335,
  table: "HL70370",
  longName: "HL7Container Status",
  length: 250
});

/**
 * SAC.9 - Carrier Type
 */
export const SAC_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.9",
  version: "2.5",
  description: "Carrier Type",
  type: "Field",
  item: 1336,
  table: "HL70378",
  longName: "HL7Carrier Type",
  length: 250
});

/**
 * SAC.10 - Carrier Identifier
 */
export const SAC_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.10",
  version: "2.5",
  description: "Carrier Identifier",
  type: "Field",
  item: 1337,
  table: "",
  longName: "HL7Carrier Identifier",
  length: 80
});

/**
 * SAC.11 - Position in Carrier
 */
export const SAC_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.11",
  version: "2.5",
  description: "Position in Carrier",
  type: "Field",
  item: 1338,
  table: "",
  longName: "HL7Position in Carrier",
  length: 80
});

/**
 * SAC.12 - Tray Type - SAC
 */
export const SAC_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.12",
  version: "2.5",
  description: "Tray Type - SAC",
  type: "Field",
  item: 1339,
  table: "HL70379",
  longName: "HL7Tray Type - SAC",
  length: 250
});

/**
 * SAC.13 - Tray Identifier
 */
export const SAC_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.13",
  version: "2.5",
  description: "Tray Identifier",
  type: "Field",
  item: 1340,
  table: "",
  longName: "HL7Tray Identifier",
  length: 80
});

/**
 * SAC.14 - Position in Tray
 */
export const SAC_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.14",
  version: "2.5",
  description: "Position in Tray",
  type: "Field",
  item: 1341,
  table: "",
  longName: "HL7Position in Tray",
  length: 80
});

/**
 * SAC.15 - Location
 */
export const SAC_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.15",
  version: "2.5",
  description: "Location",
  type: "Field",
  item: 1342,
  table: "",
  longName: "HL7Location",
  length: 250
});

/**
 * SAC.16 - Container Height
 */
export const SAC_16 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.16",
  version: "2.5",
  description: "Container Height",
  type: "Field",
  item: 1343,
  table: "",
  longName: "HL7Container Height",
  length: 20
});

/**
 * SAC.17 - Container Diameter
 */
export const SAC_17 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.17",
  version: "2.5",
  description: "Container Diameter",
  type: "Field",
  item: 1344,
  table: "",
  longName: "HL7Container Diameter",
  length: 20
});

/**
 * SAC.18 - Barrier Delta
 */
export const SAC_18 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.18",
  version: "2.5",
  description: "Barrier Delta",
  type: "Field",
  item: 1345,
  table: "",
  longName: "HL7Barrier Delta",
  length: 20
});

/**
 * SAC.19 - Bottom Delta
 */
export const SAC_19 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.19",
  version: "2.5",
  description: "Bottom Delta",
  type: "Field",
  item: 1346,
  table: "",
  longName: "HL7Bottom Delta",
  length: 20
});

/**
 * SAC.20 - Container Height/Diameter/Delta Units
 */
export const SAC_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.20",
  version: "2.5",
  description: "Container Height/Diameter/Delta Units",
  type: "Field",
  item: 1347,
  table: "",
  longName: "HL7Container Height/Diameter/Delta Units",
  length: 250
});

/**
 * SAC.21 - Container Volume
 */
export const SAC_21 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.21",
  version: "2.5",
  description: "Container Volume",
  type: "Field",
  item: 644,
  table: "",
  longName: "HL7Container Volume",
  length: 20
});

/**
 * SAC.22 - Available Specimen Volume
 */
export const SAC_22 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.22",
  version: "2.5",
  description: "Available Specimen Volume",
  type: "Field",
  item: 1349,
  table: "",
  longName: "HL7Available Specimen Volume",
  length: 20
});

/**
 * SAC.23 - Initial Specimen Volume
 */
export const SAC_23 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.23",
  version: "2.5",
  description: "Initial Specimen Volume",
  type: "Field",
  item: 1350,
  table: "",
  longName: "HL7Initial Specimen Volume",
  length: 20
});

/**
 * SAC.24 - Volume Units
 */
export const SAC_24 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.24",
  version: "2.5",
  description: "Volume Units",
  type: "Field",
  item: 1351,
  table: "",
  longName: "HL7Volume Units",
  length: 250
});

/**
 * SAC.25 - Separator Type
 */
export const SAC_25 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.25",
  version: "2.5",
  description: "Separator Type",
  type: "Field",
  item: 1352,
  table: "HL70380",
  longName: "HL7Separator Type",
  length: 250
});

/**
 * SAC.26 - Cap Type
 */
export const SAC_26 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.26",
  version: "2.5",
  description: "Cap Type",
  type: "Field",
  item: 1353,
  table: "HL70381",
  longName: "HL7Cap Type",
  length: 250
});

/**
 * SAC.27 - Additive
 */
export const SAC_27 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SAC.27",
  version: "2.5",
  description: "Additive",
  type: "Field",
  item: 647,
  table: "HL70371",
  longName: "HL7Additive",
  length: 250
});

/**
 * SAC.28 - Specimen Component
 */
export const SAC_28 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.28",
  version: "2.5",
  description: "Specimen Component",
  type: "Field",
  item: 1355,
  table: "",
  longName: "HL7Specimen Component",
  length: 250
});

/**
 * SAC.29 - Dilution Factor
 */
export const SAC_29 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.29",
  version: "2.5",
  description: "Dilution Factor",
  type: "Field",
  item: 1356,
  table: "",
  longName: "HL7Dilution Factor",
  length: 20
});

/**
 * SAC.30 - Treatment
 */
export const SAC_30 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.30",
  version: "2.5",
  description: "Treatment",
  type: "Field",
  item: 1357,
  table: "HL70373",
  longName: "HL7Treatment",
  length: 250
});

/**
 * SAC.31 - Temperature
 */
export const SAC_31 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.31",
  version: "2.5",
  description: "Temperature",
  type: "Field",
  item: 1358,
  table: "",
  longName: "HL7Temperature",
  length: 20
});

/**
 * SAC.32 - Hemolysis Index
 */
export const SAC_32 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.32",
  version: "2.5",
  description: "Hemolysis Index",
  type: "Field",
  item: 1359,
  table: "",
  longName: "HL7Hemolysis Index",
  length: 20
});

/**
 * SAC.33 - Hemolysis Index Units
 */
export const SAC_33 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.33",
  version: "2.5",
  description: "Hemolysis Index Units",
  type: "Field",
  item: 1360,
  table: "",
  longName: "HL7Hemolysis Index Units",
  length: 250
});

/**
 * SAC.34 - Lipemia Index
 */
export const SAC_34 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.34",
  version: "2.5",
  description: "Lipemia Index",
  type: "Field",
  item: 1361,
  table: "",
  longName: "HL7Lipemia Index",
  length: 20
});

/**
 * SAC.35 - Lipemia Index Units
 */
export const SAC_35 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.35",
  version: "2.5",
  description: "Lipemia Index Units",
  type: "Field",
  item: 1362,
  table: "",
  longName: "HL7Lipemia Index Units",
  length: 250
});

/**
 * SAC.36 - Icterus Index
 */
export const SAC_36 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.36",
  version: "2.5",
  description: "Icterus Index",
  type: "Field",
  item: 1363,
  table: "",
  longName: "HL7Icterus Index",
  length: 20
});

/**
 * SAC.37 - Icterus Index Units
 */
export const SAC_37 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.37",
  version: "2.5",
  description: "Icterus Index Units",
  type: "Field",
  item: 1364,
  table: "",
  longName: "HL7Icterus Index Units",
  length: 250
});

/**
 * SAC.38 - Fibrin Index
 */
export const SAC_38 = datatypes.NM.register(hl7v2Metadata, {
  title: "SAC.38",
  version: "2.5",
  description: "Fibrin Index",
  type: "Field",
  item: 1365,
  table: "",
  longName: "HL7Fibrin Index",
  length: 20
});

/**
 * SAC.39 - Fibrin Index Units
 */
export const SAC_39 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.39",
  version: "2.5",
  description: "Fibrin Index Units",
  type: "Field",
  item: 1366,
  table: "",
  longName: "HL7Fibrin Index Units",
  length: 250
});

/**
 * SAC.40 - System Induced Contaminants
 */
export const SAC_40 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.40",
  version: "2.5",
  description: "System Induced Contaminants",
  type: "Field",
  item: 1367,
  table: "HL70374",
  longName: "HL7System Induced Contaminants",
  length: 250
});

/**
 * SAC.41 - Drug Interference
 */
export const SAC_41 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.41",
  version: "2.5",
  description: "Drug Interference",
  type: "Field",
  item: 1368,
  table: "HL70382",
  longName: "HL7Drug Interference",
  length: 250
});

/**
 * SAC.42 - Artificial Blood
 */
export const SAC_42 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.42",
  version: "2.5",
  description: "Artificial Blood",
  type: "Field",
  item: 1369,
  table: "HL70375",
  longName: "HL7Artificial Blood",
  length: 250
});

/**
 * SAC.43 - Special Handling Code
 */
export const SAC_43 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SAC.43",
  version: "2.5",
  description: "Special Handling Code",
  type: "Field",
  item: 1370,
  table: "HL70376",
  longName: "HL7Special Handling Code",
  length: 250
});

/**
 * SAC.44 - Other Environmental Factors
 */
export const SAC_44 = datatypes.ST.register(hl7v2Metadata, {
  title: "SAC.44",
  version: "2.5",
  description: "Other Environmental Factors",
  type: "Field",
  item: 1371,
  table: "HL70377",
  longName: "HL7Other Environmental Factors",
  length: 250
});
