import supertest, { Response } from "supertest";
import app from "../app";

describe("endpints test", ()=>{
    const HttpClient = supertest(app)
    it("questions'endpont", async ()=>{
        const res:Response = await HttpClient.get("/api/quiz/questions")
        expect(res.status).toBe(200);

    })

    it("student rank endpint ", async ()=>{
        const res:Response = await HttpClient.post("/api/quiz/result").send({
            score: 90
        })
        expect(res.status).toBe(200);

    })
})
