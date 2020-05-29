[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [node](node.md)

# Package: node

# @typed/node

> APIS that only work within Node

## Index

### Namespaces

* [ArgParserResult](node.md#argparserresult)

### Classes

* [MockReadable](../classes/node.mockreadable.md)
* [MockWritable](../classes/node.mockwritable.md)

### Interfaces

* [ArgParser](../interfaces/node.argparser.md)
* [ArgsEnv](../interfaces/node.argsenv.md)
* [ChildProcessStdioOptions](../interfaces/node.childprocessstdiooptions.md)
* [StdioOptions](../interfaces/node.stdiooptions.md)

### Type aliases

* [ArgNameValues](node.md#argnamevalues)
* [ArgParserName](node.md#argparsername)
* [ArgParserNameValue](node.md#argparsernamevalue)
* [ArgParserResultValue](node.md#argparserresultvalue)
* [ArgParserValue](node.md#argparservalue)
* [ArgValues](node.md#argvalues)
* [ChildProcessStdio](node.md#childprocessstdio)
* [NodeCallback](node.md#nodecallback)
* [NodeCallbackFn](node.md#nodecallbackfn)
* [ParseOptions](node.md#parseoptions)
* [Stdio](node.md#stdio)

### Variables

* [EQUAL_SYNTAX](node.md#const-equal_syntax)
* [ESCAPES_REGEX](node.md#const-escapes_regex)
* [arrowDown](node.md#const-arrowdown)
* [arrowLeft](node.md#const-arrowleft)
* [arrowRight](node.md#const-arrowright)
* [arrowUp](node.md#const-arrowup)
* [bgBlack](node.md#const-bgblack)
* [bgBlue](node.md#const-bgblue)
* [bgCyan](node.md#const-bgcyan)
* [bgGreen](node.md#const-bggreen)
* [bgMagenta](node.md#const-bgmagenta)
* [bgRed](node.md#const-bgred)
* [bgWhite](node.md#const-bgwhite)
* [bgYellow](node.md#const-bgyellow)
* [black](node.md#const-black)
* [blue](node.md#const-blue)
* [bold](node.md#const-bold)
* [bullet](node.md#const-bullet)
* [checkboxCircleOff](node.md#const-checkboxcircleoff)
* [checkboxCircleOn](node.md#const-checkboxcircleon)
* [checkboxOff](node.md#const-checkboxoff)
* [checkboxOn](node.md#const-checkboxon)
* [circle](node.md#const-circle)
* [circleCircle](node.md#const-circlecircle)
* [circleCross](node.md#const-circlecross)
* [circleDotted](node.md#const-circledotted)
* [circleDouble](node.md#const-circledouble)
* [circleFilled](node.md#const-circlefilled)
* [circlePipe](node.md#const-circlepipe)
* [circleQuestionMark](node.md#const-circlequestionmark)
* [cross](node.md#const-cross)
* [cyan](node.md#const-cyan)
* [dim](node.md#const-dim)
* [dot](node.md#const-dot)
* [ellipsis](node.md#const-ellipsis)
* [fiveEighths](node.md#const-fiveeighths)
* [fiveSixths](node.md#const-fivesixths)
* [fourFifths](node.md#const-fourfifths)
* [getBoolEnvVar](node.md#const-getboolenvvar)
* [gray](node.md#const-gray)
* [green](node.md#const-green)
* [hamburger](node.md#const-hamburger)
* [heart](node.md#const-heart)
* [helpParser](node.md#const-helpparser)
* [hidden](node.md#const-hidden)
* [info](node.md#const-info)
* [inverse](node.md#const-inverse)
* [isArgumentFlag](node.md#const-isargumentflag)
* [isBoolean](node.md#const-isboolean)
* [isTrue](node.md#const-istrue)
* [italic](node.md#const-italic)
* [line](node.md#const-line)
* [magenta](node.md#const-magenta)
* [mustache](node.md#const-mustache)
* [oneEighth](node.md#const-oneeighth)
* [oneFifth](node.md#const-onefifth)
* [oneHalf](node.md#const-onehalf)
* [oneNinth](node.md#const-oneninth)
* [oneQuarter](node.md#const-onequarter)
* [oneSeventh](node.md#const-oneseventh)
* [oneSixth](node.md#const-onesixth)
* [oneTenth](node.md#const-onetenth)
* [oneThird](node.md#const-onethird)
* [play](node.md#const-play)
* [pointer](node.md#const-pointer)
* [pointerSmall](node.md#const-pointersmall)
* [questionMarkPrefix](node.md#const-questionmarkprefix)
* [radioOff](node.md#const-radiooff)
* [radioOn](node.md#const-radioon)
* [red](node.md#const-red)
* [reset](node.md#const-reset)
* [sevenEighths](node.md#const-seveneighths)
* [smiley](node.md#const-smiley)
* [square](node.md#const-square)
* [squareSmall](node.md#const-squaresmall)
* [squareSmallFilled](node.md#const-squaresmallfilled)
* [star](node.md#const-star)
* [strikethrough](node.md#const-strikethrough)
* [threeEighths](node.md#const-threeeighths)
* [threeFifths](node.md#const-threefifths)
* [threeQuarters](node.md#const-threequarters)
* [tick](node.md#const-tick)
* [twoFifths](node.md#const-twofifths)
* [twoThirds](node.md#const-twothirds)
* [underline](node.md#const-underline)
* [warning](node.md#const-warning)
* [white](node.md#const-white)
* [yellow](node.md#const-yellow)

### Functions

* [createChildProcessStdio](node.md#createchildprocessstdio)
* [createParser](node.md#createparser)
* [createStdio](node.md#createstdio)
* [effectify](node.md#effectify)
* [end](node.md#const-end)
* [findNamedArg](node.md#findnamedarg)
* [findRemainingArgs](node.md#findremainingargs)
* [futurify](node.md#futurify)
* [getArgs](node.md#getargs)
* [getEnvVar](node.md#getenvvar)
* [getPositionalArgumentValue](node.md#getpositionalargumentvalue)
* [getRequiredEnvVar](node.md#getrequiredenvvar)
* [isAliasFlag](node.md#isaliasflag)
* [isEqualSyntax](node.md#isequalsyntax)
* [isNamedFlag](node.md#isnamedflag)
* [modifier](node.md#const-modifier)
* [parseArgs](node.md#parseargs)
* [parseBooleanArg](node.md#parsebooleanarg)
* [parseBooleanArgByPosition](node.md#parsebooleanargbyposition)
* [parseNumberArg](node.md#parsenumberarg)
* [parseNumberArgByPosition](node.md#parsenumberargbyposition)
* [parseStringArg](node.md#parsestringarg)
* [parseStringArgByPosition](node.md#parsestringargbyposition)
* [readFile](node.md#readfile)
* [runWithArgs](node.md#runwithargs)
* [showHelp](node.md#showhelp)
* [start](node.md#const-start)
* [strip](node.md#strip)
* [writeFile](node.md#writefile)

### Object literals

* [defaults](node.md#const-defaults)

## Namespaces

###  ArgParserResult

• **ArgParserResult**: *keyof [keyof number[], Maybe<object>]*

*Defined in [packages/node/source/arg-parse/types.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L19)*

*Defined in [packages/node/source/arg-parse/types.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L26)*

### `Const` none

• **none**: *[ArgParserResult](node.md#argparserresult)‹never, never›* = [[], Nothing]

*Defined in [packages/node/source/arg-parse/types.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L27)*

## Type aliases

###  ArgNameValues

Ƭ **ArgNameValues**: *Partial‹Exclude‹object[keyof A], number | Function››*

*Defined in [packages/node/source/arg-parse/parseArgs.ts:38](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseArgs.ts#L38)*

___

###  ArgParserName

Ƭ **ArgParserName**: *A extends ArgParser<infer Name, any> ? Name : never*

*Defined in [packages/node/source/arg-parse/types.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L35)*

___

###  ArgParserNameValue

Ƭ **ArgParserNameValue**: *A extends ArgParser<infer Name, infer Value> ? object : never*

*Defined in [packages/node/source/arg-parse/types.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L30)*

___

###  ArgParserResultValue

Ƭ **ArgParserResultValue**: *A extends ArgParserResult<any, infer R> ? R : never*

*Defined in [packages/node/source/arg-parse/types.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L24)*

___

###  ArgParserValue

Ƭ **ArgParserValue**: *A extends ArgParser<any, infer Value> ? Value : never*

*Defined in [packages/node/source/arg-parse/types.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L34)*

___

###  ArgValues

Ƭ **ArgValues**: *[OrToAnd](lambda.md#ortoand)‹[ArgNameValues](node.md#argnamevalues)‹A›› & object*

*Defined in [packages/node/source/arg-parse/parseArgs.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseArgs.ts#L33)*

___

###  ChildProcessStdio

Ƭ **ChildProcessStdio**: *object*

*Defined in [packages/node/source/stdio/createChildProcessStdio.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/createChildProcessStdio.ts#L11)*

#### Type declaration:

* **stderr**: *[MockReadable](../classes/node.mockreadable.md)*

* **stdin**: *[MockWritable](../classes/node.mockwritable.md)*

* **stdout**: *[MockReadable](../classes/node.mockreadable.md)*

___

###  NodeCallback

Ƭ **NodeCallback**: *function*

*Defined in [packages/node/source/futurify.ts:62](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L62)*

#### Type declaration:

▸ (`error`: [Error](../classes/effects.killerror.md#static-error) | null | undefined | void, `value?`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../classes/effects.killerror.md#static-error) &#124; null &#124; undefined &#124; void |
`value?` | A |

___

###  NodeCallbackFn

Ƭ **NodeCallbackFn**: *function*

*Defined in [packages/node/source/futurify.ts:64](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L64)*

#### Type declaration:

▸ <**A**, **B**, **C**, **D**, **E**, **F**, **G**, **R**>(`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `g`: G, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`g` | G |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**A**, **B**, **C**, **D**, **E**, **F**, **R**>(`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**A**, **B**, **C**, **D**, **E**, **R**>(`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**A**, **B**, **C**, **D**, **R**>(`a`: A, `b`: B, `c`: C, `d`: D, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**A**, **B**, **C**, **R**>(`a`: A, `b`: B, `c`: C, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**A**, **B**, **R**>(`a`: A, `b`: B, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **B**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**A**, **R**>(`a`: A, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

▸ <**R**>(`cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

___

###  ParseOptions

Ƭ **ParseOptions**: *object*

*Defined in [packages/node/source/arg-parse/types.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L14)*

#### Type declaration:

* **aliases**? : *keyof string[]*

* **help**? : *undefined | string*

___

###  Stdio

Ƭ **Stdio**: *object*

*Defined in [packages/node/source/stdio/createStdio.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/createStdio.ts#L11)*

#### Type declaration:

* **stderr**: *[MockWritable](../classes/node.mockwritable.md)*

* **stdin**: *[MockReadable](../classes/node.mockreadable.md)*

* **stdout**: *[MockWritable](../classes/node.mockwritable.md)*

## Variables

### `Const` EQUAL_SYNTAX

• **EQUAL_SYNTAX**: *"="* = "="

*Defined in [packages/node/source/arg-parse/getPositionalArgumentValue.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/getPositionalArgumentValue.ts#L3)*

___

### `Const` ESCAPES_REGEX

• **ESCAPES_REGEX**: *RegExp‹›* = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

*Defined in [packages/node/source/colors/strip.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/strip.ts#L1)*

___

### `Const` arrowDown

• **arrowDown**: *"↓"* = "↓"

*Defined in [packages/node/source/figures/index.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L29)*

___

### `Const` arrowLeft

• **arrowLeft**: *"←"* = "←"

*Defined in [packages/node/source/figures/index.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L30)*

___

### `Const` arrowRight

• **arrowRight**: *"→"* = "→"

*Defined in [packages/node/source/figures/index.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L31)*

___

### `Const` arrowUp

• **arrowUp**: *"↑"* = "↑"

*Defined in [packages/node/source/figures/index.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L28)*

___

### `Const` bgBlack

• **bgBlack**: *(Anonymous function)* = modifier([40, 49])

*Defined in [packages/node/source/colors/background.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L4)*

___

### `Const` bgBlue

• **bgBlue**: *(Anonymous function)* = modifier([44, 49])

*Defined in [packages/node/source/colors/background.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L8)*

___

### `Const` bgCyan

• **bgCyan**: *(Anonymous function)* = modifier([46, 49])

*Defined in [packages/node/source/colors/background.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L10)*

___

### `Const` bgGreen

• **bgGreen**: *(Anonymous function)* = modifier([42, 49])

*Defined in [packages/node/source/colors/background.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L6)*

___

### `Const` bgMagenta

• **bgMagenta**: *(Anonymous function)* = modifier([45, 49])

*Defined in [packages/node/source/colors/background.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L9)*

___

### `Const` bgRed

• **bgRed**: *(Anonymous function)* = modifier([41, 49])

*Defined in [packages/node/source/colors/background.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L5)*

___

### `Const` bgWhite

• **bgWhite**: *(Anonymous function)* = modifier([47, 49])

*Defined in [packages/node/source/colors/background.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L11)*

___

### `Const` bgYellow

• **bgYellow**: *(Anonymous function)* = modifier([43, 49])

*Defined in [packages/node/source/colors/background.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/background.ts#L7)*

___

### `Const` black

• **black**: *(Anonymous function)* = modifier([30, 39])

*Defined in [packages/node/source/colors/foreground.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L4)*

___

### `Const` blue

• **blue**: *(Anonymous function)* = modifier([34, 39])

*Defined in [packages/node/source/colors/foreground.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L8)*

___

### `Const` bold

• **bold**: *(Anonymous function)* = modifier([1, 22])

*Defined in [packages/node/source/colors/others.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L5)*

___

### `Const` bullet

• **bullet**: *"●"* = "●"

*Defined in [packages/node/source/figures/index.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L16)*

___

### `Const` checkboxCircleOff

• **checkboxCircleOff**: *"Ⓘ"* = "Ⓘ"

*Defined in [packages/node/source/figures/index.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L37)*

___

### `Const` checkboxCircleOn

• **checkboxCircleOn**: *"ⓧ"* = "ⓧ"

*Defined in [packages/node/source/figures/index.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L36)*

___

### `Const` checkboxOff

• **checkboxOff**: *"☐"* = "☐"

*Defined in [packages/node/source/figures/index.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L35)*

___

### `Const` checkboxOn

• **checkboxOn**: *"☒"* = "☒"

*Defined in [packages/node/source/figures/index.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L34)*

___

### `Const` circle

• **circle**: *"◯"* = "◯"

*Defined in [packages/node/source/figures/index.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L8)*

___

### `Const` circleCircle

• **circleCircle**: *"ⓞ"* = "ⓞ"

*Defined in [packages/node/source/figures/index.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L12)*

___

### `Const` circleCross

• **circleCross**: *"ⓧ"* = "ⓧ"

*Defined in [packages/node/source/figures/index.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L13)*

___

### `Const` circleDotted

• **circleDotted**: *"◌"* = "◌"

*Defined in [packages/node/source/figures/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L10)*

___

### `Const` circleDouble

• **circleDouble**: *"◎"* = "◎"

*Defined in [packages/node/source/figures/index.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L11)*

___

### `Const` circleFilled

• **circleFilled**: *"◉"* = "◉"

*Defined in [packages/node/source/figures/index.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L9)*

___

### `Const` circlePipe

• **circlePipe**: *"Ⓘ"* = "Ⓘ"

*Defined in [packages/node/source/figures/index.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L14)*

___

### `Const` circleQuestionMark

• **circleQuestionMark**: *"?⃝"* = "?⃝"

*Defined in [packages/node/source/figures/index.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L15)*

___

### `Const` cross

• **cross**: *"✖"* = "✖"

*Defined in [packages/node/source/figures/index.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L2)*

___

### `Const` cyan

• **cyan**: *(Anonymous function)* = modifier([36, 39])

*Defined in [packages/node/source/colors/foreground.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L10)*

___

### `Const` dim

• **dim**: *(Anonymous function)* = modifier([2, 22])

*Defined in [packages/node/source/colors/others.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L6)*

___

### `Const` dot

• **dot**: *"․"* = "․"

*Defined in [packages/node/source/figures/index.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L17)*

___

### `Const` ellipsis

• **ellipsis**: *"…"* = "…"

*Defined in [packages/node/source/figures/index.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L19)*

___

### `Const` fiveEighths

• **fiveEighths**: *"⅝"* = "⅝"

*Defined in [packages/node/source/figures/index.ts:55](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L55)*

___

### `Const` fiveSixths

• **fiveSixths**: *"⅚"* = "⅚"

*Defined in [packages/node/source/figures/index.ts:54](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L54)*

___

### `Const` fourFifths

• **fourFifths**: *"⅘"* = "⅘"

*Defined in [packages/node/source/figures/index.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L53)*

___

### `Const` getBoolEnvVar

• **getBoolEnvVar**: *[Arity1](lambda.md#arity1)‹string, boolean›* = pipe(
  getEnvVar,
  isBoolean,
  withDefault<boolean>(false),
)

*Defined in [packages/node/source/env-vars/getBoolEnvVar.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/env-vars/getBoolEnvVar.ts#L9)*

___

### `Const` gray

• **gray**: *(Anonymous function)* = modifier([37, 39])

*Defined in [packages/node/source/colors/foreground.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L11)*

___

### `Const` green

• **green**: *(Anonymous function)* = modifier([32, 39])

*Defined in [packages/node/source/colors/foreground.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L6)*

___

### `Const` hamburger

• **hamburger**: *"☰"* = "☰"

*Defined in [packages/node/source/figures/index.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L24)*

___

### `Const` heart

• **heart**: *"♥"* = "♥"

*Defined in [packages/node/source/figures/index.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L27)*

___

### `Const` helpParser

• **helpParser**: *[ArgParser](../interfaces/node.argparser.md)‹"help", boolean›* = parseBooleanArg('help', { aliases: ['h'] })

*Defined in [packages/node/source/arg-parse/parseArgs.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseArgs.ts#L8)*

___

### `Const` hidden

• **hidden**: *(Anonymous function)* = modifier([8, 28])

*Defined in [packages/node/source/colors/others.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L10)*

___

### `Const` info

• **info**: *"ℹ"* = "ℹ"

*Defined in [packages/node/source/figures/index.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L22)*

___

### `Const` inverse

• **inverse**: *(Anonymous function)* = modifier([7, 27])

*Defined in [packages/node/source/colors/others.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L9)*

___

### `Const` isArgumentFlag

• **isArgumentFlag**: *function* = or(isNamedFlag, isAliasFlag)

*Defined in [packages/node/source/arg-parse/isArgumentFlag.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/isArgumentFlag.ts#L3)*

#### Type declaration:

▸ (`arg`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string |

___

### `Const` isBoolean

• **isBoolean**: *function* = map(pipe(toLowerCase, trim, equals('true')))

*Defined in [packages/node/source/env-vars/getBoolEnvVar.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/env-vars/getBoolEnvVar.ts#L7)*

#### Type declaration:

▸ (`maybe`: [Maybe](io.md#const-maybe)‹A_1›): *[Maybe](io.md#const-maybe)‹B_1›*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](io.md#const-maybe)‹A_1› |

___

### `Const` isTrue

• **isTrue**: *function* = equals('true')

*Defined in [packages/node/source/arg-parse/parseBooleanArg.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseBooleanArg.ts#L9)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

### `Const` italic

• **italic**: *(Anonymous function)* = modifier([3, 23])

*Defined in [packages/node/source/colors/others.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L7)*

___

### `Const` line

• **line**: *"─"* = "─"

*Defined in [packages/node/source/figures/index.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L18)*

___

### `Const` magenta

• **magenta**: *(Anonymous function)* = modifier([35, 39])

*Defined in [packages/node/source/colors/foreground.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L9)*

___

### `Const` mustache

• **mustache**: *"෴"* = "෴"

*Defined in [packages/node/source/figures/index.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L26)*

___

### `Const` oneEighth

• **oneEighth**: *"⅛"* = "⅛"

*Defined in [packages/node/source/figures/index.ts:45](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L45)*

___

### `Const` oneFifth

• **oneFifth**: *"⅕"* = "⅕"

*Defined in [packages/node/source/figures/index.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L42)*

___

### `Const` oneHalf

• **oneHalf**: *"½"* = "½"

*Defined in [packages/node/source/figures/index.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L39)*

___

### `Const` oneNinth

• **oneNinth**: *"⅑"* = "⅑"

*Defined in [packages/node/source/figures/index.ts:46](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L46)*

___

### `Const` oneQuarter

• **oneQuarter**: *"¼"* = "¼"

*Defined in [packages/node/source/figures/index.ts:41](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L41)*

___

### `Const` oneSeventh

• **oneSeventh**: *"⅐"* = "⅐"

*Defined in [packages/node/source/figures/index.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L44)*

___

### `Const` oneSixth

• **oneSixth**: *"⅙"* = "⅙"

*Defined in [packages/node/source/figures/index.ts:43](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L43)*

___

### `Const` oneTenth

• **oneTenth**: *"⅒"* = "⅒"

*Defined in [packages/node/source/figures/index.ts:47](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L47)*

___

### `Const` oneThird

• **oneThird**: *"⅓"* = "⅓"

*Defined in [packages/node/source/figures/index.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L40)*

___

### `Const` play

• **play**: *"▶"* = "▶"

*Defined in [packages/node/source/figures/index.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L7)*

___

### `Const` pointer

• **pointer**: *"❯"* = "❯"

*Defined in [packages/node/source/figures/index.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L20)*

___

### `Const` pointerSmall

• **pointerSmall**: *"›"* = "›"

*Defined in [packages/node/source/figures/index.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L21)*

___

### `Const` questionMarkPrefix

• **questionMarkPrefix**: *"?⃝"* = "?⃝"

*Defined in [packages/node/source/figures/index.ts:38](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L38)*

___

### `Const` radioOff

• **radioOff**: *"◯"* = "◯"

*Defined in [packages/node/source/figures/index.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L33)*

___

### `Const` radioOn

• **radioOn**: *"◉"* = "◉"

*Defined in [packages/node/source/figures/index.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L32)*

___

### `Const` red

• **red**: *(Anonymous function)* = modifier([31, 39])

*Defined in [packages/node/source/colors/foreground.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L5)*

___

### `Const` reset

• **reset**: *(Anonymous function)* = modifier([0, 0])

*Defined in [packages/node/source/colors/others.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L4)*

___

### `Const` sevenEighths

• **sevenEighths**: *"⅞"* = "⅞"

*Defined in [packages/node/source/figures/index.ts:56](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L56)*

___

### `Const` smiley

• **smiley**: *"㋡"* = "㋡"

*Defined in [packages/node/source/figures/index.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L25)*

___

### `Const` square

• **square**: *"▇"* = "▇"

*Defined in [packages/node/source/figures/index.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L4)*

___

### `Const` squareSmall

• **squareSmall**: *"◻"* = "◻"

*Defined in [packages/node/source/figures/index.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L5)*

___

### `Const` squareSmallFilled

• **squareSmallFilled**: *"◼"* = "◼"

*Defined in [packages/node/source/figures/index.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L6)*

___

### `Const` star

• **star**: *"★"* = "★"

*Defined in [packages/node/source/figures/index.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L3)*

___

### `Const` strikethrough

• **strikethrough**: *(Anonymous function)* = modifier([9, 29])

*Defined in [packages/node/source/colors/others.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L11)*

___

### `Const` threeEighths

• **threeEighths**: *"⅜"* = "⅜"

*Defined in [packages/node/source/figures/index.ts:52](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L52)*

___

### `Const` threeFifths

• **threeFifths**: *"⅗"* = "⅗"

*Defined in [packages/node/source/figures/index.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L51)*

___

### `Const` threeQuarters

• **threeQuarters**: *"¾"* = "¾"

*Defined in [packages/node/source/figures/index.ts:50](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L50)*

___

### `Const` tick

• **tick**: *"✔"* = "✔"

*Defined in [packages/node/source/figures/index.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L1)*

___

### `Const` twoFifths

• **twoFifths**: *"⅖"* = "⅖"

*Defined in [packages/node/source/figures/index.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L49)*

___

### `Const` twoThirds

• **twoThirds**: *"⅔"* = "⅔"

*Defined in [packages/node/source/figures/index.ts:48](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L48)*

___

### `Const` underline

• **underline**: *(Anonymous function)* = modifier([4, 24])

*Defined in [packages/node/source/colors/others.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/others.ts#L8)*

___

### `Const` warning

• **warning**: *"⚠"* = "⚠"

*Defined in [packages/node/source/figures/index.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/figures/index.ts#L23)*

___

### `Const` white

• **white**: *(Anonymous function)* = modifier([90, 39])

*Defined in [packages/node/source/colors/foreground.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L12)*

___

### `Const` yellow

• **yellow**: *(Anonymous function)* = modifier([33, 39])

*Defined in [packages/node/source/colors/foreground.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/foreground.ts#L7)*

## Functions

###  createChildProcessStdio

▸ **createChildProcessStdio**(`options`: [ChildProcessStdioOptions](../interfaces/node.childprocessstdiooptions.md)): *[ChildProcessStdio](node.md#childprocessstdio)*

*Defined in [packages/node/source/stdio/createChildProcessStdio.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/createChildProcessStdio.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ChildProcessStdioOptions](../interfaces/node.childprocessstdiooptions.md) | {} |

**Returns:** *[ChildProcessStdio](node.md#childprocessstdio)*

___

###  createParser

▸ **createParser**<**A**, **F**>(`name`: A, `options`: [ParseOptions](node.md#parseoptions), `parser`: F): *[ArgParser](../interfaces/node.argparser.md)‹A, [ArgParserResultValue](node.md#argparserresultvalue)‹ReturnType‹F›››*

*Defined in [packages/node/source/arg-parse/createParser.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/createParser.ts#L8)*

**Type parameters:**

▪ **A**: *string*

▪ **F**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`name` | A |
`options` | [ParseOptions](node.md#parseoptions) |
`parser` | F |

**Returns:** *[ArgParser](../interfaces/node.argparser.md)‹A, [ArgParserResultValue](node.md#argparserresultvalue)‹ReturnType‹F›››*

___

###  createStdio

▸ **createStdio**(`options`: [StdioOptions](../interfaces/node.stdiooptions.md)): *[Stdio](node.md#stdio)*

*Defined in [packages/node/source/stdio/createStdio.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/createStdio.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [StdioOptions](../interfaces/node.stdiooptions.md) | {} |

**Returns:** *[Stdio](node.md#stdio)*

___

###  effectify

▸ **effectify**<**R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L6)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

▸ **effectify**<**A**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L10)*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **effectify**<**A**, **B**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L14)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

▸ **effectify**<**A**, **B**, **C**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L18)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |

▸ **effectify**<**A**, **B**, **C**, **D**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L22)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

▸ **effectify**<**A**, **B**, **C**, **D**, **E**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |

▸ **effectify**<**A**, **B**, **C**, **D**, **E**, **F**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L30)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |

▸ **effectify**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/effectify.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/effectify.ts#L34)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `g`: G, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`g` | G |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `g`: G): *Effects‹never, [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), R››*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`g` | G |

___

### `Const` end

▸ **end**(`n`: number): *string*

*Defined in [packages/node/source/colors/escapes.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/escapes.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *string*

___

###  findNamedArg

▸ **findNamedArg**(`name`: string, `aliases`: keyof string[], `args`: keyof string[]): *[Maybe](io.md#const-maybe)‹number›*

*Defined in [packages/node/source/arg-parse/findNamedArg.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/findNamedArg.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`aliases` | keyof string[] |
`args` | keyof string[] |

**Returns:** *[Maybe](io.md#const-maybe)‹number›*

___

###  findRemainingArgs

▸ **findRemainingArgs**(`usedIndexes`: keyof number[]): *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), object›*

*Defined in [packages/node/source/arg-parse/findRemainingArgs.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/findRemainingArgs.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`usedIndexes` | keyof number[] |

**Returns:** *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), object›*

___

###  futurify

▸ **futurify**<**R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L4)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

▸ **futurify**<**A**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L6)*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **futurify**<**A**, **B**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

▸ **futurify**<**A**, **B**, **C**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L14)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |

▸ **futurify**<**A**, **B**, **C**, **D**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L18)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

▸ **futurify**<**A**, **B**, **C**, **D**, **E**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L22)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |

▸ **futurify**<**A**, **B**, **C**, **D**, **E**, **F**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |

▸ **futurify**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **R**>(`fn`: function): *function*

*Defined in [packages/node/source/futurify.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/futurify.ts#L30)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `g`: G, `cb`: [NodeCallback](node.md#nodecallback)‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`g` | G |
`cb` | [NodeCallback](node.md#nodecallback)‹R› |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F, `g`: G): *[Future](future.md#future)‹never, [Error](../classes/effects.killerror.md#static-error), R›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |
`g` | G |

___

###  getArgs

▸ **getArgs**(): *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), keyof string[]›*

*Defined in [packages/node/source/arg-parse/getArgs.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/getArgs.ts#L5)*

**Returns:** *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), keyof string[]›*

___

###  getEnvVar

▸ **getEnvVar**(`key`: string): *[Maybe](io.md#const-maybe)‹string›*

*Defined in [packages/node/source/env-vars/getEnvVar.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/env-vars/getEnvVar.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Maybe](io.md#const-maybe)‹string›*

___

###  getPositionalArgumentValue

▸ **getPositionalArgumentValue**(`index`: number, `args`: keyof string[]): *[Maybe](io.md#const-maybe)‹keyof [number, string]›*

*Defined in [packages/node/source/arg-parse/getPositionalArgumentValue.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/getPositionalArgumentValue.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`args` | keyof string[] |

**Returns:** *[Maybe](io.md#const-maybe)‹keyof [number, string]›*

___

###  getRequiredEnvVar

▸ **getRequiredEnvVar**(`name`: string): *string*

*Defined in [packages/node/source/env-vars/getRequiredEnvVar.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/env-vars/getRequiredEnvVar.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string*

___

###  isAliasFlag

▸ **isAliasFlag**(`arg`: string): *boolean*

*Defined in [packages/node/source/arg-parse/isArgumentFlag.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/isArgumentFlag.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string |

**Returns:** *boolean*

___

###  isEqualSyntax

▸ **isEqualSyntax**(`arg`: string): *boolean*

*Defined in [packages/node/source/arg-parse/getPositionalArgumentValue.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/getPositionalArgumentValue.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string |

**Returns:** *boolean*

___

###  isNamedFlag

▸ **isNamedFlag**(`arg`: string): *boolean*

*Defined in [packages/node/source/arg-parse/isArgumentFlag.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/isArgumentFlag.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string |

**Returns:** *boolean*

___

### `Const` modifier

▸ **modifier**(`modifiers`: keyof [number, number]): *(Anonymous function)*

*Defined in [packages/node/source/colors/escapes.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/escapes.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`modifiers` | keyof [number, number] |

**Returns:** *(Anonymous function)*

___

###  parseArgs

▸ **parseArgs**<**A**>(`parsers`: A): *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), [ArgValues](node.md#argvalues)‹A››*

*Defined in [packages/node/source/arg-parse/parseArgs.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseArgs.ts#L10)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[ArgParser](../interfaces/node.argparser.md)‹any, any››*

**Parameters:**

Name | Type |
------ | ------ |
`parsers` | A |

**Returns:** *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), [ArgValues](node.md#argvalues)‹A››*

___

###  parseBooleanArg

▸ **parseBooleanArg**<**A**>(`name`: A, `options`: [ParseOptions](node.md#parseoptions)): *[ArgParser](../interfaces/node.argparser.md)‹A, boolean›*

*Defined in [packages/node/source/arg-parse/parseBooleanArg.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseBooleanArg.ts#L11)*

**Type parameters:**

▪ **A**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | A | - |
`options` | [ParseOptions](node.md#parseoptions) | {} |

**Returns:** *[ArgParser](../interfaces/node.argparser.md)‹A, boolean›*

___

###  parseBooleanArgByPosition

▸ **parseBooleanArgByPosition**(`index`: number, `args`: keyof string[]): *keyof [number, boolean]*

*Defined in [packages/node/source/arg-parse/parseBooleanArg.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseBooleanArg.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`args` | keyof string[] |

**Returns:** *keyof [number, boolean]*

___

###  parseNumberArg

▸ **parseNumberArg**<**A**>(`name`: A, `options`: [ParseOptions](node.md#parseoptions)): *[ArgParser](../interfaces/node.argparser.md)‹A, number›*

*Defined in [packages/node/source/arg-parse/parseNumberArg.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseNumberArg.ts#L7)*

**Type parameters:**

▪ **A**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | A | - |
`options` | [ParseOptions](node.md#parseoptions) | {} |

**Returns:** *[ArgParser](../interfaces/node.argparser.md)‹A, number›*

___

###  parseNumberArgByPosition

▸ **parseNumberArgByPosition**(`index`: number, `args`: keyof string[]): *keyof [number, Maybe<number>]*

*Defined in [packages/node/source/arg-parse/parseNumberArg.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseNumberArg.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`args` | keyof string[] |

**Returns:** *keyof [number, Maybe<number>]*

___

###  parseStringArg

▸ **parseStringArg**<**A**>(`name`: A, `options`: [ParseOptions](node.md#parseoptions)): *[ArgParser](../interfaces/node.argparser.md)‹A, string›*

*Defined in [packages/node/source/arg-parse/parseStringArg.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseStringArg.ts#L7)*

**Type parameters:**

▪ **A**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | A | - |
`options` | [ParseOptions](node.md#parseoptions) | {} |

**Returns:** *[ArgParser](../interfaces/node.argparser.md)‹A, string›*

___

###  parseStringArgByPosition

▸ **parseStringArgByPosition**(`index`: number, `args`: keyof string[]): *keyof [number, Maybe<string>]*

*Defined in [packages/node/source/arg-parse/parseStringArg.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseStringArg.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`args` | keyof string[] |

**Returns:** *keyof [number, Maybe<string>]*

___

###  readFile

▸ **readFile**(...`args`: [ArgsOf](lambda.md#argsof)‹createReadStream›): *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), Buffer››*

*Defined in [packages/node/source/fs/readFile.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/fs/readFile.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [ArgsOf](lambda.md#argsof)‹createReadStream› |

**Returns:** *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), Buffer››*

___

###  runWithArgs

▸ **runWithArgs**<**E**, **A**>(`effect`: Effects‹E, A›, `args`: keyof string[]): *Effects‹Omit‹E, "args"›, A›*

*Defined in [packages/node/source/arg-parse/parseWithArgs.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/parseWithArgs.ts#L3)*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | Effects‹E, A› |
`args` | keyof string[] |

**Returns:** *Effects‹Omit‹E, "args"›, A›*

___

###  showHelp

▸ **showHelp**<**A**>(`applicationName`: string, `parsers`: A): *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), void›*

*Defined in [packages/node/source/arg-parse/showHelp.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/showHelp.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[ArgParser](../interfaces/node.argparser.md)‹any, any››*

**Parameters:**

Name | Type |
------ | ------ |
`applicationName` | string |
`parsers` | A |

**Returns:** *Effects‹[ArgsEnv](../interfaces/node.argsenv.md), void›*

___

### `Const` start

▸ **start**(`n`: number): *string*

*Defined in [packages/node/source/colors/escapes.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/escapes.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *string*

___

###  strip

▸ **strip**(`str`: string): *string*

*Defined in [packages/node/source/colors/strip.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/colors/strip.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  writeFile

▸ **writeFile**(`filePath`: string, `contents`: string | Buffer): *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), void››*

*Defined in [packages/node/source/fs/writeFile.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/fs/writeFile.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`contents` | string &#124; Buffer |

**Returns:** *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), void››*

## Object literals

### `Const` defaults

### ▪ **defaults**: *object*

*Defined in [packages/node/source/stdio/MockReadable.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L3)*

###  encoding

• **encoding**: *string* = "utf8"

*Defined in [packages/node/source/stdio/MockReadable.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L4)*
