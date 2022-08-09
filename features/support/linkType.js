
const {defineParameterType} = require('@cucumber/cucumber')

defineParameterType({
    regexp: /particular/,
    transformer: s => s.toUpperCase(),
    name: 'param'
})

defineParameterType({
    regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
    name: 'link',
});