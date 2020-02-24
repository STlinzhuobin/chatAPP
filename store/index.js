import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 登录
		loginStatus: false,
		token: false,
		user: {
			// "id": 7,
			// "username": "zcmcss",
			// "userpic": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/1.jpg",
			// "password": true,
			// "phone": "13450772004",
			// "email": "123@qq.com",
			// "status": 1,
			// "create_time": null,
			// "logintype": "username",
			// "token": "a8bb3f6f50ff5049d70b6022b48e1f45c24a96f8",
			// "userinfo": {
			// 	"id": 1,
			// 	"user_id": 7,
			// 	"age": 23,
			// 	"sex": 1,
			// 	"qg": 1,
			// 	"job": "IT",
			// 	"path": "北京市-市辖区-朝阳区",
			// 	"birthday": "1996-06-12"
			// }
			// user_bind:{
			// 	"weixin": {
			// 		"id": 244,
			// 		"nickname": "林卓彬"
			// 	}
			// }
		}
	},
	mutations: {
		// 登录
		login(state, user) {
			state.loginStatus = true
			state.user = user
			state.token = state.user.token
			uni.setStorageSync('user', JSON.stringify(user));
			uni.$emit('updateIndex')
		},
		// 初始化登录状态
		initUser(state) {
			let user = uni.getStorageSync('user');
			if (user) {
				state.user = JSON.parse(user)
				state.loginStatus = true
				state.token = state.user.token
			}
		},
		// 退出登录
		logout(state) {
			state.loginStatus = false
			state.user = {}
			state.token = false
			uni.removeStorageSync('user');
			uni.$emit('updateIndex')
		},
		// 修改用户信息(手机号,邮箱,密码)
		editUserInfo(state, {
			key,
			value
		}) {
			state.user[key] = value
			uni.setStorageSync('user', JSON.stringify(state.user));
		},
		// 修改资料
		editUserUserInfo(state, obj) {
			if (state.user.userinfo) {
				state.user.userinfo.sex = obj.sex
				state.user.userinfo.qg = obj.qg
				state.user.userinfo.job = obj.job
				state.user.userinfo.path = obj.path
				state.user.userinfo.birthday = obj.birthday
				uni.setStorageSync('user', JSON.stringify(state.user));
			}
		}
	}
})
