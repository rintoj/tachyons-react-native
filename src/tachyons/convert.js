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
  if (validStyles.indexOf(ruleName) < 0 || /inherit|calc|!important|rotate|translateZ|(vh|vw)$/.test(value)) return false
  if (invalidStyles[ruleName] != null && (invalidStyles[ruleName].indexOf('*') >= 0 || invalidStyles[ruleName].indexOf(value) >= 0)) return false
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
  if (value instanceof Array) return `${name}: [${value.map(i => `{ ${Object.keys(i).map(v => toFormattedValue(v, i[v])).join(', ')} }`).join(', ')}]`
  if (typeof value !== 'object') return `${name}: ${typeof value === 'string' ? `'${value}'` : value}`
  return `${name}: { ${Object.keys(value).map(key => toFormattedValue(key, value[key])).join(', ')} }`
}

function toGroupName (name) {
  if (name === 'zIndex') { return 'z-index' }
  if (/color/i.test(name)) { return 'color' }
  if (/items|self|justify/i.test(name)) { return 'flex' }
  if (['left', 'top', 'right', 'bottom', 'position'].indexOf(name) >= 0) { return 'position' }
  return nameUtil.toDashedName(name.replace(/top|left|right|bottom|min|max/i, '')).split('-')[0]
}

function convertStyles () {

  return styles
    .filter(i => /^\./.test(i.selector) && i.selector !== 'flexAuto')
    .filter(i => !/hover|\.child|MozFocusInner|aspect-ratio|nested|grow|[[,+'"()]|(-(l|m|ns)$)/.test(i.selector))
    .map(i => ({
      selector: processSelector(i.selector),
      style: processStyle(i.style, i.selector)
    }))
    .filter(i => JSON.stringify(i.style) !== '{}')
    .reduce((a, i) => {
      a[i.selector] = i.style
      return a
    }, additionalStyles)
}

function generateFunctionalStyles (rnStyles) {
  const formattedStyles = Object.keys(rnStyles)
    .reduce((a, key) => {
      return a.concat(toFormattedValue(key, rnStyles[key]))
    }, []).join(',\n  ')

  const functionalStyles = `
module.exports = {
  ${formattedStyles}
}
`

  fs.writeFile(`${__dirname}/functional-styles.js`, functionalStyles)

}

function generateReadMe (rnStyles) {

  const title = [
    ['STYLE NAME', 'STYLES'],
    ['----------', '------']
  ]

  const readmeGroups = Object.keys(rnStyles).reduce((a, name) => {
    const item = rnStyles[name]
    const group = toGroupName(Object.keys(item)[0])
    a[group] = a[group] || []
    a[group].push([name, JSON.stringify(item).replace(/:/g, ': ').replace(/,/g, ', ')])
    return a
  }, {})

  const readme = Object.keys(readmeGroups).reduce((a, groupName) => {
    return `${a}
## ${groupName.toUpperCase()}

${title.concat(readmeGroups[groupName]).map(i => i.join(' | ')).join('\n')}
`
  }, '')

  fs.writeFile(`${__dirname}/README.md`, readme)
}

function run () {
  const rnStyles = convertStyles()
  generateFunctionalStyles(rnStyles)
  generateReadMe(rnStyles)
}

run()