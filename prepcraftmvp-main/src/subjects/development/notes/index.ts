import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import Chapter6Part1 from './Chapter6Part1';
import Chapter6Part2 from './Chapter6Part2';
import Chapter8Part1 from './Chapter8Part1';
import Chapter8Part2 from './Chapter8Part2';
import Chapter9Part1 from './Chapter9Part1';
import Chapter9Part2 from './Chapter9Part2';
import Chapter10Part1 from './Chapter10Part1';
import Chapter10Part2 from './Chapter10Part2';
import { chapters } from '../chapters';
const chapterComponents: { [key: string]: React.ComponentType<any> } = {
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter6Part1,
  Chapter6Part2,
  Chapter8Part1,
  Chapter8Part2,
  Chapter9Part1,
  Chapter9Part2,
  Chapter10Part1,
  Chapter10Part2,
};

export const developmentNotes = chapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: chapterComponents[subchapter.noteId],
    meta: {
      id: subchapter.id,
      title: subchapter.title,
      noteId: subchapter.noteId,
    },
  }))
);