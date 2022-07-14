import { createContext } from "react";

const categories = [
  {
    id: "1",
    category: "식사",
  },
  {
    id: "2",
    category: "공부",
  },
  {
    id: "3",
    category: "운동",
  },
];

const posts = [
  {
    id: "1",
    category: "식사",
    title: "정건 밥 먹을 사람",
    date: "2022년 7월 13일 (수) 18:00",
    place: "정건",
    gender: "남녀무관",
    current_people: "1",
    max_people: "6",
    written_time: "1일 전",
    content: "1번 게시글",
  },
  {
    id: "2",
    category: "식사",
    title: "중상 술 마실 사람",
    date: "2022년 7월 14일 (목) 20:00",
    place: "중상",
    gender: "남자만",
    current_people: "5",
    max_people: "8",
    written_time: "2시간 전",
    content: "2번 게시글",
  },
  {
    id: "3",
    category: "식사",
    title: "영통역 근처 밥",
    date: "2022년 7월 15일 (금) 12:30",
    place: "영통역",
    gender: "여자만",
    current_people: "1",
    max_people: "2",
    written_time: "1시간 전",
    content: "3번 게시글",
  },
  {
    id: "4",
    category: "공부",
    title: "칸나에서 공부",
    date: "2022년 7월 15일 (금) 12:30",
    place: "칸나",
    gender: "여자만",
    current_people: "0",
    max_people: "1",
    written_time: "1시간 전",
    content: "4번 게시글",
  },
  {
    id: "5",
    category: "공부",
    title: "스벅 카공",
    date: "2022년 7월 15일 (금) 12:30",
    place: "정건 스벅",
    gender: "남녀무관",
    current_people: "0",
    max_people: "3",
    written_time: "10분 전",
    content: "5번 게시글",
  },
];

export const CategoryContext = createContext();
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  return (
    <PostContext.Provider value={posts}>
      <CategoryContext.Provider value={categories}>
        {children}
      </CategoryContext.Provider>
    </PostContext.Provider>
  );
};
