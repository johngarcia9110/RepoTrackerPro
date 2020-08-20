import React from "react";
import nock from "nock";
import { getUpdatedInfo } from "./actions/repoActions";

const dummyData = [
  {
    avatar_url: "https://avatars1.githubusercontent.com/u/8121621?v=4",
    html_url:
      "https://github.com/PanJiaChen/vue-element-admin/releases/tag/4.4.0",
    id: 88464704,
    last_viewed: 1597884461018,
    name: "vue-element-admin",
    owner: "PanJiaChen",
    published_at: "2020-06-21T13:42:12Z",
  },
];

describe("getUpdatedInfo", () => {
  it("should return an object with repo information", async () => {
    const expected = dummyData[0];

    const scope = nock("https://api.github.com")
      .get("/repos/PanJiaChen/vue-element-admin/releases")
      .reply(200, [expected]);

    expect(await getUpdatedInfo(dummyData[0])).toEqual(expected);

    scope.done();
  });

  it("should return false", async () => {
    const expected = false;

    const scope = nock("https://api.github.com")
      .get("/repos/PanJiaChen/vue-element-admin/releases")
      .reply(500);

    expect(await getUpdatedInfo(dummyData[0])).toEqual(expected);

    scope.done();
  });
});
