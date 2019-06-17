import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  if (!props.selectedSong) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Details:</h3>
      <p>Title: {props.selectedSong.title}<br />Duration: {props.selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedSong: state.selectedSong
});

export default connect(mapStateToProps)(SongDetail);
