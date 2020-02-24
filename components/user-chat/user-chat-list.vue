<template>
	<view>
		<!-- 时间 -->
		<view v-if="shortTime" class="flex align-center justify-center py-2 font-sm text-light-muted">
			{{shortTime}}
		</view>
		<!-- 消息气泡 -->
		<view class="flex align-start p-2 my-2" :style="isSelf ? 'flex-direction: row-reverse;':''">
			<image :src="item.avatar" class="rounded-circle" style="width:100rpx;height: 100rpx;"></image>
			<view class="bg-light p-2 rounded mx-2" style="max-width: 400rpx;">
				{{item.data}}
			</view>
		</view>
	</view>
	
</template>

<script>
	//模拟当前用户user_id
	const uid = 1;
	import $T from '@/common/time.js'
	export default {
		props:{
			item:Object,
			index:Number,
			pretime:Number
		},
		computed:{
			// 是否是用户登陆本人
			isSelf() {
				return uid === this.item.user_id
			},
			shortTime(){
				return $T.getChatTime(this.item.create_time,this.pretime)
			}
		}
	}
</script>

<style>
</style>
