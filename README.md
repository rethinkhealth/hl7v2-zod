# @rethinkhealth/hl7v2-zod

Type-safe HL7v2 message parsing and validation using Zod v4 schemas.

## Features

- **Type-safe validation**: Full TypeScript support with Zod v4 schemas for all HL7v2 message types
- **Multiple HL7 versions**: Support for HL7v2 versions 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.1, 2.8.2, and 2.9
- **Comprehensive coverage**: Includes all message types, segments, fields, and data types for each version
- **Zero dependencies**: Only requires Zod v4 as a peer dependency
- **Tree-shakable**: Import only the schemas you need
- **Zod v4 optimized**: Built with the latest Zod v4 features for better performance and TypeScript efficiency

## Installation

This package requires Zod v4 (minimum version 3.25.0) as a peer dependency.

```bash
npm install @rethinkhealth/hl7v2-zod zod@^3.25.0
# or
yarn add @rethinkhealth/hl7v2-zod zod@^3.25.0
# or
pnpm add @rethinkhealth/hl7v2-zod zod@^3.25.0
```

## Quick Start

```typescript
import { v2_8, getVersion } from '@rethinkhealth/hl7v2-zod'

// Parse and validate an ADT_A01 message
const hl7Message = `MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20231201120000||ADT^A01|MSG00001|P|2.8|
EVN|A01|20231201120000
PID|1||12345^^^MRN||DOE^JOHN^^^^||19800101|M|||123 MAIN ST^^ANYTOWN^ST^12345^USA
PV1|1|I|2000^2012^01||||123456^SMITH^JANE^J^^^MD|123456^SMITH^JANE^J^^^MD|||||||||||I|1783332658^BMT|||||||||||||||||||||||||||20231201120000`

try {
  const result = v2_8.messages.ADT_A01.parse(hl7Message)
  console.log('Valid HL7 message:', result)
} catch (error) {
  console.error('Invalid HL7 message:', error)
}

// Or get a specific version dynamically
const schemas = getVersion('2.8')
const result = schemas.messages.ADT_A01.parse(hl7Message)
```

## Usage

### Accessing Different HL7 Versions

```typescript
import { v2_3_1, v2_4, v2_5, v2_8, v2_9 } from '@rethinkhealth/hl7v2-zod'

// Use specific version schemas
const adtA01_v2_8 = v2_8.messages.ADT_A01
const adtA01_v2_9 = v2_9.messages.ADT_A01

// Access segments, fields, and data types
const mshSegment = v2_8.segments.MSH
const pidSegment = v2_8.segments.PID
const adDataType = v2_8.datatypes.AD
```

### Dynamic Version Selection

```typescript
import { getVersion, type HL7Version } from '@rethinkhealth/hl7v2-zod'

function validateMessage(message: string, version: HL7Version) {
  const schemas = getVersion(version)
  return schemas.messages.ADT_A01.parse(message)
}

// Usage
const result = validateMessage(hl7Message, '2.8')
```

### Working with Segments and Fields

```typescript
import { v2_8 } from '@rethinkhealth/hl7v2-zod'

// Validate individual segments
const mshData = v2_8.segments.MSH.parse('MSH|^~\\&|APP|FACILITY|RECV_APP|RECV_FAC|20231201120000||ADT^A01|MSG00001|P|2.8|')

// Validate data types
const addressData = v2_8.datatypes.AD.parse('123 MAIN ST^^ANYTOWN^ST^12345^USA')

// Access field definitions
const pidFields = v2_8.fields.PID
```

## API Reference

### Main Exports

- `v2_3_1`, `v2_4`, `v2_5`, `v2_5_1`, `v2_6`, `v2_7`, `v2_7_1`, `v2_8`, `v2_8_1`, `v2_8_2`, `v2_9`: Namespaced exports for each HL7 version
- `getVersion(version: HL7Version)`: Function to get schemas for a specific version
- `HL7Version`: TypeScript type for supported HL7 versions

### Version Structure

Each version export contains:

- `messages`: All HL7 message type schemas (e.g., `ADT_A01`, `ORU_R01`)
- `segments`: All HL7 segment schemas (e.g., `MSH`, `PID`, `PV1`)
- `fields`: All HL7 field schemas
- `datatypes`: All HL7 data type schemas (e.g., `AD`, `CE`, `CX`)
- `hl7v2Metadata`: Registry metadata for the version

## Supported HL7v2 Versions

- **2.3.1**: HL7v2.3.1 (1996)
- **2.4**: HL7v2.4 (2000)
- **2.5**: HL7v2.5 (2003)
- **2.5.1**: HL7v2.5.1 (2007)
- **2.6**: HL7v2.6 (2007)
- **2.7**: HL7v2.7 (2011)
- **2.7.1**: HL7v2.7.1 (2013)
- **2.8**: HL7v2.8 (2015)
- **2.8.1**: HL7v2.8.1 (2016)
- **2.8.2**: HL7v2.8.2 (2018)
- **2.9**: HL7v2.9 (2019)

## Zod v4 Benefits

This package is built with [Zod v4](https://zod.dev/v4), which provides:

- **14x faster string parsing**
- **7x faster array parsing**
- **6.5x faster object parsing**
- **100x reduction in TypeScript instantiations**
- **2x reduction in bundle size**
- **Improved error customization**
- **Better discriminated union support**

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Zod v4 (^3.25.0)

### Setup

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Fix formatting issues
pnpm format:fix

# Run all checks (lint + format)
pnpm check

# Fix all issues
pnpm check:fix

# Run tests
pnpm test
```

### Project Structure

```
src/
├── 2.3.1/          # HL7v2.3.1 schemas
├── 2.4/            # HL7v2.4 schemas
├── 2.5/            # HL7v2.5 schemas
├── 2.5.1/          # HL7v2.5.1 schemas
├── 2.6/            # HL7v2.6 schemas
├── 2.7/            # HL7v2.7 schemas
├── 2.7.1/          # HL7v2.7.1 schemas
├── 2.8/            # HL7v2.8 schemas
├── 2.8.1/          # HL7v2.8.1 schemas
├── 2.8.2/          # HL7v2.8.2 schemas
├── 2.9/            # HL7v2.9 schemas
└── index.ts        # Main entry point
```

Each version directory contains:
- `messages/`: Message type schemas
- `segments/`: Segment schemas
- `fields/`: Field schemas
- `datatypes/`: Data type schemas
- `registry.ts`: HL7 metadata
- `index.ts`: Version-specific exports

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run the build and test suite
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/rethinkhealth/hl7v2-zod/issues)
- **Documentation**: [GitHub Wiki](https://github.com/rethinkhealth/hl7v2-zod/wiki)

## Related Projects

- [Zod v4](https://zod.dev/v4) - TypeScript-first schema validation with improved performance
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [HL7 FHIR](https://www.hl7.org/fhir/) - Modern healthcare data standard 