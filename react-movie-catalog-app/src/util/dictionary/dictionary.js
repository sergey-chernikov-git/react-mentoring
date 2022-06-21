const Genres = {
  All: 'All',
  Action: 'Action',
  Drama: 'Drama',
  Adventure: 'Adventure',
  Comedy: 'Comedy',
  Romance: 'Romance'
};

export const Sort = {
  ReleaseDate: 'Release Date',
  Title: 'Title'
};

const Notifications = {
  Success: 'Success',
  Exception: 'Exception'
};

export const getID = () => {
  return Math.floor(Math.random() * 100000);
};

export function getInitMovieList() {
  console.log('getInitMovieList');
  const movies = [];
  movies.push({
    id: getID(),
    src: 'https://i.pinimg.com/originals/99/f8/70/99f8702093bd74454c4636a33f558c4a.png',
    title: 'Joker',
    year: '2014-04-04',
    runtime: 120,
    overview:
      'Audio description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. In this work we propose a novel dataset which contains transcribed ADs, which are temporally aligned to full length movies. In addition we also collected and aligned movie scripts used in prior work and compare the two sources of descriptions. We introduce the Large Scale Movie Description Challenge (LSMDC) which contains a parallel corpus of 128,118 sentences aligned to video clips from 200 movies (around 150 h of video in total). The goal of the challenge is to automatically generate descriptions for the movie clips. First we characterize the dataset by benchmarking different approaches for generating video descriptions. Comparing ADs to scripts, we find that ADs are more visual and describe precisely what is shown rather than what should happen according to the scripts created prior to movie production. Furthermore, we present and compare the results of several teams who participated in the challenges organized in the context of two workshops at ICCV 2015 and ECCV 2016.',
    rating: 7.5,
    genres: [Genres.Drama, Genres.Adventure]
  });
  movies.push({
    id: getID(),
    src: 'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
    title: 'The Hill',
    year: '2010-04-04',
    runtime: 120,
    overview:
      'Audio description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. In this work we propose a novel dataset which contains transcribed ADs, which are temporally aligned to full length movies. In addition we also collected and aligned movie scripts used in prior work and compare the two sources of descriptions. We introduce the Large Scale Movie Description Challenge (LSMDC) which contains a parallel corpus of 128,118 sentences aligned to video clips from 200 movies (around 150 h of video in total). The goal of the challenge is to automatically generate descriptions for the movie clips. First we characterize the dataset by benchmarking different approaches for generating video descriptions. Comparing ADs to scripts, we find that ADs are more visual and describe precisely what is shown rather than what should happen according to the scripts created prior to movie production. Furthermore, we present and compare the results of several teams who participated in the challenges organized in the context of two workshops at ICCV 2015 and ECCV 2016.',
    rating: 7.5,
    genres: [Genres.Romance, Genres.Adventure]
  });
  movies.push({
    id: getID(),
    src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg',
    title: 'Freedom',
    year: '2013-04-04',
    runtime: 120,
    overview:
      'Audio description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. In this work we propose a novel dataset which contains transcribed ADs, which are temporally aligned to full length movies. In addition we also collected and aligned movie scripts used in prior work and compare the two sources of descriptions. We introduce the Large Scale Movie Description Challenge (LSMDC) which contains a parallel corpus of 128,118 sentences aligned to video clips from 200 movies (around 150 h of video in total). The goal of the challenge is to automatically generate descriptions for the movie clips. First we characterize the dataset by benchmarking different approaches for generating video descriptions. Comparing ADs to scripts, we find that ADs are more visual and describe precisely what is shown rather than what should happen according to the scripts created prior to movie production. Furthermore, we present and compare the results of several teams who participated in the challenges organized in the context of two workshops at ICCV 2015 and ECCV 2016.',
    rating: 7.5,
    genres: [Genres.Comedy, Genres.Drama, Genres.Adventure]
  });
  movies.push({
    id: getID(),
    src: 'https://svirtus.cdnvideo.ru/VcjSMXf5eYBGfnfBIdLav-w4iXM=/0x0:1080x1350/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/8a/8a181c37dd4481f244d594d9205523ff.jpg?m=4b068984e9801401879986ad468bf32a',
    title: 'Uncharted',
    year: '2021-04-04',
    runtime: 130,
    overview:
      'Audio description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. In this work we propose a novel dataset which contains transcribed ADs, which are temporally aligned to full length movies. In addition we also collected and aligned movie scripts used in prior work and compare the two sources of descriptions. We introduce the Large Scale Movie Description Challenge (LSMDC) which contains a parallel corpus of 128,118 sentences aligned to video clips from 200 movies (around 150 h of video in total). The goal of the challenge is to automatically generate descriptions for the movie clips. First we characterize the dataset by benchmarking different approaches for generating video descriptions. Comparing ADs to scripts, we find that ADs are more visual and describe precisely what is shown rather than what should happen according to the scripts created prior to movie production. Furthermore, we present and compare the results of several teams who participated in the challenges organized in the context of two workshops at ICCV 2015 and ECCV 2016.',
    rating: 7.5,
    genres: [Genres.Adventure, Genres.Drama]
  });
  movies.push({
    id: getID(),
    src: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/02/jordan-peele-us-poster.jpg',
    title: 'Us',
    year: '2020-04-04',
    runtime: 120,
    overview:
      'Audio description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. In this work we propose a novel dataset which contains transcribed ADs, which are temporally aligned to full length movies. In addition we also collected and aligned movie scripts used in prior work and compare the two sources of descriptions. We introduce the Large Scale Movie Description Challenge (LSMDC) which contains a parallel corpus of 128,118 sentences aligned to video clips from 200 movies (around 150 h of video in total). The goal of the challenge is to automatically generate descriptions for the movie clips. First we characterize the dataset by benchmarking different approaches for generating video descriptions. Comparing ADs to scripts, we find that ADs are more visual and describe precisely what is shown rather than what should happen according to the scripts created prior to movie production. Furthermore, we present and compare the results of several teams who participated in the challenges organized in the context of two workshops at ICCV 2015 and ECCV 2016.',
    rating: 7.5,
    genres: [Genres.Romance, Genres.Adventure]
  });
  return movies;
}

export function getGenresList() {
  console.log('getGenresList');
  const genres = [];
  for (const [key, value] of Object.entries(Genres)) {
    genres.push({
      id: key,
      value: value
    });
  }
  return genres;
}

export function getSortList() {
  const sortList = [];
  for (const [key, value] of Object.entries(Sort)) {
    sortList.push({
      id: key,
      value: value
    });
  }
  return sortList;
}
