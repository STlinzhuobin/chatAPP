<template>
	<view>
		<view class=" flex-1 py-3 px-2">
			<image src="/static/demo/datapic/46.jpg" style="width: 100%;height: 400rpx;"></image>
			<view class="flex align-center justify-center text-light-muted" >
				version 1.0.0
			</view>
		</view>
		<uni-list-item title="新版本检测"></uni-list-item>
		<uni-list-item title="社区交友用户协议"></uni-list-item>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
