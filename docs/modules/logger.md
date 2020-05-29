[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [logger](logger.md)

# Package: logger

# @typed/logger

> A generic interface for logging data

## Index

### Enumerations

* [LogLevel](../enums/logger.loglevel.md)

### Interfaces

* [Logger](../interfaces/logger.logger-1.md)

### Type aliases

* [CreateConsoleLoggerOptions](logger.md#createconsoleloggeroptions)
* [CreateTestLoggerOptions](logger.md#createtestloggeroptions)
* [Log](logger.md#log)
* [LoggerEnv](logger.md#loggerenv)
* [Logs](logger.md#logs)
* [TestLogger](logger.md#testlogger)

### Functions

* [clear](logger.md#clear)
* [createConsoleLogger](logger.md#createconsolelogger)
* [createTestLogger](logger.md#createtestlogger)
* [debug](logger.md#debug)
* [error](logger.md#error)
* [info](logger.md#info)
* [log](logger.md#log)
* [time](logger.md#time)

## Type aliases

###  CreateConsoleLoggerOptions

Ƭ **CreateConsoleLoggerOptions**: *object*

*Defined in [packages/logger/source/createConsoleLogger.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createConsoleLogger.ts#L5)*

#### Type declaration:

* **clock**: *Clock*

* **logLevel**: *[LogLevel](../enums/logger.loglevel.md)*

___

###  CreateTestLoggerOptions

Ƭ **CreateTestLoggerOptions**: *object*

*Defined in [packages/logger/source/createTestLogger.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createTestLogger.ts#L6)*

#### Type declaration:

* **clock**: *Clock*

* **logLevel**: *[LogLevel](../enums/logger.loglevel.md)*

___

###  Log

Ƭ **Log**: *object | object | object | object | object | object | object*

*Defined in [packages/logger/source/createTestLogger.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createTestLogger.ts#L18)*

___

###  LoggerEnv

Ƭ **LoggerEnv**: *object*

*Defined in [packages/logger/source/types.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/types.ts#L3)*

#### Type declaration:

* **logger**: *[Logger](../interfaces/logger.logger-1.md)*

___

###  Logs

Ƭ **Logs**: *ReadonlyArray‹[Log](logger.md#log)›*

*Defined in [packages/logger/source/createTestLogger.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createTestLogger.ts#L16)*

___

###  TestLogger

Ƭ **TestLogger**: *object*

*Defined in [packages/logger/source/createTestLogger.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createTestLogger.ts#L11)*

#### Type declaration:

* **getLogs**(): *function*

  * (): *[Logs](logger.md#logs)*

* **logger**: *[Logger](../interfaces/logger.logger-1.md)*

## Functions

###  clear

▸ **clear**(): *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

*Defined in [packages/logger/source/clear.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/clear.ts#L4)*

**Returns:** *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

___

###  createConsoleLogger

▸ **createConsoleLogger**(`__namedParameters`: object): *[Logger](../interfaces/logger.logger-1.md)*

*Defined in [packages/logger/source/createConsoleLogger.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createConsoleLogger.ts#L13)*

Create a logger that wraps the console.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`clock` | Clock |
`logLevel` | [LogLevel](../enums/logger.loglevel.md) |

**Returns:** *[Logger](../interfaces/logger.logger-1.md)*

___

###  createTestLogger

▸ **createTestLogger**(`__namedParameters`: object): *[TestLogger](logger.md#testlogger)*

*Defined in [packages/logger/source/createTestLogger.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/createTestLogger.ts#L30)*

Create a logger suitable for testing environments.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`clock` | Clock |
`logLevel` | [LogLevel](../enums/logger.loglevel.md) |

**Returns:** *[TestLogger](logger.md#testlogger)*

___

###  debug

▸ **debug**(`msg`: string): *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

*Defined in [packages/logger/source/debug.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/debug.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

**Returns:** *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

___

###  error

▸ **error**(`msg`: string): *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

*Defined in [packages/logger/source/error.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/error.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

**Returns:** *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

___

###  info

▸ **info**(`msg`: string): *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

*Defined in [packages/logger/source/info.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/info.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

**Returns:** *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

___

###  log

▸ **log**(`msg`: string): *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

*Defined in [packages/logger/source/log.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/log.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

**Returns:** *Effects‹[LoggerEnv](logger.md#loggerenv), void›*

___

###  time

▸ **time**(`label`: string): *Effects‹[LoggerEnv](logger.md#loggerenv), Effects‹unknown, number››*

*Defined in [packages/logger/source/time.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logger/source/time.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |

**Returns:** *Effects‹[LoggerEnv](logger.md#loggerenv), Effects‹unknown, number››*
