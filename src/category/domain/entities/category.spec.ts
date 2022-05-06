import {Category} from './category'

describe("Category tests", () => {
    it("constructor of category", () => {
        const category = new Category("Movie")

        expect(category.name).toBe("Movie")
    })
})