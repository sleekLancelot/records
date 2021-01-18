import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { searchRecords, clearFilter } from '../../actions/recordActions'
import { showAlert } from '../../actions/alertActions';

const SearchBar = ({ searchRecords, clearFilter, filtered, showAlert }) => {
    const [filterCriteria, setFilterCriteria] = useState('')
    const [searchKeyword, setSearchKeyword] = useState('')
    // const text = useRef('searchText')

    const onChange = (e) => {
        let searchKeyword = e.target.value

        // if (e.keycode === 13 && searchKeyword === '') {
        //     showAlert('enter a Name or E-mail to search')
        // }

        if (searchKeyword !== '') {
            searchKeyword.trim()
            searchRecords(filterCriteria, searchKeyword)
        } else {
            clearFilter()
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (searchKeyword === '') {
            return showAlert('Enter a keyword to search', 'danger text-center')
        }

        // eslint-disable-next-line eqeqeq
        if (filtered === null || filtered.length == 0) {
            showAlert(`Sorry,No profile has ${filterCriteria === '' ? 'Name' : filterCriteria} containing ${searchKeyword}`, 'danger text-center')
        }
    }

    return (
        <div className="container mt-5 search">
            <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                    <div className="input-group" onChange={e => e.preventDefault()}>
                        {/* <select name='category' value={filterValue} className="mdb-select md-form" searchable="filter value.." onChange={onChange}>
                                <option value="" disabled defaultValue>Name</option>
                                <option value="Individual buyer/Investors">E-mail</option>
                            </select> */}

                        <select className="mdb-select md-form btn" searchable="Search By.." value={filterCriteria} onChange={(e) => setFilterCriteria(e.target.value)}>
                            <option value="" disabled defaultValue>Search By</option>
                            <option value="Name">Name</option>
                            <option value="E-mail">E-mail</option>
                        </select>

                        <div className="form-group has-search">
                            <span className="fas fa-search form-control-feedback"></span>
                            <form onSubmit={onSubmit}>
                                <input type="text" className="form-control" placeholder="Search keyword" onKeyUp={(e) => setSearchKeyword(e.target.value)} onChange={onChange} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    searchRecords: PropTypes.func.isRequired,
    clearFilter: PropTypes.func,
    showAlert: PropTypes.func
}

const mapStateToProps = state => ({
    filtered: state.records.filtered,
})

export default connect(mapStateToProps, { searchRecords, clearFilter, showAlert })(SearchBar)
