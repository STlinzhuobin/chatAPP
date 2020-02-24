<template>
	<view class="flex align-center p-2 border-bottom border-light-secondary animated fadeIn fast" hover-class="bg-light" @click="open">
		<image :src="item.chatHead" style="height: 80rpx;width: 80rpx;" class="rounded-circle mr-2"></image>
		<view class="flex flex-1 flex-column">
			<view class="flex align-center justify-between">
				<text class="font-md">{{item.name}}</text>
				<text class="text-secondary font-sm">{{item.OnlineTime | formatime}}</text>
			</view>
			<view class="flex align-center justify-between">
				<text class="text-secondary text-ellipsis" style="max-width: 500rpx;">{{item.content}}</text>
				<uni-badge :text="item.noRead" type="error"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	
	import $T from '@/common/time.js';
	import uniBadge from '@/components/uni-ui/uni-badge/uni-badge.vue'
	export default {
		components: {
					uniBadge
				},
		props:{
			item:Object,
			index:Number
		},

		filters:{
			formatime(value){
				return $T.gettime(value)
			}
		},
		methods:{
			// 打开聊天页
			open(){
				uni.navigateTo({
					url:'../../pages/user-chat/user-chat',
				})
			}
		}
	}
</script>

<style>
</style>
