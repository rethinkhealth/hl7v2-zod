# @rethinkhealth/hl7v2-zod

Type-safe HL7v2 message parsing and validation using Zod v4 schemas.

## Features

- **Type-safe validation**: Full TypeScript support with Zod v4 schemas for all HL7v2 message types
- **Multiple HL7 versions**: Support for HL7v2 versions, e.g. 2.6 and 2.8
- **Comprehensive coverage**: Includes all message types, segments, fields, and data types for each version
- **Minimum dependencies**: Only requires Zod v4 as a peer dependency
- **Tree-shakable**: Import only the schemas you need with subpath imports
- **Zod v4 optimized**: Built with the latest Zod v4 features for better performance and TypeScript efficiency
- **Optimal performance**: Use subpath imports to include only the HL7 version you need

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
// Import directly from the specific HL7 version you need
import { ADT_A01 } from '@rethinkhealth/hl7v2-zod/2.8'

// Parse and validate an ADT_A01 message
const hl7Message = {
  MSH: {
    "1": "|",
    "2": "",
  },
  // ...
}

try {
  const result = ADT_A01.parse(hl7Message)
  console.log('Valid HL7 message:', result)
} catch (error) {
  console.error('Invalid HL7 message:', error)
}
```

## Usage

Import directly from the specific HL7 version for optimal performance:

```typescript
// HL7v2.6
import { ADT_A01, MSH, PID } from '@rethinkhealth/hl7v2-zod/2.6'

// HL7v2.8
import { ADT_A01, MSH, PID } from '@rethinkhealth/hl7v2-zod/2.8'

// Access segments and data types
import { MSH, PID, PV1 } from '@rethinkhealth/hl7v2-zod/2.8'
import { AD, CE, CX } from '@rethinkhealth/hl7v2-zod/2.8/datatypes'
```

### Working with Segments and Fields

```typescript
import { MSH, PID } from '@rethinkhealth/hl7v2-zod/2.8'

// Validate individual segments
const mshData = MSH.parse({
  "1": "|",
  // ... etc
})
```

## API Reference

### Subpath Exports

- `@rethinkhealth/hl7v2-zod/2.6`: All HL7v2.6 schemas
- `@rethinkhealth/hl7v2-zod/2.8`: All HL7v2.8 schemas

### Version Structure

Each version export contains:

- **Message schemas**: All HL7 message type schemas (e.g., `ADT_A01`, `ORU_R01`)
- **Segment schemas**: All HL7 segment schemas (e.g., `MSH`, `PID`, `PV1`)
- **Field schemas**: All HL7 field schemas
- **Data type schemas**: All HL7 data type schemas (e.g., `AD`, `CE`, `CX`)
- **Metadata**: Registry metadata for the version

## Supported HL7v2 Versions

- **2.6**: HL7v2.6 (2007)
- **2.8**: HL7v2.8 (2015)

## Zod v4 Benefits

This package is built with [Zod v4](https://zod.dev/v4), which provides:

- **14x faster string parsing**
- **7x faster array parsing**
- **6.5x faster object parsing**
- **100x reduction in TypeScript instantiations**
- **2x reduction in bundle size**
- **Improved error customization**
- **Better discriminated union support**

To learn more, please check [the official documentation](https://zod.dev/v4).

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
├── 2.6/            # HL7v2.6 schemas
├── 2.8/            # HL7v2.8 schemas
└── index.ts        # Main entry point (utility functions)
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
- [HL7 FHIR](https://www.hl7.org/fhir/) - Modern healthcare data standard 