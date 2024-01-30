import { rest } from "msw";

const baseURL = "https://live-life-api-now-f6f9c42b2398.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "Jim",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 7,
        profile_image:
        "https://res.cloudinary.com/dpo8kigkj/image/upload/v1/media/images/20231231_122051_rgtfqx",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
