import app from "../../are_na.app.mjs";

export default {
  key: "are_na-create-channel",
  name: "Create Channel",
  description: "Create a new channel in Are.na. [See the documentation](https://www.are.na/developers/explore/channel)",
  version: "0.0.3",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: false,
  },
  type: "action",
  props: {
    app,
    channelTitle: {
      propDefinition: [
        app,
        "channelTitle",
      ],
    },
    channelStatus: {
      propDefinition: [
        app,
        "channelStatus",
      ],
    },
  },
  async run({ $ }) {
    const response = await this.app.createChannel({
      $,
      data: {
        title: this.channelTitle,
        visibility: this.channelStatus,
      },
    });
    $.export("$summary", `Successfully created channel '${this.channelTitle}' with slug '${response.slug}'`);
    return response;
  },
};
