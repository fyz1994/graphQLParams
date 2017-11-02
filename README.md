## graphql-params

### 概述

构建 graphql 的查询参数，filterNull 参数控制是否对值为空的键值对做过滤操作（过滤空字符、空数组和空对象）
例如：

### 用法

1. 执行`npm install graphql-params`
2. `let graphiqlParams = require('graphql-params')`

### demo

输入参数

    let queryValue={
        name:'fanyizhen',
        age:21,
        friends:{
            name:'xiaoming',
            age:21
        }
    }

调用 `graphiqlParams(queryValue)`

得到字符串：

    `    
    name:'fanyizhen'
    age:21,
    friends:{
        name:'xiaoming',
        age:21
    }
    `
