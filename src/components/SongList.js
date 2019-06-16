import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>Song List</div>;
  }
}

const mapStateToProps = state => ({
  songs: state.songs
});

export default connect(mapStateToProps)(SongList);
