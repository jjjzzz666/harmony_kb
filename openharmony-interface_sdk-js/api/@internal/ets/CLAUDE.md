# ETS Global Public APIs

## Overview

This directory contains TypeScript declaration files (`.d.ts`) for global public ETS (Extended TypeScript) APIs used in ArkUI development framework. These APIs provide core functionality for application lifecycle management, global utilities, and system capabilities.

## Directory Structure

```
api/@internal/ets/
├── global.d.ts      # Global APIs (console, timers, inspector, etc.)
├── lifecycle.d.ts   # Lifecycle interfaces for Form, App, Service, Data
├── index.d.ts       # Main entry point
└── CLAUDE.md        # This file
```

## API Kits

### ArkUI Kit
- **Console APIs**: Logging and debugging utilities (`console.debug`, `console.log`, `console.error`, etc.)
- **Timer APIs**: `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`
- **Inspector APIs**: `getInspectorByKey`, `getInspectorTree`, `sendEventByKey`
- **Event APIs**: `sendTouchEvent`, `sendKeyEvent`, `sendMouseEvent`
- **System Capability**: `canIUse` - Check if a system capability is available

### Ability Kit (via lifecycle.d.ts)
- **LifecycleApp**: Application lifecycle callbacks for FA (Feature Ability) Model
- **LifecycleForm**: Form component lifecycle callbacks
- **LifecycleService**: Service ability lifecycle callbacks
- **LifecycleData**: Data ability lifecycle callbacks

## API Version Tags

The APIs use version tags to indicate availability:
- `@since N`: Available since API version N
- `@since N dynamic`: Available since API version N, dynamic phase only
- `@since N static`: Available since API version N, static phase only
- `@crossplatform`: Available across different platforms
- `@form`: Available in form context
- `@atomicservice`: Available in atomic service context
- `@systemapi`: System API (restricted use)
- `@FAModelOnly`: FA (Feature Ability) Model only
- `@stagemodelonly`: Stage Model only

## Common Use Cases

### Logging and Debugging
```typescript
// Console output
console.debug("Debug message");
console.log("Log message");
console.info("Info message");
console.warn("Warning message");
console.error("Error message");

// Advanced console features
console.assert(condition, "Assertion failed");
console.count("label");
console.dir(object);
console.trace();
```

### Timer Operations
```typescript
// One-time execution
const timerId = setTimeout(() => {
  console.log("Delayed execution");
}, 1000);
clearTimeout(timerId);

// Repeated execution
const intervalId = setInterval(() => {
  console.log("Repeated execution");
}, 1000);
clearInterval(intervalId);
```

### Component Inspection (Testing)
```typescript
// Get component attributes by ID
const attributes = getInspectorByKey("componentId");

// Get entire component tree
const tree = getInspectorTree();

// Send events to components
sendEventByKey("buttonId", 10, ""); // Click event
```

### System Capability Check
```typescript
if (canIUse("SystemCapability.ArkUI.ArkUI.Full")) {
  // Use the capability
}
```

## Related Documentation

For detailed API documentation and examples, see the Knowledge Base:
- [ETS Internal API Knowledge Base (中文)](../../../docs/api/ets/ETS_Internal_API_Knowledge_Base_CN.md)

The knowledge base contains comprehensive documentation including:
- Global APIs (console, timers, inspector, events, system capabilities)
- Lifecycle interfaces (Form, App, Service, Data)
- API version and tag explanations
- FA Model vs Stage Model comparison

## Development Guidelines

### When modifying these files:
1. Follow existing API declaration patterns
2. Include proper JSDoc comments with `@syscap`, `@since`, and other tags
3. Maintain backward compatibility - use new versions for breaking changes
4. Add appropriate version tags (`@since N`, `@crossplatform`, etc.)

### API Declaration Pattern
```typescript
/**
 * Brief description of the API.
 *
 * @param { Type } paramName - Description of parameter.
 * @returns { Type } Description of return value.
 * @throws { BusinessError } 401 - Error condition.
 * @syscap SystemCapability.Xxx.Yyy
 * @crossplatform
 * @since 10
 */
export declare function apiName(paramName: Type): Type;
```

## See Also

- [ArkUI Component APIs](../component/ets/README.md)
- [OpenHarmony API Documentation](https://docs.openharmony.cn/)
