import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'In My Blood',
      duration: '3:31'
    },
    {
      title: 'Call You Mine',
      duration: '3:37'
    },
    {
      title: 'Just the Way You Are',
      duration: '3:40'
    },
    {
      title: 'Who Do You Love',
      duration: '3:46'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
