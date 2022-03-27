
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  
  
describe("matchers", ()=>{

    it("toBe", ()=>{
        expect(true).toBe(true)
    })

    it('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});

        const arr = ["one", "two"];

        expect(arr).toEqual(["one", "two"])
    });

    it("not", ()=>{
        expect(true).not.toBe(false)
    })

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });

      test('compiling android goes as expected', () => {
        expect(() => compileAndroidCode()).toThrow();
        expect(() => compileAndroidCode()).toThrow(Error);
      
        // You can also use the exact error message or a regexp
        expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
        expect(() => compileAndroidCode()).toThrow(/JDK/);
      });
      

    
})