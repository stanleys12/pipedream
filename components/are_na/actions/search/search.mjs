import are_na from "../../are_na.app.mjs";

export default {
  key: "are_na-search",
  name: "Perform a Search",
  description: "Search across all of Are.na (returns channels, blocks, users and groups that match the query). Requires an Are.na Premium subscription. [See the documentation](https://www.are.na/developers/explore/search)",
  version: "0.0.4",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: true,
  },
  type: "action",
  props: {
    are_na,
    query: {
      propDefinition: [
        are_na,
        "query",
      ],
    },
  },
  async run({ $ }) {
    const response = await this.are_na.search({
      $,
      params: {
        query: this.query,
      },
    });

    $.export("$summary", `Search returned ${response.data.length} results`);
    return response;
  },
};
