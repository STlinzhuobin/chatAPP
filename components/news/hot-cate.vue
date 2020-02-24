<template>
	<view>
		<view class="flex justify-between align-center px-2">
			<text class="font-md">热门分类</text>
			<view class="flex align-center text-secondary font animated" hover-class="jello" @click="openMore">
				更多<view class="icon iconfont icon-jinru">	
				</view>
			</view>
		</view>
		<view class="flex align-center justify-between py-3 px-2 border-bottom">
			<view class="rounded border bg-light mx-1 px-2 animated" hover-class="jello" v-for="(item,index) in hotCate" :key="index" @clcik="openMore">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['hotCate'],
		methods:{
			openMore(){
				uni.navigateTo({
					url:'../../pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style>
</style>
