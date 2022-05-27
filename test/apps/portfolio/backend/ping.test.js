const request = require("supertest")
const app = require("../../../../src/apps/portfolio/backend/app")

const path = "/ping"

describe("Check the server status", ()=>{

  it("Server response with a 200 status code",async()=>{
    const response = await request(app).get(path).send()
    expect(response.statusCode).toBe(200)
  })

  it("Should respond with an Object",async()=>{
    const response = await request(app).get(path).send()
    expect(response.body).toBeInstanceOf(Object)
  })

  it("Should respond with message property defined",async()=>{
    const response = await request(app).get(path).send()
    expect(response.body.message).toBeDefined()
  })

  it("Should respond with Pong message",async()=>{
    const response = await request(app).get(path).send()
    expect(response.body).toEqual(expect.objectContaining({
      message:"Pong",
  }))
  })

})
