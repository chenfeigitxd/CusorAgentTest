const { describe, it, after } = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

const TEST_PORT = 3001;
process.env.PORT = TEST_PORT;

const { server } = require("./index");

function request(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${TEST_PORT}${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
    }).on("error", reject);
  });
}

describe("HTTP Server", () => {
  after(() => server.close());

  it("GET /api/hello returns greeting", async () => {
    const res = await request("/api/hello");
    assert.equal(res.status, 200);
    assert.equal(res.body.message, "Hello, World!");
    assert.ok(res.body.timestamp);
  });

  it("GET /api/health returns ok", async () => {
    const res = await request("/api/health");
    assert.equal(res.status, 200);
    assert.equal(res.body.status, "ok");
  });

  it("GET /unknown returns 404", async () => {
    const res = await request("/unknown");
    assert.equal(res.status, 404);
    assert.equal(res.body.error, "Not Found");
  });
});
