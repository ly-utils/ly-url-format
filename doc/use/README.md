# 使用文档

## 使用
``` 
一、获取当前地址参数
var urlArgs = window.lyUrlFormat()
或者
二、 获取传入地址的参数
var testUrl = 'http://localhost:8888#/example/test.html?name=%E5%BC%A0%E4%B8%89&age=14'
var urlArgs1 = window.lyUrlFormat(testUrl)

得到的结果都是一个对象，通过 obj.key 获得想要的具体属性的值
```