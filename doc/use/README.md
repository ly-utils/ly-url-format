# 使用文档

## 引入
``` 
一、工程化项目
import lyUrlFormat from 'ly-url-format'

二、传统web项目
<script src="http://unpkg.com/ly-url-format/release/bundle.js"></script>
```

## 使用
``` 
1、获取当前地址参数
console.log(lyUrlFormat())

2、 获取传入地址的参数
let testUrl = 'http://localhost:8888#/example/test.html?name=%E5%BC%A0%E4%B8%89&age=14'
console.log(lyUrlFormat(testUrl))

得到的结果都是一个对象，通过 obj.key 的方式获得想要的具体属性的值
```