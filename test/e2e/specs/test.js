// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  '第一个选项卡': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.containsText('h2', 'page1')
      .pause(2000)
      // .assert.elementCount('img', 1)
      // .end()
  },
  '第二个选项卡': function (browser) {
    browser
      .click('#page2')
      .pause(2000)
      .assert.containsText('h2', 'page2')
      // 来回切换二级tab
      .click('.el-tabs__item:nth-child(2)')
      .pause(2000)
      .click('.el-tabs__item:nth-child(1)')
      .pause(1000)
      // 点击三下add按钮 和一次remove按钮 
      .click('#transition-add')
      .pause(1000)
      .click('#transition-add')
      .pause(1000)
      .click('#transition-add')
      .pause(1000)
      .click('#transition-remove')
      .pause(1000)
      .click('#transition-remove')
      .pause(2000)
      // 验证最后数量是10个数字
      .assert.elementCount('.list-complete-item', 10)
      // vuex购物车测试 add-to-cart 
      .click('.el-tabs__item:nth-child(2)')
      .pause(1000)
      .click('#products-list li:nth-of-type(1) .add-to-cart')
      .click('#products-list li:nth-of-type(1) .add-to-cart')
      .pause(1000)
      .click('#products-list li:nth-of-type(2) .add-to-cart')
      .pause(1000)
      .click('#products-list li:nth-of-type(3) .add-to-cart')
      .pause(1000)
      .assert.containsText('#total', '1031')
      .end()

  }
}
