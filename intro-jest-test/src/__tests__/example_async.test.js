//callbacks
const asyncCallBack = (cb)=>{

    setTimeout(()=>{
        cb(true)
    },1000)
}


//promises
const asyncPromise = ()=> new Promise(resolve=>resolve(true))

describe("async code", ()=>{

    it("example of async with callback", (done)=>{
       asyncCallBack((result)=>{
            expect(result).toBe(true)
            done()
        })
    })

    it("example of async with promises",()=>{
       return asyncPromise().then(result=>{
            expect(result).toBe(true)
        })
    })

    it("example of async await", async ()=>{
        const result = await asyncPromise();
        expect(result).toBe(true)
     })
})