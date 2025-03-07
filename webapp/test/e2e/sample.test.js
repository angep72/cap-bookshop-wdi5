const { wdi5 } = require("wdio-ui5-service")


describe('This is the first test in creating the test suite',()=>{
    it('it should create the new book',async()=>{
       console.log("creating the new book")

    })
})

describe("samples", () => {
    it("should log", () => {
        const logger = wdi5.getLogger()
        logger.log("hello world!")
    })

    // intentionally skipping this as your have to adjust things to your UI5 app :)
    it.skip("should retrieve a UI5 control", async () => {
        const appLocator = {
            selector: {
                controlType: "sap.m.App",
                viewName: "ui5.typescript.helloworld.view.App"
            }
        }

        const app = await browser.asControl(appLocator)
        expect(app).toBeDefined()
    })
})
