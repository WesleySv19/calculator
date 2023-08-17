function insert (type, valueParam) {
    if (type === 'actionParam') {
        if (valueParam === 'c') {
            document.getElementById('result') .value = ''
        }
        
        if (valueParam === '-' || valueParam === '+' || valueParam === '*' || valueParam === '/' ) {
            document.getElementById('result') .value += valueParam
        }

        if (valueParam === '=') {
            let valueField = eval(document.getElementById ('result') .value)

            document.getElementById('result') .value = valueField
        }
    }

    else if (type === 'valueParam') {
        document.getElementById('result') . value += valueParam
    }
}