describe("setup and teardown example", ()=>{

    beforeAll(()=>{
        console.log("before all")
    })

    beforeEach(()=>{
        console.log("before each")
    })

    afterAll(()=>{
        console.log("after all")
    })

    afterEach(()=>{
        console.log("after each")
    })
    it("example 1",()=>{
        expect(true).toBe(true)
    })

    it("example 2",()=>{
        expect(true).toBe(true)
    })
})