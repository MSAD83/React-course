jest:
you have to use `.test.js` for starting the test files or using a folder with name of `__test__` an then every .js files below the folder is the test files

Another way to use the test file is typing the file like `.spec.js`

run the test with `npm run test`

we use `describe` and then `test` to start the test file:

```
describe('title',()=>{
    test('',()=>{

    })
})
```

For knowing is the button works or not you can use `act` and inside of that the `useEvent.click()`:

```
await act(){
    useEvent.click(button)
}
```

For most of the cases we use the `screen.getby...` (sth with that use) for example the `screen.getByText` is for seeing the text inside the screen.

Before and after the click of the useEvent we use the `expect.value()` to see that the value is the expected thing? or not

we give the

For fetching the data :

```
describe('Post', ()=>{
    test('fetching', async()=>{
        let container, root

        container = document.createElement('div')
        document.body.appendChild(container)

        ReactDom.createRoot(container)

        const fakepost ={
            id: 1,
            title: 'Post Title',
            body: 'Post body'
        }


        jest.spyOn(global, 'fetch').mokImplementation(()=>{
            return Promise.resolve({
                json: ()=>{
                    return Promise.reasolve(fakepost)
                }
            })
        })

        await act(()=>{
            root.Render(<Post/>)
        })

        expect(container.querySelector('h1').textContent).tobe('Post item')

        global.fetch.mockRestore()

        await act(()=>{
            root.unmount
        })

        container.remove()
        container = null

    })
})
```

you can put sth that is gonna be every time in beforEach and afteEach:

```
beforEach(()=>{
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDom.createRoot(container)
})
afterEach(async()=>{
        await act(()=>{
            root.unmount
        })
        container.remove()
        container = null
})
describe(()=>{
    ....
})
```

ALLURE:

For installing the allure-jest you can use this command:

```
npm install --save-dev allure-jest
```

For connecting the allure to jest you have to set this in your jset.config.js file:

```
const config = {
  testEnvironment: "allure-jest/jsdom",
};
```

For intalling the allure to your project:

```
npm install --save-dev allure-jest
```

For changing the allure path to say has allure just with calling allure :

```
$AllureBinPath = "path of your allure bin "

$NewPath = (([Environment]::GetEnvironmentVariable("PATH", "User") -split ";") | ?{ $_ -and $_ -notlike "*\allure-*\bin" }) -join ";"

[Environment]::SetEnvironmentVariable("PATH", "$NewPath;$AllureBinPath", "User")

```

If the Jest version is lower than 27, install Circus and configure Jest to use it as the test runner:

```
npm install --save-dev jest-circus
```

```
const config = {
  testRunner: "jest-circus/runner",
};
```

For creating allure report in your test :

```
allure serve allure-results
```
