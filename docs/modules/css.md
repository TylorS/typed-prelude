[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [css](css.md)

# Package: css

# @typed/css 

Strongly typed atomic CSS using [@typed/hooks](./hooks)

## Index

### Interfaces

* [CssProperties](../interfaces/css.cssproperties.md)
* [NestedCSSSelectors](../interfaces/css.nestedcssselectors.md)
* [NestedCssProperties](../interfaces/css.nestedcssproperties.md)

### Type aliases

* [ClassName](css.md#classname)
* [Css](css.md#css)
* [CssEnv](css.md#cssenv)
* [CssSelector](css.md#cssselector)
* [CssTestEnv](css.md#csstestenv)
* [GenerateClassName](css.md#generateclassname)
* [GetClassNameOptions](css.md#getclassnameoptions)
* [GetClassNames](css.md#getclassnames)
* [GetCss](css.md#getcss)
* [GetCssSelector](css.md#getcssselector)
* [MediaQuery](css.md#mediaquery)
* [Rule](css.md#rule)
* [Rules](css.md#rules)
* [VirtualTimerEnv](css.md#virtualtimerenv)

### Variables

* [AND_REGEX](css.md#const-and_regex)
* [CLASS_NAME_ESCAPE_REGEX](css.md#const-class_name_escape_regex)
* [CLASS_NAME_ESCAPE_REPLACEMENT](css.md#const-class_name_escape_replacement)
* [CLASS_NAME_SEPARATOR](css.md#const-class_name_separator)
* [DEFAULT_CLASS_NAME_LENGTH](css.md#const-default_class_name_length)
* [DEFAULT_CLASS_NAME_PREFIX](css.md#const-default_class_name_prefix)
* [HYPHENATE_REGEX](css.md#const-hyphenate_regex)
* [HYPHENATE_REPLACEMENT](css.md#const-hyphenate_replacement)
* [classNamePrefix](css.md#const-classnameprefix)
* [classNameSeparator](css.md#const-classnameseparator)

### Functions

* [classNames](css.md#const-classnames)
* [convertToHex](css.md#converttohex)
* [createCssEnv](css.md#createcssenv)
* [escape](css.md#escape)
* [generateClassName](css.md#generateclassname)
* [generatePropertyClassNames](css.md#generatepropertyclassnames)
* [generateRule](css.md#generaterule)
* [getClassName](css.md#getclassname)
* [getCss](css.md#const-getcss)
* [getCssSelector](css.md#const-getcssselector)
* [getPropertiesString](css.md#getpropertiesstring)
* [hyphenate](css.md#const-hyphenate)
* [isMediaQuery](css.md#const-ismediaquery)
* [it](css.md#it)
* [media](css.md#const-media)
* [mergeObjects](css.md#mergeobjects)
* [notAnd](css.md#const-notand)
* [sortRules](css.md#const-sortrules)
* [toArray](css.md#toarray)
* [toPx](css.md#const-topx)
* [toPx](css.md#const-topx)
* [toSelector](css.md#toselector)
* [useClassName](css.md#const-useclassname)

## Type aliases

###  ClassName

Ƭ **ClassName**: *[NewType](new_type.md#newtype)‹string, "ClassName"›*

*Defined in [packages/css/source/model/Css.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L13)*

___

###  Css

Ƭ **Css**: *[NewType](new_type.md#newtype)‹string, "Css"›*

*Defined in [packages/css/source/model/Css.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L10)*

___

###  CssEnv

Ƭ **CssEnv**: *object*

*Defined in [packages/css/source/infrastructure/CssEnv.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/CssEnv.ts#L3)*

#### Type declaration:

* **classNameLength**? : *undefined | number*

* **classNamePrefix**? : *undefined | string*

* **rules**: *[Rules](css.md#rules)*

* **styleSheet**(): *object*

  * **textContent**: *string | null*

___

###  CssSelector

Ƭ **CssSelector**: *[NewType](new_type.md#newtype)‹string, "CssSelector"›*

*Defined in [packages/css/source/model/Css.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L16)*

___

###  CssTestEnv

Ƭ **CssTestEnv**: *[VirtualTimerEnv](css.md#virtualtimerenv) & UuidEnv & [CssEnv](css.md#cssenv) & HooksManagerEnv & HookEnv & CryptoEnv & CryptoFailure & [LoggerEnv](logger.md#loggerenv)*

*Defined in [packages/css/source/infrastructure/test-helpers.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/test-helpers.ts#L12)*

___

###  GenerateClassName

Ƭ **GenerateClassName**: *function*

*Defined in [packages/css/source/model/Css.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L21)*

Given a set of class names should output a set of class names to apply

#### Type declaration:

▸ (...`properties`: ReadonlyArray‹[NestedCssProperties](../interfaces/css.nestedcssproperties.md) | null | undefined | false›): *Effects‹E, [ClassName](css.md#classname)›*

**Parameters:**

Name | Type |
------ | ------ |
`...properties` | ReadonlyArray‹[NestedCssProperties](../interfaces/css.nestedcssproperties.md) &#124; null &#124; undefined &#124; false› |

___

###  GetClassNameOptions

Ƭ **GetClassNameOptions**: *object*

*Defined in [packages/css/source/infrastructure/useClassName.ts:115](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L115)*

#### Type declaration:

* **classNameLength**: *number*

* **classNamePrefix**: *string*

* **media**: *string*

* **nestedSelector**: *string*

* **props**: *string*

* **ruleKey**: *string*

* **rules**: *[Map](../interfaces/objects.mutablemap.md#map)‹string, keyof [ClassName, Css]›*

___

###  GetClassNames

Ƭ **GetClassNames**: *function*

*Defined in [packages/css/source/model/Css.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L28)*

Given a list of class names or other common patterns like "foo && ClassName".

#### Type declaration:

▸ (...`classNames`: ReadonlyArray‹string | [ClassName](css.md#classname) | null | undefined | false›): *[ClassName](css.md#classname)*

**Parameters:**

Name | Type |
------ | ------ |
`...classNames` | ReadonlyArray‹string &#124; [ClassName](css.md#classname) &#124; null &#124; undefined &#124; false› |

___

###  GetCss

Ƭ **GetCss**: *function*

*Defined in [packages/css/source/model/Css.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L32)*

#### Type declaration:

▸ (`rules`: [Rules](css.md#rules)): *[Css](css.md#css)*

**Parameters:**

Name | Type |
------ | ------ |
`rules` | [Rules](css.md#rules) |

___

###  GetCssSelector

Ƭ **GetCssSelector**: *function*

*Defined in [packages/css/source/model/Css.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L37)*

Converts a className into a CssSelector

#### Type declaration:

▸ (`className`: [ClassName](css.md#classname)): *[CssSelector](css.md#cssselector)*

**Parameters:**

Name | Type |
------ | ------ |
`className` | [ClassName](css.md#classname) |

___

###  MediaQuery

Ƭ **MediaQuery**: *object*

*Defined in [packages/css/source/media.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/media.ts#L4)*

#### Type declaration:

* **maxHeight**? : *number | string*

* **maxWidth**? : *number | string*

* **minHeight**? : *number | string*

* **minWidth**? : *number | string*

* **orientation**? : *"landscape" | "portrait"*

* **type**? : *"screen" | "print" | "all"*

___

###  Rule

Ƭ **Rule**: *keyof [ClassName, Css]*

*Defined in [packages/css/source/model/Css.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L7)*

___

###  Rules

Ƭ **Rules**: *[Map](../interfaces/objects.mutablemap.md#map)‹string, [Rule](css.md#rule)›*

*Defined in [packages/css/source/model/Css.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/model/Css.ts#L5)*

___

###  VirtualTimerEnv

Ƭ **VirtualTimerEnv**: *object*

*Defined in [packages/css/source/infrastructure/test-helpers.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/test-helpers.ts#L21)*

#### Type declaration:

* **timer**: *VirtualTimer*

## Variables

### `Const` AND_REGEX

• **AND_REGEX**: *RegExp‹›* = /^&/

*Defined in [packages/css/source/infrastructure/useClassName.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L31)*

___

### `Const` CLASS_NAME_ESCAPE_REGEX

• **CLASS_NAME_ESCAPE_REGEX**: *RegExp‹›* = /[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g

*Defined in [packages/css/source/infrastructure/useClassName.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L27)*

___

### `Const` CLASS_NAME_ESCAPE_REPLACEMENT

• **CLASS_NAME_ESCAPE_REPLACEMENT**: *"\$&"* = "\$&"

*Defined in [packages/css/source/infrastructure/useClassName.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L28)*

___

### `Const` CLASS_NAME_SEPARATOR

• **CLASS_NAME_SEPARATOR**: *" "* = " "

*Defined in [packages/css/source/infrastructure/classNames.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/classNames.ts#L4)*

___

### `Const` DEFAULT_CLASS_NAME_LENGTH

• **DEFAULT_CLASS_NAME_LENGTH**: *6* = 6

*Defined in [packages/css/source/infrastructure/useClassName.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L25)*

___

### `Const` DEFAULT_CLASS_NAME_PREFIX

• **DEFAULT_CLASS_NAME_PREFIX**: *"t"* = "t"

*Defined in [packages/css/source/infrastructure/useClassName.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L24)*

___

### `Const` HYPHENATE_REGEX

• **HYPHENATE_REGEX**: *RegExp‹›* = /[A-Z]|^ms/g

*Defined in [packages/css/source/infrastructure/useClassName.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L29)*

___

### `Const` HYPHENATE_REPLACEMENT

• **HYPHENATE_REPLACEMENT**: *"-$&"* = "-$&"

*Defined in [packages/css/source/infrastructure/useClassName.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L30)*

___

### `Const` classNamePrefix

• **classNamePrefix**: *"."* = "."

*Defined in [packages/css/source/infrastructure/getCssSelector.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/getCssSelector.ts#L3)*

___

### `Const` classNameSeparator

• **classNameSeparator**: *" "* = " "

*Defined in [packages/css/source/infrastructure/getCssSelector.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/getCssSelector.ts#L4)*

## Functions

### `Const` classNames

▸ **classNames**(...`classNames`: ReadonlyArray‹undefined | null | string | false | string & object›): *string & object*

*Defined in [packages/css/source/infrastructure/classNames.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/classNames.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`...classNames` | ReadonlyArray‹undefined &#124; null &#124; string &#124; false &#124; string & object› |

**Returns:** *string & object*

___

###  convertToHex

▸ **convertToHex**(`str`: string): *string*

*Defined in [packages/css/source/infrastructure/useClassName.ts:198](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L198)*

Ensure a hexadecimal

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  createCssEnv

▸ **createCssEnv**(`options`: Partial‹[CssEnv](css.md#cssenv)›): *[CssEnv](css.md#cssenv)*

*Defined in [packages/css/source/infrastructure/createCssEnv.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/createCssEnv.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | Partial‹[CssEnv](css.md#cssenv)› | {} |

**Returns:** *[CssEnv](css.md#cssenv)*

___

###  escape

▸ **escape**(`str`: string): *[ClassName](css.md#classname)*

*Defined in [packages/css/source/infrastructure/useClassName.ts:191](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L191)*

Escape a CSS class name.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[ClassName](css.md#classname)*

___

###  generateClassName

▸ **generateClassName**(`ruleKey`: string, `classNamePrefix`: string, `classNameLength`: number): *Generator‹Env‹CryptoEnv‹› & CryptoFailure‹›, any›, string & object, any›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:174](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L174)*

Generate a SHA-1 of the ruleKey to produce a className

**Parameters:**

Name | Type |
------ | ------ |
`ruleKey` | string |
`classNamePrefix` | string |
`classNameLength` | number |

**Returns:** *Generator‹Env‹CryptoEnv‹› & CryptoFailure‹›, any›, string & object, any›*

___

###  generatePropertyClassNames

▸ **generatePropertyClassNames**(`properties`: [NestedCssProperties](../interfaces/css.nestedcssproperties.md), `nestedSelector`: string, `media`: string): *Effects‹[CssEnv](css.md#cssenv) & HookEnv & CryptoEnv & CryptoFailure, keyof ClassName[]›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:64](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L64)*

Creates atomic ClassNames for all of the styles defined in NestedCssProperties

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`properties` | [NestedCssProperties](../interfaces/css.nestedcssproperties.md) | - |
`nestedSelector` | string | "" |
`media` | string | "" |

**Returns:** *Effects‹[CssEnv](css.md#cssenv) & HookEnv & CryptoEnv & CryptoFailure, keyof ClassName[]›*

___

###  generateRule

▸ **generateRule**(`options`: [GetClassNameOptions](css.md#getclassnameoptions)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [Rule](css.md#rule)›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:160](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L160)*

Generate a CSS rule

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetClassNameOptions](css.md#getclassnameoptions) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [Rule](css.md#rule)›*

___

###  getClassName

▸ **getClassName**(`options`: [GetClassNameOptions](css.md#getclassnameoptions)): *Generator‹Env‹CryptoEnv‹› & CryptoFailure‹›, any›, string & object, any›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:135](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L135)*

Get the className for an existing rule or generate it

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetClassNameOptions](css.md#getclassnameoptions) |

**Returns:** *Generator‹Env‹CryptoEnv‹› & CryptoFailure‹›, any›, string & object, any›*

___

### `Const` getCss

▸ **getCss**(`rules`: [Map](../interfaces/objects.mutablemap.md#map)‹string, [string & object, string & object]›): *string & object*

*Defined in [packages/css/source/infrastructure/getCss.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/getCss.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`rules` | [Map](../interfaces/objects.mutablemap.md#map)‹string, [string & object, string & object]› |

**Returns:** *string & object*

___

### `Const` getCssSelector

▸ **getCssSelector**(`className`: [ClassName](css.md#classname)): *[CssSelector](css.md#cssselector)*

*Defined in [packages/css/source/infrastructure/getCssSelector.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/getCssSelector.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`className` | [ClassName](css.md#classname) |

**Returns:** *[CssSelector](css.md#cssselector)*

___

###  getPropertiesString

▸ **getPropertiesString**(`properties`: [CssProperties](../interfaces/css.cssproperties.md), `key`: keyof CssProperties): *string*

*Defined in [packages/css/source/infrastructure/useClassName.ts:146](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L146)*

Deterministically generates a CSS string representation of a CSS property with any of it's
possible fallback values.

**Parameters:**

Name | Type |
------ | ------ |
`properties` | [CssProperties](../interfaces/css.cssproperties.md) |
`key` | keyof CssProperties |

**Returns:** *string*

___

### `Const` hyphenate

▸ **hyphenate**(`s`: string): *string*

*Defined in [packages/css/source/infrastructure/useClassName.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

### `Const` isMediaQuery

▸ **isMediaQuery**(`css`: [Css](css.md#css)): *boolean*

*Defined in [packages/css/source/infrastructure/getCss.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/getCss.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`css` | [Css](css.md#css) |

**Returns:** *boolean*

___

###  it

▸ **it**(`does`: string, `what`: function): *Test*

*Defined in [packages/css/source/infrastructure/test-helpers.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/test-helpers.ts#L23)*

**Parameters:**

▪ **does**: *string*

▪ **what**: *function*

▸ (`assertions`: Assertions & [VirtualTimerEnv](css.md#virtualtimerenv)): *[PureEffect](effects.md#pureeffect)‹any› | Effects‹[CssTestEnv](css.md#csstestenv), any›*

**Parameters:**

Name | Type |
------ | ------ |
`assertions` | Assertions & [VirtualTimerEnv](css.md#virtualtimerenv) |

**Returns:** *Test*

___

### `Const` media

▸ **media**(`query`: [MediaQuery](css.md#mediaquery), `properties`: [NestedCssProperties](../interfaces/css.nestedcssproperties.md)): *[NestedCssProperties](../interfaces/css.nestedcssproperties.md)*

*Defined in [packages/css/source/media.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/media.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | [MediaQuery](css.md#mediaquery) |
`properties` | [NestedCssProperties](../interfaces/css.nestedcssproperties.md) |

**Returns:** *[NestedCssProperties](../interfaces/css.nestedcssproperties.md)*

___

###  mergeObjects

▸ **mergeObjects**(`properties`: ReadonlyArray‹[NestedCssProperties](../interfaces/css.nestedcssproperties.md)›): *[NestedCssProperties](../interfaces/css.nestedcssproperties.md)‹›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:210](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L210)*

Merge together many NestedCssProperties

**Parameters:**

Name | Type |
------ | ------ |
`properties` | ReadonlyArray‹[NestedCssProperties](../interfaces/css.nestedcssproperties.md)› |

**Returns:** *[NestedCssProperties](../interfaces/css.nestedcssproperties.md)‹›*

___

### `Const` notAnd

▸ **notAnd**(`s`: string): *string*

*Defined in [packages/css/source/infrastructure/useClassName.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

### `Const` sortRules

▸ **sortRules**(`a`: [Css](css.md#css), `b`: [Css](css.md#css)): *0 | 1 | -1*

*Defined in [packages/css/source/infrastructure/getCss.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/getCss.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Css](css.md#css) |
`b` | [Css](css.md#css) |

**Returns:** *0 | 1 | -1*

___

###  toArray

▸ **toArray**<**A**>(`value`: A | keyof A[]): *ReadonlyArray‹A›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:184](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L184)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; keyof A[] |

**Returns:** *ReadonlyArray‹A›*

___

### `Const` toPx

▸ **toPx**(`sOrN`: string | number): *string*

*Defined in [packages/css/source/infrastructure/useClassName.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`sOrN` | string &#124; number |

**Returns:** *string*

___

### `Const` toPx

▸ **toPx**(`sOrN`: string | number): *string*

*Defined in [packages/css/source/media.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/media.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`sOrN` | string &#124; number |

**Returns:** *string*

___

###  toSelector

▸ **toSelector**(`query`: [MediaQuery](css.md#mediaquery)): *string*

*Defined in [packages/css/source/media.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/media.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | [MediaQuery](css.md#mediaquery) |

**Returns:** *string*

___

### `Const` useClassName

▸ **useClassName**(...`properties`: ReadonlyArray‹undefined | null | false | [NestedCssProperties](../interfaces/css.nestedcssproperties.md)‹››): *Generator‹Env‹HookEnv & object & CryptoEnv‹› & CryptoFailure‹›, any›, string & object, any›*

*Defined in [packages/css/source/infrastructure/useClassName.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/css/source/infrastructure/useClassName.ts#L42)*

Deterministically creates classNames for a series of objects that define the styles to be applied.

**Parameters:**

Name | Type |
------ | ------ |
`...properties` | ReadonlyArray‹undefined &#124; null &#124; false &#124; [NestedCssProperties](../interfaces/css.nestedcssproperties.md)‹›› |

**Returns:** *Generator‹Env‹HookEnv & object & CryptoEnv‹› & CryptoFailure‹›, any›, string & object, any›*
