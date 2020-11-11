import { connect } from 'react-redux'
import { Name as Component } from './name'

const mapStateToProps = state => ({
    name: state.name
})

export const Name = connect(mapStateToProps)(Component)