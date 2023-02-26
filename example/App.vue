<script setup>
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'
import { ElMessage, ElNotification, ElButton } from 'element-plus'
ElNotification({
	type: 'warning',
	title: '介绍',
	message:
		'适用于Vue + ElmentUI，对全文中<b style="color: #409EFF;">指定按钮</b>统一进行节流处理，<b style="color: #409EFF;">规定时间内</b>不会触发第二次。<br/><i style="color:#909399;">例：Demo中只对全文中出现的“确定”和"保存"按钮做了节流处理，且2秒内不会重复触发</i>',
	duration: 0,
	dangerouslyUseHTMLString: true
})
const confirm = val => {
	ElMessage.success({
		type: 'success',
		message: '确认中...',
		duration: 2000
	})
}
const save = val => {
	ElMessage.success({
		type: 'success',
		message: '保存中...',
		duration: 2000
	})
}
const submit = val => {
	ElMessage.success({
		type: 'success',
		message: ' 提交中...',
		duration: 2000
	})
}
const otherAction = val => {
	ElMessage.success({
		type: 'success',
		message: '阿巴阿巴阿巴巴巴...',
		duration: 2000
	})
}
</script>

<template>
	<div>
		<el-button type="primary" @click="confirm">确 定</el-button>
		<el-button type="primary" @click="save">保 存</el-button>
		<el-button type="primary" @click="submit">提 交</el-button>
		<el-button type="primary" @click="otherAction"
			>其他内容（无节流）</el-button
		>
	</div>
</template>
