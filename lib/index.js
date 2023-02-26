/*
 *	全局监听确认按钮点击事件，设置节流
 */
function setDisabled(el) {
	el.disabled = true
	el.classList.add('is-disabled')
}

function cancelDisabled(el) {
	el.disabled = false
	el.classList.remove('is-disabled')
}

const action = (e, text = ['确定', '保存', '提交'], duration = 2000) => {
	const btnText = new Set(text)
	const target = e.target
	const isELButton = node =>
		!node.disabled &&
		node.className &&
		node.classList.length > 0 &&
		node.classList.contains('el-button') &&
		node.nodeName === 'BUTTON' &&
		node.innerText &&
		btnText.has(node.innerText.replace(/\s*/g, ''))
	const isInnerSpan = node =>
		!node.disabled &&
		node.nodeName === 'SPAN' &&
		!node.className &&
		node.innerText &&
		btnText.has(node.innerText.replace(/\s*/g, '')) &&
		isELButton(node.parentNode)
	if (isELButton(target)) {
		setDisabled(target)
		const confirmBtnTimer = setTimeout(() => {
			cancelDisabled(target)
			clearTimeout(confirmBtnTimer)
		}, duration)
	} else if (isInnerSpan(target)) {
		setDisabled(target.parentNode)
		const confirmBtnTimer = setTimeout(() => {
			cancelDisabled(target.parentNode)
			clearTimeout(confirmBtnTimer)
		}, duration)
	}
}

export default action
