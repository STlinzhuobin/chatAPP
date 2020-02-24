<template>
	<view>
		<template v-if="msgList.length > 0">
			<!-- 消息列表 -->
			<block v-for="(item,index) in msgList" :key="index">
				<msg-list :item="item" :index="index"></msg-list>
			</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		<!-- 弹出层 -->
		<uni-popup type="top" ref="popup">
			<view class="flex align-center justify-center font-md py-2 border-bottom" hover-class="bg-light" @click="popupEvent('frient')">
				<text class="iconfont icon-sousuo mr-2"></text>添加好友
			</view>
			<view class="flex align-center justify-center py-2 font-md" hover-class="bg-light" @click="popupEvent('clear')">
				<text class="iconfont icon-shanchu mr-2"></text>清除列表
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const demo = [{
					chatHead:'/static/demo/demo5.jpg',
					name:"村里唯一的前端",
					OnlineTime:1571733876,
					content:"踏入uni-app坑的第八天",
					noRead:20
				},{
					chatHead:'/static/demo/demo5.jpg',
					name:"我爱web的第一天",
					OnlineTime:1571733876,
					content:"踏入uni-app坑的第八天",
					noRead:20
				},{
					chatHead:'/static/demo/demo5.jpg',
					name:"我爱web的第一天",
					OnlineTime:1571733876,
					content:"踏入uni-app坑的第八天",
					noRead:20
				}]
	
	import msgList from '@/components/msg/msg-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	export default {
		components:{
			msgList,
			noThing,
			uniPopup

		},
		data() {
			return {
				msgList:[]
			}
		},
		// 页面加载的时候
		onLoad() {
			this.msgList = demo
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.refresh()
		},
		// 监听原生导航栏事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0: //左边
				uni.navigateTo({
					url:'../user-list/user-list'
				})
				// 关闭弹出层
				this.$refs.popup.close()
					break;
				case 1://右边
				// 打开弹出层
				this.$refs.popup.open()
					break;
			}
		},
		methods: {
			refresh(){
				setTimeout(()=>{
					this.msgList = demo;
					// 停止下拉刷新
					uni.stopPullDownRefresh();
				},2000)
				
			},
			popupEvent(e){
				switch (e){
					case 'frient':
					uni.navigateTo({
						url:'../search/search?type=user'
					})
						break;
					case 'clear':
					console.log('清除列表')
						break;
				}
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>

</style>
