const fs = require('fs-extra')
const styles = require('./styles.json')
const nameUtil = require('name-util')
const validStyles = require('./valid-styles.json')
const invalidStyles = require('./invalid-styles.json')
const additionalStyles = require('./additional-styles')

function processSelector (selector) {
  return nameUtil.toClassName(selector.replace(/:/g, ''))
    .replace(/^\./, '')
    .replace('active', 'Active')
}

function processTransform (value) {
  const [type, c1, unit] = value.split(/\(|\)/).map(i => i.trim())
  const style = {}
  style[type] = c1 && Number(unit)
  return [style]
}

function processValue (value, rule) {
  const numberValue = Number(value)
  if (rule === 'transform') return processTransform(value)
  if (rule === 'fontWeight') return value.trim()
  if (/px$/.test(value)) return Number(value.replace(/px$/, ''))
  if (/rem$/.test(value)) return Number(value.replace(/rem$/, '')) * 16
  if (/em$/.test(value)) return Number(value.replace(/em$/, '')) * 16
  return isNaN(numberValue) ? value.trim() : numberValue
}

function isValidStyle (ruleName, value) {
  if (validStyles.indexOf(ruleName) < 0 || /inherit|calc|!important|(vh|vw)$/.test(value)) return false
  if (invalidStyles[ruleName] != null && (invalidStyles[ruleName].indexOf('*') >= 0 || invalidStyles[ruleName].indexOf(value) >= 0)) return false
  invalidStyles[ruleName] && console.log(ruleName, value, invalidStyles[ruleName])
  return true
}

function processStyle (style) {
  const rules = style.split(';')
  return rules.filter(i => i != null && i !== '')
    .reduce((a, i) => {
      const [rule, value] = i.split(': ')
      const ruleName = nameUtil.toCamelCase(rule)
      if (isValidStyle(ruleName, value)) a[ruleName] = processValue(value, ruleName)
      return a
    }, {})
}

function toFormattedValue (name, value) {
  name === 'transform' && console.log(value)
  if (value instanceof Array) return `${name}: [${value.map(i => `{ ${Object.keys(i).map(v => toFormattedValue(v, i[v])).join(', ')} }`).join(', ')}]`
  if (typeof value !== 'object') return `${name}: ${typeof value === 'string' ? `'${value}'` : value}`
  return `${name}: { ${Object.keys(value).map(key => toFormattedValue(key, value[key])).join(', ')} }`
}

const rnStyles = styles
  .filter(i => /^\./.test(i.selector) && i.selector !== 'flexAuto')
  .filter(i => !/hover|\.child|MozFocusInner|aspect-ratio|nested|[[,+'"]|(-(l|m|ns)$)/.test(i.selector))
  .filter(i => !/color/.test(i.style))
  .map(i => ({
    selector: processSelector(i.selector),
    style: processStyle(i.style, i.selector)
  }))
  .filter(i => JSON.stringify(i.style) !== '{}')
  .reduce((a, i) => {
    a[i.selector] = i.style
    return a
  }, additionalStyles)

console.log(rnStyles.growLarge)
const formattedStyles = Object.keys(rnStyles)
  .sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
  .reduce((a, key) => {
    return a.concat(toFormattedValue(key, rnStyles[key]))
  }, []).join(',\n  ')

const functionalStyles = `
module.exports = {
  ${formattedStyles}
}
`

fs.writeFile('../functional-styles.js', functionalStyles)

console.log(functionalStyles)
