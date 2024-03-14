# Easy-Lang 语法

Easy-Lang 使用 [chelonia](https://github.com/mulam-dev/chelonia) 规则来描述自身的形式文法

源代码分为两种语法：基础集和标准集，文件后缀分别为 `.elb` 和 `.els`

其中基础集是语言的基础运行语法，而标准集则是为了方便开发人员使用而加入语法糖实现的，和基础集并不兼容但可以转换为基础集

关于基础集的详细定义，请参考 [rules/easy-lang-base.cmrule](../rules/easy-lang-base.cmrule)

关于标准集的详细定义，请参考 [rules/easy-lang-std.cmrule](../rules/easy-lang-std.cmrule)
