// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

describe("Cheating Test E2E", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("Play The Game", async () => {
    await expect(element(by.id("MenuScreen"))).toBeVisible()
    await expect(element(by.id("Cheating"))).toBeNotVisible()
    await element(by.id("Cheating")).tap()
    await expect(element(by.id("PlayScreen"))).toBeVisible()
    await expect(element(by.id("StartCheating"))).toBeNotVisible()
    await element(by.id("StartCheating")).tap()
    await expect(element(by.id("StartCheating"))).toBeNotVisible()
    await element(by.id("StartCheating")).tap()
    await waitFor(element(by.text("It's a Tie!")))
      .toBeVisible()
      .whileElement(by.id("BestMove"))
      .toBeNotVisible()
      .tap()
  })
})
