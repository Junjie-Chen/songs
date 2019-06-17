import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  if (!props.selectedSong) {
    return <div>Select a Song</div>;
  }

  return <div>{props.selectedSong.title}</div>;
};

const mapStateToProps = state => ({
  selectedSong: state.selectedSong
});

export default connect(mapStateToProps)(SongDetail);
