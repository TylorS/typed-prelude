const booleanAttributes: string[] = [
  'allowfullscreen',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'compact',
  'controls',
  'declare',
  'default',
  'defaultchecked',
  'defaultmuted',
  'defaultselected',
  'defer',
  'disabled',
  'draggable',
  'enabled',
  'formnovalidate',
  'hidden',
  'indeterminate',
  'inert',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nohref',
  'noresize',
  'noshade',
  'novalidate',
  'nowrap',
  'open',
  'pauseonexit',
  'readonly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  'selected',
  'sortable',
  'spellcheck',
  'translate',
  'truespeed',
  'typemustmatch',
  'visible',
]

const booleanAttributeDictionary: any = Object.create(null)

for (let i = 0, count = booleanAttributes.length; i < count; i++)
  booleanAttributeDictionary[booleanAttributes[i]] = true

export function isBooleanAttribute(key: any): boolean {
  return booleanAttributeDictionary[key] === true
}
