<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" style="position: absolute;left: 0;top: 0; right: 0;bottom: 100rpx;" :scroll-into-view="scrollInto" scroll-with-animation>
			<block v-for="(item,index) in list" :key="index">
					<!-- 左边 -->
					<view :id="'chat'+index">
						<user-chat-list :item="item" :index="index" :pretime="index > 0 ? list[index-1].create_time : 0"></user-chat-list>
					</view>
			</block>
		</scroll-view>
		
		
		<!-- 底部操作条 -->
		<botton-input @submit="submit"></botton-input>
		<!-- <view class="fixed-bottom flex align-center border-top bg-white" style="height: 100rpx;">
			<input type="text" value="" v-model="content" class="flex-1 rounded bg-light ml-2"  style="padding:5rpx" placeholder="文明发言"  @confirm="submit"/>
			<view @click="submit" class="iconfont icon-fabu font-lg flex justify-center align-center animated" hover-class="jello text-main" style="width: 100rpx"></view>
		</view> -->
	</view>
</template>

<script>

	import userChatList from '@/components/user-chat/user-chat-list.vue';
	import bottonInput from '@/components/common/botton-input.vue';
	export default {
		components:{
			userChatList,
			bottonInput
		},
		data() {
			return {
				scrollInto:"",
				list:[{
					user_id:2,
					avatar:'/static/demo/demo5.jpg',
					username:'村里唯一的前端',
					data:"你吃饭了吗?",
					type:"text",
					create_time:1571812461
				},{
					user_id:1,
					avatar:'/static/demo/topicpic/13.jpeg',
					username:'村里唯一的前端',
					data:"我吃了",
					type:"text",
					create_time:1571812461
				},{
					user_id:2,
					avatar:'/static/demo/demo5.jpg',
					username:'村里唯一的前端',
					data:"你吃什么",
					type:"text",
					create_time:1571812461
				},{
					user_id:1,
					avatar:'/static/demo/topicpic/13.jpeg',
					username:'村里唯一的前端',
					data:"我吃饭",
					type:"text",
					create_time:1571812461
				},{
					user_id:2,
					avatar:'/static/demo/demo5.jpg',
					username:'村里唯一的前端',
					data:"你吃啥饭",
					type:"text",
					create_time:1571812461
				},{
					user_id:1,
					avatar:'/static/demo/topicpic/13.jpeg',
					username:'村里唯一的前端',
					data:"我吃米饭",
					type:"text",
					create_time:1571812461
				},{
					user_id:2,
					avatar:'/static/demo/demo5.jpg',
					username:'村里唯一的前端',
					data:"你吃什么米饭?",
					type:"text",
					create_time:1571812461
				},{
					user_id:1,
					avatar:'/static/demo/topicpic/13.jpeg',
					username:'村里唯一的前端',
					data:"我就是吃饭",
					type:"text",
					create_time:1571812461
				},]
			}
		},
		// 页面加载完成的时候
		onReady() {
			this.pageToButtom()
		},
		 
		methods: {
			submit(data){
				let obj = {
					user_id:1,
					avatar:'/static/demo/topicpic/13.jpeg',
					username:'村里唯一的前端',
					data:data,
					type:"text",
					create_time:(new Date()).getTime()
				}
				this.list.push(obj);
				// 滚动到底部
				this.pageToButtom()
			},
			// 滑动到底部
			pageToButtom(){
				let lastIndex = this.list.length -1;
				if(lastIndex < 0) return;
				this.scrollInto = 'chat' + lastIndex
			}
		}
	}
</script>

<style>

</style>
