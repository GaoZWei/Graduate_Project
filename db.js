var mysql = require('mysql');
var dbConfig = require('./db.config');

module.exports = {
    query: function (sql, params, callback) {
        // 创建数据库连接,数据操作完成之后关闭连接
        var connection = mysql.createConnection(dbConfig);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库连接失败');
                throw err;
            }
            // 开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log("数据库操作失败");
                    throw err;
                }
                // 将查询出来的数据返回给回调函数,这时候就没有必要使用错误前置思想了,已经进行了错误处理,若出错,就会发生阻塞
                callback && callback(JSON.parse(JSON.stringify(results)), JSON.parse(JSON.stringify(fields)));
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败');
                        throw err;
                    }
                })
            })
        })
    }
}