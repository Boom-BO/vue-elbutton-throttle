# 全局指定按钮节流控制

## 适用于 Vue + ElmentUI，对全文中指定按钮统一进行节流处理，规定时间内不会触发第二次

## [查看 Demo](https://boom-bo.github.io/vue-elbutton-throttle/)

## 使用

### (一)

```bash
npm install vue-elbutton-throttle -S

or

yarn add vue-elbutton-throttle
```

### （二）

```js
// main.js
import btnThrottle from 'vue-elbutton-throttle'

document.addEventListener('click', e => {
	btnThrottle(e, ['确定', '保存', '提交'], 2 * 1000)
})
```
