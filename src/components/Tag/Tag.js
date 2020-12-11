import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../actions/tag';
import TagHeader from './TagHeader';
import TagContent from './TagContent';
import Aside from '../Aside/Aside';
import VideoPlayer from './VideoPlayer';
// import debounce from '../../helper/debounce';


const Tag = ({ tagData, onFetchData, isPlayerOpen, history }) => {

    const tag = history.location.pathname.match(/[^/]*$/)[0];
    
    useEffect(() => {
        onFetchData(tag);
    }, [tag]);

    return ( 
        <React.Fragment>
            <div className="narrower-container"> 
                <div className="user-container"> 
                    {tagData    ?   <React.Fragment>
                                        <TagHeader  tagData={{
                                            avatar: tagData.logo,
                                            title: tagData.title,
                                            subtitle: tagData.subtitle,
                                            smallText: tagData.smallText 
                                        }}/> 
                                        <div className="trending-body__content">
                                            <TagContent /> 
                                        </div>  
                                    </React.Fragment>
                                : null 
                            }                                         
                </div>
                <div className="aside">
                    <Aside />
                </div>
            </div>
            {isPlayerOpen && <VideoPlayer />}
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        tagData: state.tag.tagData,
        isPlayerOpen: state.tag.isPlayerOpen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: (tag) => dispatch(fetchUsersData(tag)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tag);