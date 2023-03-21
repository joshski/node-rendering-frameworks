import { loader, View } from './index'
import { renderToString } from 'react-dom/server'

describe("Index", () => {
  it("renders HTML", async () => {
    const response = await loader();
    expect(response).toBeInstanceOf(Response);
    const json = await response.json()
    const html = renderToString(View(json));
    expect(html).toMatch('Hello Remix!')
  });
});
