const checkType = (item) => {
    if (item === null) return '""'
    const type = typeof item
    switch (type) {
        // case 'object':
        //     return item.length !== undefined ? ('"' + item.join(',') + '"') : (item !== null ? item : '')
        case 'object':
            if (item instanceof Array) {
                return item.length !== undefined ? ('[' + item.join(',') + ']') : (item !== null ? item : '')
            } else {
                return '{' + graphiqlParams(item) + '}'
            }
        case 'string':
            return '"' + item + '"'
        case 'number':
            return item
        case 'boolean':
            return item
        default:
            return '""'
    }
}

const graphiqlParams = (params, filterNull = false) => {
    const querys = []
    for (let item in params) {
        let value = _checkType(params[item])
        if (filterNull) {
            if (value !== '""' && value !== '"{}"' && value !== '"[]"') {
                const query = item.toString() + ':' + value
                querys.push(query)
            }
        } else {
            const query = item.toString() + ':' + value
            querys.push(query)
        }

    }
    return querys.join(',')
}

module.exports = graphiqlParams