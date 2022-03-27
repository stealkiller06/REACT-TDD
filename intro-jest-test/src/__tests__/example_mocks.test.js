import {storage} from '../lib/storage'
import {getUsername, saveUsername} from '../user'
jest.mock("../lib/storage")

describe("first example", ()=>{

    const username = "john doe"

    it("first test",()=>{
        const mock = jest.fn()
                        .mockReturnValueOnce(true)
                        .mockReturnValueOnce("hello world")
                        .mockReturnValueOnce(5)
       const result1 = mock()
       const result2 = mock()
       const result3 =  mock()

        expect(mock).toHaveBeenCalledTimes(3)

        expect(result1).toBe(true)
        expect(result2).toBe("hello world")
        expect(result3).toBe(5)
    })

    it("second test", ()=>{

        saveUsername(username)

        expect(storage.save).toHaveBeenCalledTimes(1)
        expect(storage.save).toHaveBeenCalledWith({key:'username', value:username})

    })

    it("third test", ()=>{
        storage.get.mockReturnValueOnce(username)

        const result = getUsername(username)

        expect(result).toBe(username)
        expect(storage.get).toHaveBeenCalledTimes(1)
        expect(storage.get).toHaveBeenCalledWith({key:'username'})

    })



})