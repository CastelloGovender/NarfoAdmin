
function toSnake (string) {
    return string
    .split('')
    .map((letter, index) => {
        if (/[A-Z]/.test(letter)) {
        return ` ${letter.toLowerCase()}`
        }
        return letter
    })
    .join('')
    .trim()
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
  }

exports.component = name => `

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class ${name} extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div class="${toSnake(name)}">
                
            </div>
        )
    }
}

`;

exports.style = name => `
    .${toSnake(name)} {
        
    }
`
