import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  return <div>{props.selectedSong.title}</div>;
};

const mapStateToProps = state => ({
  selectedSong: state.selectedSong
});

export default connect(mapStateToProps)(SongDetail);
