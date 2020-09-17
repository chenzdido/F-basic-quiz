import fetchMock from "fetch-mock";
import userdata from "../index";

// TODO 没有安装 fetch-mock 这个依赖
fetchMock.mock("http://localhost:8080/users/1/educations", {
  id: 1,
  name: "KAMIL",
  age: 1,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
  avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
});

test("properties on kevin and winnie expected", async () => {
  const result = await userdata();
  expect(result).toEqual({
    id: 1,
    name: "KAMIL",
    age: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
    avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
  });
});
