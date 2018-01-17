/**
 * Created by yyj on 2018/1/17.
 */
/**
 * 自动化脚本demo，打开网易云网址，登录账号，寻找歌单，进入歌单页面，写评论，发表评论，截图保存
 * @type {{search: module.exports.search}}
 */
module.exports = {
	'search':function (client) {
/*		// qq登录
		let url= "http://music.163.com/api/sns/authorize?snsType=5&clientType=web2&callbackType=Login&forcelogin=true";
		client
			.url(url)
			.waitForElementVisible(".lay_login_form", 30000)
			.pause(5000)
			.frame(0)
			.click("#switcher_plogin")
			.setValue("input#u","744132102")
			.setValue("input#p","qqyyj744132102")
			.click("#login_button")*/
       //手机登录
		let txt = "就怕流氓有文化"+"\n";
		let url= "http://music.163.com/";
		client
			.url(url)
			.maximizeWindow()
			.waitForElementVisible("div#g-topbar", 30000)
			.click("div#g-topbar a[data-action='login']");
		client
			.waitForElementVisible("div.u-main", 30000)
			.click("div.u-main a[data-type='mobile']");
		client
			.waitForElementVisible("div.n-log2-2 input[type='password']", 30000)
			.setValue("div.n-log2-2 .u-phonewrap input.j-phone","18819460030")
			.setValue("div.n-log2-2 input[type='password']","744132102")
			.click("div.n-log2-2 a[data-action='login']");
		client
			.pause(2000)
			.frame(0)
			.getAttribute("a[title='你说你很累，可谁又活得顺风顺水']", "href", function (data) {
				client
					.url(data.value)
					// .urlHash("#comment-box")
					.waitForElementVisible("body", 30000)
					.moveToElement("#comment-box", 0, 0)
					.frame(0)
					.setValue("textarea[placeholder='评论']",txt+new Date())
					// .click("#comment-box .m-cmmt .btns a.u-btn-1")
					// .saveScreenshot('test/e2e/reports/wyy-test.png');
			})
	}
}