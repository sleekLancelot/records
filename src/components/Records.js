import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux';
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import Placeholder from './Placeholder';
import Pagination from './Pagination';

import { getRecords } from '../actions/recordActions'
import { showAlert } from '../actions/alertActions';

const Records = ({ records: { loading, size, records, error, filtered }, getRecords, showAlert }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    useEffect(() => {
        getRecords()
    }, [getRecords])

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = !loading && records.profiles.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber, e) => {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0)
        return e ? e.preventDefault() : null
    };

    if (error) {
        showAlert(error, 'danger')
    }

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-lg-4 g-5 g-lg-4">
                {/* {
                    !loading && currentPosts !== null ? currentPosts.map((profile, index) => (
                        <ProfileItem profile={profile} key={index} />
                    )) : Array(20).fill(20).map((i, index) => (
                        <Placeholder key={index} />
                    ))
                } */}

                {
                    !loading && currentPosts !== null ? (
                        <Fragment>
                            {
                                filtered === null || filtered.length === 0 ?
                                    currentPosts.map((profile, index) =>
                                        <ProfileItem profile={profile} key={index} />
                                    )
                                    :
                                    filtered.map((profile, index) =>
                                        <ProfileItem profile={profile} key={index} />
                                    )
                            }
                        </Fragment>
                    ) :
                        Array(20).fill(20).map((i, index) => (
                            <Placeholder key={index} />
                        ))
                }

            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={size} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

Records.propTypes = {
    records: PropTypes.object.isRequired,
    getRecords: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
    filtered: PropTypes.array
}

const mapStateToProps = state => ({
    records: state.records,
})

export default connect(mapStateToProps, { getRecords, showAlert })(Records)
