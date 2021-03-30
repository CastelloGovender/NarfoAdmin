import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Table extends Component {
    static propTypes = {
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                fieldName: PropTypes.string,
                size: PropTypes.string,
                renderOverride: PropTypes.func,
            }),
        ),
        data: PropTypes.array,
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    getTableStyles = (columns) => {
        return {gridTemplateColumns: `repeat(${columns.length}, 1fr)`}
    }

    renderCell = (value, style, i, size, renderOverride) => {
        const cellStyle = size ? {width: size} : {}
        return (
            <div key={`${style}-${value}-${i}`} className={`cell py4 px8 ${style}`} style={cellStyle}>
                {renderOverride ? renderOverride(value) : value}
            </div>
        )
    }
    

    renderTableHeaders = (columns) => {
        return columns.map((column, i)=>this.renderCell(column.label, `header`, i))
    }

    renderTableData = (data, columns) => {
        return data.map((rowData, i)=>{
            return columns.map((column, j) => {
                return this.renderCell(rowData[column.fieldName], `data`, `${i}-${j}`, column.size, column.renderOverride)
            })
        })
    }
    
    

    render() {
        const tableStyles = this.getTableStyles(this.props.columns)
        return (
            <div className="table grow" style={tableStyles}>
                {this.renderTableHeaders(this.props.columns)}
                {this.renderTableData(this.props.data, this.props.columns)}
            </div>
        )
    }
}

