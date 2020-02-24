<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// 获取网络状态
			// 监听网络状态
			this.$U.onNetWork()
			// 检查更新
			//this.$U.update()
			// 初始化数据
			// 初始化用户登录状态
			this.$store.commit('initUser')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')	
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	/* 引入图标库 */
	@import './common/icon.css';
	/* 引入动画库 */
	@import './common/animate.css';
	/* 自定义样式库 */
	@import './common/free.css';
	/* 公共样式 */
	@import './common/common.css';
</style>
