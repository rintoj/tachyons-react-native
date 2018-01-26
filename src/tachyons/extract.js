/**
 * eslint global copy
 */

/**
 * extract styles from tachyons styles page https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.css
 */
(function extractStyles () {
  copy(document.body.innerText.split(/\n/).filter(i => /\{|\}/.test(i)).map(i => i.replace(/\/\*.*\*\//g, '')).map(i => {
    const [k, b1, v] = i.split(/\s*(\{|\})\s*/)
    return { selector: k, style: b1 && v }
  }))
})();

/**
 * Copy valid styles from https://github.com/vhpoet/react-native-styling-cheat-sheet
 */
(function extractValidStyles () {
  const validStyles = []
  document.querySelectorAll('tr')
    .forEach(tr => validStyles.push(tr.querySelectorAll('td')[0] && tr.querySelectorAll('td')[0].innerText))

  copy(validStyles.filter(i => i != null && i !== '' && !/(^\.\.\.)/.test(i)))
})()
