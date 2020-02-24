<template>
	<view>
		<uni-collapse @change="change" accordion="true">
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item ref="add" :title="item.title" :show-animation="true">
					{{ item.content }}
				</uni-collapse-item>
			</block>
		</uni-collapse>
		<view class="py-2 px-3">
			<button class="text-white bg-main " style="border-radius: 50rpx; border: 0;" type="primary" >
				意见反馈
			</button>
		</view>
	</view>
</template>

<script>
	import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue';
	import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse.vue'
	
	export default {
		components:{
			uniCollapseItem,
			uniCollapse
		},
		data() {
			return {
				list:[
					{
						title:"客服什么时候上线?",
						content:"德里克·罗斯（Derrick Rose，1988年10月4日-），出生于伊利诺伊州芝加哥，美国男子篮球运动员，司职控球后卫，绰号“玫瑰”，现效力于底特律活塞队。罗斯在2008年NBA选秀中成为芝加哥公牛队史上的第一位选秀状元，菜鸟赛季即夺得最佳新秀，22岁时成为NBA史上最年轻的MVP，并入选年度第一阵容。他NBA职业生涯还入选过3次全明星，也是史上首位以新秀身份获得技巧挑战赛冠军的球员。罗斯速度极快，身体素质出众，以令人惊叹的暴扣和拉杆闻名。 "
					},
					{
						title:"忘记账号/名称/密码怎么办?",
						content:"德里克·罗斯（Derrick Rose，1988年10月4日-），出生于伊利诺伊州芝加哥，美国男子篮球运动员，司职控球后卫，绰号“玫瑰”，现效力于底特律活塞队。罗斯在2008年NBA选秀中成为芝加哥公牛队史上的第一位选秀状元，菜鸟赛季即夺得最佳新秀，22岁时成为NBA史上最年轻的MVP，并入选年度第一阵容。他NBA职业生涯还入选过3次全明星，也是史上首位以新秀身份获得技巧挑战赛冠军的球员。罗斯速度极快，身体素质出众，以令人惊叹的暴扣和拉杆闻名。 "
					},
					{
						title:"怎么搜索/查找、关注/取关用户?",
						content:"德里克·罗斯（Derrick Rose，1988年10月4日-），出生于伊利诺伊州芝加哥，美国男子篮球运动员，司职控球后卫，绰号“玫瑰”，现效力于底特律活塞队。罗斯在2008年NBA选秀中成为芝加哥公牛队史上的第一位选秀状元，菜鸟赛季即夺得最佳新秀，22岁时成为NBA史上最年轻的MVP，并入选年度第一阵容。他NBA职业生涯还入选过3次全明星，也是史上首位以新秀身份获得技巧挑战赛冠军的球员。罗斯速度极快，身体素质出众，以令人惊叹的暴扣和拉杆闻名"
					}
				]
			}	
		},
		methods: {
			change() {
			            this.$nextTick(() => {
			                this.$refs.add.resize();
			            });
			        }
		}
	}
</script>

<style>

</style>
