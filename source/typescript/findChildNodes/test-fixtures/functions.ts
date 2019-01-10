export function foo(): () => () => 'foo' {
  return function theRealFoo(): () => 'foo' {
    return function theGrandFoo(): 'foo' {
      return 'foo'
    }
  }
}

export function bar(): 'bar' {
  return 'bar'
}

export function foobar(): 'foobar' {
  return 'foobar'
}

export function quux(): 'quux' {
  return 'quux'
}
